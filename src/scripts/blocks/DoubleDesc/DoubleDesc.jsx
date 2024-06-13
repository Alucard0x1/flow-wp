import './DoubleDesc.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, ToggleControl, PanelBody } = wp.components

const DoubleDesc = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className={"double-desc" + (attributes.hideSlider ? ' hide-slider' : '') + (attributes.hideLeft ? ' hide-left' : '') + (attributes.exHeight ? ' ex-height' : '') + (attributes.sMargin ? ' special-margin' : '')}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Hide slider on phone" checked={attributes.hideSlider}
                            onChange={(hideSlider) => setAttributes({ hideSlider })}
                        />
                        <ToggleControl
                            label="Hide left" checked={attributes.hideLeft}
                            onChange={(hideLeft) => setAttributes({ hideLeft })}
                        />
                        <ToggleControl
                            label="Extra height"
                            checked={attributes.exHeight}
                            onChange={(exHeight) => setAttributes({ exHeight })}
                        />

                        <ToggleControl
                            label="Special margin"
                            checked={attributes.sMargin}
                            onChange={(sMargin) => setAttributes({ sMargin })}
                        />
                    </PanelBody>
                </InspectorControls>
            }
            <div className="container">
                <div className="content-start">
                    <Text tagName="p" value={attributes.contentStart}
                        onChange={(contentStart) => setAttributes({ contentStart })}
                    />
                </div>

                <div className="images-wrapper">
                    {isSelected &&
                        <Button isPrimary isSmall onClick={() => setAttributes({ mediaSlider: [...attributes.mediaSlider, { media: null, desc: 'Description' }] })}>
                            <Icon icon="plus" />
                        </Button>
                    }
                    <div className="slider">
                        {attributes.mediaSlider.map((image, index) => (
                            <div className={"image" + (isSelected || index == 0 ? ' active' : '')}>
                                {isSelected &&
                                    <MediaUpload
                                        onSelect={(media) => {
                                            const mediaSliderCopy = [...attributes.mediaSlider]
                                            mediaSliderCopy[index] = {
                                                ...mediaSliderCopy[index], media
                                            }

                                            setAttributes({ mediaSlider: mediaSliderCopy })
                                        }}
                                        render={({ open }) => (
                                            <div className="image-picker">
                                                <Button isPrimary isSmall onClick={open}>
                                                    <Icon icon="format-image" />
                                                </Button>

                                                <Button isDestructive isPrimary isSmall
                                                    onClick={() => {
                                                        const mediaSliderCopy = [...attributes.mediaSlider]
                                                        mediaSliderCopy.splice(index, 1)
                                                        setAttributes({ mediaSlider: mediaSliderCopy })
                                                    }}
                                                >
                                                    <Icon icon="trash" />
                                                </Button>
                                            </div>
                                        )}
                                    />
                                }

                                {image.media && image.media.type == 'video' ?
                                    <video src={image.media.url} autoPlay loop muted playsInline />
                                    :
                                    <img src={image.media == null ? 'https://picsum.photos/300/300' : image.media.url} alt="" />
                                }

                                {!attributes.hideSlider &&
                                    <div className="slide-content">
                                        <Text tagName="p" value={image.desc} onChange={(desc) => {
                                            const mediaSliderCopy = [...attributes.mediaSlider]
                                            mediaSliderCopy[index] = {
                                                ...mediaSliderCopy[index], desc
                                            }
                                            setAttributes({ mediaSlider: mediaSliderCopy })
                                        }} />

                                        <div className="slide-progress">
                                            {Array.from({ length: index + 1 }, (_, i) => (
                                                <span className="line active">
                                                    <div className="clickable"></div>
                                                </span>
                                            ))}

                                            {Array.from({ length: attributes.mediaSlider.length - (index + 1) }, (_, i) => (
                                                <span className="line">
                                                    <div className="clickable"></div>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>

                    <div className="image-end">
                        {isSelected &&
                            <MediaUpload
                                onSelect={(media) => setAttributes({ mediaRight: media })}
                                render={({ open }) => (
                                    <div className="image-picker">
                                        <Button isPrimary onClick={open}>
                                            <Icon icon="format-image" />
                                        </Button>
                                    </div>
                                )}
                            />
                        }

                        {attributes.mediaRight && attributes.mediaRight.type == 'video' ?
                            <video src={attributes.mediaRight.url} autoPlay loop muted playsInline />
                            :
                            <img src={attributes.mediaRight == null ? 'https://picsum.photos/300/300' : attributes.mediaRight.url} />
                        }
                    </div>
                </div>

                <div className="content-end">
                    <Text tagName="p" value={attributes.contentEnd}
                        onChange={(contentEnd) => setAttributes({ contentEnd })}
                    />
                </div>
            </div>
        </section>
    )
}

export default DoubleDesc

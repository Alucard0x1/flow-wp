import useRichText from '../../hooks/useRichText'
import './Hero.scss'

const { MediaUpload, MediaUploadCheck, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, ToggleControl } = wp.components

const Hero = ({ setAttributes, attributes, isSelected, edit }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"hero" + (attributes.still ? ' still' : '') + (attributes.shrink ? ' shrink' : '')}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Still"
                            checked={attributes.still}
                            onChange={(still) => setAttributes({ still })}
                        />
                        <ToggleControl
                            label="Shrink height"
                            checked={attributes.shrink}
                            onChange={(shrink) => setAttributes({ shrink })}
                        />
                        <ToggleControl
                            label="Show description"
                            checked={attributes.showDesc}
                            onChange={(showDesc) => setAttributes({ showDesc })}
                        />
                    </PanelBody>
                </InspectorControls>
            }
            <div className="image-wrapper" data-flip-id="hero">
                {isSelected &&
                    <MediaUploadCheck>
                        <div className="image-picker">
                            <MediaUpload
                                onSelect={(image) => {
                                    setAttributes({ image })
                                }}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        <Icon icon="format-image" />
                                    </Button>
                                )}
                            />

                            <MediaUpload
                                onSelect={(imagePortrait) => {
                                    setAttributes({ imagePortrait })
                                }}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        <Icon icon="smartphone" />
                                    </Button>
                                )}
                            />
                        </div>
                    </MediaUploadCheck>
                }
                {attributes.image != null && attributes.image.type == 'video' ?
                    <>
                        <video src={attributes.image.url} autoPlay loop playsInline muted className="desktop lazy"
                        />
                        {attributes.imagePortrait != null &&
                            <video src={attributes.imagePortrait.url} autoPlay loop playsInline muted className="portrait lazy"
                            />
                        }
                    </>
                    :
                    <div className="background-image"
                        style={{
                            backgroundImage: `url(${attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url})`
                        }}
                    ></div>
                }
            </div>

            <div className="hero-content">
                <div className="container">
                    <Text tagName="h1" value={attributes.title}
                        onChange={(title) => setAttributes({ title })}
                        data-split-text
                    />

                    {attributes.showDesc &&
                        <Text tagName="p" value={attributes.description}
                            onChange={(description) => setAttributes({ description })}
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero

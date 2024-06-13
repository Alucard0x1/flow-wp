import './TextImage.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, ToggleControl, SelectControl } = wp.components

const TextImage = ({ attributes, setAttributes, isSelected, edit }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"text-image" + (attributes.wide ? ' wide' : '')}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Wider title"
                            checked={attributes.wide}
                            onChange={(wide) => setAttributes({ wide })}
                        />
                        <ToggleControl
                            label="Show floating description"
                            checked={attributes.showFloatingDesc}
                            onChange={(showFloatingDesc) => setAttributes({ showFloatingDesc })}
                        />
                        {attributes.showFloatingDesc &&
                            <SelectControl
                                label="Floating description direction"
                                value={attributes.floatingDescDir}
                                onChange={(direction) => setAttributes({ floatingDescDir: direction })}
                                options={[
                                    {
                                        label: 'Left', value: 'left'
                                    },
                                    {
                                        label: 'Right', value: 'right'
                                    }
                                ]}
                            />
                        }
                    </PanelBody>
                </InspectorControls>
            }
            <div className="container">
                <div className="content-wrapper">
                    <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} data-split-text data-motion-text />
                    <Text tagName="h3" value={attributes.subtitle} onChange={(subtitle) => setAttributes({ subtitle })} data-split-text data-motion-text data-motion-text-short />

                    <div className="description-wrapper">
                        <div class="quote">
                            <Text tagName="p" value={attributes.quote} onChange={(quote) => setAttributes({ quote })} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-wrapper">
                {isSelected &&
                    <div class="image-picker">
                        <MediaUpload
                            onSelect={(image) => setAttributes({ image })}
                            render={({ open }) => (
                                <Button isPrimary onClick={open}>
                                    <Icon icon="format-image" />
                                </Button>
                            )}
                        />

                        <MediaUpload
                            onSelect={(imagePortrait) => setAttributes({ imagePortrait })}
                            render={({ open }) => (
                                <Button isPrimary onClick={open}>
                                    <Icon icon="smartphone" />
                                </Button>
                            )}
                        />
                    </div>
                }

                <div className="frame-wrapper">
                    {attributes.image != null && attributes.image.type == 'video' ?
                        <>
                            <video src={attributes.image.url} autoPlay loop playsInline muted class="desktop"
                            />
                            {attributes.imagePortrait != null &&
                                <video src={attributes.imagePortrait.url} autoPlay loop playsInline muted class="portrait"
                                />
                            }
                        </>
                        :
                        <div className="background-image"
                            style={{
                                backgroundImage: `url(${attributes.image ? attributes.image.url : 'https://picsum.photos/1920/1080'})`
                            }}
                        />
                    }

                    {attributes.showFloatingDesc &&
                        <div className={"description-inner" + (attributes.showFloatingDesc ? ' show ' : ' ') + (attributes.floatingDescDir)}>
                            <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default TextImage

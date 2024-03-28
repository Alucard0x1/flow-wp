import './ImageBackground.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelRow, PanelBody, SelectControl } = wp.components

const ImageBackground = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="image-background">
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <SelectControl
                            label="Direction"
                            value={attributes.direction}
                            onChange={(direction) => setAttributes({ direction })}
                            options={[
                                {
                                    label: 'Left', value: 'left'
                                },
                                {
                                    label: 'Right', value: 'right'
                                }
                            ]}
                        />
                    </PanelBody>
                </InspectorControls>
            }
            <div className="image-wrapper">
                {isSelected &&
                    <MediaUpload
                        onSelect={(background) => setAttributes({ background })}
                        render={({ open }) => (
                            <Button isPrimary onClick={open}>
                                <Icon icon="format-image" />
                            </Button>
                        )}
                    />
                }
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${attributes.background ?? 'https://picsum.photos/1920/1080'})`
                    }}
                ></div>

                <div className={`content-wrapper ${attributes.direction}`}>
                    <div className="content-wrapper__content">
                        <div className="num">
                            <Text tagName="span" value={attributes.num} onChange={(num) => setAttributes({ num })} />
                        </div>
                        <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />
                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageBackground

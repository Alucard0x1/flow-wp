import './ThreeHighlights.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, URLInputButton, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, ToggleControl } = wp.components

const ThreeHighlights = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className="three-highlights">
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        {attributes.items.map((item, key) => (
                            <ToggleControl
                                label={item.title}
                                checked={item.showButton}
                                onChange={(showButton) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[key] = { ...itemsCopy[key], showButton }
                                    setAttributes({ items: itemsCopy })
                                }}
                            />
                        ))}
                    </PanelBody>
                </InspectorControls>
            }
            <div className="container">
                <div className="image-wrapper">
                    {isSelected &&
                        <MediaUpload
                            onSelect={(image) => setAttributes({ image })}
                            render={({ open }) => (
                                <div className="image-picker">
                                    <Button isPrimary onClick={open}>
                                        <Icon icon="format-image" />
                                    </Button>
                                </div>
                            )}
                        />
                    }
                    <div className="media-wrapper">
                        <img src={attributes.image != null ? attributes.image.url : "https://picsum.photos/300/300"} alt="" />
                    </div>
                </div>

                <div className="content-wrapper">
                    {attributes.items.map((item, key) => (item.title != '' || isSelected) && (
                        <div className="content-item">
                            <p className="num">{(key + 1).toString().padStart(2, '0')}.</p>
                            <Text tagName="p" className="content-title"
                                value={item.title}
                                onChange={(title) => setAttributes({ items: attributes.items.map((item, index) => index === key ? { ...item, title } : item) })}
                            />
                            <Text tagName="p" class="content-desc"
                                value={item.description}
                                onChange={(description) => setAttributes({ items: attributes.items.map((item, index) => index === key ? { ...item, description } : item) })}
                            />

                            {item.showButton &&
                                <>
                                    <Text tagName="a" className="btn btn-rounded" href={item.link.url} target="_blank" rel="noopener noreferrer"
                                        value={item.link.title}
                                        onChange={(title) => setAttributes({ items: attributes.items.map((item, index) => index === key ? { ...item, link: { ...item.link, title } } : item) })}
                                    />

                                    {isSelected &&
                                        <URLInputButton url={item.link.url}
                                            onChange={(url, post) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[key] = {
                                                    ...itemsCopy[key],
                                                    link: {
                                                        url,
                                                        title: (post && post.title) || itemsCopy[key].title
                                                    }
                                                }

                                                setAttributes({ items: itemsCopy })
                                            }}
                                        />
                                    }
                                </>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeHighlights

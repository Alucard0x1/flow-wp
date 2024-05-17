import './ThreeHighlights.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const ThreeHighlights = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className="three-highlights">
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
                    {attributes.items.map((item, key) => (
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeHighlights

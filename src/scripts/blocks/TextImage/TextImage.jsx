import './TextImage.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const TextImage = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="text-image">
            <div className="container">
                <div className="content-wrapper">
                    <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />
                    <Text tagName="h3" value={attributes.subtitle} onChange={(subtitle) => setAttributes({ subtitle })} />

                    <div className="description-wrapper">
                        <div class="quote">
                            <Text tagName="p" value={attributes.quote} onChange={(quote) => setAttributes({ quote })} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-wrapper">
                {isSelected &&
                    <MediaUpload
                        onSelect={(image) => setAttributes({ image })}
                        render={({ open }) => (
                            <Button isPrimary onClick={open} className="image-picker">
                                <Icon icon="format-image" />
                            </Button>
                        )}
                    />
                }

                <div className="frame-wrapper">
                    {attributes.image != null && attributes.image.type == 'video' ?
                        <video src={attributes.image.url} autoPlay loop playsInline muted />
                        :
                        <div className="background-image"
                            style={{
                                backgroundImage: `url(${attributes.image ? attributes.image.url : 'https://picsum.photos/1920/1080'})`
                            }}
                        />
                    }

                    <div className="description-inner">
                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextImage

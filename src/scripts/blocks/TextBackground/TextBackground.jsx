import './TextBackground.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const TextBackground = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="text-background">
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
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url})`
                    }}
                ></div>
            </div>

            <div className="content-wrapper">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />

                <div className="description-wrapper">
                    <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                </div>
            </div>
        </section>
    )
}

export default TextBackground

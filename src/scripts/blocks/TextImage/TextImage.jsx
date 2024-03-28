import './TextImage.scss'
import useRichText from '../../hooks/useRichText'

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

                        <div class="description">
                            <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                        </div>
                    </div>
                </div>

                <div className="image-wrapper">
                    <div className="background-image"
                        style={{
                            backgroundImage: `url(${attributes.image ?? 'https://picsum.photos/1920/1080'})`
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default TextImage

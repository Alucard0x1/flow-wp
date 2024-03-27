import './ScaledImage.scss'
import Button from '../../components/Button/Button'
import useRichText from '../../hooks/useRichText'

const ScaledImage = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="scaled-image">
            <div className="container">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />

                <div className="image-wrapper">
                    <div className="background-image image-pos-placeholder"></div>
                </div>

                <div className="scaled-image-content">
                    <div class="category-wrapper">
                        <Text tagName="p" className="text-category" value={attributes.category} onChange={(category) => setAttributes({ category })} />
                    </div>

                    <div class="description-wrapper">
                        <Text tagName="p" className="text-description" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                        <Button text="Explore More" isSelected={isSelected} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScaledImage

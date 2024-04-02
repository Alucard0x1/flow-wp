import './MapIntro.scss'
import useRichText from '../../hooks/useRichText'

const MapIntro = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="map-intro">
            <div className="container">
                <div className="image-wrapper">
                    <img src="https://picsum.photos/976/530" alt="" />
                </div>

                <div className="content-wrapper">
                    <Text tagName="p" value={attributes.category} className="text-category"
                        onChange={(category) => setAttributes({ category })}
                    />

                    <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />
                </div>
            </div>
        </section>
    )
}

export default MapIntro

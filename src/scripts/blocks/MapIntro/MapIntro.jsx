import './MapIntro.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const MapIntro = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="map-intro">
            <div className="container">
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
                    <img src={attributes.image ? attributes.image.url : "https://picsum.photos/976/530"} alt="" />

                    <div className="description-wrapper">
                        <Text tagName="h2" value={attributes.location} onChange={(location) => setAttributes({ location })} />
                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                    </div>
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

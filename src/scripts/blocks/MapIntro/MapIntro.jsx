import './MapIntro.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, URLInputButton } = wp.blockEditor
const { Button, Icon } = wp.components

const MapIntro = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="map-intro">
            <div className="container">
                <div className="image-wrapper">
                    {isSelected &&
                        <div className="image-picker">
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

                    <a href={!isSelected ? attributes.url : '#'} target="_blank" rel="nofollow noopener">
                        {attributes.image != null && attributes.image.type == 'video' ?
                            <video src={attributes.image.url} autoPlay loop playsInline muted />
                            :
                            <>
                                <img src={attributes.image ? attributes.image.url : "https://picsum.photos/976/530"} alt="" className="desktop" />
                                <img src={attributes.imagePortrait ? attributes.imagePortrait.url : "https://picsum.photos/976/530"} alt="" className="portrait" />
                            </>
                        }
                    </a>
                    {isSelected &&
                        <URLInputButton url={attributes.url}
                            onChange={(url) => setAttributes({ url })}
                        />
                    }

                    <div className="description-wrapper">
                        <Text tagName="h2" value={attributes.location} onChange={(location) => setAttributes({ location })} />
                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                    </div>
                </div>

                <div className="content-wrapper">
                    <Text tagName="p" value={attributes.category} className="text-category"
                        onChange={(category) => setAttributes({ category })}
                    />

                    <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} data-split-text data-motion-text />
                </div>
            </div>
        </section>
    )
}

export default MapIntro

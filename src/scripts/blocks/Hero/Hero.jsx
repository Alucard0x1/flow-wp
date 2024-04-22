import useRichText from '../../hooks/useRichText'
import './Hero.scss'

const { MediaUpload, MediaUploadCheck } = wp.blockEditor
const { Button, Icon } = wp.components

const Hero = ({ setAttributes, attributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="hero">
            <div className="image-wrapper">
                {isSelected &&
                    <MediaUploadCheck>
                        <div className="image-picker">
                            <MediaUpload
                                onSelect={(image) => {
                                    setAttributes({ image })
                                }}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        <Icon icon="format-image" />
                                    </Button>
                                )}
                            />

                            <MediaUpload
                                onSelect={(imagePortrait) => {
                                    setAttributes({ imagePortrait })
                                }}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        <Icon icon="smartphone" />
                                    </Button>
                                )}
                            />
                        </div>
                    </MediaUploadCheck>
                }
                {attributes.image != null && attributes.image.type == 'video' ?
                    <>
                        <video src={attributes.image.url} autoPlay loop playsInline muted className="desktop" />
                        {attributes.imagePortrait != null &&
                            <video src={attributes.imagePortrait.url} autoPlay loop playsInline muted className="portrait" />
                        }
                    </>
                    :
                    <div className="background-image"
                        style={{
                            backgroundImage: `url(${attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url})`
                        }}
                    ></div>
                }
            </div>

            <div className="hero-content">
                <div className="container">
                    <Text tagName="h1" value={attributes.title}
                        onChange={(title) => setAttributes({ title })}
                        data-split-text
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero

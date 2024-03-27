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
                        <MediaUpload
                            onSelect={(image) => {
                                setAttributes({ image })
                                console.log(attributes)
                            }}
                            allowedMediaTypes={['image']}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary className="image-picker">
                                    <Icon icon="format-image" />
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                }
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${attributes.image == null ? 'https://picsum.photos/1920/1080' : attributes.image.url})`
                    }}
                ></div>
            </div>

            <div className="hero-content">
                <div className="container">
                    <Text tagName="h1" value={attributes.title}
                        onChange={(title) => setAttributes({ title })}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero

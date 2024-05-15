import './SideImage.scss'
import useRichText from '../../hooks/useRichText.js'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const SideImage = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className="side-image">
            <div className="container">
                <div className="content-wrapper">
                    <Text tagName="p" className="heading"
                        value={attributes.heading} onChange={(heading) => setAttributes({ heading })}
                    />

                    <Text tagName="p" className="description"
                        value={attributes.description} onChange={(description) => setAttributes({ description })}
                    />
                </div>

                <div className="image-wrapper">
                    {isSelected &&
                        <MediaUpload
                            onSelect={(image) => {
                                setAttributes({
                                    image
                                })
                            }}
                            render={({ open }) => (
                                <div className="image-picker">
                                    <Button isPrimary onClick={open}>
                                        <Icon icon="format-image" />
                                    </Button>
                                </div>
                            )}
                        />
                    }
                    <img src={attributes.image != null ? attributes.image.url : "https://picsum.photos/300/300"} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SideImage

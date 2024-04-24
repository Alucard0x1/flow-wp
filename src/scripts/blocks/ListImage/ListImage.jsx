import './ListImage.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const ListImage = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="list-image">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-inner">
                        <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />

                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />

                        <div className="list-wrapper">
                            {isSelected &&
                                <Button isPrimary isSmall
                                    onClick={() => {
                                        setAttributes({ items: [...attributes.items, 'Text'] })
                                    }}
                                >
                                    <Icon icon="plus" />
                                </Button>
                            }
                            <div className="list-wrapper-content">
                                <ul>
                                    {attributes.items.map((item, index) => (
                                        <li>
                                            <Text tagName="span" value={item} onChange={(item) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[index] = item
                                                setAttributes({ items: itemsCopy })
                                            }} />
                                            {isSelected &&
                                                <Button isPrimary isDestructive isSmall
                                                    onClick={() => {
                                                        const itemsCopy = [...attributes.items]
                                                        itemsCopy.splice(index, 1)
                                                        setAttributes({ items: itemsCopy })
                                                    }}
                                                >
                                                    <Icon icon="trash" />
                                                </Button>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

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


                    {attributes.image != null && attributes.image.type == 'video' ?
                        <>
                            <video data-src={attributes.image.url} autoPlay loop playsInline muted className="desktop lazy" />
                            {attributes.imagePortrait != null &&
                                <video data-src={attributes.imagePortrait.url} autoPlay loop playsInline muted className="portrait lazy" />
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
            </div>
        </section>
    )
}

export default ListImage

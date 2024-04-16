import './ScrollSlider.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload } = wp.blockEditor
const { Button, Icon } = wp.components

const ScrollSlider = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"scroll-slider" + (isSelected ? ' is-selected' : '')}>
            {isSelected &&
                <Button isPrimary onClick={() => setAttributes({ items: [...attributes.items, { image: null, title: 'Title', description: 'Description', link: { text: '', url: '' } }] })}>
                    <Icon icon="plus" />
                </Button>
            }
            <div className="slide-wrapper">
                {attributes.items.map((item, index) => (
                    <div className={"container" + (index == 0 ? ' active' : '')} key={index} data-index={(index + 1).toString().padStart(2, '0')}>
                        <div className="media-wrapper">
                            {isSelected &&
                                <MediaUpload
                                    onSelect={(image) => {
                                        const itemsCopy = [...attributes.items]
                                        itemsCopy[index] = { ...itemsCopy[index], image }

                                        setAttributes({ items: itemsCopy })
                                    }}
                                    render={({ open }) => (
                                        <div className="image-picker">
                                            <Button isPrimary onClick={open}>
                                                <Icon icon="format-image" />
                                            </Button>
                                            <Button isPrimary isDestructive onClick={() => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy.splice(index, 1)
                                                setAttributes({ items: itemsCopy })
                                            }}>
                                                <Icon icon="trash" />
                                            </Button>
                                        </div>
                                    )}
                                />
                            }
                            <div className="background-image"
                                style={{
                                    backgroundImage: `url(${item.image == null ? 'https://picsum.photos/1920/1080' : item.image.url})`
                                }}
                            ></div>
                        </div>

                        <div className="content-wrapper">
                            <div className="slider-menu">
                                <a href="#">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </a>
                            </div>

                            <div className="num">
                                {index + 1} <span className="separator">-</span> {attributes.items.length}
                            </div>

                            <div className="text-content">
                                <Text tagName="h2" value={item.title} onChange={(title) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index] = { ...itemsCopy[index], title }

                                    setAttributes({ items: itemsCopy })
                                }} />

                                <Text tagName="p" value={item.description} onChange={(description) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index] = { ...itemsCopy[index], description }

                                    setAttributes({ items: itemsCopy })
                                }} />
                            </div>

                            <div className="slider-action">
                                <a href="#" class="btn btn-block">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ScrollSlider

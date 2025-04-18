import './ScrollSlider.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, URLInputButton, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, PanelRow, ToggleControl } = wp.components

const ScrollSlider = ({ attributes, setAttributes, isSelected, edit }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"scroll-slider" + (edit ? ' is-selected' : '')}>
            {isSelected &&
                <Button isPrimary onClick={() => setAttributes({ items: [...attributes.items, { image: null, title: 'Title', description: 'Description', link: { text: '', url: '', newTab: false } }] })}>
                    <Icon icon="plus" />
                </Button>
            }

            {isSelected &&
                <InspectorControls>
                    <PanelBody title="Pricing">
                        {attributes.items.map((item, index) => (
                            <ToggleControl
                                label={item.title}
                                checked={item.showLabel}
                                onChange={(showLabel) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index] = { ...itemsCopy[index], showLabel }
                                    setAttributes({ items: itemsCopy })
                                }}
                            />
                        ))}
                    </PanelBody>

                    <PanelBody title="New Tab">
                        {attributes.items.map((item, index) => (
                            <ToggleControl
                                label={item.title}
                                checked={item.link.newTab}
                                onChange={(newTab) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index].link = { ...itemsCopy[index].link, newTab }
                                    setAttributes({ items: itemsCopy })
                                }}
                            />
                        ))}
                    </PanelBody>
                </InspectorControls>
            }
            <div className="slide-wrapper">
                {!edit &&
                    <div className="container">
                        <div className="media-wrapper">
                            {attributes.items.map((item, index) => (
                                <div className="media-item-wrapper" style={{ zIndex: attributes.items.length - 1 - index }}>
                                    {item.image != null && item.image.type == 'video' ?
                                        <div className="media-item">
                                            <video data-src={item.image.url} autoPlay loop playsInline muted className="desktop lazy"
                                                src={edit ? item.image.url : null}
                                            />
                                            {item.imagePortrait != null &&
                                                <video data-src={item.imagePortrait.url} autoPlay loop playsInline muted className="portrait lazy"
                                                    src={edit ? item.imagePortrait.url : null}
                                                />}
                                        </div>
                                        :
                                        <div className="media-item background-image"
                                            style={{
                                                backgroundImage: `url(${item.image == null ? `https://picsum.photos/1920/1080?${index}` : item.image.url})`,
                                            }}
                                        ></div>
                                    }
                                </div>
                            ))}
                        </div>

                        <div className="content-wrapper">
                            <div className="slider-menu">
                                <a href="#">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </a>
                            </div>

                            <div className="num">
                                <span className='num-active'>1</span> <span className="separator">-</span> {attributes.items.length}
                            </div>

                            <div className="text-content-wrapper">
                                {attributes.items.map((item, index) => (
                                    <div className="text-content">
                                        <Text tagName="h2" value={item.title} onChange={(title) => {
                                            const itemsCopy = [...attributes.items]
                                            itemsCopy[index] = { ...itemsCopy[index], title }

                                            setAttributes({ items: itemsCopy })
                                        }} data-split-text />

                                        <Text tagName="p" value={item.description} onChange={(description) => {
                                            const itemsCopy = [...attributes.items]
                                            itemsCopy[index] = { ...itemsCopy[index], description }

                                            setAttributes({ items: itemsCopy })
                                        }} data-split-text />
                                    </div>
                                ))}
                            </div>

                            <div className="slider-action">
                                {attributes.items.map((item, index) => (
                                    <Text tagName="a" href={item.link.url} className={"btn btn-block" + (index == 0 ? ' active' : '')} value={item.link.text} target={item.link.newTab ? '_blank' : '_self'} rel={item.link.newTab ? 'noopener noreferrer' : ''} />
                                ))}
                            </div>
                        </div>
                    </div>
                }

                {edit &&
                    attributes.items.map((item, index) => (
                        <div className={"container" + (index == 0 ? ' active' : '')} key={index} data-index={(index + 1).toString().padStart(2, '0')}>
                            <div className="media-wrapper">
                                {isSelected &&
                                    <div className="image-picker">
                                        <MediaUpload
                                            onSelect={(image) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[index] = { ...itemsCopy[index], image }

                                                setAttributes({ items: itemsCopy })
                                            }}
                                            render={({ open }) => (
                                                <Button isPrimary onClick={open}>
                                                    <Icon icon="format-image" />
                                                </Button>
                                            )}
                                        />

                                        <MediaUpload
                                            onSelect={(imagePortrait) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[index] = { ...itemsCopy[index], imagePortrait }

                                                setAttributes({ items: itemsCopy })
                                            }}
                                            render={({ open }) => (
                                                <Button isPrimary onClick={open}>
                                                    <Icon icon="smartphone" />
                                                </Button>
                                            )}
                                        />

                                        <Button isPrimary isDestructive onClick={() => {
                                            const itemsCopy = [...attributes.items]
                                            itemsCopy.splice(index, 1)
                                            setAttributes({ items: itemsCopy })
                                        }}>
                                            <Icon icon="trash" />
                                        </Button>
                                    </div>
                                }

                                {item.image != null && item.image.type == 'video' ?
                                    <>
                                        <video data-src={item.image.url} autoPlay loop playsInline muted className="desktop lazy"
                                            src={edit ? item.image.url : null}
                                        />
                                        {item.imagePortrait != null &&
                                            <video data-src={item.imagePortrait.url} autoPlay loop playsInline muted className="portrait lazy"
                                                src={edit ? item.imagePortrait.url : null}
                                            />
                                        }
                                    </>
                                    :
                                    <div className="background-image"
                                        style={{
                                            backgroundImage: `url(${item.image == null ? 'https://picsum.photos/1920/1080' : item.image.url})`
                                        }}
                                    ></div>
                                }
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
                                    {item.showLabel &&
                                        <div className="slider-label">
                                            <div className="label">
                                                <Text tagName="span" value={item.label}
                                                    onChange={(label) => {
                                                        const itemsCopy = [...attributes.items]
                                                        itemsCopy[index] = { ...itemsCopy[index], label }

                                                        setAttributes({ items: itemsCopy })
                                                    }}
                                                />
                                            </div>

                                            <div className="price">
                                                <Text tagName="span" value={item.price}
                                                    onChange={(price) => {
                                                        const itemsCopy = [...attributes.items]
                                                        itemsCopy[index] = { ...itemsCopy[index], price }

                                                        setAttributes({ items: itemsCopy })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    }

                                    <Text tagName="a" href={item.link.url} className="btn btn-block"
                                        target={item.link.newTab ? '_blank' : ''} rel={item.link.newTab ? 'noopener noreferrer' : ''}
                                        value={item.link.text}
                                        onChange={(text) => {
                                            const itemsCopy = [...attributes.items]
                                            itemsCopy[index] = {
                                                ...itemsCopy[index],
                                                link: {
                                                    ...itemsCopy[index].link,
                                                    text,
                                                }
                                            }

                                            setAttributes({ items: itemsCopy })
                                        }}
                                    />

                                    {isSelected &&
                                        <URLInputButton url={item.link.url}
                                            onChange={(url, post) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[index] = {
                                                    ...itemsCopy[index],
                                                    link: {
                                                        url,
                                                        text: (post && post.title) || itemsCopy[index].link.text,
                                                        newTab: itemsCopy[index].newTab
                                                    }
                                                }

                                                setAttributes({ items: itemsCopy })
                                            }}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ScrollSlider

import './ImageBackground.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, PanelRow, SelectControl, ToggleControl, Dropdown, ColorPicker, ColorIndicator } = wp.components

const ImageBackground = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"image-background" + (!attributes.bottomSpacing ? ' mb-0' : '') + (isSelected ? ' is-selected' : '')}
            style={{
                backgroundColor: attributes.bgColor
            }}
        >
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <SelectControl
                            label="Direction"
                            value={attributes.direction}
                            onChange={(direction) => setAttributes({ direction })}
                            options={[
                                {
                                    label: 'Left', value: 'left'
                                },
                                {
                                    label: 'Right', value: 'right'
                                }
                            ]}
                        />
                    </PanelBody>
                    <PanelBody>
                        <ToggleControl label="Bottom spacing" checked={attributes.bottomSpacing} onChange={(bottomSpacing) => setAttributes({ bottomSpacing })} />
                    </PanelBody>
                    <PanelBody>
                        <Dropdown
                            renderContent={() => (
                                <ColorPicker onChange={(bgColor) => setAttributes({ bgColor })} />
                            )}
                            renderToggle={({ isOpen, onToggle }) => (
                                <PanelRow>
                                    <ColorIndicator colorValue={attributes.bgColor} />
                                    <Button isPrimary text="Background color"
                                        onClick={onToggle}
                                    />
                                </PanelRow>
                            )}
                        />
                    </PanelBody>
                </InspectorControls>
            }

            {isSelected &&
                <Button isPrimary onClick={() => {
                    const itemsCopy = [...attributes.items]

                    itemsCopy.push({
                        background: null,
                        num: (itemsCopy.length + 1).toString().padStart(2, '0'),
                        title: 'Title',
                        description: 'Description',
                        list: []
                    })

                    setAttributes({ items: itemsCopy })
                }}>
                    <Icon icon="plus" />
                </Button>
            }

            <div className="slide-wrapper">
                {attributes.items.map((item, index) => (
                    <div className={"image-wrapper" + (index == 0 ? ' is-active' : '')} key={index}>
                        {isSelected &&
                            <MediaUpload
                                onSelect={(background) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index].background = background

                                    setAttributes({ items: itemsCopy })
                                }}
                                render={({ open }) => (
                                    <div className="image-picker">
                                        <Button isPrimary onClick={open}>
                                            <Icon icon="format-image" />
                                        </Button>
                                        <Button isPrimary isDestructive
                                            onClick={() => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy.splice(index, 1)
                                                setAttributes({ items: itemsCopy })
                                            }}
                                        >
                                            <Icon icon="trash" />
                                        </Button>
                                    </div>
                                )}
                            />
                        }
                        <div className="background-image"
                            style={{
                                backgroundImage: `url(${item.background ? item.background.url : 'https://picsum.photos/1920/1080'})`
                            }}
                        ></div>

                        <div className={`content-wrapper ${attributes.direction}`}>
                            <div className="content-wrapper__content">
                                <div className="num">
                                    <Text tagName="span" value={item.num} onChange={(num) => {
                                        const itemsCopy = [...attributes.items]
                                        itemsCopy[index] = { ...itemsCopy[index], num: num }

                                        setAttributes({ items: itemsCopy })
                                    }} />
                                </div>
                                <Text tagName="h2" value={item.title} onChange={(title) => {
                                    const itemsCopy = [...attributes.items]
                                    itemsCopy[index] = { ...itemsCopy[index], title: title }
                                    setAttributes({ items: itemsCopy })
                                }} />
                                <div className="content-description">
                                    <Text tagName="p" value={item.description} onChange={(description) => {
                                        const itemsCopy = [...attributes.items]
                                        itemsCopy[index] = { ...itemsCopy[index], description: description }
                                        setAttributes({ items: itemsCopy })
                                    }} />

                                    {isSelected &&
                                        <div>
                                            <Button isPrimary isSmall
                                                onClick={() => {
                                                    const itemsCopy = [...attributes.items]
                                                    itemsCopy[index].list.push('Text')
                                                    setAttributes({
                                                        items: itemsCopy
                                                    })
                                                }}
                                            >Add</Button>
                                        </div>
                                    }
                                    <ul className={"content-list" + (item.list.length > 0 ? '' : ' d-none')}>
                                        {item.list.map((item, _index) => (
                                            <li class="content-list__item" key={_index}>
                                                <Text tagName="span" value={item} onChange={(item) => {
                                                    const itemsCopy = [...attributes.items]
                                                    itemsCopy[index].list[_index] = item

                                                    setAttributes({ items: itemsCopy })
                                                }} />
                                                {isSelected &&
                                                    <Button isPrimary isSmall isDestructive className="btn-delete"
                                                        onClick={() => {
                                                            const itemsCopy = [...attributes.items]
                                                            itemsCopy[index].list.splice(index, 1)

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
                ))}
            </div>
        </section >
    )
}

export default ImageBackground

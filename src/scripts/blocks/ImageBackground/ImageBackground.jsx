import './ImageBackground.scss'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, PanelRow, SelectControl, ToggleControl, Dropdown, ColorPicker, ColorIndicator } = wp.components

const ImageBackground = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"image-background" + (!attributes.bottomSpacing ? ' mb-0' : '')}
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
            <div className="image-wrapper">
                {isSelected &&
                    <MediaUpload
                        onSelect={(background) => setAttributes({ background })}
                        render={({ open }) => (
                            <Button isPrimary onClick={open} className="image-picker">
                                <Icon icon="format-image" />
                            </Button>
                        )}
                    />
                }
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${attributes.background ? attributes.background.url : 'https://picsum.photos/1920/1080'})`
                    }}
                ></div>

                <div className={`content-wrapper ${attributes.direction}`}>
                    <div className="content-wrapper__content">
                        <div className="num">
                            <Text tagName="span" value={attributes.num} onChange={(num) => setAttributes({ num })} />
                        </div>
                        <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />
                        <div className="content-description">
                            <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />

                            {isSelected &&
                                <div>
                                    <Button isPrimary isSmall
                                        onClick={() => {
                                            setAttributes({ list: [...attributes.list, 'Text'] })
                                        }}
                                    >Add</Button>
                                </div>
                            }
                            <ul className={"content-list" + (attributes.list.length > 0 ? '' : ' d-none')}>
                                {attributes.list.map((item, index) => (
                                    <li class="content-list__item" key={index}>
                                        <Text tagName="span" value={item} onChange={(item) => {
                                            const listCopy = [...attributes.list]
                                            listCopy[index] = item

                                            setAttributes({ list: listCopy })
                                        }} />
                                        {isSelected &&
                                            <Button isPrimary isSmall isDestructive className="btn-delete"
                                                onClick={() => {
                                                    const listCopy = [...attributes.list]
                                                    listCopy.splice(index, 1)

                                                    setAttributes({ list: listCopy })
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
        </section >
    )
}

export default ImageBackground

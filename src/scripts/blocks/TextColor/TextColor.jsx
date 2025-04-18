import './TextColor.scss'
import useRichText from '../../hooks/useRichText'

const { InspectorControls } = wp.blockEditor
const { PanelBody, PanelRow, ToggleControl, Dropdown, Button, ColorPicker, ColorIndicator } = wp.components

const TextColor = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className={"text-color" + (attributes.vp ? ' vp' : '')} style={{ backgroundColor: attributes.backgroundColor }}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Use v-padding instead of height"
                            checked={attributes.vp}
                            onChange={(vp) => setAttributes({ vp })}
                        />
                        <Dropdown
                            renderContent={() => (
                                <ColorPicker onChange={(backgroundColor) => setAttributes({ backgroundColor })} />
                            )}
                            renderToggle={({ isOpen, onToggle }) => (
                                <PanelRow>
                                    <ColorIndicator colorValue={attributes.backgroundColor} />
                                    <Button isPrimary text="Background color"
                                        onClick={onToggle}
                                    />
                                </PanelRow>
                            )}
                        />
                    </PanelBody>

                    <PanelBody>
                        <Dropdown
                            renderContent={() => (
                                <ColorPicker onChange={(textColor) => setAttributes({ textColor })} />
                            )}
                            renderToggle={({ isOpen, onToggle }) => (
                                <PanelRow>
                                    <ColorIndicator colorValue={attributes.textColor} />
                                    <Button isPrimary text="Text color"
                                        onClick={onToggle}
                                    />
                                </PanelRow>
                            )}
                        />
                    </PanelBody>
                </InspectorControls>
            }
            <div className="content-wrapper">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })}
                    style={{ color: attributes.textColor }}
                    data-split-text data-motion-text
                />
            </div>
        </section>
    )
}

export default TextColor

import './TextIntro.scss'
import useRichText from '../../hooks/useRichText'

const { InspectorControls } = wp.blockEditor
const { PanelBody, PanelRow, Dropdown, Button, ColorPicker, ColorIndicator, SelectControl } = wp.components

const TextIntro = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className={"text-intro " + attributes.margin}
            style={{
                backgroundColor: attributes.backgroundColor
            }}
        >
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <SelectControl
                            label="Margin"
                            value={attributes.margin}
                            onChange={(margin) => setAttributes({ margin })}
                            options={[
                                {
                                    label: 'Default', value: ''
                                },
                                {
                                    label: 'Before Solutions list', value: 'before-solutions-list'
                                },
                                {
                                    label: 'Before related solutions', value: 'before-related-solutions'
                                }
                            ]}
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
                </InspectorControls>
            }
            <div className="container">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} data-split-text data-motion-text />
                <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
            </div>
        </section>
    )
}

export default TextIntro

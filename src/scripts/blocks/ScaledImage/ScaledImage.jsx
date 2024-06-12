import './ScaledImage.scss'
import Btn from '../../components/Button/Button'
import useRichText from '../../hooks/useRichText'

const { MediaUpload, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, PanelRow, SelectControl, ToggleControl, Dropdown, ColorPicker, ColorIndicator } = wp.components

const ScaledImage = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="scaled-image" style={{
            backgroundColor: attributes.bgColor != null ? attributes.bgColor : 'none'
        }}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <Dropdown
                            renderContent={() => (
                                <ColorPicker color={attributes.bgColor} onChange={(bgColor) => setAttributes({ bgColor })} />
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
            <div className="container">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} data-split-text />

                <div className="image-wrapper" data-flip-id="hero">
                    {/* <div className="background-image image-pos-placeholder"></div> */}
                </div>

                <div className="scaled-image-content">
                    <div class="category-wrapper">
                        {isSelected || attributes.category != "" && <Text tagName="p" className="text-category" value={attributes.category} onChange={(category) => setAttributes({ category })} />}
                    </div>

                    <div class="description-wrapper">
                        <Text tagName="p" className="text-description" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScaledImage

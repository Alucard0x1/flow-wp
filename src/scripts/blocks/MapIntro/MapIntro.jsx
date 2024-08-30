import './MapIntro.scss'
import useRichText from '../../hooks/useRichText'
import map_desktop from '../../../../assets/images/map-desktop.png'
import map_mobile from '../../../../assets/images/map-mobile.png'
import logo_white from '../../../../assets/images/logo-white.svg'

const { MediaUpload, URLInputButton, InspectorControls } = wp.blockEditor
const { Button, Icon, PanelBody, ToggleControl, Dropdown, ColorPicker, PanelRow, ColorIndicator } = wp.components

const MapIntro = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    
    return (
        <section className={"map-intro" + (attributes.noContent ? ' no-content' : '')}
            style={{ backgroundColor: attributes.backgroundColor }}>
            {isSelected &&
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Right description"
                            checked={attributes.rightDescription}
                            onChange={(rightDescription) => setAttributes({ rightDescription })}
                        />
                        <ToggleControl
                            label="Hide logo"
                            checked={attributes.hideLogo}
                            onChange={(hideLogo) => setAttributes({ hideLogo })}
                        />
                        <ToggleControl
                            label="No content"
                            checked={attributes.noContent}
                            onChange={(noContent) => setAttributes({ noContent })}
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

                    <a href={!isSelected ? attributes.url : '#'} target="_blank" rel="nofollow noopener">
                        {attributes.image != null && attributes.image.type == 'video' ?
                            <video data-src={attributes.image.url} autoPlay loop playsInline muted className="lazy" />
                            :
                            <>
                                <img src={attributes.image ? attributes.image.url : map_desktop} alt="" className="image desktop" />
                                <img src={attributes.imagePortrait ? attributes.imagePortrait.url : map_mobile} alt="" className="image portrait" />
                                {
                                    !attributes.hideLogo && 
                                    <>
                                         <a target="_blank" rel="nofollow noopener" href={attributes.link.url} className="logo-container">
                                            <div className="logo">
                                                <img src={logo_white} alt=""/>
                                            </div>
                                        </a>
                                        <div className="dot"></div>
                                    </>
                                }
                               
                            </>
                        }
                    </a>
                    {isSelected &&
                        <URLInputButton url={attributes.url}
                            onChange={(url) => setAttributes({ url })}
                        />
                    }

                    <div className={`description-wrapper ${attributes.rightDescription ? "right" : ""}`}>
                        <Text tagName="h2" value={attributes.location} onChange={(location) => setAttributes({ location })} />
                        <Text tagName="p" value={attributes.description} onChange={(description) => setAttributes({ description })} />
                        <Text
                            className="description-link"
                            tagName="a"
                            href={attributes.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            value={attributes.link.title}
                            onChange={(title) =>
                                setAttributes({
                                    link: {
                                        title,
                                    },
                                })
                            }
                        />
                        {isSelected && (
                            <URLInputButton
                                url={attributes.link.url}
                                onChange={(url, post) => {
                                setAttributes({
                                    link: {
                                    url,
                                    title: post && post.title,
                                    },
                                });
                                }}
                            />
                        )}
                    </div>
                </div>

                {!attributes.noContent &&
                    <div className="content-wrapper">
                        <Text tagName="p" value={attributes.category} className="text-category"
                            onChange={(category) => setAttributes({ category })}
                        />

                        <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} data-split-text data-motion-text />
                    </div>
                }
            </div>
        </section>
    )
}

export default MapIntro

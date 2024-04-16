import './LinkHover.scss'
import useRichText from '../../hooks/useRichText'
import * as Btn from '../../components/Button/Button'

const { URLInputButton } = wp.blockEditor
const { Button, Icon } = wp.components

const LinkHover = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="link-hover">
            <div className="container">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />

                {isSelected &&
                    <Button isPrimary
                        onClick={() => {
                            const linksCopy = [...attributes.links]
                            linksCopy.push({
                                url: '#',
                                text: 'Link',
                                image: null,
                            })

                            setAttributes({ links: linksCopy })
                        }}
                    >
                        <Icon icon="plus" />
                    </Button>
                }
                <div className="link-container">
                    {attributes.links.map((link, index) => (
                        <div key={index} className="link-item" data-index={(index + 1).toString().padStart(2, '0')}>
                            <Text tagName="a" href={link.url} value={link.text}
                                onChange={(text) => {
                                    const linksCopy = [...attributes.links]
                                    linksCopy[index] = {
                                        ...linksCopy[index],
                                        text
                                    }

                                    setAttributes({ links: linksCopy })
                                }} />

                            <div className="image-wrapper">
                                <img src={link.image} alt={link.text} />
                            </div>

                            {isSelected &&
                                <div className="link-admin">
                                    <URLInputButton url={link.url}
                                        onChange={(url, post) => {
                                            const linksCopy = [...attributes.links]
                                            linksCopy[index] = {
                                                ...linksCopy[index],
                                                url,
                                                text: (post && post.title) || linksCopy[index].text
                                            }

                                            setAttributes({ links: linksCopy })
                                        }}
                                    />
                                    <Button isPrimary isDestructive
                                        onClick={() => {
                                            const linksCopy = [...attributes.links]
                                            linksCopy.splice(index, 1)

                                            setAttributes({ links: linksCopy })
                                        }}
                                    >
                                        <Icon icon="trash" />
                                    </Button>
                                </div>
                            }
                        </div>
                    ))}
                </div>

                <div className="action">
                    <Btn.default isSelected={isSelected} text={attributes.link.text} />
                </div>
            </div>
        </section>
    )
}

export default LinkHover

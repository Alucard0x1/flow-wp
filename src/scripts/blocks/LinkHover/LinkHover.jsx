import './LinkHover.scss'
import useRichText from '../../hooks/useRichText'
import * as Btn from '../../components/Button/Button'

const LinkHover = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)

    return (
        <section className="link-hover">
            <div className="container">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />

                <div className="link-container">
                    {attributes.links.map((link, index) => (
                        <div key={index} className="link-item" data-index={(index + 1).toString().padStart(2, '0')}>
                            <a href={link.url}>
                                {link.text}
                            </a>

                            <div className="image-wrapper">
                                <img src={link.image} alt={link.text} />
                            </div>
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

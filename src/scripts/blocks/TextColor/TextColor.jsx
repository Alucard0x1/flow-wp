import './TextColor.scss'
import useRichText from '../../hooks/useRichText'

const TextColor = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className="text-color">
            <div className="content-wrapper">
                <Text tagName="h2" value={attributes.title} onChange={(title) => setAttributes({ title })} />
            </div>
        </section>
    )
}

export default TextColor

import './Button.scss';
import useRichText from '../../hooks/useRichText';

const Button = (props) => {
    const Text = useRichText(props.isSelected)

    return (
        <a href="#" class="btn btn-primary">
            <Text tagName="span" value={props.text} />
        </a>
    )
}

export default Button

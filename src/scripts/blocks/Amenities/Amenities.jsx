import './Amenities.scss'
import useRichText from '../../hooks/useRichText'

const { Button, Icon } = wp.components

const Amenities = ({ attributes, setAttributes, isSelected }) => {
    const Text = useRichText(isSelected)
    return (
        <section className="amenities">
            <div className="container">
                <div className="image-wrapper">
                    <div className="background-image"
                        style={{ backgroundImage: `url('https://picsum.photos/300/300')` }}></div>
                </div>

                <div className="content-wrapper">
                    <h2>Amenities and Services</h2>

                    {isSelected &&
                        <div>
                            <Button isPrimary isSmall
                                onClick={() => {
                                    setAttributes({ items: [...attributes.items, { title: 'Title', description: 'Description' }] })
                                }}
                            >
                                <Icon icon="plus" /></Button></div>}
                    <div className="contents">
                        <div className="content-list">
                            {attributes.items.map((item, index) => (
                                <div class="content-item">
                                    <div className="content-title">
                                        <Text tagName="p" value={item.title}
                                            onChange={(title) => {
                                                const itemsCopy = [...attributes.items]
                                                itemsCopy[index] = {
                                                    ...itemsCopy[index],
                                                    title
                                                }

                                                setAttributes({ items: itemsCopy })
                                            }}
                                        />
                                        {isSelected &&
                                            <Button isDestructive isSmall
                                                onClick={() => {
                                                    setAttributes({ items: attributes.items.filter((_, i) => i !== index) })
                                                }}
                                            >
                                                <Icon icon="minus" />
                                            </Button>
                                        }
                                    </div>

                                    <Text tagName="p" className="content-description"
                                        value={item.description}
                                        onChange={(description) => {
                                            const itemsCopy = [...attributes.items]
                                            itemsCopy[index] = {
                                                ...itemsCopy[index],
                                                description
                                            }

                                            setAttributes({ items: itemsCopy })
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="content-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Amenities

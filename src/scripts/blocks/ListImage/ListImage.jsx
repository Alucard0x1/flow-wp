import './ListImage.scss'

const ListImage = ({ attributes, setAttributes, isSelected }) => {
    return (
        <section className="list-image">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-inner">
                        <h2>
                            Amenities and Services
                        </h2>

                        <div className="list-wrapper">
                            <ul>
                                <li>Enterprise Grade GigaBit WIFI</li>
                                <li>Custom, Flexible Furniture</li>
                                <li>Collaboration Longue</li>
                                <li>Quiet Longue</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="image-wrapper">
                    <div className="background-image"
                        style={{
                            backgroundImage: `url(https://picsum.photos/1920/1080)`
                        }}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default ListImage

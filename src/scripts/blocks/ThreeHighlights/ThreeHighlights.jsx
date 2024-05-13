import './ThreeHighlights.scss'

const ThreeHighlights = ({ attributes, setAttributes, isSelected }) => {
    return (
        <section className="three-highlights">
            <div className="container">
                <div className="image-wrapper">
                    <img src="https://picsum.photos/300/300" alt="" />
                </div>

                <div className="content-wrapper">
                    <div className="content-item">
                        <p className="num">01.</p>
                        <p className="content-title">Take a Tour</p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <div className="content-item">
                        <p className="num">01.</p>
                        <p className="content-title">Take a Tour</p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <div className="content-item">
                        <p className="num">01.</p>
                        <p className="content-title">Take a Tour</p>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeHighlights

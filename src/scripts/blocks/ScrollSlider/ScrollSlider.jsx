import './ScrollSlider.scss'

const ScrollSlider = ({ attributes, setAttributes, isSelected }) => {
    return (
        <section className="scroll-slider">
            <div className="container">
                <div className="media-wrapper">
                    <div className="background-image"
                        style={{
                            backgroundImage: `url(https://picsum.photos/1920/1080)`
                        }}
                    ></div>
                </div>

                <div className="content-wrapper">
                    <div className="slider-menu">
                        <a href="#">
                            <span className="line"></span>
                            <span className="line"></span>
                        </a>
                    </div>

                    <div className="num">
                        2 <span className="separator">-</span> 5
                    </div>

                    <div className="text-content">
                        <h2>
                            Custom Movable Furniture
                        </h2>

                        <p>
                            Our dedicated suites are generously proportioned, offering 5 sqm per person—twice the 2.5 sqm per person industry standard—to provide ample space for comfort and productivity. They come equipped with our custom Flow Furniture, high-performance workstations, ergonomic chairs, and walls designed for easy reconfiguration, allowing you to tailor the space to your team's needs for any hour of the day.
                        </p>
                    </div>

                    <div className="slider-action">
                        <a href="#" class="btn btn-icon">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollSlider

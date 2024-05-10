import './SideImage.scss'

const SideImage = ({ attributes, setAttributes, isSelected }) => {
    return (
        <section className="side-image">
            <div className="container">
                <div className="content-wrapper">
                    <p className="heading">
                        Ideal for those who thrive in a vibrant, changing environment,
                        our Flexible Desk provides all the essential tools and resources you need, packaged in a beautifully designed setting.
                    </p>

                    <p className="description">
                        Whether you're a freelancer, entrepreneur,
                        or part of a remote team, our flexible desk setup allows you the flexibility to efficiently work how and when you want.
                    </p>
                </div>

                <div className="image-wrapper">
                    <img src="https://picsum.photos/300/300" alt="" />
                </div>
            </div>
        </section>
    )
}

export default SideImage

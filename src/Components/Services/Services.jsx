import "./Services.css";
// import AnimatedCanvas from "../AnimatedCanvas/AnimatedCanvas";

function Services() {

    const servicesData = [
        {
            id: 1,
            icon: "bx bxl-react",
            title: "React Web Development",
            description: "Building high-performance, scalable web applications using React.js with reusable components."
        },
        {
            id: 2,
            icon: "bx bx-brush",
            title: "Figma to React",
            description: "Transforming Figma designs into pixel-perfect, responsive, and interactive React interfaces."
        },
        {
            id: 3,
            icon: "bx bx-mobile-alt",
            title: "Responsive Design",
            description: "Creating layouts that look perfect on all screen sizes, from mobile to desktop."
        },
        {
            id: 4,
            icon: "bx bx-palette",
            title: "UI/UX Design",
            description: "Designing visually appealing interfaces with smooth interactions and modern styles."
        },
        {
            id: 5,
            icon: "bx bx-rocket",
            title: "Performance Optimization",
            description: "Optimizing code and assets for fast loading, smooth animations, and better user experience."
        },
        {
            id: 6,
            icon: "bx bx-edit-alt",
            title: "Website Improvement",
            description: "Updating existing projects, fixing bugs, and enhancing UI/UX for more engagement."
        }
    ];

    return (
        <section className="services" id="services">
            {/* <AnimatedCanvas /> */}

            <div className="container">
                <h2 className="sub-title">
                    My <span>Services</span>
                </h2>

                <div className="services-list">
                    {servicesData.map((service) => (
                        <div className="icon-services" key={service.id}>
                            <i className={service.icon}></i>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <a href="#" className="read">See More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
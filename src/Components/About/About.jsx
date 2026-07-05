import "./About.css";
import aboutImg from "../../assets/img/about.png";

function About() {
    return (
        <section className="about" id="About">
            <h2 className="sub-title">
                About <span>Me</span>
            </h2>

            <div className="about-content">
                <div className="about-img">
                    <img src={aboutImg} alt="About" />
                </div>

                <div className="about-text">
                    <h3>Front-End Developer  ( React . js )</h3>
                    <p>
                        I am a Frontend Developer specializing in React.js and Bootstrap,
                        with a core focus on delivering pixel-perfect, responsive,
                        and user-friendly web applications.
                        My goal is to merge technical logic with elegant design to create high-quality
                        digital experiences. I am passionate about writing clean, maintainable code and
                        staying ahead of the latest web technologies to build efficient, scalable solutions.
                    </p>

                    <a href="#" className="btn-box">
                        More About Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
import React from "react";
import "./Contact.css";
import AnimatedCanvas from "../AnimatedCanvas/AnimatedCanvas";

function Contact() {
    return (
        <section id="contact" >
            <AnimatedCanvas />

            {/* المحتوى */}
            <h2 className="sub-title">
                Connect <span>Me</span>
            </h2>

            <div className="contact-container">

                {/* LEFT CARD */}
                <div className="contact-info">
                    <h3 className="heading-contact">Let's Connect</h3>
                    <p>
                        I'm currently open to freelance opportunities and full-time roles.
                        Whether it's a question or a hello — my inbox is always open!
                    </p>

                    <div className="info-item">
                        <i className="bx bxs-envelope"></i>
                        <a href="mailto:yassminreda59@gmail.com">
                            yassminreda59@gmail.com
                        </a>
                    </div>

                    <div className="info-item">
                        <i className="bx bxs-phone"></i>
                        <a href="tel:+201284371491">
                            +201284371491
                        </a>
                    </div>

                    <div className="info-item">
                        <i className="bx bxs-map"></i>
                        <span>Egypt</span>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/yassmin-reda-b877ba348"
                            className="social-card linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/Yassmin-Reda"
                            className="social-card github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://wa.me/201284371491"
                            className="social-card whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message"></textarea>

                        <button type="submit">
                            Send Message
                            <i className="fa-solid fa-paper-plane icon-massage"></i>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;
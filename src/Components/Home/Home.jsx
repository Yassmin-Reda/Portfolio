import { useState, useEffect } from "react";
import { FaFileAlt, FaPaperPlane } from "react-icons/fa";
import AnimatedCanvas from "../AnimatedCanvas/AnimatedCanvas";
import nora from "../../assets/image.png";
import "./Home.css";

function Home() {
    const words = ["Software Engineer", "React.js", "Frontend Developer"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let speed = typing ? 100 : 50;

        if (typing && charIndex === words[wordIndex].length) {
            speed = 2000;
        } else if (!typing && text === "") {
            speed = 500;
        }

        const timeout = setTimeout(() => {
            if (typing) {
                if (charIndex < words[wordIndex].length) {
                    setText((prev) => prev + words[wordIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                } else {
                    setTyping(false);
                }
            } else {
                if (text.length > 0) {
                    setText((prev) => prev.slice(0, -1));
                } else {
                    setTyping(true);
                    setWordIndex((wordIndex + 1) % words.length);
                    setCharIndex(0);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, text, typing, wordIndex, words]);

    return (
        <section className="home" id="home" style={{ position: "relative" }}>
            <AnimatedCanvas />

            <div className="home-content" style={{ position: "relative", zIndex: 1 }}>
                <span style={{ "--i": 1 }}>Hello, It's Me</span>
                <h1>
                    NORA <span className="name">ADEL</span>
                </h1>
                <h2>
                    I'm a <span className="text text2">{text}</span>
                </h2>

                <p>
                    I transform ideas into dynamic and scalable
                    React applications with clean architecture
                    and smooth user experience
                </p>

                {/* social icons */}
                <div className="home-sci">
                    <a
                        href="https://www.linkedin.com/in/yassmin-reda-b877ba348"
                        className="social-card linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--i": 6 }}
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://github.com/Yassmin-Reda"
                        className="social-card github"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--i": 7 }}
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://wa.me/201284371491"
                        className="social-card whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--i": 8 }}
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>

                {/* Buttons with icons */}
                <div className="home-buttons" style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                    <a
                        href="/Yassmin-Reda-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--i": 9 }}
                        className="btn-box"
                    >
                        View CV
                        <FaFileAlt className="icon" />
                    </a>

                    <a
                        href="#contact"
                        style={{ "--i": 10 }}
                        className="btn-box"
                    >
                        Connect Me
                        <FaPaperPlane className="icon" />
                    </a>
                </div>
            </div>
            <div className="about-img">
                <img src={nora} alt="About" />
            </div>

        </section>
    );
}

export default Home;
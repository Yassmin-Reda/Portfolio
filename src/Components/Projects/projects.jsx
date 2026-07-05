import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Project.css";

// import images
import caffeine from "../../assets/img/Caffeine-Cove.png";
import velora from "../../assets/img/E-Commerce.png";
import gym from "../../assets/img/FitCore-Gym.png";
import fylo from "../../assets/img/Fylo.png";
import harry from "../../assets/img/Harry-Potter.png";
import history from "../../assets/img/History-Of-EvyThing.png";
import medstar from "../../assets/img/Med-Star.png";
import stylish from "../../assets/img/Stylish-Portfolio.png";
import Crud from "../../assets/img/Crud.png";
import Flower from "../../assets/img/Flower.png";
import AlexSmith from "../../assets/img/AlexSmith.png";
import Fruit from "../../assets/img/Fruit.png";
import UPFlow from "../../assets/img/UPFlow.png";
import flowerBlog from "../../assets/img/flowerBlog.png";
import DJIMavic from "../../assets/img/DJI-Mavic.png";
import Omnifood from "../../assets/img/omnifood.png";

// Projects array with updated IDs starting from 1
const projects = [
    {
        id: 1,
        img: velora, title: "Velora E-Commerce",
        category: "React.js",
        desc: "A performance-driven fashion store built with React. It includes advanced features like dynamic product filtering, a real-time shopping cart system, and an interactive UI for a seamless shopping journey.",
        demo: "#",
        Code: "#"
    },
    {
        id: 2,
        img: harry, title: "Hogwarts Explorer",
        category: "HTML-CSS-JS",
        desc: "An interactive application for Harry Potter fans. Using React and external APIs, it allows users to search, filter, and discover character details within a magical and highly engaging interface.",
        demo: "#",
        Code: "#"
    },
    {
        id: 3,
        img: medstar, title: "MedStar Healthcare",
        category: "HTML-CSS",
        desc: "A comprehensive medical landing page focused on user trust. It features an organized service layout, clear patient call-to-actions, and a fully responsive design tailored for healthcare providers.",
        demo: "https://yassmin-reda.github.io/MedStar-Website/",
        Code: "https://github.com/Yassmin-Reda/MedStar-Website.git"
    },
    {
        id: 4,
        img: Flower, title: "Bloom & Petal",
        category: "HTML-CSS",
        desc: "A visually stunning boutique florist website. It prioritizes high-quality imagery and soft UI transitions to create an elegant atmosphere that reflects the beauty and variety of the floral collections.",
        demo: "https://yassmin-reda.github.io/GDG-Task-4/?authuser=0",
        Code: "https://github.com/Yassmin-Reda/GDG-Task-4.git?authuser=0"
    },
    {
        id: 5,
        img: stylish, title: "Stylish Hub",
        category: "Bootstrap",
        desc: "A sophisticated business theme that balances aesthetics with functionality. Designed with a focus on clean navigation, modern branding, and professional content presentation for corporate clients.",
        demo: "https://yassmin-reda.github.io/Stylish-Portfolio/",
        Code: "https://github.com/Yassmin-Reda/Stylish-Portfolio.git"
    },
    {
        id: 6,
        img: UPFlow, title: "UpFlow Digital Agency",
        category: "HTML-CSS",
        desc: "A bold and modern agency platform designed to showcase creative services. It utilizes high-contrast UI elements and strategic spacing to highlight business growth and digital solutions.",
        demo: "https://yassmin-reda.github.io/UpFlow-Digital-Agency/",
        Code: "https://github.com/Yassmin-Reda/UpFlow-Digital-Agency.git"
    },
    {
        id: 7,
        img: gym, title: "FitCore Fitness",
        category: "HTML-CSS",
        desc: "A high-energy gym landing page built to drive conversions. It features dynamic typography, hero sections for membership plans, and a structured layout that guides users through workout programs.",
        demo: "#",
        Code: "#"
    },
    {
        id: 8,
        img: Crud, title: "System Manager",
        category: "HTML-CSS-JS",
        desc: "A robust CRUD application designed for efficient data handling. It provides a clean dashboard interface for adding, updating, and managing product records with a focus on data organization.",
        demo: "https://yassmin-reda.github.io/CRUD/",
        Code: "https://github.com/Yassmin-Reda/CRUD.git"
    },
    {
        id: 9,
        img: caffeine, title: "Caffeine Cove",
        category: "HTML-CSS",
        desc: "An inviting digital cafe experience that brings the menu to life. The design focuses on warm visual storytelling, showcasing premium products and shop features with an intuitive browsing flow.",
        demo: "https://yassmin-reda.github.io/Caffeine-Cove/",
        Code: "https://github.com/Yassmin-Reda/Caffeine-Cove.git"
    },
    {
        id: 10,
        img: fylo, title: "Fylo Storage",
        category: "HTML-CSS",
        desc: "A professional file-hosting landing page that builds user confidence. Features a clean, data-centric interface designed to communicate security, ease of access, and collaborative file-sharing capabilities.",
        demo: "#",
        Code: "#"
    },
    {
        id: 11,
        img: Fruit, title: "Daily Fresh Delivery",
        category: "HTML-CSS",
        desc: "A vibrant e-commerce landing page for organic products. The design uses energetic colors and clear categorization to provide an easy and appetizing experience for online grocery shoppers.",
        demo: "https://yassmin-reda.github.io/Food-Menu/",
        Code: "https://github.com/Yassmin-Reda/Food-Menu.git"
    },
    {
        id: 12,
        img: flowerBlog, title: "The Flower Blog",
        category: "Bootstrap",
        desc: "A clean and nature-inspired blog template designed for floral enthusiasts. It features a modern hero section with a soft green gradient, organized navigation, and an elegant layout focused on content readability.",
        demo: "#",
        Code: "#"
    },
    {
        id: 13,
        img: history,
        title: "Copy History Tracker",
        category: "HTML-CSS",
        desc: "A functional utility tool designed to enhance productivity. It offers a structured way to track and manage clipboard history, featuring a simple and effective UI for daily content organization.",
        demo: "https://yassmin-reda.github.io/GDG-TASK2/?authuser=0",
        Code: "https://github.com/Yassmin-Reda/GDG-TASK2.git?authuser=0"
    },
    {
        id: 14,
        img: AlexSmith,
        title: "Alex Smith Portfolio",
        category: "HTML-CSS",
        desc: "A sleek, dark-themed personal brand website for creatives. It emphasizes minimal design principles to ensure the focus remains on the developer's skills, experience, and project gallery.",
        demo: "https://yassmin-reda.github.io/GDG-TASK_5/?authuser=0",
        Code: "https://github.com/Yassmin-Reda/GDG-TASK_5.git?authuser=0"
    },
    {
        id: 15,
        img: DJIMavic,
        title: "DJI Mavic 4 Pro Showcase",
        category: "HTML-CSS",
        desc: "A high-fidelity product showcase page built entirely with pure HTML and CSS. This project demonstrates precision in UI layout, featuring a complex review system with progress bars and a responsive grid for product accessories, all while maintaining a sleek, modern aesthetic without external libraries.",
        demo: "https://yassmin-reda.github.io/GDG-TASK-3/?authuser=0",
        Code: "https://github.com/Yassmin-Reda/GDG-TASK-3.git?authuser=0"
    },

    {
        id: 16,
        img: Omnifood,
        title: "Omnifood — AI-Powered Food Subscription",
        category: "Bootstrap",
        desc: "A premium, high-conversion landing page for a food subscription service. It focuses on a modern aesthetic, structured information hierarchy, and a fully responsive interface tailored for performance.",
        demo: "https://yassmin-reda.github.io/Omni-Food/",
        Code: "https://github.com/Yassmin-Reda/Omni-Food.git"
    },
];



const Project = () => {
    const [filter, setFilter] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(6);
    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter(p => p.category === filter);
    const [displayedProjects, setDisplayedProjects] = useState(projects);
    useEffect(() => {
        const filtered =
            filter === "All"
                ? projects
                : projects.filter(p => p.category === filter);

        setDisplayedProjects(filtered);
        setVisibleProjects(6);
    }, [filter]);

    const toggleProjects = () => {
        if (visibleProjects === 6) {
            setVisibleProjects(displayedProjects.length);
        } else {
            setVisibleProjects(6);
        }
    };

    return (
        <section className="container" id="portfolio">
            <h2 className="sub-title">My <span>Projects</span></h2>

            <div className="filter-buttons">
                {["All", "HTML-CSS", "Bootstrap", "HTML-CSS-JS", "React.js"].map((cat) => (
                    <button key={cat} className={filter === cat ? "active" : ""} onClick={() => setFilter(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="portfolio-grid">
                {displayedProjects.slice(0, visibleProjects).map((project, index) => (<div key={project.id} className="project-card fade-slide">
                    <img src={project.img} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="buttons">
                        <a href={project.demo} className="demo" target="_blank" rel="noreferrer">Demo</a>
                        {project.Code && <a href={project.Code} className="code" target="_blank" rel="noreferrer">Code</a>}
                    </div>
                </div>
                ))}
            </div>

            {displayedProjects.length > 6 && (<div className="see-more">
                <button onClick={toggleProjects}>
                    {visibleProjects === 6 ? "See More" : "See Less"}{" "}
                    {visibleProjects === 6 ? <FiChevronDown className="arrow-icon" /> : <FiChevronUp className="arrow-icon" />}
                </button>
            </div>
            )}
        </section>
    );
};

export default Project;
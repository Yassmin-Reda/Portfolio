// import React from "react";
// import "./Arrow-Top.css";

const Footer = () => {
    const topBtn = document.querySelector(".top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > window.innerHeight * 0.5) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });
    return (
        <footer>
            <a href="#" class="top">
                <i class="bx bx-up-arrow-alt"></i>
            </a>
        </footer>
    );
};

export default Footer;
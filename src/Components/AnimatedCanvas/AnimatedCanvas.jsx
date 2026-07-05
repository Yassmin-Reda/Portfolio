// AnimatedCanvas.jsx
import "./AnimatedCanvas.css";
import React, { useRef, useEffect } from "react";

const AnimatedCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const parent = canvas.parentElement;

        // Colors
        const colors = [" rgba(157, 78, 221, 0.5)", "#9d4edd","#b8b5d3"," #ffffff", "#a0f", "#5500aa"];

        // Mouse position
        const mouse = { x: null, y: null, radius: 120 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Particle class
        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        this.x -= dx / 10; 
                        this.y -= dy / 10;
                    }
                }

                this.draw();
            }
        }

        // Initialize particles
        let particlesArray = [];
        function initParticles() {
            particlesArray = [];
            const num = (canvas.width * canvas.height) / 10000; 
            for (let i = 0; i < num; i++) {
                const size = Math.random() * 3 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                const speedX = (Math.random() - 0.5) * 4;
                const speedY = (Math.random() - 0.5) * 4;

                const color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        }

        // Resize canvas
        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            initParticles();
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Animate
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p) => p.update());
            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
            aria-label="Animated background effect"
        />
    );
};

export default AnimatedCanvas;
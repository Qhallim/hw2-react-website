import { useEffect, useState } from "react";

const slides = [
    import.meta.env.BASE_URL + "assets/img/picture1.jpeg",
    import.meta.env.BASE_URL + "/assets/img/picture2.avif",
    import.meta.env.BASE_URL + "/assets/img/picture3.jpeg",
    import.meta.env.BASE_URL + "/assets/img/picture4.jpg",
    import.meta.env.BASE_URL + "/assets/img/picture5.jpg",
    import.meta.env.BASE_URL + "/assets/img/picture6.jpg",
];

function Slider() {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent((prev) => (prev + 1) % slides.length);
    }

    function prevSlide() {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    function goToSlide(index) {
        setCurrent(index);
    }

    // autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="gallery-slider">

            <button className="slider-btn prev" onClick={prevSlide}>
                ❮
            </button>

            <div className="slider-track">
                {slides.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className={`slide ${index === current ? "active" : ""}`}
                    />
                ))}
            </div>

            <button className="slider-btn next" onClick={nextSlide}>
                ❯
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Slider;
const tabs = document.querySelectorAll(".carousel-tabs button");
const slides = document.querySelectorAll(".slide");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const slideNum = tab.dataset.slide;

        tabs.forEach(t => t.classList.remove("active"));
        slides.forEach(s => s.classList.remove("active"));

        tab.classList.add("active");
        document.querySelector(`.slide[data-slide="${slideNum}"]`).classList.add("active");
    });
});

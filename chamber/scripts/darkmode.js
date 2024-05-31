document.addEventListener('DOMContentLoaded', function() {
    const modeButton = document.querySelector(".switch");
    const main = document.querySelector("main");
    const card = document.querySelector(".card");

    modeButton.addEventListener("change", () => {
        main.classList.toggle('dark');
        card.classList.toggle('dark');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#ff4081", "#7b1fa2", "#ffeb3b", "#4caf50"];
    let i = 0;

    setInterval(() => {
        document.body.style.background = colors[i];
        i = (i + 1) % colors.length;
    },5000);
});
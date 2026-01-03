const line = document.getElementById("line");

let start = null;
const duration = 1200;

function easeInOut(t) {
    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = easeInOut(progress);

    line.style.transform = `scaleX(${eased})`;

    if (progress < 1) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);


const character = document.getElementById("cursor-character");

let mouseX = 0;
let mouseY = 0;
let charX = 0;
let charY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    charX += (mouseX - charX) * 0.1;
    charY += (mouseY - charY) * 0.1;

    character.style.left = charX + "px";
    character.style.top = charY + "px";

    requestAnimationFrame(animate);
}

animate();
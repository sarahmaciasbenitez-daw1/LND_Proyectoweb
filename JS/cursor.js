const character = document.getElementById("cursor-character");
const toggleBtn = document.getElementById("toggle-cursor");
const cursorIcon = document.getElementById("cursor-icon");

let isCursorActive = true; 
let mouseX = 0;
let mouseY = 0;
let charX = 0;
let charY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    /*para que se mueva el cursor si está en on*/
    if (isCursorActive) {
        charX += (mouseX - charX) * 0.1;
        charY += (mouseY - charY) * 0.1;

        character.style.left = charX + "px";
        character.style.top = charY + "px";
    }

    requestAnimationFrame(animate);
}

if (toggleBtn) { 
    toggleBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        
        isCursorActive = !isCursorActive; 
        /*se alterna la visibilidad del cursor*/
        character.classList.toggle("cursor-hidden");

        if (isCursorActive) {
            cursorIcon.classList.replace("fa-eye-slash", "fa-eye");
            cursorIcon.classList.remove("icon-disabled");
        } else {
            cursorIcon.classList.replace("fa-eye", "fa-eye-slash");
            cursorIcon.classList.add("icon-disabled");
        }
    });
}

animate();
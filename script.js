const heading = document.querySelector(".hero h2");

const text = "Future Cyber Security Expert";

let i = 0;

heading.textContent = "";

function type() {
    if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

window.onload = type;


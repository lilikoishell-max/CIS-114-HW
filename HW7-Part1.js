function applyBackgroundColor() {
    const styledArea = document.getElementById("styledArea");
    const pinkRadio = document.getElementById("colorpink");
    const greenRadio = document.getElementById("colorgreen");

    if (pinkRadio.checked) {
        styledArea.style.backgroundColor = "pink";
    } else if (greenRadio.checked) {
        styledArea.style.backgroundColor = "green";
    } else {
        styledArea.style.backgroundColor = "white";
    }
    }

function applyTextStyles() {
    const styledArea = document.getElementById("styledArea");
    const fontunderline = document.getElementById("fontunderline");
    const fontbold = document.getElementById("fontbold");
    const fontitalic = document.getElementById("fontitalic");

    styledArea.style.textDecoration = fontunderline.checked ? "underline" : "none";
    styledArea.style.fontWeight = fontbold.checked ? "bold" : "normal";
    styledArea.style.fontStyle = fontitalic.checked ? "italic" : "normal";
}

function applyFontSize() {
    const styledArea = document.getElementById("styledArea");
    const fontSelect = document.getElementById("fontsizes");
    const selectedSize = fontSelect.value;

    if (selectedSize !== "placeholder") {
        styledArea.style.fontSize = selectedSize;
    }
}

const pinkRadio = document.getElementById("colorpink");
const greenRadio = document.getElementById("colorgreen");

pinkRadio.addEventListener("change", applyBackgroundColor);
greenRadio.addEventListener("change", applyBackgroundColor);

const fontunderline = document.getElementById("fontunderline");
const fontbold = document.getElementById("fontbold");
const fontitalic = document.getElementById("fontitalic");

fontunderline.addEventListener("change", applyTextStyles);
fontbold.addEventListener("change", applyTextStyles);
fontitalic.addEventListener("change", applyTextStyles);

const fontsizes = document.getElementById("fontsizes");
fontsizes.addEventListener("change", applyFontSize);


function clearForm() {
    const styledArea = document.getElementById("styledArea");
    document.getElementById("colorpink").checked = false;
    document.getElementById("colorgreen").checked = false;
    document.getElementById("fontunderline").checked = false;
    document.getElementById("fontbold").checked = false;
    document.getElementById("fontitalic").checked = false;
    styledArea.style.textDecoration = "none";
    styledArea.style.fontWeight = "normal";
    styledArea.style.fontStyle = "normal";
    styledArea.style.fontSize = "1em";
    document.getElementById("fontsizes").value = "placeholder";

    applyBackgroundColor();
}

document.getElementById("clearbutton").addEventListener("click", clearForm);
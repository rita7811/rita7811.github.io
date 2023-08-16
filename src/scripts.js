
let lightMode = localStorage.getItem("lightMode");
const switchElement = document.querySelector(".switch");

const enableLightMode = () => {
    document.body.classList.add("light");
    localStorage.setItem("lightMode", "enable");
}

const disableLightMode = () => {
    document.body.classList.remove("light");
    localStorage.setItem("lightMode", null);
}

if (lightMode == "enable"){
    enableLightMode();
}

switchElement.addEventListener("click", () => {
    lightMode =localStorage.getItem("lightMode");
    if (lightMode != "enable"){
        enableLightMode();
        console.log(lightMode);
    }
    else {
        disableLightMode();
        console.log(lightMode);
    }
})

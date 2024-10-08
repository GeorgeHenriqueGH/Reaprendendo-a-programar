const toggle = window.document.querySelector(".toggle-theme");

var toogleTheme = true;
const darkTheme = () => {
    if(toogleTheme) {
        window.document.documentElement.style.setProperty("--body", "#0E0E10");
        window.document.documentElement.style.setProperty("--header", "#CC241D");
        window.document.documentElement.style.setProperty("--title-color", "#EFEFF1");
        window.document.documentElement.style.setProperty("--bgcolor", "#18181B");
        window.document.documentElement.style.setProperty("--text-color", "#FFF");
        window.document.documentElement.style.setProperty("--btn", "#FE8019");
        window.document.documentElement.style.setProperty("--bgcolor2", "#665C54");
    } else {
        window.document.documentElement.style.setProperty("--body", "#F9F5D8");
        window.document.documentElement.style.setProperty("--header", "#FB4934");
        window.document.documentElement.style.setProperty("--title-color", "#3C3836");
        window.document.documentElement.style.setProperty("--bgcolor", "#FAEFC5");
        window.document.documentElement.style.setProperty("--text-color", "#282828");
        window.document.documentElement.style.setProperty("--btn", "#FE8019");
        window.document.documentElement.style.setProperty("--bgcolor2", "#A89984");
    }
    toogleTheme = !toogleTheme;
}

toggle.addEventListener("click", darkTheme);
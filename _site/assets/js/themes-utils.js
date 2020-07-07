const $body = document.getElementById("theme");
const STORAGE_KEY = "THEME_NAME";
////////////////////////////////////////////////////

function switchTheme(themeName = "dark"){
    $body.className = "theme-" + themeName;
    localStorage.setItem(STORAGE_KEY, themeName);
}

var myTheme = localStorage.getItem(STORAGE_KEY);
switchTheme(myTheme);
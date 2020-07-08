const $body = document.getElementById("theme");
const STORAGE_KEY = "THEME_NAME";
////////////////////////////////////////////////////

function switchTheme(themeName = "dark"){
    $body.className = "theme-" + themeName;
    localStorage.setItem(STORAGE_KEY, themeName);
}

var myTheme = localStorage.getItem(STORAGE_KEY);
switchTheme(myTheme);

//Fonction boutons plus/moins description des vidéos ///
var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");

plus.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none") {
        d1.style.display = "none" ;
        d2.style.display = "block" ;
    } 
})

moins.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none") {
        d2.style.display = "none" ;
        d1.style.display = "block" ;
    } 
})

window.addEventListener("resize", remove_donut);
function remove_donut() {
    if (window.innerWidth <= 900) {
        document.getElementById("donut").style.display = "none";
    }
    else{
        document.getElementById("donut").style.display = "block";
    }
}

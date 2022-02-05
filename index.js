
function menuFunc() {
    var x = document.getElementById("menu");
    var btn =document.getElementById("menubtn")
    if (x.style.top === "0px") {
        // x.style.display = "flex";
        x.style.top = "-280px"
        btn.style.transform = "rotate(0deg)"
    } else {
        // x.style.display = "none";
        x.style.top = "0px"
        btn.style.transform = "rotate(-90deg)"
    }
}
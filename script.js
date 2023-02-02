window.onscroll = function positionScroll(){
    if (window.scrollY > 1){
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector(".input").style.backgroundColor = "#e4e4e4";
    }else{
        document.querySelector("header").style.backgroundColor = "transparent"
    }
}
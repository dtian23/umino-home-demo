function openNav() {
    document.getElementById("side-panel").style.transform = "translateX(0)";
    document.getElementById("nav-list").style.transform = "translateX(30rem)";
}
function closeNav() {
    document.getElementById("side-panel").style.transform = "translateX(-100%)";
    document.getElementById("nav-list").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav").style.transform = "translateX(-100%)";
}

function openSubNav() {
    document.getElementById("sub-nav-shop").style.transform = "translateX(0)";
    document.getElementById("sub-nav").style.transform = "translateX(0)";
}

function goBack() {
    document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav").style.transform = "translateX(-100%)";
}

function setGray() {
    // document.getElementById("overLay").style.opacity = "1";
    document.getElementById("overLay").style.zIndex = "99";
}

function on() {
    document.getElementById("overLay").style.display = "block";
}

function off() {
    document.getElementById("overLay").style.display = "none";
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

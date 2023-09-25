// JavaScript Document
console.log("hi");

var searchIcon = document.querySelector("header>ul li:first-of-type button");
var searchIconImg = document.querySelector("header>ul li:first-of-type button img");
var searchBarButton = document.querySelector("header section:first-of-type button");
var shoppingCartIcon = document.querySelector("header>ul li:nth-of-type(2) button");
var hamburgerMenuIcon = document.querySelector("header>ul li:nth-of-type(3) button");
var hamburgerMenuIconImg = document.querySelector("header>ul li:nth-of-type(3) button img");
var shopCartCross = document.querySelector("header section:nth-of-type(2) div button");
var shopCartShop = document.querySelector("header section:nth-of-type(2)>button");

// SEARCH ICON FUNCTION
searchIcon.addEventListener("click", function () { crossFunction() });
function crossFunction() {
    if (searchIconImg.src.endsWith("si.svg")) {
        searchIconImg.src = "images/cross.svg";
        document.querySelector("header section:first-of-type").classList.add("searchBarOpen");
        document.querySelector("main>div").classList.add("activeBackground");
        document.querySelector("body").classList.add("menuOpenNoScroll");
        document.querySelector("header>nav").classList.remove("menuOpen");
        document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
        hamburgerMenuIconImg.src = "images/hm.svg";
        document.querySelector("header section:first-of-type input").focus();
    }
    else {
        searchIconImg.src = "images/si.svg";
        document.querySelector("header section:first-of-type").classList.remove("searchBarOpen");
        document.querySelector("main>div").classList.remove("activeBackground");
        document.querySelector("body").classList.remove("menuOpenNoScroll");
    };
};

//// search bar search clear
searchBarButton.addEventListener("click", function () { clearInputFunction() });
function clearInputFunction() {
    document.querySelector("header section:first-of-type input").value = "";
};

// SHOPPING CART FUNCTION
//// function open
shoppingCartIcon.addEventListener("click", function () { openShopCart() });
function openShopCart() {
    document.querySelector("header section:first-of-type").classList.remove("searchBarOpen");
    document.querySelector("header>nav").classList.remove("menuOpen");
    document.querySelector("header section:nth-of-type(2)").classList.add("shopCartOpen");
    document.querySelector("main>div").classList.add("activeBackground");
    document.querySelector("body").classList.add("menuOpenNoScroll");
    searchIconImg.src = "images/si.svg";
    hamburgerMenuIconImg.src = "images/hm.svg";
};

//// function close
shopCartCross.addEventListener("click", function () { closeShopCart() });
shopCartShop.addEventListener("click", function () { closeShopCart() });
function closeShopCart() {
    document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
    document.querySelector("main>div").classList.remove("activeBackground");
    document.querySelector("body").classList.remove("menuOpenNoScroll");
};

// HAMBURGER MENU FUNCTION
//// menu open
hamburgerMenuIcon.addEventListener("click", function () { openUpMenu() });
function openUpMenu() {
    if (hamburgerMenuIconImg.src.endsWith("hm.svg")) {
        document.querySelector("header>nav").classList.add("menuOpen");
        hamburgerMenuIconImg.src = "images/cross.svg";
        document.querySelector("main>div").classList.add("activeBackground");
        document.querySelector("body").classList.add("menuOpenNoScroll");
        document.querySelector("header section:first-of-type").classList.remove("searchBarOpen");
        document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
        searchIconImg.src = "images/si.svg";
    }
    else {
        document.querySelector("header>nav").classList.remove("menuOpen");
        hamburgerMenuIconImg.src = "images/hm.svg";
        document.querySelector("main>div").classList.remove("activeBackground");
        document.querySelector("body").classList.remove("menuOpenNoScroll");
    };
};

//// menu list 1 open/close
var shopOpenButton = document.querySelector("header nav ul li:first-of-type button");
shopOpenButton.addEventListener("click", function () { shopOpenFunction() });
function shopOpenFunction() {
    document.querySelector("header nav ul li:first-of-type ul").classList.toggle("listGroupOpen");
    document.querySelector("header nav ul li:nth-of-type(2) ul").classList.remove("listGroupOpen");
    document.querySelector("header nav ul li:first-of-type button img").classList.toggle("openTurnArrow");
};

//// menu list 2 open/close
var shopOpenButton = document.querySelector("header nav ul li:nth-of-type(2) button");
shopOpenButton.addEventListener("click", function () { supportOpenFunction() });
function supportOpenFunction() {
    document.querySelector("header nav ul li:nth-of-type(2) ul").classList.toggle("listGroupOpen");
    document.querySelector("header nav ul li:first-of-type ul").classList.remove("listGroupOpen");
    document.querySelector("header nav ul li:nth-of-type(2) button img").classList.toggle("openTurnArrow");
};

var filterButtonOpen = document.querySelector("body.tees main section:first-of-type button");

if(document.querySelector("body").classList.contains("tees"))
    {

filterButtonOpen.addEventListener("click", function () { filterOpenFunction() });
function filterOpenFunction() {
    document.querySelector("body.tees main section:first-of-type").classList.toggle("filterOpen");
    if (filterButtonOpen.innerHTML === "Open filters"){
        filterButtonOpen.innerHTML = "Close filters";}
        else {
            filterButtonOpen.innerHTML = "Open filters";
        }
};

var sortByButton1 = document.querySelector("body.tees main section:nth-of-type(2) form ul button:first-of-type");
sortByButton1.addEventListener("click", function () { sortByFunction1() });
function sortByFunction1() {
    document.querySelector("body.tees main section:nth-of-type(2) form ul li:first-of-type").classList.toggle("closedLi");
    document.querySelector("body.tees main section:nth-of-type(2) form ul button:first-of-type img").classList.toggle("closedLiArrow");
};

var sortByButton2 = document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(2)");
sortByButton2.addEventListener("click", function () { sortByFunction2() });
function sortByFunction2() {
    document.querySelector("body.tees main section:nth-of-type(2) form ul li:nth-of-type(2)").classList.toggle("closedLi");
    document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(2) img").classList.toggle("closedLiArrow");
};

var sortByButton3 = document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(3)");
sortByButton3.addEventListener("click", function () { sortByFunction3() });
function sortByFunction3() {
    document.querySelector("body.tees main section:nth-of-type(2) form ul li:nth-of-type(3)").classList.toggle("closedLi");
    document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(3) img").classList.toggle("closedLiArrow");
};

var sortByButton4 = document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(4)");
sortByButton4.addEventListener("click", function () { sortByFunction4() });
function sortByFunction4() {
    document.querySelector("body.tees main section:nth-of-type(2) form ul li:nth-of-type(4)").classList.toggle("closedLi");
    document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(4) img").classList.toggle("closedLiArrow");
};

var sortByButton5 = document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(5)");
sortByButton5.addEventListener("click", function () { sortByFunction5() });
function sortByFunction5() {
    document.querySelector("body.tees main section:nth-of-type(2) form ul li:nth-of-type(5)").classList.toggle("closedLi");
    document.querySelector("body.tees main section:nth-of-type(2) form ul button:nth-of-type(5) img").classList.toggle("closedLiArrow");
};

var filterButtonMain = document.querySelector(".tees main section:first-of-type button");
filterButtonMain.addEventListener("click", function () { filterOpenClose() });
function filterOpenClose() {
    document.querySelector("body.tees main section:nth-of-type(2)").classList.toggle("closedFilterMenu");
};
};




if(document.querySelector("body").classList.contains("shirt"))
    {


var imageShirtPreview = document.querySelector(".shirt main section:first-of-type img");
var imageFront = document.querySelector(".shirt main section:first-of-type button:first-of-type");
var imageBack = document.querySelector(".shirt main section:first-of-type button:nth-of-type(2)");

imageFront.addEventListener("click", function () {
    imageShirtPreview.src = "images/shirt.webp";
    imageFront.classList.add("activeShirt");
    imageFront.classList.remove("inactiveShirt");
    imageBack.classList.add("inactiveShirt");
    imageBack.classList.remove("activeShirt");
});

imageBack.addEventListener("click", function () {
    imageShirtPreview.src = "images/shirt6.webp";
    imageBack.classList.add("activeShirt");
    imageBack.classList.remove("inactiveShirt");
    imageFront.classList.add("inactiveShirt");
    imageFront.classList.remove("activeShirt");
});

var infoButton1 = document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>button:first-of-type");
infoButton1.addEventListener("click", function () { infoFunction1() });
function infoFunction1 () {
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>li:first-of-type").classList.toggle("activeInfo");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:first-of-type").classList.toggle("activeInfoText");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:first-of-type img").classList.toggle("activeInfoImg");
}

var infoButton2 = document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>button:nth-of-type(2)");
infoButton2.addEventListener("click", function () { infoFunction2() });
function infoFunction2 () {
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>li:nth-of-type(2)").classList.toggle("activeInfo");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:nth-of-type(2)").classList.toggle("activeInfoText");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:nth-of-type(2) img").classList.toggle("activeInfoImg");
}


};
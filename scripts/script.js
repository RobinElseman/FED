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
filterButtonOpen.addEventListener("click", function () { filterOpenFunction() });
function filterOpenFunction() {
    document.querySelector("body.tees main").classList.add("noScrollFiterOpen");
    document.querySelector("body.tees footer").classList.add("noScrollFilterOpen");
};
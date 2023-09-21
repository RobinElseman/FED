// JavaScript Document
console.log("hi");

var searchIcon = document.querySelector("header>ul li:first-of-type button");
var searchIconImg = document.querySelector("header>ul li:first-of-type button img");
var searchBarButton = document.querySelector("header section:first-of-type button");
var shoppingCartIcon = document.querySelector("header>ul li:nth-of-type(2) button");
var hamburgerMenuIcon = document.querySelector("header>ul li:nth-of-type(3) button");
var shopCartCross = document.querySelector("header section:nth-of-type(2) div button");
var shopCartShop = document.querySelector("header section:nth-of-type(2)>button");

searchIcon.addEventListener("click", function () { crossFunction() });
function crossFunction() {
    document.querySelector("header section:first-of-type").classList.toggle("searchBarOpen");
    if (searchIconImg.src.endsWith("si.svg")) {
        searchIconImg.src = "images/cross.svg";
        document.querySelector("header section:first-of-type input").focus ();
        document.querySelector("main>div").classList.add("activeBackground");
        document.querySelector("body").classList.add("menuOpenNoScroll");    

    } else {
        searchIconImg.src = "images/si.svg";
        document.querySelector("main>div").classList.remove("activeBackground");
        document.querySelector("body").classList.remove("menuOpenNoScroll");    
    };
};

searchBarButton.addEventListener("click", function () { clearInputFunction() });
function clearInputFunction(){
    document.querySelector("header section:first-of-type input").value = "";
};

shoppingCartIcon.addEventListener("click", function () { openShopCart() });
function openShopCart() {
    document.querySelector("header section:nth-of-type(2)").classList.add("shopCartOpen");
    document.querySelector("main>div").classList.add("activeBackground");
    document.querySelector("body").classList.add("menuOpenNoScroll");    
    document.querySelector("header section:first-of-type").classList.remove("searchBarOpen");
};

shopCartCross.addEventListener("click", function () { closeShopCart() });
shopCartShop.addEventListener("click", function () { closeShopCart() });
function closeShopCart() {
    document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
    document.querySelector("main>div").classList.remove("activeBackground");
    document.querySelector("body").classList.remove("menuOpenNoScroll");    
};

var shopOpenButton = document.querySelector("header nav ul li:first-of-type button");
shopOpenButton.addEventListener("click", function () { shopOpenFunction() });
function shopOpenFunction() {
    document.querySelector("header nav ul li:first-of-type ul").classList.toggle("listGroupOpen");
    document.querySelector("header nav ul li:nth-of-type(2) ul").classList.remove("listGroupOpen");
};

var shopOpenButton = document.querySelector("header nav ul li:nth-of-type(2) button");
shopOpenButton.addEventListener("click", function () { supportOpenFunction() });
function supportOpenFunction() {
    document.querySelector("header nav ul li:nth-of-type(2) ul").classList.toggle("listGroupOpen");
    document.querySelector("header nav ul li:first-of-type ul").classList.remove("listGroupOpen");
};

hamburgerMenuIcon.addEventListener("click", function () { openUpMenu() });
function openUpMenu() {
    document.querySelector("header>nav").classList.toggle("menuOpen"); 
};

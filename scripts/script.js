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
var shopCart = document.querySelector("header>ul li:nth-of-type(2) button");

// SEARCH ICON FUNCTION
searchIcon.addEventListener("click", function () { crossFunction() });
function crossFunction() {
    if (searchIconImg.src.endsWith("si.svg")) {
        searchIcon.ariaExpanded = true;
        document.querySelector("header section:first-of-type").ariaHidden = "false";
        searchIconImg.src = "images/cross.svg";
        document.querySelector("header section:first-of-type").classList.add("searchBarOpen");
        document.querySelector("main>div").classList.add("activeBackground");
        document.querySelector("body").classList.add("menuOpenNoScroll");
        document.querySelector("header>nav").classList.remove("menuOpen");
        document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
        hamburgerMenuIconImg.src = "images/hm.svg";
        document.querySelector("header section:first-of-type input").focus();
        hamburgerMenuIcon.ariaExpanded = false;
        shopCart.ariaExpanded = false;
        document.querySelector("header nav ul").ariaHidden = true;
        document.querySelector("header section:nth-of-type(2)").ariaHidden = "true";
    }
    else {
        document.querySelector("header section:first-of-type").ariaHidden = "true";
        searchIconImg.src = "images/si.svg";
        searchIcon.ariaExpanded = false;
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
    document.querySelector("header section:first-of-type").ariaHidden = "true";
    searchIcon.ariaExpanded = false;
    hamburgerMenuIcon.ariaExpanded = false;
    shopCart.ariaExpanded = true;
    document.querySelector("header nav ul").ariaHidden = true;
    document.querySelector("header section:nth-of-type(2)").ariaHidden = "false";
};

//// function close
shopCartCross.addEventListener("click", function () { closeShopCart() });
shopCartShop.addEventListener("click", function () { closeShopCart() });
function closeShopCart() {
    document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
    document.querySelector("main>div").classList.remove("activeBackground");
    document.querySelector("body").classList.remove("menuOpenNoScroll");
    shopCart.ariaExpanded = false;
    document.querySelector("header section:nth-of-type(2)").ariaHidden = "true";
};

// HAMBURGER MENU FUNCTION
//// menu open
hamburgerMenuIcon.addEventListener("click", function () { openUpMenu() });
function openUpMenu() {
    if (hamburgerMenuIconImg.src.endsWith("hm.svg")) {
        document.querySelector("header>nav").classList.add("menuOpen");
        hamburgerMenuIconImg.src = "images/cross.svg";
        document.querySelector("header section:first-of-type").ariaHidden = "true";
        document.querySelector("main>div").classList.add("activeBackground");
        document.querySelector("body").classList.add("menuOpenNoScroll");
        document.querySelector("header section:first-of-type").classList.remove("searchBarOpen");
        document.querySelector("header section:nth-of-type(2)").classList.remove("shopCartOpen");
        searchIconImg.src = "images/si.svg";
        searchIcon.ariaExpanded = false;
        hamburgerMenuIcon.ariaExpanded = true;
        shopCart.ariaExpanded = false;
        document.querySelector("header nav ul").ariaHidden = false;
        document.querySelector("header section:nth-of-type(2)").ariaHidden = "true";
    }
    else {
        document.querySelector("header>nav").classList.remove("menuOpen");
        hamburgerMenuIconImg.src = "images/hm.svg";
        document.querySelector("main>div").classList.remove("activeBackground");
        document.querySelector("body").classList.remove("menuOpenNoScroll");
        document.querySelector("header nav ul").ariaHidden = true;
    };

};



//// menu list 1 open/close
var shopOpenButton1 = document.querySelector("header nav ul > li:first-of-type button");
shopOpenButton1.addEventListener("click", function () { shopOpenFunction() });
function shopOpenFunction() {

    // dicht doen menu
    if (shopOpenButton1.ariaExpanded == "true") {
        // lijst 1
        shopOpenButton1.ariaExpanded = "false";
        document.querySelector("header nav ul li:first-of-type ul").ariaHidden = true;
        document.querySelector("header nav ul li:first-of-type ul").classList.remove("listGroupOpen");
        document.querySelector("header nav ul li:first-of-type button img").classList.add("openTurnArrow")
    }

    // open maken menu
    else {
        // lijst 1
        shopOpenButton1.ariaExpanded = "true";
        document.querySelector("header nav ul li:first-of-type ul").ariaHidden = false;
        document.querySelector("header nav ul li:first-of-type button img").classList.remove("openTurnArrow")
        document.querySelector("header nav ul li:first-of-type ul").classList.add("listGroupOpen");
        // lijst 2
        document.querySelector("header nav ul li:nth-of-type(2) button img").classList.add("openTurnArrow");
        document.querySelector("header nav ul li:nth-of-type(2) ul").classList.remove("listGroupOpen");
        shopOpenButton2.ariaExpanded = "false";
        document.querySelector("header nav ul li:nth-of-type(2) ul").ariaHidden = true;
    }
};



//// menu list 2 open/close
var shopOpenButton2 = document.querySelector("header nav ul li:nth-of-type(2) button");
shopOpenButton2.addEventListener("click", function () { supportOpenFunction() });
function supportOpenFunction() {
    // menu dicht doen
    if (shopOpenButton2.ariaExpanded == "true") {
        // lijst 2
        shopOpenButton2.ariaExpanded = "false";
        document.querySelector("header nav ul li:nth-of-type(2) ul").ariaHidden = true;
        document.querySelector("header nav ul li:nth-of-type(2) ul").classList.remove("listGroupOpen");
        document.querySelector("header nav ul li:nth-of-type(2) button img").classList.add("openTurnArrow");
    }
    else {
        //lijst 2
        shopOpenButton2.ariaExpanded = "true";
        document.querySelector("header nav ul li:nth-of-type(2) ul").ariaHidden = false;
        document.querySelector("header nav ul li:nth-of-type(2) ul").classList.add("listGroupOpen");
        document.querySelector("header nav ul li:nth-of-type(2) button img").classList.remove("openTurnArrow");

        //lijst 1
        document.querySelector("header nav ul li:first-of-type button img").classList.add("openTurnArrow");
        document.querySelector("header nav ul li:first-of-type ul").ariaHidden = true;
        shopOpenButton1.ariaExpanded = "false";
        document.querySelector("header nav ul li:first-of-type ul").classList.remove("listGroupOpen");
    }
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

var infoButton3 = document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>button:nth-of-type(3)");
infoButton3.addEventListener("click", function () { infoFunction3() });
function infoFunction3 () {
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2)>li:nth-of-type(3)").classList.toggle("activeInfo");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:nth-of-type(3)").classList.toggle("activeInfoText");
    document.querySelector(".shirt main section:nth-of-type(2)>ul:nth-of-type(2) button:nth-of-type(3) img").classList.toggle("activeInfoImg");
}

var addToCartButton = document.querySelector(".shirt main section:nth-of-type(3) button:first-of-type");
var cartImg = document.querySelector("header ul:first-of-type li:nth-of-type(2) button img");
addToCartButton.addEventListener("click", function () { addToCartFunction() });
function addToCartFunction () {
    cartImg.classList.add("activeCart");
    
}
cartImg.addEventListener("animationend", function () { cartImg.classList.remove("activeCart") });
};
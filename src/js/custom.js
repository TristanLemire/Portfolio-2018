function barOnMouseOver(bar, h2) {
  h2.addEventListener("mouseover", function() {
    bar.classList.add("is-large");
  });
  h2.addEventListener("mouseout", function() {
    bar.classList.remove("is-large");
  });
}

let topbar = document.getElementById("top__bar");
let h2top = document.getElementById("h2__top");
let rightbar = document.getElementById("right__bar");
let h2right = document.getElementById("h2__right");
let leftbar = document.getElementById("left__bar");
let h2left = document.getElementById("h2__left");
let h1home = document.getElementById("h1home");
let logo = document.getElementById("logo");
let aboutdiv = document.getElementById("aboutdiv");
let cvbar = document.getElementById("cv__bar");
let cv = document.getElementById("cv");
let contactdiv = document.getElementById("contactdiv");
let nightmode = document.getElementById("nightmode");
let logobg = document.getElementById("logo-bg");
let topmenu = document.getElementById("top__menu");
let rightmenu = document.getElementById("right__menu");
let leftmenu = document.getElementById("left__menu");
let reseau = document.getElementById("reseau");
let maincontent = document.getElementById("main__content");
let projetdiv = document.getElementById("projetdiv");
let projet1 = document.getElementById("projet1");
let projet2 = document.getElementById("projet2");
let projet3 = document.getElementById("projet3");
var ladate = new Date();
var time = ladate.getHours();
var gram = document.getElementById("gram");
var easter = document.getElementById("easter");
var blackscreen = document.getElementById("blackscreen");

if (time >= 19 && time <= 7) {
  nightmode.classList.toggle("is-night");
  logobg.classList.toggle("is-night");
  topmenu.classList.toggle("is-night");
  rightmenu.classList.toggle("is-night");
  leftmenu.classList.toggle("is-night");
  reseau.classList.toggle("is-night");
  maincontent.classList.toggle("is-night");
}

projet1.addEventListener("mouseover", function() {
  projet2.classList.add("is-not-blur");
  projet3.classList.add("is-not-blur");
});
projet1.addEventListener("mouseout", function() {
  projet2.classList.remove("is-not-blur");
  projet3.classList.remove("is-not-blur");
});

projet2.addEventListener("mouseover", function() {
  projet1.classList.add("is-not-blur");
  projet3.classList.add("is-not-blur");
});
projet2.addEventListener("mouseout", function() {
  projet1.classList.remove("is-not-blur");
  projet3.classList.remove("is-not-blur");
});

projet3.addEventListener("mouseover", function() {
  projet1.classList.add("is-not-blur");
  projet2.classList.add("is-not-blur");
});
projet3.addEventListener("mouseout", function() {
  projet2.classList.remove("is-not-blur");
  projet1.classList.remove("is-not-blur");
});

nightmode.addEventListener("click", function() {
  blackscreen.classList.toggle("is-moved");
  setTimeout(function() {
    nightmode.classList.toggle("is-night");
    logobg.classList.toggle("is-night");
    topmenu.classList.toggle("is-night");
    rightmenu.classList.toggle("is-night");
    leftmenu.classList.toggle("is-night");
    reseau.classList.toggle("is-night");
    maincontent.classList.toggle("is-night");
  }, 550);
});

h2top.addEventListener("click", function() {
  aboutdiv.classList.remove("is-visible");
  h1home.classList.add("is-hidden");
  contactdiv.classList.remove("is-visible");
  setTimeout(function() {
    projetdiv.classList.add("is-visible");
  }, 800);
});

logo.addEventListener("click", function() {
  aboutdiv.classList.remove("is-visible");
  contactdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  setTimeout(function() {
    h1home.classList.remove("is-hidden");
  }, 800);
});

h2left.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  contactdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  setTimeout(function() {
    aboutdiv.classList.add("is-visible");
  }, 800);
});

h2right.addEventListener("click", function() {
  h1home.classList.add("is-hidden");
  aboutdiv.classList.remove("is-visible");
  projetdiv.classList.remove("is-visible");
  setTimeout(function() {
    contactdiv.classList.add("is-visible");
  }, 800);
});

barOnMouseOver(topbar, h2top);
barOnMouseOver(rightbar, h2right);
barOnMouseOver(leftbar, h2left);
barOnMouseOver(cvbar, cv);

setTimeout(function() {
  easter.classList.add("is-easter");
}, 60000);

easter.addEventListener("click", function(e) {
  e.preventDefault();
  var randNb = Math.floor(Math.random() * (1 + 26));
  var tabcss = [
    "_1977",
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
    "xpro2"
  ];
  gram.className = tabcss[randNb];
});

let date = new Date();
hours = date.getHours();
console.log(hours);
window.onscroll = function () {
  myFunction();
};
setTimeout(() => {
  if (hours >= 0 && hours < 12) {
    console.log("Good morning");
    document.getElementById("hello").innerHTML = "GOOD MORNING...";
  } else if (hours >= 12 && hours < 18) {
    console.log("Good afternoon");
    document.getElementById("hello").innerHTML = "GOOD AFTERNOON...";
  } else if (hours >= 18 && hours < 22) {
    console.log("Good evening");
    document.getElementById("hello").innerHTML = "GOOD EVENING...";
  } else {
    console.log("Good night");
    document.getElementById("hello").innerHTML = "GOOD NIGHT...";
  }
}, 1000);

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-bottom").style.height = "70px";
    document.getElementById("nav-bottom").style.top = "0px";
    document.getElementById("logo").style.width = "75px";
    document.getElementById("small").style.display = "none";
    document.getElementById("nav-text-bottom").style.top = "20px";
    document.getElementById("menu").style.top = "20px";
  } else {
    document.getElementById("nav-bottom").style.height = "100px";
    document.getElementById("nav-bottom").style.top = "43px";
    document.getElementById("logo").style.width = "115px";
    document.getElementById("small").style.display = "flex";
    document.getElementById("nav-text-bottom").style.top = "10px";
    document.getElementById("menu").style.top = "40px";
}
}
function closed() {
  console.log(1);
  document.getElementById("hide").style.animation = "close 1s";
  document.getElementById("hide").style.right = "-300px";
}
function menu() {
  console.log(1);
  document.getElementById("hide").style.animation = "show 1s";
  document.getElementById("hide").style.right = 0;
}

function onclickmenu_1(){
  document.getElementById("main-popup-1").style.opacity = "10";
  document.getElementById("main-popup-1").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_1(){
  document.getElementById("main-popup-1").style.opacity = "-1";
  document.getElementById("main-popup-1").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_2(){
  document.getElementById("main-popup-2").style.opacity = "10";
  document.getElementById("main-popup-2").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_2(){
  document.getElementById("main-popup-2").style.opacity = "-1";
  document.getElementById("main-popup-2").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_3(){
  document.getElementById("main-popup-3").style.opacity = "10";
  document.getElementById("main-popup-3").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_3(){
  document.getElementById("main-popup-3").style.opacity = "-1";
  document.getElementById("main-popup-3").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_4(){
  document.getElementById("main-popup-4").style.opacity = "10";
  document.getElementById("main-popup-4").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_4(){
  document.getElementById("main-popup-4").style.opacity = "-1";
  document.getElementById("main-popup-4").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_5(){
  document.getElementById("main-popup-5").style.opacity = "10";
  document.getElementById("main-popup-5").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_5(){
  document.getElementById("main-popup-5").style.opacity = "-1";
  document.getElementById("main-popup-5").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_6(){
  document.getElementById("main-popup-6").style.opacity = "10";
  document.getElementById("main-popup-6").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_6(){
  document.getElementById("main-popup-6").style.opacity = "-1";
  document.getElementById("main-popup-6").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
function onclickmenu_7(){
  document.getElementById("main-popup-7").style.opacity = "10";
  document.getElementById("main-popup-7").style.zIndex = "20";
  document.getElementById("bodys").style.overflowY = "hidden";
  console.log(1);
}

function outclickmenu_7(){
  document.getElementById("main-popup-7").style.opacity = "-1";
  document.getElementById("main-popup-7").style.zIndex = "-20";
  document.getElementById("bodys").style.overflowY = "visible";
}
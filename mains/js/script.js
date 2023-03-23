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

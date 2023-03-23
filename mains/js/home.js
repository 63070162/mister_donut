
function line_11(id) {
  document.getElementById(id).style.transition = "0.2s";
  document.getElementById(id).style.width = "85px";
  document.getElementById(id).style.left = "90px";
}

function line_12(id) {
  document.getElementById(id).style.transition = "0.2s";
  document.getElementById(id).style.width = "60px";
  document.getElementById(id).style.left = "100px";
}

//----------------------------------------------------
//----------------------------------------------------

function mouseOver(id) {
document.getElementById(id).style.opacity = "1";
document.getElementById(id).style.transition = "0.3s";
}

function mouseOut(id) {
document.getElementById(id).style.opacity = "0";
}

// ------------------------------------------------------------------------------------
// ----------------popup--------------------------------------------------------------------

function onclickmenu(main_popup, bodys){
  document.getElementById(main_popup).style.opacity = "10";
  document.getElementById(main_popup).style.zIndex = "20";
  document.getElementById(bodys).style.overflowY = "hidden";
}

function outclickmenu(main_popup, bodys){
  document.getElementById(main_popup).style.opacity = "-1";
  document.getElementById(main_popup).style.zIndex = "-20";
  document.getElementById(bodys).style.overflowY = "visible";
}
// -----------------------------------------------------------------------

function onclickmenu_1(main_popup, bodys){
  document.getElementById(main_popup).style.opacity = "10";
  document.getElementById(main_popup).style.zIndex = "20";
  document.getElementById(bodys).style.overflowY = "hidden";
}

function outclickmenu_1(main_popup, bodys){
  document.getElementById(main_popup).style.opacity = "-1";
  document.getElementById(main_popup).style.zIndex = "-20";
  document.getElementById(bodys).style.overflowY = "visible";
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


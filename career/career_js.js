var check = 0
var check2 = 0
function change() {
    check++;
    if (check % 2 == 0) {
        document.getElementById("icon-drop-top").src = "https://cdn-icons-png.flaticon.com/512/2089/2089733.png";
    }
    else {
        document.getElementById("icon-drop-top").src = "https://cdn-icons-png.flaticon.com/512/1828/1828743.png";
    }
}
function change2() {
    check2++;
    if (check2 % 2 == 0) {
        document.getElementById("icon-drop-down").src = "https://cdn-icons-png.flaticon.com/512/1828/1828743.png";
    }
    else {
        document.getElementById("icon-drop-down").src = "https://cdn-icons-png.flaticon.com/512/2089/2089733.png";
    }
}
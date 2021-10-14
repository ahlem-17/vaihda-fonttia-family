var clickCount = 0;
var totalClickCount = 0;
var showClicks = document.getElementById("showClicks");

function changeStyle() {
    var list = document.getElementById("list");
    var showClicks = document.getElementById("showClicks");
    var para = document.getElementById("para");

    clickCount++;
    totalClickCount++;
    showClicks.innerHTML = totalClickCount;

    if (clickCount == 1) {
        list.style.fontFamily = "Roboto";
        para.textContent = "Käytössä on nyt fontti Roboto";

    } else if (clickCount == 2) {
        list.style.fontFamily = "Mansalva";
        para.textContent = "Käytössä on nyt fontti Mansalva";

    } else if (clickCount == 3) {
        list.style.fontFamily = "Grenze";
        para.textContent = "Käytössä on nyt fontti Grenze";

    } else if (clickCount == 4) {
        list.style.fontFamily = "Turret Road";
        para.textContent = "Käytössä on nyt fontti Turret Road";

    } else {
        list.style.fontFamily = "Courier New";
        para.textContent = "Käytössä on nyt fontti Courier new";
    }

}
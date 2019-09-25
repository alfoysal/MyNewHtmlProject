/// <reference path="../Scripts/jquery-3.3.1.min.js" />
var counterList = new Array(4)
counterList["empty"] = ["Select a Counter"];
counterList["Dhaka"] = ["Badda", "Shabag", "Gabtoli"];
counterList["Chattogram"] = ["Alongkar", "GEC", "AK khan"];
counterList["Cox's Bazar"] = ["Kolatoli", "Chokoria", "Holiday Mor"];

function counterChange(selectObj) {
    var idx = selectObj.selectedIndex;
    var which = selectObj.options[idx].value;
    dList = counterList[which];
    var dSelect = document.getElementById("counter");
    var len = dSelect.options.length;
    while (dSelect.options.length > 0) {
        dSelect.remove(0);
    }
    var newOption;
    for (var i = 0; i < dList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = dList[i];
        newOption.text = dList[i];
        try {
            dSelect.add(newOption);
        }
        catch (e) {
            dSelect.appendChild(newOption);
        }
    }
}


var toList = new Array(4)
toList["empty"] = ["Select Destination"];
toList["Dhaka"] = ["Chattogram", "Cox's Bazar"];
toList["Chattogram"] = ["Dhaka", "Cox's Bazar"];
toList["Cox's Bazar"] = ["Dhaka", "Chattogram"];



function destinationChange(selectObj) {
    var idy = selectObj.selectedIndex;
    var which = selectObj.options[idy].value;
    tList = toList[which];
    var tSelect = document.getElementById("destination");
    var len = tSelect.options.length;
    while (tSelect.options.length > 0) {
        tSelect.remove(0);
    }
    var newOption;
    for (var i = 0; i < tList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = tList[i];
        newOption.text = tList[i];
        try {
            tSelect.add(newOption);
        }
        catch (e) {
            tSelect.appendChild(newOption);
        }
    }
}
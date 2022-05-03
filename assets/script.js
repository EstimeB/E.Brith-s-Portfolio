const menuBar = document.querySelector('.mbarCon');


function myFunction(x) {
    x.classList.toggle("change");
    if (menuBar.style.display == "block"){ // if menuBar is hidden, display it 
        menuBar.style.display = "none";
    }
    else{ // if menuBar is displayed, hidde it
        menuBar.style.display = "block";
    }
}

// Skills section's dropdown button
const skillDrpDwn = document.querySelector('.dropdown-content')
const sDrpDwn = document.querySelector('.dropdown-cont')

function feFunction (z) {
    z.classList.toggle("change");
    if (skillDrpDwn.style.display == "block") { // if menuBar is hidden, display it 
        skillDrpDwn.style.display = "none";
    }
    else{ // if menuBar is displayed, hidde it
        skillDrpDwn.style.display = "block";
    }
}

function beFunction (y) {
    y.classList.toggle("change");
    if (sDrpDwn.style.display == "block"){ // if menuBar is hidden, display it 
        sDrpDwn.style.display = "none";
    }
    else{ // if menuBar is displayed, hidde it
        sDrpDwn.style.display = "block";
    }
}
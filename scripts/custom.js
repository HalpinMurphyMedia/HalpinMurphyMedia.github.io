// JavaScript Document for Footie Stats

//Show and Hide for shots
function hideShot() {
    document.getElementById("mshots").style.visibility = "hidden"; 
}

function showShot() {
    document.getElementById("mshots").style.visibility = "visible"; 
}

//Show and Hide for Passing
function hidePassing() {
    document.getElementById("mpassing").style.visibility = "hidden"; 
}

function showPassing() {
    document.getElementById("mpassing").style.visibility = "visible"; 
}

//Show and Hide for Tackling
function hideTackling() {
    document.getElementById("mtackles").style.visibility = "hidden"; 
}

function showTackling() {
    document.getElementById("mtackles").style.visibility = "visible"; 
}

//Show and Hide for Info
function hideInfo() {
    document.getElementById("minfo").style.visibility = "hidden"; 
}

function showInfo() {
    document.getElementById("minfo").style.visibility = "visible"; 
}


// _________________________________________________________________________________________________________________________________________________
// Page Reloading

// Calls a function to reload the page every 60 seconds based on a timer and clears all existing data on the page. This reloads the entire page
// This will only be enabled on pages that contain data that may change.
 $(document).ready(function(){
 setInterval(function(){cache_clear()},60000);
 });
 function cache_clear()
{
 window.location.reload(true);
}
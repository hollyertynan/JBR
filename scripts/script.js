/*
    
File: style.js
Authors: Tynan Hollyer, Damian Oakes
tynan_hollyer@student.uml.edu

Description: JBR JS file. 

Credit:
Proper Documentation copied from
HW 1, Part 2, Author: Wenjin Zhou

*/

// global user value
let user = "";

// when signed in, this is performed
function onSignIn(googleUser) {
    document.getElementById("yourName").innerHTML = "Welcome, "
    document.getElementById("googleSigningForRemoval").innerHTML = "<h1>" + googleUser.getBasicProfile().getName() + "</h1>";
    document.getElementById("googleProfilePicture").innerHTML = "<h1><img src='" + googleUser.getBasicProfile().getImageUrl() + "' alt='Profile Picture'></h1>";

    // set global user value
    user = googleUser.getBasicProfile().getName();
}

// get/set date and time
const date = new Date().toLocaleString();
document.getElementById("time").innerHTML = date;

// function if ticket is clicked

function onTicket() {
    document.getElementById("myForm").innerHTML = "";
    document.getElementById("myForm").innerHTML = "<button id=\"ticket\" type=\"button\" class=\"btn btn-info text-light col-3\" onclick=\"onTicket()\"><h4>Ticket</h4></button>";
}

// function if phone is clicked
function onPhone() {
    document.getElementById("myForm").innerHTML = "";
    document.getElementById("myForm").innerHTML = ":(";
}

// function if maintenance is clicked
function onMaintenance() {
    document.getElementById("myForm").innerHTML = "";
    document.getElementById("myForm").innerHTML = ":O";
}
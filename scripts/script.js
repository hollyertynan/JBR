/*
    
File: style.js
Authors: Tynan Hollyer, Damian Oakes
tynan_hollyer@student.uml.edu

Description: JBR JS file. 

Credit:
Proper Documentation copied from
HW 1, Part 2, Author: Wenjin Zhou

*/

function onSignIn(googleUser) {
    document.getElementById("yourName").innerHTML = "Welcome, "
    document.getElementById("googleSigningForRemoval").innerHTML = googleUser.getBasicProfile().getName();
    console.log(document.getElementById("googleSigningForRemoval").innerHTML = googleUser.getBasicProfile().getName());
}

function renderButton() {
    gapi.signin2.render('g-signin2', {
      'onsuccess': onSuccess,
    });
}


// GET/SET DATE + TME
const date = new Date();
document.getElementById("time").innerHTML = date.toLocaleString();
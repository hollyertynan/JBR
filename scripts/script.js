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
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function onSuccess(googleUser) {
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
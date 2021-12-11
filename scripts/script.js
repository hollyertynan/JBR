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

    var store_info = "<div id=\"taskInfo\" class=\"container-fluid bg-dark text-center\"><div class=\"row\"><div class=\"col-4\"><select name=\"stores\" id=\"stores\" class=\"btn btn-secondary dropdown-toggle InitialButtons\" style=\"width: 100%\"><option value=\"001\"> 001 - Fitchburg, MA </option><option value=\"003\"> 003 - Meredith, NH </option><option value=\"004\"> 004 - Gardner, MA </option><option value=\"006\"> 006 - Moultonboro, NH </option><option value=\"007\"> 007 - Tewksbury, MA </option><option value=\"008\"> 008 - Clinton, MA </option><option value=\"010\"> 010 - Peru, NY </option></select></div><div class=\"col-4\"><input id=\"ticketinfo\" type=\"text\" placeholder=\"Please input ticket number, then click the check.\" maxlength=\"5\" style=\"width: 100%; text-align: center\" class=\"InitialButtons\" onchange=\"taskDepartmentVisibility()\"></div><div class=\"col-4\"><button type=\"button\" id=\"onEnterTicket\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onTicketAccept()\"><i class=\"bi bi-check2-circle\" style=\"font-size: 2.5rem;\"></i><h4>Accept</h4></button></div><div class=\"col-3\"></div></div></div>";
    document.getElementById("myForm").innerHTML += store_info;
    document.getElementById("ticket").disabled = true;
    document.getElementById("ticket").classList.remove("btn-info");
    document.getElementById("ticket").classList.add("btn-success");
    document.getElementById("phone").disabled = true;
    document.getElementById("maintenance").disabled = true;
}

// function if accept in ticket is clicked
function onTicketAccept() {
    document.getElementById("myForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pt-5 pb-5\"><div class=\"row\"><div class=\"col-4\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\"><h4>Product Team</h4></button></div><div class=\"col-4\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onIT()\"><i class=\"bi bi-display\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-4\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\"><i class=\"bi bi-paperclip\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div></div></div>";

    document.getElementById("onEnterTicket").disabled = true;
}

// function if IT in ticket is clicked
function onIT() {
    document.getElementById("myForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pt-5 pb-5\"><div class=\"row\"><div class=\"col-4\"><button id=\"register\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\"><h4>Register</h4></button></div><div class=\"col-4\"><button id=\"paymentterminal\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\"><h4>Payment Terminal</h4></button></div><div class=\"col-4\"><button id=\"backoffice\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\"><h4>Back Office</h4></button></div></div></div>";

    document.getElementById("it").disabled = true;
}

// function if phone is clicked
function onPhone() {
    document.getElementById("myForm").innerHTML = "";
    document.getElementById("myForm").innerHTML = "<button id=\"ticket\" type=\"button\" class=\"btn btn-info text-light col-3\" onclick=\"onTicket()\"><h4>:(</h4></button>";
}

// function if maintenance is clicked
function onMaintenance() {
    document.getElementById("myForm").innerHTML = "";
    document.getElementById("myForm").innerHTML = "<button id=\"ticket\" type=\"button\" class=\"btn btn-info text-light col-3\" onclick=\"onTicket()\"><h4>:O</h4></button>";
}

function SubForm() {
    $.ajax({
        url: "https://api.apispreadsheets.com/data/BFvZ9WAvzZdmU9FB/",
        type: "post",
        data:$("#submitMyForm").serializeArray(),
        success: function() {
            alert("Form Data Submitted :)");
        },
        error: function() {
            alert("There was an error :(");
        }
    });
}

//
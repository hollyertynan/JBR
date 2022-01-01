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
let chosenFirstButton = "";
let chosenDepartment = "Maintenance";

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
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-4\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-4\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-4\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div></div></div>";

    document.getElementById("phone").classList.remove("btn-success");
    document.getElementById("maintenance").classList.remove("btn-success");
    document.getElementById("ticket").classList.remove("btn-info");

    document.getElementById("phone").classList.add("btn-info");
    document.getElementById("maintenance").classList.add("btn-info");
    document.getElementById("ticket").classList.add("btn-success");
    /*
    document.getElementById("ticket").disabled = true;
    document.getElementById("ticket").classList.remove("btn-info");
    document.getElementById("ticket").classList.add("btn-success");
    document.getElementById("phone").disabled = true;
    document.getElementById("maintenance").disabled = true;
    */
    chosenFirstButton = "Ticket";
}

// function if phone is clicked
function onPhone() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-4\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-4\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-4\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light col-3 InitialButtons\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\" style=\"font-size: 2.5rem;\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div></div></div>";

    document.getElementById("phone").classList.remove("btn-info");
    document.getElementById("maintenance").classList.remove("btn-success");
    document.getElementById("ticket").classList.remove("btn-success");

    document.getElementById("phone").classList.add("btn-success");
    document.getElementById("maintenance").classList.add("btn-info");
    document.getElementById("ticket").classList.add("btn-info");
    /*
    document.getElementById("phone").disabled = true;
    document.getElementById("phone").classList.remove("btn-info");
    document.getElementById("phone").classList.add("btn-success");
    document.getElementById("ticket").disabled = true;
    document.getElementById("maintenance").disabled = true;
    */
    chosenFirstButton = "Phone";
}

// function if maintenance is clicked
function onMaintenance() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-3\"></div><div class=\"col-6\"><div id=\"taskInfo\" class=\"bg-dark text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-dark text-light text-center border-info\" style=\"width: 100%\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-3\"></div></div></div>";

    document.getElementById("phone").classList.remove("btn-success");
    document.getElementById("maintenance").classList.remove("btn-info");
    document.getElementById("ticket").classList.remove("btn-success");

    document.getElementById("phone").classList.add("btn-info");
    document.getElementById("maintenance").classList.add("btn-success");
    document.getElementById("ticket").classList.add("btn-info");
    /*
    document.getElementById("maintenance").disabled = true;
    document.getElementById("maintenance").classList.remove("btn-info");
    document.getElementById("maintenance").classList.add("btn-success");
    document.getElementById("phone").disabled = true;
    document.getElementById("ticket").disabled = true;
    */
    chosenFirstButton = "Maintenance";
}

// function if IT in ticket is clicked
function onIT() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-3\"></div><div class=\"col-6\"><div id=\"taskInfo\" class=\"bg-dark text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-dark text-light text-center border-info\" style=\"width: 100%\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-3\"></div></div></div>";

    document.getElementById("it").classList.remove("btn-info");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-success");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-info");

    /*
    document.getElementById("it").disabled = true;
    document.getElementById("it").classList.remove("btn-info");
    document.getElementById("it").classList.add("btn-success");
    document.getElementById("product").disabled = true;
    document.getElementById("accounting").disabled = true;
    */
    chosenDepartment = "IT";
}

function onProduct() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-3\"></div><div class=\"col-6\"><div id=\"taskInfo\" class=\"bg-dark text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-dark text-light text-center border-info\" style=\"width: 100%\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-3\"></div></div></div>";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-info");
    document.getElementById("accounting").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-success");
    document.getElementById("accounting").classList.add("btn-info");
    /*
    document.getElementById("product").disabled = true;
    document.getElementById("product").classList.remove("btn-info");
    document.getElementById("product").classList.add("btn-success");
    document.getElementById("it").disabled = true;
    document.getElementById("accounting").disabled = true;
    */
    chosenDepartment = "Product";
}

function onAccounting() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-3\"></div><div class=\"col-6\"><div id=\"taskInfo\" class=\"bg-dark text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-dark text-light text-center border-info\" style=\"width: 100%\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-3\"></div></div></div>";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-info");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-success");
    /*
    document.getElementById("accounting").disabled = true;
    document.getElementById("accounting").classList.remove("btn-info");
    document.getElementById("accounting").classList.add("btn-success");
    document.getElementById("product").disabled = true;
    document.getElementById("it").disabled = true;
    */
    chosenDepartment = "Accounting";
}

function ticketValidation() {
	if (document.getElementById("ticketinfo").value == "" || document.getElementById("stores").value == 000) {
		alert("Please fill out the ticket number and the store number.");
	} else {
		SubForm();
	}
}

function SubForm() {
    document.forms['submitMyForm'].elements['Submitted'].value = date;
    document.forms['submitMyForm'].elements['Person'].value = user;
    document.forms['submitMyForm'].elements['T/P/M'].value = chosenFirstButton;
    document.forms['submitMyForm'].elements['Ticket# / Caller'].value = document.getElementById("ticketinfo").value;
    document.forms['submitMyForm'].elements['Store'].value = document.getElementById("stores").value;
    document.forms['submitMyForm'].elements['Department'].value = chosenDepartment;

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
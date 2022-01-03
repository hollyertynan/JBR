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

// only accept numbers while still using text option to limit max amount of characters
// https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
/* COMMENTED OUT, MAY NEED FOR FUTURE USE, WILL DELETE IF NOT USED
function numberOnly(id) {
    // Get element by id which passed as parameter within HTML element event
    var element = document.getElementById(id);
    // This removes any other character but numbers as entered by user
    element.value = element.value.replace(/[^0-9]/gi, "");
}
*/

// function if ticket is clicked
function onTicket() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-2\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-2\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div><div class=\"col-2\"><button id=\"customer\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onCustomer(); return false;\"><i class=\"bi bi-file-earmark-person\"></i><h4 class=\"d-none d-md-block\">Customer Accounts</h4></button></div><div class=\"col-2\"><button id=\"operations\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onOperations(); return false;\"><i class=\"bi bi-tools\"></i><h4 class=\"d-none d-md-block\">Operations</h4></button></div><div class=\"col-2\"><button id=\"marketing\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onMarketing(); return false;\"><i class=\"bi bi-wallet2\"></i><h4 class=\"d-none d-md-block\">Marketing / HR</h4></button></div></div></div>";

    document.getElementById("phone").classList.remove("btn-success");
    document.getElementById("maintenance").classList.remove("btn-success");
    document.getElementById("ticket").classList.remove("btn-info");

    document.getElementById("phone").classList.add("btn-info");
    document.getElementById("maintenance").classList.add("btn-info");
    document.getElementById("ticket").classList.add("btn-success");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Ticket";
}

// function if phone is clicked
function onPhone() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-2\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-2\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div><div class=\"col-2\"><button id=\"customer\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onCustomer(); return false;\"><i class=\"bi bi-file-earmark-person\"></i><h4 class=\"d-none d-md-block\">Customer Accounts</h4></button></div><div class=\"col-2\"><button id=\"operations\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onOperations(); return false;\"><i class=\"bi bi-tools\"></i><h4 class=\"d-none d-md-block\">Operations</h4></button></div><div class=\"col-2\"><button id=\"marketing\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onMarketing(); return false;\"><i class=\"bi bi-wallet2\"></i><h4 class=\"d-none d-md-block\">Marketing / HR</h4></button></div></div></div>";

    document.getElementById("phone").classList.remove("btn-info");
    document.getElementById("maintenance").classList.remove("btn-success");
    document.getElementById("ticket").classList.remove("btn-success");

    document.getElementById("phone").classList.add("btn-success");
    document.getElementById("maintenance").classList.add("btn-info");
    document.getElementById("ticket").classList.add("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
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

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Maintenance";
}

// function if IT in ticket is clicked
function onIT() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-3\"></div><div class=\"col-6\"><div id=\"taskInfo\" class=\"bg-dark text-center\"><select name=\"itDropdown\" id=\"itDropdown\" onchange=\"onEvent(event);\" class=\"form-select form-select-lg InitialButtons bg-dark text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"1\">Register</option><option value=\"2\">Payment Terminal</option><option value=\"3\">Back Office (Mi9)</option><option value=\"4\">Email Server / OFFICE-PC</option><option value=\"5\">Printers</option><option value=\"6\">Kiosk / AUBKIOSK</option><option value=\"7\">Chromebook</option><option value=\"8\">iPad</option><option value=\"9\">Paint Computer</option><option value=\"10\">Inventory Scanner</option><option value=\"11\">Reports</option><option value=\"12\">Online Orders</option><option value=\"13\">IT Maintenance</option><option value=\"14\">Request for New Phone Line</option><option value=\"15\">VoIP / Phone Issues</option><option value=\"16\">Security System</option><option value=\"17\">WiFi Issues</option><option value=\"18\">V9 Issues</option><option value=\"19\">Other</option></select></div></div><div class=\"col-3\"></div></div></div>";

    document.getElementById("it").classList.remove("btn-info");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-success");
    document.getElementById("customer").classList.remove("btn-success");
    document.getElementById("operations").classList.remove("btn-success");
    document.getElementById("marketing").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-success");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-info");
    document.getElementById("customer").classList.add("btn-info");
    document.getElementById("operations").classList.add("btn-info");
    document.getElementById("marketing").classList.add("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "IT";
}

function onProduct() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-info");
    document.getElementById("accounting").classList.remove("btn-success");
    document.getElementById("customer").classList.remove("btn-success");
    document.getElementById("operations").classList.remove("btn-success");
    document.getElementById("marketing").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-success");
    document.getElementById("accounting").classList.add("btn-info");
    document.getElementById("customer").classList.add("btn-info");
    document.getElementById("operations").classList.add("btn-info");
    document.getElementById("marketing").classList.add("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Product";
}

function onAccounting() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-info");
    document.getElementById("customer").classList.remove("btn-success");
    document.getElementById("operations").classList.remove("btn-success");
    document.getElementById("marketing").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-success");
    document.getElementById("customer").classList.add("btn-info");
    document.getElementById("operations").classList.add("btn-info");
    document.getElementById("marketing").classList.add("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Accounting";
}

function onCustomer() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-success");
    document.getElementById("customer").classList.remove("btn-info");
    document.getElementById("operations").classList.remove("btn-success");
    document.getElementById("marketing").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-info");
    document.getElementById("customer").classList.add("btn-success");
    document.getElementById("operations").classList.add("btn-info");
    document.getElementById("marketing").classList.add("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Customer";
}

function onOperations() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-success");
    document.getElementById("customer").classList.remove("btn-success");
    document.getElementById("operations").classList.remove("btn-info");
    document.getElementById("marketing").classList.remove("btn-success");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-info");
    document.getElementById("customer").classList.add("btn-info");
    document.getElementById("operations").classList.add("btn-success");
    document.getElementById("marketing").classList.add("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Operations";
}

function onMarketing() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "";

    document.getElementById("it").classList.remove("btn-success");
    document.getElementById("product").classList.remove("btn-success");
    document.getElementById("accounting").classList.remove("btn-success");
    document.getElementById("customer").classList.remove("btn-success");
    document.getElementById("operations").classList.remove("btn-success");
    document.getElementById("marketing").classList.remove("btn-info");

    document.getElementById("it").classList.add("btn-info");
    document.getElementById("product").classList.add("btn-info");
    document.getElementById("accounting").classList.add("btn-info");
    document.getElementById("customer").classList.add("btn-info");
    document.getElementById("operations").classList.add("btn-info");
    document.getElementById("marketing").classList.add("btn-success");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Marketing / HR";
}

function onEvent(event) {
    switch(event.target.value) {
        case "1":
            onRegister();
            break;
        default: 
            blank();
            break;
    }

    /*
    if (event.target.value == "1") {
        onRegister();
    } else {
        blank();
    }
    */
}

function onRegister() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-4\"><button id=\"hardware\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onHardware()\"><h4>Hardware</h4></button></div><div class=\"col-4\"><button id=\"software\" type=\"button\" class=\"btn btn-info text-light InitialButtons\" onclick=\"onSoftware()\"><h4 >Software</h4></button></div><div class=\"col-2\"></div></div></div>";

    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

function blank() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
}

function onHardware() {
    document.getElementById("software").classList.remove("btn-success");
    document.getElementById("hardware").classList.remove("btn-info");

    document.getElementById("software").classList.add("btn-info");
    document.getElementById("hardware").classList.add("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onSoftware() {
    document.getElementById("software").classList.remove("btn-info");
    document.getElementById("hardware").classList.remove("btn-success");

    document.getElementById("software").classList.add("btn-success");
    document.getElementById("hardware").classList.add("btn-info");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function ticketValidation() {
	if (document.getElementById("ticketinfo").value == "" || document.getElementById("typeStore").value == 000) {
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
            location.reload();
        },
        error: function() {
            alert("There was an error :(");
        }
    });
}
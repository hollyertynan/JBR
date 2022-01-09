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
let user = "Joe";
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

var firstTask = secondTask = thirdTask = fourthTask = fifthTask = comments = "-----";

function changeColor() {
    if ($("body").hasClass("bg-dark")) {
        $(".bg-secondary").removeClass("bg-secondary").addClass("bg-light");
        $(".bg-dark").removeClass("bg-dark").addClass("bg-secondary");
    } else if ($("body").hasClass("bg-secondary")) {
        $(".bg-secondary").removeClass("bg-secondary").addClass("bg-dark");
        $(".bg-light").removeClass("bg-light").addClass("bg-secondary");
    }
}

// function if ticket is clicked
function onTicket() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-2\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-2\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div><div class=\"col-2\"><button id=\"customer\" type=\"button\" class=\"btn btn-danger text-light InitialButtons h-100\" onclick=\"onCustomer(); return false;\"><i class=\"bi bi-file-earmark-person\"></i><h4 class=\"d-none d-md-block\">Customer Accounts</h4></button></div><div class=\"col-2\"><button id=\"operations\" type=\"button\" class=\"btn btn-danger text-light InitialButtons h-100\" onclick=\"onOperations(); return false;\"><i class=\"bi bi-tools\"></i><h4 class=\"d-none d-md-block\">Operations</h4></button></div><div class=\"col-2\"><button id=\"marketing\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onMarketing(); return false;\"><i class=\"bi bi-wallet2\"></i><h4 class=\"d-none d-md-block\">Marketing / HR</h4></button></div></div></div>";

    $("#ticket").removeClass("btn-info").addClass("btn-success");
    $("#phone").removeClass("btn-success").addClass("btn-info");
    $("#maintenance").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Ticket";
}

// function if phone is clicked
function onPhone() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-2\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-2\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div><div class=\"col-2\"><button id=\"customer\" type=\"button\" class=\"btn btn-danger text-light InitialButtons h-100\" onclick=\"onCustomer(); return false;\"><i class=\"bi bi-file-earmark-person\"></i><h4 class=\"d-none d-md-block\">Customer Accounts</h4></button></div><div class=\"col-2\"><button id=\"operations\" type=\"button\" class=\"btn btn-danger text-light InitialButtons h-100\" onclick=\"onOperations(); return false;\"><i class=\"bi bi-tools\"></i><h4 class=\"d-none d-md-block\">Operations</h4></button></div><div class=\"col-2\"><button id=\"marketing\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onMarketing(); return false;\"><i class=\"bi bi-wallet2\"></i><h4 class=\"d-none d-md-block\">Marketing / HR</h4></button></div></div></div>";

    $("#phone").removeClass("btn-info").addClass("btn-success");
    $("#maintenance").removeClass("btn-success").addClass("btn-info");
    $("#ticket").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Phone";
}

// function if maintenance is clicked
function onMaintenance() {
    document.getElementById("firstForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("firstForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";

    $("#maintenance").removeClass("btn-info").addClass("btn-success");
    $("#phone").removeClass("btn-success").addClass("btn-info");
    $("#ticket").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Maintenance";
}

// function if IT in ticket is clicked
function onIT() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"itDropdown\" id=\"itDropdown\" onchange=\"onEventIT(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"1\">Register</option><option value=\"2\">Payment Terminal</option><option value=\"3\">Back Office (Mi9)</option><option value=\"4\">Email Server / OFFICE-PC</option><option value=\"5\">Printers</option><option value=\"6\">Kiosk / AUBKIOSK</option><option value=\"7\">Chromebook</option><option value=\"8\">iPad</option><option value=\"9\">Paint Computer</option><option value=\"10\">Reports</option><option value=\"11\">Online Orders</option><option value=\"12\">IT Maintenance</option><option value=\"13\">Request for New Phone Line</option><option value=\"14\">VoIP / Phone Issues</option><option value=\"15\">Security System</option><option value=\"16\">WiFi Issues</option><option value=\"17\">V9 Issues</option><option value=\"18\">ELVIS</option><option value=\"19\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";

    $("#it").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    $("#itDropdown").removeClass("bg-success border-success");
    $("#itDropdown").addClass("bg-info border-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "IT";
}

function onProduct() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"productDropdown\" id=\"productDropdown\" onchange=\"onEventProduct(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Benjamin Moore Web Sales Order</option><option value=\"3\">Change Product Min and / or Max</option><option value=\"4\">PO/EDI Issues</option><option value=\"5\">Paint Over Max Order</option><option value=\"6\">Product Needs a SKU</option><option value=\"7\">UPC Not On File</option><option value=\"8\">Need a Vendor Website Password Reset</option><option value=\"9\">Retail Price Issues (Not Markdown)</option><option value=\"10\">Cost Issues</option><option value=\"11\">Smart Cycle Count Issues</option><option value=\"12\">Special Order Issues</option><option value=\"13\">Store Specific Clearance Pricing</option><option value=\"14\">Store Specific Temporary Pricing</option><option value=\"15\">Customer Pricing Quote</option><option value=\"16\">Honda Orders</option><option value=\"17\">Order More Bad Air Sponges</option><option value=\"18\">Immediate Price Changes</option><option value=\"19\">Store Needs Bloodborne Kit</option><option value=\"20\">Item Packaging Not Correct</option><option value=\"21\">Battery Core Charges</option><option value=\"22\">Minimum Quantity Required to Close a PO</option><option value=\"23\">Item Description Incorrect / Unclear / Missing</option><option value=\"24\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";

    $("#product").removeClass("btn-info").addClass("btn-success");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    $("#productDropdown").removeClass("bg-success border-success");
    $("#productDropdown").addClass("bg-info border-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Product";
}

function onAccounting() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"accountingDropdown\" id=\"accountingDropdown\" onchange=\"onEventAccounting(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"1\">PO / EDI Issues</option><option value=\"2\">Missing / Voided Transactions</option><option value=\"3\">Changing Canadian Conversion Rate</option><option value=\"4\">Setting Up a New Home Heating Customer Account</option><option value=\"5\">Defective Items / Credits</option><option value=\"6\">Store Has a Customer That Was Double Charged</option><option value=\"7\">Issues With Updates to In-House Accounts</option><option value=\"8\">Sales Audit / Daybook Issues</option><option value=\"9\">Store is Processing a Return and it's Being Declined</option><option value=\"10\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";

    $("#accounting").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Accounting";
}

function onCustomer() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#customer").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Customer";
}

function onOperations() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#operations").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Operations";
}

function onMarketing() {
    document.getElementById("secondForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("secondForm").innerHTML += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"marketingDropdown\" id=\"marketingDropdown\" onchange=\"onEventMarketing(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"1\">Chamber of Commerce Dues</option><option value=\"2\">Problems with Kronos / Timeclock</option><option value=\"3\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";

    $("#marketing").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Marketing / HR";
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
    document.forms['submitMyForm'].elements['Store'].value = document.getElementById("typeStore").value;
    document.forms['submitMyForm'].elements['Department'].value = chosenDepartment;
    document.forms['submitMyForm'].elements['First Task'].value = firstTask;
    document.forms['submitMyForm'].elements['Second Task'].value = secondTask;
    document.forms['submitMyForm'].elements['Third Task'].value = thirdTask;
    document.forms['submitMyForm'].elements['Fourth Task'].value = fourthTask;
    document.forms['submitMyForm'].elements['Fifth Task'].value = fifthTask;
    document.forms['submitMyForm'].elements['Comments'].value = document.getElementById("comments").value;

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
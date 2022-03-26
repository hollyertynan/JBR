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

//BLANK QUESTIONNAIRE VARIABLE CREATED TO BE CALLED IN SHOW/HIDE FUNCTIONS
const blankQuestionnaire = document.getElementById("blankQuestionnaire");

//HIDES AND RESETS QUESTIONNAIRE & PROMPT
function hideBlankQuestionnaire() {
    blankQuestionnaire.style.display = "none";
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("optionalNote").innerHTML = "";
}

//SHOWS AND RESETS QUESTIONNAIRE & PROMPT
function showBlankQuestionnaire() {
    blankQuestionnaire.style.display = "block";
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("optionalNote").innerHTML = "";
    document.getElementById("optionalRadio1").style.display = "none";
    document.getElementById("optionalRadio2").style.display = "none";
    document.getElementById("optionalRadio3").style.display = "none";
}

//FUNCTION FOR WHEN WE NEED ONE OF THREE OPTIONS
function threeButtonQuestionnaire() {
    blankQuestionnaire.style.display = "block";
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("optionalNote").innerHTML = "";
    document.getElementById("optionalRadio1").style.display = "inline-flex";
    document.getElementById("optionalRadio2").style.display = "none";
    document.getElementById("optionalRadio3").style.display = "none";
}

//FUNCTION FOR WHEN WE NEED ONE OF FOUR OPTIONS
function fourButtonQuestionnaire() {
    blankQuestionnaire.style.display = "block";
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("optionalNote").innerHTML = "";
    document.getElementById("optionalRadio1").style.display = "inline-flex";
    document.getElementById("optionalRadio2").style.display = "inline-flex";
    document.getElementById("optionalRadio3").style.display = "none";
}

//FUNCTION FOR WHEN WE NEED ONE OF FIVE OPTIONS
function fiveButtonQuestionnaire() {
    blankQuestionnaire.style.display = "block";
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("optionalRadio1").style.display = "inline-flex";
    document.getElementById("optionalRadio2").style.display = "inline-flex";
    document.getElementById("optionalRadio3").style.display = "inline-flex";
}




var firstTask = secondTask = thirdTask = fourthTask = fifthTask = comments = "-----";

function changeColor() {
    if ($("body").hasClass("bg-dark")) {
        $(".bg-secondary").removeClass("bg-secondary").addClass("testLighterGray");
        $(".bg-dark").removeClass("bg-dark").addClass("bg-secondary");
        $(".fixTextLight").removeClass("fixTextLight").addClass("fixTextDark");
        $(".btn-dark").removeClass("btn-dark").addClass("btn-secondary");
    } else if ($("body").hasClass("bg-secondary")) {
        $(".bg-secondary").removeClass("bg-secondary").addClass("bg-dark");
        $(".testLighterGray").removeClass("bg-testLighterGray").addClass("bg-secondary");
        $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");
        $(".btn-secondary").removeClass("btn-secondary").addClass("btn-dark");
    }
}

function clearAllForms() {
    $("#firstForm").html("");
    $("#secondForm").html("");
    $("#thirdForm").html("");
    $("#fourthForm").html("");
    $("#fifthForm").html("");
    hidePreviousInfo();
    hideBlankQuestionnaire();
}

function onTicketPhoneClick() {
    return "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"><button id=\"product\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onProduct(); return false;\"><i class=\"bi bi-tag\"></i><h4 class=\"d-none d-md-block\">Product Team</h4></button></div><div class=\"col-2\"><button id=\"it\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onIT(); return false;\"><i class=\"bi bi-display\"></i><h4 class=\"d-none d-md-block\">IT</h4></button></div><div class=\"col-2\"><button id=\"accounting\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onAccounting(); return false;\"><i class=\"bi bi-paperclip\"></i><h4 class=\"d-none d-md-block\">Accounting</h4></button></div><div class=\"col-2\"><button id=\"customer\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onCustomer(); return false;\"><i class=\"bi bi-file-earmark-person\"></i><h4 class=\"d-none d-md-block\">Customer Accounts</h4></button></div><div class=\"col-2\"><button id=\"operations\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onOperations(); return false;\"><i class=\"bi bi-tools\"></i><h4 class=\"d-none d-md-block\">Operations</h4></button></div><div class=\"col-2\"><button id=\"marketing\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onMarketing(); return false;\"><i class=\"bi bi-wallet2\"></i><h4 class=\"d-none d-md-block\">Marketing / HR</h4></button></div></div></div>";
}

function onMaintenanceClick() {
    return "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"maintenanceTasks\" id=\"maintenanceTasks\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\"><option selected>Select One:</option><option value=\"1\">Benjamin Moore National Accounts Order</option><option value=\"2\">Live Sales Not Showing</option><option value=\"3\">Canadian Conversion Rate Change</option><option value=\"4\">Canceling Orgill Zeroed Customer BOSS Orders</option><option value=\"5\">Checking Capital One Trade Credit (BlueTarp) Authorized Signers</option><option value=\"6\">Re-Download Capital One Trade Credit (BlueTarp) Signers</option><option value=\"7\">Updating Store Hours</option><option value=\"8\">Running EOD for a Store</option><option value=\"9\">Attaching a File to a Ticket</option><option value=\"10\">Other</option></select></div></div><div class=\"col-2\"></div></div></div>";
}

// function if ticket is clicked
function onTicket() {
    clearAllForms();
    $("#firstForm").html(onTicketPhoneClick());

    $("#ticket").removeClass("btn-info").addClass("btn-success");
    $("#phone").removeClass("btn-success").addClass("btn-info");
    $("#maintenance").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Ticket";
}

// function if phone is clicked
function onPhone() {
    clearAllForms();
    $("#firstForm").html(onTicketPhoneClick());

    $("#phone").removeClass("btn-info").addClass("btn-success");
    $("#maintenance").removeClass("btn-success").addClass("btn-info");
    $("#ticket").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Phone";
}

// function if maintenance is clicked
function onMaintenance() {
    clearAllForms();
    makeITMaintenanceForm();

    $("#maintenance").removeClass("btn-info").addClass("btn-success");
    $("#phone").removeClass("btn-success").addClass("btn-info");
    $("#ticket").removeClass("btn-success").addClass("btn-info");

    document.getElementById("firstForm").scrollIntoView({behavior: "smooth"});
    chosenFirstButton = "Maintenance";
}

function hideRegisterNumber() {
    document.getElementById("registerInquiry").style.display = "none";
    registerNumber = "-----"
}

//HIDES IFRAME AND QUESTIONNAIRE FROM PREVIOUS SESSION IF A CONTINUOUS SESSION IS BEING USED
function hidePreviousInfo() {
    document.getElementById("resolutionFrame").style.display = "none";
    document.getElementById("blankQuestionnaire").style.display = "none";
}

function clearPastFirstForm() {
    $("#secondForm").html("");
    $("#thirdForm").html("");
    $("#fourthForm").html("");
    $("#fifthForm").html("");
    hidePreviousInfo();
    hideBlankQuestionnaire();
}



/*

IT PIPELINE

*/

const onITIssues = [
    "Register",
    "Payment Terminal",
    "Back Office (Mi9)",
    "Email Server / OFFICE-PC",
    "Printers",
    "Kiosk / AUBKIOSK",
    "Chromebook",
    "iPad",
    "Paint Computer",
    "Reports",
    "Online Orders",
    "IT Maintenance",
    "Request for New Phone Line",
    "VoIP / Phone Issues",
    "Security System",
    "WiFi Issues",
    "ELVIS",
    "Other"
]

function onIT() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"itDropdown\" id=\"itDropdown\" onchange=\"onEventIT(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onITIssues.length; i++) {
        input += "<option value=\"" + onITIssues[i] + "\">" + onITIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";

    clearPastFirstForm()
    $("#secondForm").html(input);

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

/* 

PRODUCT PIPELINE

*/

const onProductIssues = [
    "Benjamin Moore National Accounts Order",
    "Benjamin Moore Web Sales Order",
    "Change Product Min and / or Max",
    "PO/EDI Issues",
    "Paint Over Max Order",
    "Product Needs a SKU",
    "UPC Not On File",
    "Need a Vendor Website Password Reset",
    "Retail Price Issues (Not Markdown)",
    "Cost Issues",
    "Smart Cycle Count Issues",
    "Special Order Issues",
    "Store Specific Clearance Pricing",
    "Store Specific Temporary Pricing",
    "Customer Pricing Quote",
    "Honda Orders",
    "Order More Bad Air Sponges",
    "Immediate Price Changes",
    "Store Needs Bloodborne Kit",
    "Item Packaging Not Correct",
    "Battery Core Charges",
    "Minimum Quantity Required to Close a PO",
    "Item Description Incorrect / Unclear / Missing",
    "Other"
]

function onProduct() {
    hideRegisterNumber();
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"productDropdown\" id=\"productDropdown\" onchange=\"onEventProduct(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onProductIssues.length; i++) {
        input += "<option value=\"" + onProductIssues[i] + "\">" + onProductIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";


    clearPastFirstForm()
    $("#secondForm").html(input);

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



/*

ACCOUNTING PIPELINE

*/

const onAccountingIssues = [
   "PO / EDI Issues",
   "Missing / Voided Transactions",
   "Changing Canadian Conversion Rate",
   "Setting Up a New Home Heating Customer Account",
   "Defective Items / Credits",
   "Store Has a Customer That Was Double Charged",
   "Issues With Updates to In-House Accounts",
   "Sales Audit / Daybook Issues",
   "Store is Processing a Return and it's Being Declined",
   "Other"
]

function onAccounting() {
    hideRegisterNumber();
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"accountingDropdown\" id=\"accountingDropdown\" onchange=\"onEventAccounting(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onAccountingIssues.length; i++) {
        input += "<option value=\"" + onAccountingIssues[i] + "\">" + onAccountingIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    
    clearPastFirstForm()
    $("#secondForm").html(input);

    $("#accounting").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#customer").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Accounting";
}

/*

CUSTOMER PIPELINE

*/

const onCustomerIssues = [
    "New Military Discount Form",
    "New Pro Discount Form",
    "Merge Customer Accounts",
    "Special Pricing / Price Quote",
    "New Tax Exempt Form",
    "Add Points Request",
    "Store has Customer that was Double Charged",
    "Request to Delete Customer Account",
    "Customer / Store Unable to Register Customer for Online Account",
    "Ordering More Member Sign-Up Sheets",
    "Customer Lost Year End Rewards",
    "Other"
 ]

function onCustomer() {
    hideRegisterNumber();
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"customerDropdown\" id=\"customerDropdown\" onchange=\"onEventCustomer(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onCustomerIssues.length; i++) {
        input += "<option value=\"" + onCustomerIssues[i] + "\">" + onCustomerIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    
    clearPastFirstForm()
    $("#secondForm").html(input);

    $("#customer").removeClass("btn-info").addClass("btn-success");
    $("#product").removeClass("btn-success").addClass("btn-info");
    $("#accounting").removeClass("btn-success").addClass("btn-info");
    $("#it").removeClass("btn-success").addClass("btn-info");
    $("#operations").removeClass("btn-success").addClass("btn-info");
    $("#marketing").removeClass("btn-success").addClass("btn-info");

    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    chosenDepartment = "Customer";
}

/*

OPERATIONS PIPELINE

*/

const onOperationsIssues = [
    "Need Orange Shelf Tape",
    "Need New Equipment",
    "Forklift Maintenance",
    "Card Swipe Cleaning Cards",
    "Rubbish / Property Maintenance",
    "Store Use Safety Masks",
    "New Glass and / or Plexi Cutter",
    "New Integrity Cleaner Shirt Needed for Porter",
    "Business Cards",
    "New Brush / Cutwheel for the Key Machine",
    "Need Materials for Screen Repair",
    "Ordering More Member Sign-Up Sheets",
    "Setting Up Register Numbers for a New Employee",
    "Other"
]

function onOperations() {
    hideRegisterNumber();
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"operationsDropdown\" id=\"operationsDropdown\" onchange=\"onEventOperations(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onOperationsIssues.length; i++) {
        input += "<option value=\"" + onOperationsIssues[i] + "\">" + onOperationsIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    
    clearPastFirstForm()
    $("#secondForm").html(input);

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
    hideRegisterNumber();
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"marketingDropdown\" id=\"marketingDropdown\" onchange=\"onEventMarketing(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < marketingIssues.length; i++) {
        input += "<option value=\"" + marketingIssues[i] + "\">" + marketingIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";

    clearPastFirstForm()
    $("#secondForm").html(input);

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
        url: "https://api.apispreadsheets.com/data/DKFTbWbHBS9skMdT/",
        type: "post",
        data:$("#submitMyForm").serializeArray(),
        
        success: function() {
            location.reload();
        },
        error: function() {
            alert("There was an error :(");
        }
    });
}

function getTeamOfStore() {
    const searchValue = document.getElementById("typeStore").value;
    const result = allStoreNames.find(obj => {
        return obj.Store === searchValue;
    })

    if (result == null) {
        return "No Store Added"
    } else {
        return result.Team;
    }   
}

$(document).ready(function() {
    $("#myModal").hide();
    $("#submit").click(function(){
        $("#myModal").modal('show');
    })
})

$(document).ready(function() {
    $("#storeTicketForm").validate({
        rules: {
            typeStore: {
                required: true
            },
            tikcal: {
                required: true
            }
        },
        messages: {
            typeStore: {
                required: ""
            },
            tikcal: {
                required: ""
            }
        },
    })

    
    $("#ticket").click(function() {
        $("#storeTicketForm").valid();
        if($("#storeTicketForm").valid()) {
            $("#typeStore").removeClass("bg-danger").addClass("bg-dark");
            $("#ticketinfo").removeClass("bg-danger").addClass("bg-dark");
        } else {
            $("#typeStore").removeClass("bg-dark").addClass("bg-danger");
            $("#ticketinfo").removeClass("bg-dark").addClass("bg-danger");
        }
    })

    $("#phone").click(function() {
        if($("#storeTicketForm").valid()) {
            $("#typeStore").removeClass("bg-danger").addClass("bg-dark");
            $("#ticketinfo").removeClass("bg-danger").addClass("bg-dark");
        } else {
            $("#typeStore").removeClass("bg-dark").addClass("bg-danger");
            $("#ticketinfo").removeClass("bg-dark").addClass("bg-danger");
        }
    })

    $("#maintenance").click(function() {
        $("#storeTicketForm").valid();
        if($("#storeTicketForm").valid()) {
            $("#typeStore").removeClass("bg-danger").addClass("bg-dark");
            $("#ticketinfo").removeClass("bg-danger").addClass("bg-dark");
        } else {
            $("#typeStore").removeClass("bg-dark").addClass("bg-danger");
            $("#ticketinfo").removeClass("bg-dark").addClass("bg-danger");
        }
    })
})


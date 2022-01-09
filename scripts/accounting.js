function onEventAccounting(event) {
    switch(event.target.value) {
        case "1":
            onPOEDIIssuesAccounting();
            break;
        case "2":
            onMissingVoidedTransactions();
            break;
        case "3":
            onChangingCanadian();
            break;
        case "4":
            onHomeHeatingCustomer();
            break;
        case "5":
            onDefectiveItemsCredits();
            break;
        case "6":
            onCustomerDoubleCharged();
            break;
        case "7":
            onInHouseUpdates();
            break; 
        case "8":
            onSalesAuditDaybook();
            break; 
        case "9":
            onReturnBeingDeclined();
            break; 
        case "10":
            onOtherAccounting();
            break; 
        default: 
            blankAccounting();
            break;
    }
}

function onPOEDIIssuesAccounting() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Accounting PO EDI Issues";
}

function onMissingVoidedTransactions() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Follow the instructions found <a href=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.3kdpu03fle1u\" target=\"_blank\" class=\"text-warning\">HERE</a> to fix Missing/Voided Transaction issue.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Missing / Voided Transactions";
}
 
function onChangingCanadian() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1ufv0T_8oO5gP0NJDdmSrUx9pE_bvV8wjEQ69pyIaxS8/edit?usp=sharing\" target=\"_blank\" class=\"text-warning\">HERE</a> for instructions on changing the Canadian conversion rate.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Changing Canadian";
}
 
function onHomeHeatingCustomer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Home Heating Customer";
}
 
function onDefectiveItemsCredits() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B8:D8\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person who handles all issues concerning defective items and credits for defective items.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Defective Item Credits";
}
 
function onCustomerDoubleCharged() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B18:C18\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person who handles these issues.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Customer Double Charged";
}
 
function onInHouseUpdates() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B21:D21\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person that handles all In-House Account issues and updates.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "In House Updates";
}
 
function onSalesAuditDaybook() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Sales Audit Daybook";
}
 
function onReturnBeingDeclined() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Returns Being Declined";
}
 
function onOtherAccounting() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Accounting Other";
}
 
function blankAccounting() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#accountingDropdown").addClass("bg-info border-info");
    $("#accountingDropdown").removeClass("bg-success border-success");
}
 
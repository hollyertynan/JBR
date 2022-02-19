let accountingMap = new Map([
    ["PO / EDI Issues", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Missing / Voided Transactions", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.3kdpu03fle1u\"></iframe>"],

    ["Changing Canadian Conversion Rate", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1ufv0T_8oO5gP0NJDdmSrUx9pE_bvV8wjEQ69pyIaxS8/edit\"></iframe>"],

    ["Setting Up a New Home Heating Customer Account", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Defective Items / Credits", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=B8:D8\"></iframe>"],

    // this one is acting weird - Tynan 2/19/2022
    ["Store Has a Customer That Was Double Charged", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=B18:D18\"></iframe>"], 

    ["Issues With Updates to In-House Accounts", "<h3>UNDER CONSTRUCTION</h3>"],

    // this one doesn't have anything in old JBR either - Tynan 2/19/2022
    ["Sales Audit / Daybook Issues", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Store is Processing a Return and it's Being Declined", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Other", "<h3 class=\"text-center\">Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><br/>"]

]);


function onEventAccounting(event) {
    switch(event.target.value) {
        default: 
            onAccountingDefault(event.target.value);
            break;
    }
}

function onAccountingDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(accountingMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
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
 
function onHomeHeatingCustomer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#accountingDropdown").removeClass("bg-info border-info");
    $("#accountingDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Home Heating Customer";
}
 
function onInHouseUpdates() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B21:D21\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the name of the person that handles all In-House Account issues and updates.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

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
 
function blankAccounting() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#accountingDropdown").addClass("bg-info border-info");
    $("#accountingDropdown").removeClass("bg-success border-success");
}
 
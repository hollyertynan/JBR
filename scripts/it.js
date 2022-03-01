/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventIT(event) {
    switch(event.target.value) {
        case "Register":
            onRegister();
            break;
        case "Payment Terminal":
            onPaymentTerminal();
            break;
        case "Back Office (Mi9)":
            onBackOfficeMi9();
            break;
        case "4":
            onEmailServer();
            break;
        case "5":
            onPrinters();
            break;
        case "6":
            onKiosk();
            break;
        case "7":
            onChromebook();
            break; 
        case "8":
            onIpad();
            break; 
        case "9":
            onPaintComputer();
            break; 
        case "10":
            onReports();
            break; 
        case "11":
            onOnlineOrder();
            break; 
        case "12":
            onItMaintenance();
            break; 
        case "13":
            onRequestNewPhone();
            break; 
        case "14":
            onVOIP();
            break; 
        case "15":
            onSecurity();
            break; 
        case "16":
            onWifi();
            break; 
        case "17":
            onV9();
            break; 
        case "18":
            onElvis();
            break; 
        case "Other":
            onITOther();
            break; 
        default: 
            blankIT();
            break;
    }
}

// ADD "TYPE OF SALE ISSUES" when we update this to the new system

/*

default pipeline

*/

function blankIT() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#itDropdown").addClass("bg-info border-info");
    $("#itDropdown").removeClass("bg-success border-success");
}





/* 

onRegister() pipeline 

*/

function hardwareOrSoftware(event) {
    document.getElementById("fourthForm").innerHTML = "";
    $("#registerDropdown").removeClass("bg-info border-info");
    $("#registerDropdown").addClass("bg-success border-success");
    switch(event.target.value) {
        case "Hardware":
            onHardware();
            break
        case "Software":
            onSoftware();
            break
    }
}


function onRegister() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    
    let registerSoftwareOrHardware = "";
    registerSoftwareOrHardware += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerDropdown\" id=\"registerDropdown\" onchange=\"hardwareOrSoftware(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"Hardware\">Hardware</option><option value=\"Software\">Software</option></select></div></div><div class=\"col-2\"></div></div></div>"

    hidePreviousInfo();

    document.getElementById("thirdForm").innerHTML = registerSoftwareOrHardware;
    

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Payment Terminal";
}

function onHardware() {
    makeRegisterHardwareForm();
    $("#registerDropdown").removeClass("btn-info").addClass("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Hardware";
}

function onSoftware() {
    makeRegisterSoftwareForm();
    $("#registerDropdown").removeClass("btn-info").addClass("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Software";
}






/* 

onPaymentTerminal() pipeline

*/

const paymentTerminalIssues = [
        "Displays 'None' When Being Inserted",
        "Stuck On System Information",
        "Declining All Cards",
        "Debit Being Declined / Credit Being Stored for Later Processing",
        "Signature Stuck in Loop",
        "Screen is blank and white",
        "Automatically Reads 'Cancelled' when Debit or Credit is selected as tender",
        "Critical Error: No USB Connection, please check cable",
        "'Maintenance Required' or 'Enter Password to Login'",
        "New Payment Terminal to Setup",
        "Need a new stylus (pen)",
        "Need a new Payment Terminal",
        "Shows Message: 'WARNING: UNABLE TO COMMUNICATE WITH triPOS'",
        "Return Not Processing",
        "Other",
]

function onPaymentTerminal() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    makePaymentTerminalForm();
    hidePreviousInfo();
    

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Payment Terminal";
}

/*

onBackOfficeMi9() pipeline

*/

function onBackOfficeMi9() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    makeBackOfficeForm();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Back Office (Mi9)";
}

/*

onEmailServer() pipeline

*/

function onEmailServer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Email Server";
}

/*

onPrinters() pipeline

*/

function onPrinters() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Printers";
}

/*

onKiosk() pipeline

*/

function onKiosk() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Kiosk";
}

/*

onChromebook() pipeline

*/

function onChromebook() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Chromebook";
}

/*

onIpad() pipeline

*/

function onIpad() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "iPad";
}

/*

onPaintComputer() pipeline

*/

function onPaintComputer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Paint Computer";
}

/*

onReports() pipeline

*/

function onReports() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Reports";
}

/*

onOnlineOrder() pipeline

*/

function onOnlineOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Online Orders";
}

/*

onItMaintenance() pipeline

*/

function onItMaintenance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "IT Maintenance";
}

/*

onRequestNewPhone() pipeline

*/

function onRequestNewPhone() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Request New Phone";
}

/*

onVOIP() pipeline

*/

function onVOIP() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "VOIP";
}

/*

onSecurity() pipeline

*/

function onSecurity() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Security";
}

/*

onWifi() pipeline

*/

function onWifi() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "WiFi";
}

/*

onV9() pipeline

*/

function onV9() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "V9";
}

/*

onITOther() pipeline

*/

function onITOther() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "IT Other";
}

/*

onElvis() pipeline

*/


function onElvis() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Elvis";
}
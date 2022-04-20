/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventIT(event) {
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Register":
            onRegister();
            break;
        case "Payment Terminal":
            onPaymentTerminal();
            break;
        case "Back Office (Mi9)":
            hideRegisterNumber();
            onBackOfficeMi9();
            break;
        case "Email Server / OFFICE-PC":
            hideRegisterNumber();
            onEmailServer();
            break;
        case "Printers":
            hideRegisterNumber();
            onPrinters();
            break;
        case "Kiosk / AUBKIOSK":
            hideRegisterNumber();
            onKiosk();
            break;
        case "Chromebook":
            hideRegisterNumber();
            onChromebook();
            break; 
        case "iPad":
            hideRegisterNumber();
            onIpad();
            break; 
        case "Paint Computer":
            hideRegisterNumber();
            onPaintComputer();
            break; 
        case "Reports":
            hideRegisterNumber();
            onReports();
            break; 
        case "Online Orders":
            hideRegisterNumber();
            onOnlineOrder();
            break; 
        case "IT Maintenance":
            $("#itDropdown").removeClass("bg-info border-info");
            $("#itDropdown").addClass("bg-success border-success");
            hideRegisterNumber();
            onItMaintenance();
            break; 
        case "Request for New Phone Line":
            hideRegisterNumber();
            onRequestNewPhone();
            break; 
        case "VoIP / Phone Issues":
            hideRegisterNumber();
            onVOIP();
            break; 
        case "Security System":
            hideRegisterNumber();
            onSecurity();
            break; 
        case "WiFi Issues":
            hideRegisterNumber();
            onWifi();
            break; 
        case "ELVIS":
            hideRegisterNumber();
            onElvis();
            break; 
        case "Theatro":
            hideRegisterNumber();
            onTheatro();
            break;
        case "Other":
            hideRegisterNumber();
            onITOther();
            break; 
        default:
            hideRegisterNumber(); 
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


function onRegister() {
    //document.getElementById("resolutionFrame").style.display = "none";
    //document.getElementById("blankQuestionnaire").style.display = "none";
    

    registerInquiry();
    
    

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Register";
}

function registerInquiry() {
    var input = "";
    input += "<div style=\"\"class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerNumberDropdown\" id=\"registerNumberDropdown\" onchange=\"onEventRegisterNumber(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Register Number</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"All\">All Registers</option>"

    document.getElementById("registerInquiry").innerHTML = input;
    document.getElementById("registerInquiry").style.display = "block";
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

}

let registerNumber = "-----";

function onEventRegisterNumber(event) {
    registerNumber = event.target.value;
    switch(event.target.value) {
        case "-----":
            break;
        case "Register Number":
            break;
        default:
            fifthTask = "Register " + registerNumber;
            registerSoftwareOrHardware();
            break;
    }
}

function registerSoftwareOrHardware() {
    $("#registerNumberDropdown").removeClass("bg-info border-info");
    $("#registerNumberDropdown").addClass("bg-success border-success");
    let registerSoftwareOrHardware = "";
    registerSoftwareOrHardware += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerDropdown\" id=\"registerDropdown\" onchange=\"hardwareOrSoftware(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"Hardware\">Hardware</option><option value=\"Software\">Software</option></select></div></div><div class=\"col-2\"></div></div></div>"

    document.getElementById("thirdForm").innerHTML = registerSoftwareOrHardware;

}

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
        "Stuck on Synchronizing With XPI App",
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
        "triPOS Get Stuck Trying To Start or Stop the Service, Could Also Say 'Failed to Start/Stop triPOS.NET",
        "Error When Trying to Restart triPOS - 'Side-by-Side Configuration is Incorrect",
        "Other",
]

function registerInquiryPaymentTerminal() {
    var input = "";
    input += "<div style=\"\"class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerNumberDropdown\" id=\"registerNumberDropdown\" onchange=\"onEventRegisterNumberPaymentTerminal(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Register Number</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"All\">All Registers</option>"

    document.getElementById("registerInquiry").innerHTML = input;

}

function onEventRegisterNumberPaymentTerminal(event) {
    registerNumber = event.target.value;
    switch(event.target.value) {
        case "-----":
            break;
        case "Register Number":
            break;
        default:
            fifthTask = "Register " + registerNumber;
            makePaymentTerminalForm();
            break;
    }
}

function onPaymentTerminal() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    registerInquiryPaymentTerminal();
    hidePreviousInfo();
    document.getElementById("registerInquiry").style.display = "block";
    

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
    makeEmailServerForm();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Email Server";
}

/*

onPrinters() pipeline

*/

function onPrinters() {
    printerWithError();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Printers";
}

function printerWithError() {
    let printerTypeDrop = "";
    printerTypeDrop += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"printerTypeDropdown\" id=\"printerTypeDropdown\" onchange=\"printerTypeEvent(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option><option value=\"Office\">Office/Kiosk/Rental Printer</option><option value=\"PriceTicket\">Price Ticket Printer</option><option value=\"PaintLabel\">Paint Label Printer</option></select></div></div><div class=\"col-2\"></div></div></div>"

    document.getElementById("thirdForm").innerHTML = printerTypeDrop;
}

function printerTypeEvent(event) {
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    $("#printerTypeDropdown").removeClass("bg-info border-info");
    $("#printerTypeDropdown").addClass("bg-success border-success");
    switch(event.target.value) {
        case "Office":
            makeOfficePrinterForm();
            break;
        case "PriceTicket":
            makePriceTicketForm();
            break;
        case "PaintLabel":
            makePaintLabelForm();
            break;
        default:
            break;
    }
}

/*

onKiosk() pipeline

*/

function onKiosk() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    makeKioskForm();

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
    makeChromebookForm();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Chromebook";
}

/*

onIpad() pipeline

*/

function onIpad() {
    document.getElementById("resolutionFrame").innerHTML += "<h3 style=\"text-align:center;\">If the store is looking for their iPad password, it'll be 'StrXXX', with the XXX being their three digit store number. Any other iPad issues should be escalated to the POS Team.</h3>";
    document.getElementById("resolutionFrame").style.display = "block";

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
    
    makePaintMachineForm();

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
    makeReportsForm();

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
    makeOnlineOrderForm();

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
    makeITMaintenanceForm();

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
    makeNewPhoneLineForm();

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
    makeVoIPForm();

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
    document.getElementById("resolutionFrame").style.display = "block";
    document.getElementById("resolutionFrame").innerHTML = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B11:D11\"></iframe>";

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
    makeWiFiForm();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "WiFi";
}




/*

onTheatro() pipeline

*/

function onTheatro() {
    document.getElementById("thirdForm").innerHTML = "<h3 style=\"text-align:center;padding-left:2%;padding-right:2%;\">All issues with Theatro at store level should be sent to the Theatro Tech Support first. If their devices are working, all they need to do is hold the talk button and say 'Message Tech Support'. If none of their devices are working they can either call Theatro at 1-844-843-2876, or they can email them at support@theatro.com.</h3>";
    document.getElementById("fourthForm").innerHTML = "";
    

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Theatro";
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
    makeElvisForm();

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Elvis";
}
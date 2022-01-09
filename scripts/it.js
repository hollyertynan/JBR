/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventIT(event) {
    switch(event.target.value) {
        case "1":
            onRegister();
            break;
        case "2":
            onPaymentTerminal();
            break;
        case "3":
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
            onITOther();
            break; 
        default: 
            blankIT();
            break;
    }
}

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
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-4\"><button id=\"hardware\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onHardware()\"><h4>Hardware</h4></button></div><div class=\"col-4\"><button id=\"software\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onSoftware()\"><h4 >Software</h4></button></div><div class=\"col-2\"></div></div></div>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Register";
}

function onHardware() {
    $("#software").removeClass("btn-success").addClass("btn-info");
    $("#hardware").removeClass("btn-info").addClass("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Hardware";
}

function onSoftware() {
    $("#hardware").removeClass("btn-success").addClass("btn-info");
    $("#software").removeClass("btn-info").addClass("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Software";
}

/* 

onPaymentTerminal() pipeline

*/

function onPaymentTerminal() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    makePaymentTerminalForm();

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += ":)";

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
    document.getElementById("thirdForm").innerHTML += "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><br><br>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "IT Other";
}
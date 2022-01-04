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
            blank();
            break;
    }
}

/*

default pipeline

*/

function blank() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
}

/* 

onRegister() pipeline 

*/

function onRegister() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-4\"><button id=\"hardware\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onHardware()\"><h4>Hardware</h4></button></div><div class=\"col-4\"><button id=\"software\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onSoftware()\"><h4 >Software</h4></button></div><div class=\"col-2\"></div></div></div>";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

function onHardware() {
    document.getElementById("software").classList.remove("btn-success");
    document.getElementById("hardware").classList.remove("btn-info");

    document.getElementById("software").classList.add("btn-info");
    document.getElementById("hardware").classList.add("btn-success");

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onSoftware() {
    document.getElementById("software").classList.remove("btn-info");
    document.getElementById("hardware").classList.remove("btn-success");

    document.getElementById("software").classList.add("btn-success");
    document.getElementById("hardware").classList.add("btn-info");

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

/* 

onPaymentTerminal() pipeline

*/

function onPaymentTerminal() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onBackOfficeMi9() pipeline

*/

function onBackOfficeMi9() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onEmailServer() pipeline

*/

function onEmailServer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onPrinters() pipeline

*/

function onPrinters() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onKiosk() pipeline

*/

function onKiosk() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onChromebook() pipeline

*/

function onChromebook() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onIpad() pipeline

*/

function onIpad() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onPaintComputer() pipeline

*/

function onPaintComputer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onReports() pipeline

*/

function onReports() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onOnlineOrder() pipeline

*/

function onOnlineOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onItMaintenance() pipeline

*/

function onItMaintenance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onRequestNewPhone() pipeline

*/

function onRequestNewPhone() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onVOIP() pipeline

*/

function onVOIP() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onSecurity() pipeline

*/

function onSecurity() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onWifi() pipeline

*/

function onWifi() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onV9() pipeline

*/

function onV9() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onITOther() pipeline

*/

function onITOther() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("itDropdown").classList.remove("bg-info");
    document.getElementById("itDropdown").classList.remove("border-info");
    document.getElementById("itDropdown").classList.add("bg-success");
    document.getElementById("itDropdown").classList.add("border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}
var paymentTerminalIssues = [
    "Displays 'None' When Being Inserted",
    "Stuck On System Information",
    "Decling All Cards",
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

function onEventITPaymentTerminal(event) {
    switch(event.target.value) {
        case "1":
            onDisplaysNone();
            break;
        case "2":
            onStuckOnSystemInfo();
            break;
        case "3":
            onDeclinesAllCards();
            break;
        case "4":
            onDebitBeingDeclined();
            break;
        case "5":
            onSignatureStuckInLoop();
            break;
        case "6":
            onScreenIsBlank();
            break;
        case "7":
            onAutomaticallyCancelled();
            break; 
        case "8":
            onCriticalError();
            break; 
        case "9":
            onMaintenanceRequired();
            break; 
        case "10":
            onNewPaymentTerminal();
            break; 
        case "11":
            onNeedPen();
            break; 
        case "12":
            onNeedTerminal();
            break; 
        case "13":
            onUnableCommunicate();
            break; 
        case "14":
            onReturnNotProcessing();
            break; 
        case "15":
            onOtherPaymentTerminal();
            break;  
        default: 
            blankPaymentTerminal();
            break;
    }
}

function makePaymentTerminalForm() {
    var input = "";
    input += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"bg-dark text-center\"><select name=\"paymentTerminalDropdown\" id=\"paymentTerminalDropdown\" onchange=\"onEventITPaymentTerminal(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < paymentTerminalIssues.length; i++) {
        input += "<option value=\"" + (i + 1) + "\">" + paymentTerminalIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
}

function blankPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML += "";
}

function onDisplaysNone() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\displaysNone.txt");

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Displays None";
}

function onStuckOnSystemInfo() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\displaysNone.txt");

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Stuck on System Information";
}

function onDeclinesAllCards() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\declinesAllCards.txt");

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Declines all Cards";
}

function onDebitBeingDeclined() {
    document.getElementById("fourthForm").innerHTML = ":O";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Debit Being Declined";
}

function onSignatureStuckInLoop() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Signature Stuck in Loop";
}

function onScreenIsBlank() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\displaysNone.txt");

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Screen is Blank / White";
}

function onAutomaticallyCancelled() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\displaysNone.txt");

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Automatically Cancelled";
}

function onCriticalError() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Critical Error";
}

function onMaintenanceRequired() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Maintenance Required";
}

function onNewPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "New Payment Terminal";
}

function onNeedPen() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Needs Pen";
}

function onNeedTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Needs Terminal";
}

function onUnableCommunicate() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Unable to Communicate";
}

function onReturnNotProcessing() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Returns Not Processing";
}

function onOtherPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Payment Terminals";
}

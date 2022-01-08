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

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Displays None";
}

function onStuckOnSystemInfo() {
    $("#fourthForm").html("Loading...").load("texts\\itTexts\\paymentTerminalTexts\\displaysNone.txt");

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Stuck on System Information";
}

function onDeclinesAllCards() {
    var input = "<div class=\"container-fluid\"><div class=\"row\"><div class=\"row\"><div class=\"col-6\"><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining1.PNG\" class=\"img-fluid\" alt=\"all cards declining\"><br><br><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining2.PNG\" class=\"img-fluid\" alt=\"all cards declining\"><br><br><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining3.PNG\" class=\"img-fluid\" alt=\"all cards declining\"><br><br><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining4.PNG\" class=\"img-fluid\" alt=\"all cards declining\"><br><br><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining5.PNG\" class=\"img-fluid\" alt=\"all cards declining\"><br><br><img src=\"assets\\itAssets\\payment_terminal\\cardreaderdeclining\\allCardsDeclining6.PNG\" class=\"img-fluid\" alt=\"all cards declining\"></div><div class=\"col-5 text-start\"><h3>Steps:</h3><h6><br><br>1. Connect to store's storePC10.<br><br><hr><br>2. Click the message dispatcher on the taskbar on the bottom of the screen, it looks like a small red envelope.<br><br><hr><br>3. In the child processes dropdown menu, select EPPEPS.<br><br><hr><br>4. Click Suspend, verify that the task is no longer showing on the task bar on the bottom of the screen. Once it's gone, click resume.<br><br><hr><br>5. Once EPPEPS is resumed, click OK, then minimize the Message Dispatcher (you cannot close it).</h6></div><div class=\"row\"><div class=\"col-1\"></div></div></div>";

    input += "<div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: center\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";
    
    document.getElementById("fourthForm").innerHTML = input;

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Declines all Cards";
}

function onDebitBeingDeclined() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Debit Being Declined";
}

function onSignatureStuckInLoop() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Signature Stuck in Loop";
}

function onScreenIsBlank() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Screen is Blank / White";
}

function onAutomaticallyCancelled() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Automatically Cancelled";
}

function onCriticalError() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Critical Error";
}

function onMaintenanceRequired() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Maintenance Required";
}

function onNewPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "New Payment Terminal";
}

function onNeedPen() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Needs Pen";
}

function onNeedTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Needs Terminal";
}

function onUnableCommunicate() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Unable to Communicate";
}

function onReturnNotProcessing() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Returns Not Processing";
}

function onOtherPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Payment Terminals";
}

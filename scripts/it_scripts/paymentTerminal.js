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
    var input = "<div class=\"container-fluid\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><img src=\"assets\\itAssets\\cardReaderPlug.jpeg\" class=\"img-fluid\" alt=\"card reader plug\"><br><br><h3>Steps:</h3><h5><br><br>1. Unplug the power to the card reader. The image attached above is where power should be unplugged from.<br><br>2. Shut Down WinPos. If on Register 1, STOP MI9 STORE<br><br>3. Restart Computer<br><br>4. Once the computer has completely come back up, plug the power back into the card reader.<br><br>5. (Subject to Change) The Card reader will begin to boot up. It should go in the order of: Verifone Screen, System Information, Synchronizing With XPI App, System Information, then back to the Ads. If this didn't happen, it's likely you'll have to restart from step 1.</h5></div><div class=\"col-2\"></div></div></div>";

    document.getElementById("fourthForm").innerHTML = input;

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onStuckOnSystemInfo() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onDeclinesAllCards() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onDebitBeingDeclined() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onSignatureStuckInLoop() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onScreenIsBlank() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onAutomaticallyCancelled() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onCriticalError() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onMaintenanceRequired() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onNewPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onNeedPen() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onNeedTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onUnableCommunicate() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onReturnNotProcessing() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onOtherPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML = ":)";

    document.getElementById("paymentTerminalDropdown").classList.remove("bg-info");
    document.getElementById("paymentTerminalDropdown").classList.remove("border-info");
    document.getElementById("paymentTerminalDropdown").classList.add("bg-success");
    document.getElementById("paymentTerminalDropdown").classList.add("border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

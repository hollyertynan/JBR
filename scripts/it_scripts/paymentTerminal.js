var paymentTerminalIssues = [
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
    input += "<div class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"paymentTerminalDropdown\" id=\"paymentTerminalDropdown\" onchange=\"onEventITPaymentTerminal(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < paymentTerminalIssues.length; i++) {
        input += "<option value=\"" + (i + 1) + "\">" + paymentTerminalIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
}

function blankPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML += "";
}




//USE OF SOURCE VARIABLE MAKES IT EASIER TO CHANGE SOURCE IN THE FUTURE IF NEED BE

function onDisplaysNone() {
    hideBlankQuestionnaire();
    hidePreviousInfo();
    
    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A2:B2\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "Displays None";
}

function onStuckOnSystemInfo() {
    hideBlankQuestionnaire();
    hidePreviousInfo();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A14\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    
    secondTask = "Stuck on System Information";
}

//START DECLINE CARD FUNCTIONS
function onDeclinesAllCards() {
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Is this happening on all registers?";
    secondTask = "Declines all Cards";

    //CARDS DECLINE ALL REGISTERS
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A20:B20\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //CARDS DECLINE SPECIFIC REGISTER
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A4:B6\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
}


function onDebitBeingDeclined() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A4:B6\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";

    secondTask = "Debit Being Declined";
}

function onSignatureStuckInLoop() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A12:B12\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";

    secondTask = "Signature Stuck in Loop";
}

function onScreenIsBlank() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A54:B54\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";

    secondTask = "Screen is Blank / White";
}

function onAutomaticallyCancelled() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A50:B50\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "Automatically Cancelled";
}

function onCriticalError() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A46:B46\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "Critical Error";
}

function onMaintenanceRequired() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=2113782330&range=B24:D24\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    alert("Please assign the ticket to the person listed.");
    document.getElementById("resolutionFrame").style.display = "block";

    secondTask = "Maintenance Required";
}

function onNewPaymentTerminal() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A76:B76\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "New Payment Terminal";
}

function onNeedPen() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=2113782330&range=B20:D20\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    alert("Please assign the ticket to the person listed.");
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "Needs Pen";
}

function onNeedTerminal() {
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Does the POS Team know you plan to order a new payment terminal?";

    //POS IS AWARE
    document.getElementById("inlineRadio1").onclick = function() {
        alert("Please assign the ticket to the person listed.");
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=2113782330&range=B24:D24\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //POS IS NOT AWARE
    document.getElementById("inlineRadio2").onclick = function() {
        alert("Please consult the POS Team before ordering a new payment terminal for the store.");
    }
    secondTask = "Needs Terminal";
}

function onUnableCommunicate() {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A14:B14\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    document.getElementById("resolutionFrame").style.display = "block";
    secondTask = "Unable to Communicate";
}

function onReturnNotProcessing() {
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Was the return that is being processed purchased from the store processing the return?";

    //POS IS AWARE
    document.getElementById("inlineRadio1").onclick = function() {
        alert("The return should work automatically, if not escalate to L2.");
    }


    //POS IS NOT AWARE
    document.getElementById("inlineRadio2").onclick = function() {
        alert("Since the returned item(s) wasn't purchased at the store that's processing the return, the customer needs to insert their card into the payment terminal to finish the process. If after trying this it still isn't working, escalate to L2.");
    }
    secondTask = "Returns Not Processing";
}

function onOtherPaymentTerminal() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fourthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Payment Terminals";
}

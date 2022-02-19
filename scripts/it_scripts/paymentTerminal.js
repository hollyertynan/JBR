let paymentTerminalMap = new Map([
    ["Displays 'None' When Being Inserted", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A2:B2\"></iframe>"],
    ["Stuck On System Information", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A14:B14\"></iframe>"],
    ["Declining All Cards"],
    ["Debit Being Declined / Credit Being Stored for Later Processing", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A4:B6\"></iframe>"],
    ["Signature Stuck in Loop", "<iframe class=\"vh-50\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A12:B12\"></iframe>"],
    ["Screen is blank and white", "<iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A54:B54\"></iframe>"],
    ["Automatically Reads 'Cancelled' when Debit or Credit is selected as tender", "<iframe class=\"vh-100\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A50:B50\"></iframe>"],
    ["Critical Error: No USB Connection, please check cable", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A46:B46\"></iframe>"],
    ["'Maintenance Required' or 'Enter Password to Login'", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&ampchrome=true&amp;single=true&amp;range=A24:D24\"></iframe>"],
    ["New Payment Terminal to Setup", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A76:B76\"></iframe>"],
    ["Need a new stylus (pen)", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A20:D20\"></iframe>"],
    ["Need a new Payment Terminal"],
    ["Shows Message: 'WARNING: UNABLE TO COMMUNICATE WITH triPOS'", "<iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A14:B14\"></iframe>"],
    ["Return Not Processing"],
    ["Other"],
])

function onEventITPaymentTerminal(event) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fourthForm").innerHTML = "";
    switch(event.target.value) {
        case "Displays 'None' When Being Inserted":
            defaultPaymentTerminal(event.target.value);
            break;
        case "Stuck On System Information":
            defaultPaymentTerminal(event.target.value);
            break;
        case "Declining All Cards":
            onDeclinesAllCards();
            break;
        case "Debit Being Declined / Credit Being Stored for Later Processing":
            defaultPaymentTerminal(event.target.value);
            break;
        case "Signature Stuck in Loop":
            defaultPaymentTerminal(event.target.value);
            break;
        case "Screen is blank and white":
            defaultPaymentTerminal(event.target.value);
            break;
        case "Automatically Reads 'Cancelled' when Debit or Credit is selected as tender":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "Critical Error: No USB Connection, please check cable":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "'Maintenance Required' or 'Enter Password to Login'":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "New Payment Terminal to Setup":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "Need a new stylus (pen)":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "Need a new Payment Terminal":
            onNeedTerminal();
            break; 
        case "Shows Message: 'WARNING: UNABLE TO COMMUNICATE WITH triPOS'":
            defaultPaymentTerminal(event.target.value);
            break; 
        case "Return Not Processing":
            onReturnNotProcessing();
            break; 
        case "Other":
            onOtherPaymentTerminal()
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
        input += "<option value=\"" + paymentTerminalIssues[i] + "\">" + paymentTerminalIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}

function blankPaymentTerminal() {
    document.getElementById("fourthForm").innerHTML += "";
}



function defaultPaymentTerminal(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#paymentTerminalDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(paymentTerminalMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = taskName;
}





//CUSTOM CARD DECLINING FORM
function onDeclinesAllCards() {
    $("#paymentTerminalDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Is this happening on all registers?";
    secondTask = "Declines all Cards";

    //CARDS DECLINE ALL REGISTERS
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A20:B20\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //CARDS DECLINE SPECIFIC REGISTER
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A4:B6\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
}






//CUSTOM NEED TERMINAL FORM
function onNeedTerminal() {
    $("#paymentTerminalDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Does the POS Team know you plan to order a new payment terminal?";

    //POS IS AWARE
    document.getElementById("inlineRadio1").onclick = function() {
        document.getElementById("prompt").innerHTML = "Does the POS Team know you plan to order a new payment terminal?";
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A24:D24\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //POS IS NOT AWARE
    document.getElementById("inlineRadio2").onclick = function() {
        document.getElementById("prompt").innerHTML = "Please consult the POS Team before ordering a new payment terminal for the store.";
    }
    secondTask = "Needs Terminal";
}




//CUSTOM RETURN NOT PROCESSING FORM
function onReturnNotProcessing() {
    $("#paymentTerminalDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Was the return that is being processed purchased from the store processing the return?";

    //RETURN DONE AT STORE
    document.getElementById("inlineRadio1").onclick = function() {
        document.getElementById("prompt").innerHTML = "The return should work automatically, if not escalate to L2.";
    }


    //RETURN NOT DONE AT STORE
    document.getElementById("inlineRadio2").onclick = function() {
        document.getElementById("prompt").innerHTML = "Since the returned item(s) wasn't purchased at the store that's processing the return, the customer needs to insert their card into the payment terminal to finish the process. If after trying this it still isn't working, escalate to L2.";
    }
    secondTask = "Returns Not Processing";
}





//CUSTOM OTHER FORM
function onOtherPaymentTerminal() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fourthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#paymentTerminalDropdown").removeClass("bg-info border-info");
    $("#paymentTerminalDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Payment Terminals";
}

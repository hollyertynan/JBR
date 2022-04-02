const registerSoftwareIssues = [
    "TouchPOS Program Frozen",
    "'Unable to Access Credit' Message on Screen",
    "No Network Connection",
    "Communications Issues with Customer Account Lookup, but Store Has Network",
    "Monitor Loops the Message 'Unable to Read Signature - Retry?'",
    "'Illegal Bitmap Operation' Error",
    "'Call for Referral Code' Message on Monitor",
    "Register Screen is Stuck as the Windows Start menu",
    "Register is in Training Mode",
    "'Gift Card System Down' Message When Using or Selling a Gift Card",
    "Data Entry Field (Sku Field, Employee Number Field, etc.) is Filled with the Same Repeating Character",
    "Exception Occured: Data Error (Cyclical Redundancy Check)",
    "Return Not Processing",
    "Freeing Up Phantom Port in Use",
    "Setting Up Register Numbers for a New Employee",
    "Registers are Opened Without Being Issued in the Back Office",
    "Inhouse Charges Not Working",
    "'No Boot Device Found'",
    "Installing Splashtop",
    "Scanning Paint Causes Register to Freeze, or Doesn't Display All Colors",
    "Taskbar is in the Wrong Spot",
    "Loyalty Points Loading Slow/Receipts Not Processing When Scanned",
    "'File is Missing', or Mi9 Closes Out When Trying to Start Mi9 at the Registers",
    "Other"
]

const registerSoftwareMap = new Map([
    ["TouchPOS Program Frozen"],

    ["'Unable to Access Credit' Message on Screen", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A32:B32\"></iframe>"],

    ["No Network Connection"],
    ["Communications Issues with Customer Account Lookup, but Store Has Network", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A74:B74\"></iframe>"],

    ["Monitor Loops the Message 'Unable to Read Signature - Retry?'", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A12:B12\"></iframe>"],

    ["'Illegal Bitmap Operation' Error", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A44:B44\"></iframe>"],

    ["'Call for Referral Code' Message on Monitor", "<iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A50:B50\"></iframe>"],

    ["Register Screen is Stuck as the Windows Start menu", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A86:B86\"></iframe>"],

    ["Register is in Training Mode", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A88:B88\"></iframe>"],

    ["'Gift Card System Down' Message When Using or Selling a Gift Card", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A90:B90\"></iframe>"],

    ["Data Entry Field (Sku Field, Employee Number Field, etc.) is Filled with the Same Repeating Character", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A166:B166\"></iframe>"],

    ["Exception Occured: Data Error (Cyclical Redundancy Check)", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A92:B92\"></iframe>"],

    ["Return Not Processing"],

    ["Freeing Up Phantom Port in Use", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A130:C130\"></iframe>"],

    ["Setting Up Register Numbers for a New Employee"],

    ["Registers are Opened Without Being Issued in the Back Office", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A142:B142\"></iframe>"],

    ["Inhouse Charges Not Working", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A146:B146\"></iframe>"],

    ["'No Boot Device Found'", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A100:B100\"></iframe>"],

    ["Installing Splashtop", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1X2P25yZ_hH-DzA1QYk7grD0xnzVuiL9n/edit#heading=h.gjdgxs\"></iframe>"],

    ["Scanning Paint Causes Register to Freeze, or Doesn't Display All Colors", "<iframe class=\"vh-70\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A160:B160\"></iframe>"],

    ["Taskbar is in the Wrong Spot", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A158:B158\"></iframe>"],

    ["Loyalty Points Loading Slow/Receipts Not Processing When Scanned", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A74:B74\"></iframe>"],

    ["'File is Missing', or Mi9 Closes Out When Trying to Start Mi9 at the Registers", "<iframe class=\"vh-70\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A182:B182\"></iframe>"],

    ["Other"]
])

function onEventITRegisterSoftware(event) {
    document.getElementById("fifthForm").innerHTML = "";
    hideBlankQuestionnaire();
    hidePreviousInfo()
    switch(event.target.value) {
        case "Setting Up Register Numbers for a New Employee":
            document.getElementById("fifthForm").innerHTML = "<h3>Please escalate this issue to the POS Team and hit submit.<h3>";
            break
        case "Return Not Processing":
            onReturnNotProcessingSoftware();
            break
        case "Exception Occured: Data Error (Cyclical Redundancy Check)":
            document.getElementById("fifthForm").innerHTML = "<h3>Follow the steps below to resolve the issue, and alert the POS Team afterwards.<h3>";
            defaultRegisterSoftware(event.target.value);
            break
        case "Register is in Training Mode":
            document.getElementById("fifthForm").innerHTML = "<h3>If they haven't already, please make sure the store stops using that register IMMEDIATELY.<h3>";
            defaultRegisterSoftware(event.target.value);
            break
        case "TouchPOS Program Frozen":
            onRegisterFrozenSoftware();
            break
        case "No Network Connection":
            onNoNetworkConnection();
            break
        case "Other":
            onOtherRegisterSoftware();
            break
        default:
            defaultRegisterSoftware(event.target.value);
            break
        
    }
}

function makeRegisterSoftwareForm() {
    var input = "";
    input += "<div style=\"\"class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerSoftwareDropdown\" id=\"registerSoftwareDropdown\" onchange=\"onEventITRegisterSoftware(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < registerSoftwareIssues.length; i++) {
        input += "<option value=\"" + registerSoftwareIssues[i] + "\">" + registerSoftwareIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}





//CUSTOM RETURN NOT PROCESSING FORM
function onReturnNotProcessingSoftware() {
    $("#registerSoftwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Was the return that is being processed purchased from the store processing the return?";

    //RETURN DONE AT STORE
    document.getElementById("inlineRadio1").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "The return should work automatically, if not escalate to L2.";
    }


    //RETURN NOT DONE AT STORE
    document.getElementById("inlineRadio2").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "Since the returned item(s) wasn't purchased at the store that's processing the return, the customer needs to insert their card into the payment terminal to finish the process. If after trying this it still isn't working, escalate to L2.";
    }
    secondTask = "Returns Not Processing";
}





//DEFAULT REGISTER SOFTWARE FORM
function defaultRegisterSoftware(taskName) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#registerSoftwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(registerSoftwareMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = taskName;
}




//CUSTOM FORM FOR TOUCHPOS FROZEN
function onRegisterFrozenSoftware() {
    $("#registerSoftwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Are you able to log in to the register?";
    secondTask = "Register Frozen";

    //ABLE TO LOG INTO REGISTER
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A40:B40\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //UNABLE TO LOG INTO REGISTER
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A70:B70\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
}





//CUSTOM FORM FOR NO NETWORK CONNECTION
function onNoNetworkConnection() {
    $("#registerSoftwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioTwo").innerHTML = "Yes";
    document.getElementById("radioOne").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Check the network cable. Is it securely plugged into the back of the Register Tower?";
    document.getElementById("optionalNote").innerHTML += "NOTE: If this is happening on all registers, please click the 'Yes' button."
    secondTask = "Register Frozen";

    //ONE REGISTER/ETHERNET IS NOT CONNECTED
    document.getElementById("inlineRadio1").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "<h4 style:\"font-family: italic;\">Please securely plug the network cable into the back of the register tower. If this fixed the problem, hit submit, if it did not, hit 'Yes' below.</h4>"
    }


    //ALL REGISTERS/NETWORK IS CONNECTED
    document.getElementById("inlineRadio2").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "";
        source = "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A64:B65\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
}






//CUSTOM OTHER FORM FOR REGISTER SOFTWARE
function onOtherRegisterSoftware() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#registerSoftwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Register Software";
}

const registerHardwareIssues = [
    "Register Frozen / Unresponsive",
    "Communication Error / Network Down",
    "Receipt Printer Stops Printing, Displays Error Code 106 or Flashing 'Remove Document from Slip Printer'",
    "Hand Scanner Not Working",
    "Receipt Printer is Hung Up",
    "New Register Setup Has Arrived At Store",
    "Store needs a new Keyboard, Monitor, Printer, Scanner, etc.",
    "Receipt Printer Issues, Monitor Reads 'Illegal Bitmap Error'",
    "Message Displays on Monitor 'No Signal Input'",
    "Monitor Screen Needs Recalibration",
    "Monitor Display is Wrong/TouchPOS Looks Weird",
    "Cash Drawer Doesn't Pop During a Cash Sale",
    "Register is Stuck in Repair Mode",
    "Touch Screen Will not Respond to Input",
    "Other"
]

const registerHardwareMap = new Map([
    ["Register Frozen / Unresponsive", ""],
    ["Communication Error / Network Down", "<iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A64:B65\"></iframe>"],
    ["Receipt Printer Stops Printing, Displays Error Code 106 or Flashing 'Remove Document from Slip Printer'", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A38:B38\"></iframe>"],
    ["Hand Scanner Not Working", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A148:C148\"></iframe>"],
    ["Receipt Printer is Hung Up", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A72:B72\"></iframe>"],
    ["New Register Setup Has Arrived At Store", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1lEcWJOkRSD_EUj8xnZFPEHnG-5mNNsALEMZFPGasbI0/edit#heading=h.xelo7xrhz9st\"></iframe>"],
    ["Store needs a new Keyboard, Monitor, Printer, Scanner, etc.", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B20:D20\"></iframe>"],
    ["Receipt Printer Issues, Monitor Reads 'Illegal Bitmap Error'", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A44:B44\"></iframe>"],
    ["Message Displays on Monitor 'No Signal Input"],
    ["Monitor Screen Needs Recalibration", "<iframe class=\"vh-100\"src=\"https://docs.google.com/document/d/1kGTAsmiZJ-ojL1tn-k8FlCXmI6BILa0b_j0pVW7EitA/edit\"></iframe>"],
    ["Monitor Display is Wrong/TouchPOS Looks Weird", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A94:B94\"></iframe>"],
    ["Cash Drawer Doesn't Pop During a Cash Sale", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A102:B102\"></iframe>"],
    ["Register is Stuck in Repair Mode", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A150:B150\"></iframe>"],
    ["Touch Screen Will not Respond to Input", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A162:B162\"></iframe>"],
    ["Other"]
])



function makeRegisterHardwareForm() {
    var input = "";
    input += "<div style=\"\"class=\"container-fluid  text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"registerHardwareDropdown\" id=\"registerHardwareDropdown\" onchange=\"onEventITRegisterHardware(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < registerHardwareIssues.length; i++) {
        input += "<option value=\"" + registerHardwareIssues[i] + "\">" + registerHardwareIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}



function onEventITRegisterHardware(event) {
    document.getElementById("fifthForm").innerHTML = '';
    hidePreviousInfo();
    hideBlankQuestionnaire();
    switch(event.target.value) {
        case "Message Displays on Monitor 'No Signal Input'":
            $("#registerHardwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
            document.getElementById("fifthForm").innerHTML += "<h4 style=\"width: 80%;test-align:center;margin-left:10%;margin-right:10%;padding-bottom:2%;\">This message means the monitor is on, but it's not receiving any information from the computer to show an image on the screen. Have the store check to make sure that the computer tower is turned on. The power button should be lit. If it's not, instruct the store to push the power button to turn it on.</h4>";
            break
        case "Register Frozen / Unresponsive":
            onRegisterFrozen();
            break
        case "Other":
            onOtherRegisterHardware();
            break
        default:
            defaultRegisterHardware(event.target.value);
            break

    }
}


function defaultRegisterHardware(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#registerHardwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(registerHardwareMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = taskName;
}




//CUSTOM REGISTER FROZEN FORM
function onRegisterFrozen() {
    $("#registerHardwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
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

//CUSTOM OTHER FORM
function onOtherRegisterHardware() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#registerHardwareDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Register Hardware";
}

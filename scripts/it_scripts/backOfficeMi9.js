const backOfficeIssues = [
    "Red Flags in 1-1 Screen",
    "Transactions Not Going Through to the Back Office",
    "EOD Hung Up from the Previous Night",
    "No Network Connection",
    "Cash Up Issue",
    "'Load Amount Exceeds Cash in Safe' Message When Issuing Drawers",
    "Keyoard/Mouse Works on Email Computer, but not Mi9 Computer",
    "Issue with Poll File",
    "'Last Transaction Counter - None' Displays When Trying to Close a Drawer",
    "Black Screen, Won't Respond to Input",
    "'No Boot Device Found'",
    "Registers Are Opened Without Being Issued in the Back Office",
    "Back Office Needs to be Rebooted",
    "Cash Up Instructions Add/Change Requests",
    "Other"
]

const backOfficeMap = new Map([
    ["Red Flags in 1-1 Screen"],
    ["Transactions Not Going Through to the Back Office", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],
    ["EOD Hung Up from the Previous Night"],
    ["No Network Connection", "<iframe class=\"vh-70\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A64:C65\"></iframe>"],
    ["Cash Up Issue", "<h3 style=\"text-align:center;\">Please write a brief description in the sheet below and escalate the issue to the POS Team.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1IBCM87V3JkCNcfpq6LVnwdltXhkP-Il1_ILHcgSSmrU/edit#gid=0\"></iframe>"],
    ["'Load Amount Exceeds Cash in Safe' Message When Issuing Drawers", "<h3 style=\"text-align:center;\">Please follow the instructions below and immediately notify the POS Team.</h3><iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A84:B84\"></iframe>"],
    ["Keyoard/Mouse Works on Email Computer, but not Mi9 Computer", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A98:B98\"></iframe>"],
    ["Issue with Poll File", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team and hit \"Submit\".</h3>"],
    ["'Last Transaction Counter - None' Displays When Trying to Close a Drawer", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A106:B106\"></iframe>"],
    ["Black Screen, Won't Respond to Input", "<h3 style=\"text-align:center;\">Double check that the monitor cable is plugged in to both the computer and the monitor. If that doesn't work then give the computer a hard reboot, aka hold the power button until the PC shuts off and then turn it back on.</h3>"],
    ["'No Boot Device Found'", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A100:C100\"></iframe>"],
    ["Registers Are Opened Without Being Issued in the Back Office", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A142:B142\"></iframe>"],
    ["Back Office Needs to be Rebooted", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;single=true&amp;range=A140:B140\"></iframe>"],
    ["Cash Up Instructions Add/Change Requests", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B48:D48\"></iframe>"],
    ["Other"]
])

function makeBackOfficeForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"backOfficeDropdown\" id=\"backOfficeDropdown\" onchange=\"onEventITBackOffice(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < backOfficeIssues.length; i++) {
        input += "<option value=\"" + backOfficeIssues[i] + "\">" + backOfficeIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}

function onEventITBackOffice(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "EOD Hung Up from the Previous Night":
            hungUpEOD(event.target.value);
            break;
        case "Other":
            onOtherBackOffice();
            break;
        case "Red Flags in 1-1 Screen":
            makeRedFlagForm();
            break;
        default:
            defaultBackoffice(event.target.value);
            break;
    }
}


function defaultBackoffice(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#backOfficeDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(backOfficeMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}



//CUSTOM EOD HUNG UP FORM
function hungUpEOD(taskName) {
    $("#backOfficeDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Regardless of whether EOD is finished or not, does the 1-1 screen in the store's back office show the current date next to Accounting Period?";
    secondTask = "Register Frozen";

    //CURRENT DATE SHOWS
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<h3 style=\"text-align:center;\">Tell the store to go ahead and issue their drawers and follow the directions below.</h3><iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A26:B26\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    //CURRENT DATE DOES NOT SHOW
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
    
    secondTask = taskName;
}

function onOtherBackOffice() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#backOfficeDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Back Office";
}



/*


CUSTOM SECTION FOR RED FLAGS


*/


const redFlags = [
    "File Updater & Second db time recs/cutoff",
    "Transaction Counter",
    "Transaction Counter, File Updater & Second db time recs/cutoff",
    "Accounting Period, Transaction Counter, File Updater, & Second db time recs/cutoff",
    "Last Reg History Status and Transaction Counter with no Secondary Info",
    "Last Reg History Status and Transaction Counter with no Primary Info",
    "Registers Closed/Open",
    "Other"
]


const redFlagMap = new Map([
    ["File Updater & Second db time recs/cutoff", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A48:B48\"></iframe>"],
    ["Transaction Counter", "<h3 style=\"text-align:center;\">Due to changes made in Mi9 V9, the old fix for solving the transaction counter red flag no long works. Check the 'Primary A' side, and then go to the top right corner of the window and click 'Fast Inq'. If Primary A matches the Fast Inquiry, the store is all set to run EOD.</h3>"],
    ["Transaction Counter, File Updater & Second db time recs/cutoff", "<h3 style=\"text-align:center;\">NOTE: Using the fix below will set the transaction counter on Secondary B to 0. As long as the fast inquiry matches Primary A, this is okay.</h3><iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A132:B132\"></iframe>"],
    ["Accounting Period, Transaction Counter, File Updater, & Second db time recs/cutoff", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],
    ["Last Reg History Status and Transaction Counter with no Secondary Info", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A58:B58\"></iframe>"],
    ["Last Reg History Status and Transaction Counter with no Primary Info", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A82:B82\"></iframe>"],
    ["Registers Closed/Open"],
    ["Other"]
])


function makeRedFlagForm() {
    $("#backOfficeDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"redFlagDropdown\" id=\"redFlagDropdown\" onchange=\"onEventITRedFlags(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < redFlags.length; i++) {
        input += "<option value=\"" + redFlags[i] + "\">" + redFlags[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}


function onEventITRedFlags(event) {
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onOtherRedFlags();
            break;
        case "Registers Closed/Open":
            registersClosedOpen();
            break;
        default:
            defaultRedFlags(event.target.value);
            break;
    }
}

function defaultRedFlags(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#redFlagDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(redFlagMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function registersClosedOpen() {
    $("#redFlagDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    showBlankQuestionnaire();

    document.getElementById("radioOne").innerHTML = "Primary";
    document.getElementById("radioTwo").innerHTML = "Secondary";

    document.getElementById("prompt").innerHTML += "Does the Primary or the Secondary show the correct amount of registers?";

        //PRIMARY SHOWS CORRECT AMOUNT
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A138:B138\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    
        //SECONDARY SHOWS CORRECT AMOUNT
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    secondTask = "Red Flag on Registers Closed/Open";
}

function onOtherRedFlags() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#redFlagDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Red Flags";
}
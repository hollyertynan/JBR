const emailServerIssues = [
    "Won't Power On",
    "Doesn't Boot Up and has an Amber Light",
    "Reports & Huddle Up Not Loading/Out of Date",
    "'Runtime Error' Message When Trying to Access Certain Pages",
    "Keyboard/Mouse Works on the Mi9 Computer, but not on the Email Computer",
    "Phish Hook Button in Email Not Working",
    "Other"
]

const emailServerMap = new Map([
    ["Won't Power On", "<h3 style=\"text-align:center;\">Call the store. Have them Check all power cords and wires, make sure that all monitors are turned on and are properly connected to the tower. While they are doing this attempt to log into the Mail Server. If the issues persists, contact the POS Team.</h3>"],
    ["Doesn't Boot Up and has an Amber Light", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],
    ["Reports & Huddle Up Not Loading/Out of Date", "<iframe class=\"vh-50\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A36:B36\"></iframe>"],
    ["'Runtime Error' Message When Trying to Access Certain Pages", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B21:D21\"></iframe>"],
    ["Keyboard/Mouse Works on the Mi9 Computer, but not on the Email Computer", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A98:B98\"></iframe>"],
    ["Phish Hook Button in Email Not Working", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A144:B144\"></iframe>"],
    ["Other"]
])

function makeEmailServerForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"emailServerDropdown\" id=\"emailServerDropdown\" onchange=\"onEventITEmailServer(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < emailServerIssues.length; i++) {
        input += "<option value=\"" + emailServerIssues[i] + "\">" + emailServerIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}


function onEventITEmailServer(event) {
    switch(event.target.value) {
        case "Other":
            onOtherEmailServer();
            break;
        default:
            document.getElementById("fifthForm").innerHTML = "";
            defaultEmailServer(event.target.value);
            break;
    }
}



function defaultEmailServer(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#emailServerDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(emailServerMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onOtherEmailServer() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#emailServerDropdown").removeClass("bg-info border-info");
    $("#emailServerDropdown").addClass("bg-success border-success");
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Email Server";
}
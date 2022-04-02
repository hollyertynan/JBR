const kioskIssues = [
    "C3 Chip Key Programming Unit Needs an Update",
    "Screen Has Gone Black With Only The Cursor Available",
    "Timeclock Issues",
    "Online Orders Not Giving a Notification",
    "Other Online Order Issues",
    "Connection Issues",
    "No Link to Edit Weekly Comments",
    "Customer Quote Issues (Not Pricing Quotes)",
    "Other"
]

const kioskMap = new Map([
    ["C3 Chip Key Programming Unit Needs an Update", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B27:D27\"></iframe>"],

    ["Screen Has Gone Black With Only The Cursor Available", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A62:B62\"></iframe>"],

    ["Timeclock Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=1095304468&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B25:D25\"></iframe>"],

    ["Online Orders Not Giving a Notification", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A30:B30\"></iframe>"],

    ["Other Online Order Issues","<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],

    ["Connection Issues", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],

    ["No Link to Edit Weekly Comments", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A112:B112\"></iframe>"],

    ["Customer Quote Issues (Not Pricing Quotes)", "<h3 style=\"text-align:center;\">Send these up to Jay Ferrera.</h3>"],

    ["Other"]
])



function makeKioskForm() {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"kioskDropdown\" id=\"kioskDropdown\" onchange=\"onEventITKiosk(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < kioskIssues.length; i++) {
        input += "<option value=\"" + kioskIssues[i] + "\">" + kioskIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}


function onEventITKiosk(event) {
    switch(event.target.value) {
        case "Other":
            onKioskOther();
            break;
        default:
            defaultKiosk(event.target.value);
            break;
    }
}


function defaultKiosk(taskName) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#kioskDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(kioskMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onKioskOther() {
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";
    
    $("#kioskDropdown").removeClass("bg-info border-info");
    $("#kioskDropdown").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other";
}
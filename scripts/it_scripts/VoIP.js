const voipIssues = [
    "Phones Aren't Making or Receiving Calls",
    "Unable to Re-Record Phone Message",
    "Other"
]

const voipMap = new Map([
    ["Phones Aren't Making or Receiving Calls", "<h3 style=\"text-align:center;\">Verify if the store has tried resetting the phones themselves yet, and that their network is up before trying the next step with them. If the below instructions did not work, escalate the issue to the POS Team.</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chome=true&amp;single=true&amp;range=A67:B68\"></iframe>"],
    ["Unable to Re-Record Phone Message", "<h3 style=\"text-align:center;\">Before escalating this issue, make sure that the store is using the phone plugged into Port #1 on the edgwater box, and that they are using the proper numerical code for their store. The numerical code can be found in their Shared drive in Google. If that does not work, escalate this issue to the POS Team.</h3>"],
    ["Other"]
])


function makeVoIPForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"voipDropdown\" id=\"voipDropdown\" onchange=\"onEventITVoIP(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < voipIssues.length; i++) {
        input += "<option value=\"" + voipIssues[i] + "\">" + voipIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
    hidePreviousInfo();
}

function onEventITVoIP(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onVoIPOther();
        default:
            defaultVoIP(event.target.value);
            break;
    }
}

function defaultVoIP(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#voipDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(voipMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;');

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask= "VoIP Issues";
    secondTask = taskName;
}

function onVoIPOther() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#voipDropdown").removeClass("bg-info border-info");
    $("#voipDropdown").addClass("bg-success border-success");
    firstTask = "VoIP / Phone Issues",
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other";
}
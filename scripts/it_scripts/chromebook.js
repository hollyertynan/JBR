const chromebookIssues = [
    "Reports and Huddle Up Not Loading",
    "Sequencing Change Issues",
    "'Runtime Error' Message When Trying to Access Certain Pages",
    "Can't Connect to the Wi-Fi",
    "Can't Print",
    "Request for Additional Chromebook",
    "Other"
]

const chromebookMap = new Map([
    ["Reports and Huddle Up Not Loading"],
    ["Sequencing Change Issues", "<h3 style=\"text-align:center;\">Please escalate this issue to the POS Team.</h3>"],
    ["'Runtime Error' Message When Trying to Access Certain Pages", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;chrome=true&amp;widget=false&amp;single=true&amp;range=B21:C21\"></iframe>"],
    ["Can't Connect to the Wi-Fi", "<h3 style=\"text-align:center;\">Please use the person listed under Backup Responsible Person. (Person on the right.)</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;chrome=true&amp;widget=false&amp;single=true&range=B3:D3\"></iframe>"],
    ["Can't Print", "<h3 style=\"text-align:center;\">Please use the person listed under Backup Responsible Person. (Person on the right.)</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;chrome=true&amp;widget=false&amp;single=true&range=B3:D3\"></iframe>"],
    ["Request for Additional Chromebook"],
    ["Other"]
])

function makeChromebookForm() {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"chromebookDropdown\" id=\"chromebookDropdown\" onchange=\"onEventITChromebook(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < chromebookIssues.length; i++) {
        input += "<option value=\"" + chromebookIssues[i] + "\">" + chromebookIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}


function onEventITChromebook(event) {
    document.getElementById("fourthForm").innerHTML = "";
    switch(event.target.value) {
        case "Request for Additional Chromebook":
            newChromebookRequest(event.target.value);
            break;
        case "Other":
            onChromebookOther();
            break;
        default:
            defaultChromebook(event.target.value);
            break;
    }
}

function defaultChromebook(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#chromebookDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(chromebookMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Chromebook";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function newChromebookRequest(taskName) {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    hidePreviousInfo();
    hideBlankQuestionnaire();
    let team = getTeamOfStore();
    document.getElementById("fourthForm").innerHTML = "<h3>Request for a new Chromebook should go to the Team Inventory/Operations Manager for a store.</h3>";
    

    if(team == 1) {
        $("#resolutionFrame").html("<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A1:D5\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    } else if(team == 2) {
        $("#resolutionFrame").html("<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A7:D11\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    } else if(team == 3) {
        $("#resolutionFrame").html("<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A15:D19\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    } else {
        $("#resolutionFrame").html("<h3 class=\"text-center\">If you put in a store number next time, this will show the correct team right away.</h3><iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A1:D19\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    }

    $("#chromebookDropdown").removeClass("bg-info border-info");
    $("#chromebookDropdown").addClass("bg-success border-success");

    firstTask = taskName;
}


function onChromebookOther() {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#chromebookDropdown").removeClass("bg-info border-info");
    $("#chromebookDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Chromebook Other";
}
const phoneLineSteps = [
    "Requesting a New Line",
    "New Line Approved, But Not Added Yet",
    "New Line Added, But Store Needs Help With Setup"
]

const phoneLineStepsMap = new Map([ 
    ["Requesting a New Line"],
    ["New Line Approved, But Not Added Yet", "<h3 style=\"text-align:center;\">If the store has already received approval for a new line from their Team Ops Manager, the request needs to be bumped to the POS Team to contact NHC.</h3>"],
    ["New Line Added, But Store Needs Help With Setup", "<h3 style=\"text-align:center;\">For instructions to setup the new phone line, please have the store refer to the VoIP setup guide on their Google Drive. It can be found by typing 'voip' into the search bar. All instructions are store specific.</h3>"]
])

function makeNewPhoneLineForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"phoneLineDropdown\" id=\"phoneLineDropdown\" onchange=\"onEventITNewPhoneLine(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < phoneLineSteps.length; i++) {
        input += "<option value=\"" + phoneLineSteps[i] + "\">" + phoneLineSteps[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
    hidePreviousInfo();
}

function onEventITNewPhoneLine(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Requesting a New Line":
            onNewPhoneLineRequest(event.target.value);
            break;
        default:
            defaultNewPhoneLine(event.target.value);
            break;
    }
}

function defaultNewPhoneLine(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#phoneLineDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(phoneLineStepsMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;');

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask= "Request for New Phone Line";
    secondTask = taskName;
}


function onNewPhoneLineRequest(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    let team = getTeamOfStore();
    document.getElementById("fourthForm").innerHTML = "<h3>Requests for a new phone line go to the Team Operations Manager for a store.</h3>";
    

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

    $("#phoneLineDropdown").removeClass("bg-info border-info");
    $("#phoneLineDropdown").addClass("bg-success border-success");

    firstTask = "Request for New Phone Line"
    secondTask = taskName;
}
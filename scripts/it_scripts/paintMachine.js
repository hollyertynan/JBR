const paintMachineIssues = [
    "Spectrometer Not Calibrating",
    "Tinter not Responding to Commands in ColoRx; No Error Messages",
    "Other"
]

const paintMachineMap = new Map([
    ["Spectrometer Not Calibrating", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B16:D16\"></iframe>"],
    ["Tinter not Responding to Commands in ColoRx; No Error Messages", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A104:B104\"></iframe>"],
    ["Other"]
])


function makePaintMachineForm() {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"paintMachineDropdown\" id=\"paintMachineDropdown\" onchange=\"onEventITPaintMachine(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < paintMachineIssues.length; i++) {
        input += "<option value=\"" + paintMachineIssues[i] + "\">" + paintMachineIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}

function onEventITPaintMachine(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            paintMachineOther();
            break;
        default:
            defaultPaintMachine(event.target.value);
            break;
    }
}

function defaultPaintMachine(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#paintMachineDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(paintMachineMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Paint Computer";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function paintMachineOther() {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#paintMachineDropdown").removeClass("bg-info border-info");
    $("#paintMachineDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Paint Computer Other";
}
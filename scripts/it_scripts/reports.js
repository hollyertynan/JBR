const reportsIssues = [
    "Reports Not Loading/Out of Date",
    "Other"
]

const reportsMap = new Map([
    ["Reports Not Loading/Out of Date", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A36:B36\"></iframe>"],
    ["Other"]
])

function makeReportsForm() {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"reportsDropdown\" id=\"reportsDropdown\" onchange=\"onEventITReports(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < reportsIssues.length; i++) {
        input += "<option value=\"" + reportsIssues[i] + "\">" + reportsIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}

function onEventITReports(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            reportsOther();
            break;
        default:
            defaultReports(event.target.value);
            break;
    }
}

function defaultReports(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#reportsDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(reportsMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Reports";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function reportsOther() {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#reportsDropdown").removeClass("bg-info border-info");
    $("#reportsDropdown").addClass("bg-success border-success");
    fifthTask = "Reports";
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Reports Other";
}
const elvisIssues = [
    "Store's Inventory on Their Devices Shows Store 170",
    "Issues with Mi9 Merchant/Cycle Counts/Zero Audits",
    "Issues With Capture/Khoros App",
    "Other"
]

const elvisMap = new Map([
    ["Store's Inventory on Their Devices Shows Store 170", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A154:B154\"></iframe>"],
    ["Issues with Mi9 Merchant/Cycle Counts/Zero Audits", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B50:D50\"></iframe>"],
    ["Issues With Capture/Khoros App", "<h3 style=\"text-align:center;\">For the time being, send these issues to Ben Aubuchon until we have someone working with Khoros for the long term.</h3>"],
    ["Other", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B46:D46\"></iframe>"]
])


function makeElvisForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"ElvisDropdown\" id=\"ElvisDropdown\" onchange=\"onEventITElvis(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < elvisIssues.length; i++) {
        input += "<option value=\"" + elvisIssues[i] + "\">" + elvisIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
    hidePreviousInfo();
}

function onEventITElvis(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        default:
            defaultElvis(event.target.value);
            break;
    }
}

function defaultElvis(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#ElvisDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(elvisMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;');

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask= "Elvis Device Issues";
    secondTask = taskName;
}
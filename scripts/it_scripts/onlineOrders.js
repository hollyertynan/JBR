const onlineOrderIssues = [
    "Kiosk Will Not Let Store Pick Products to Fill an Online Order",
    "Online Order: Blinky Does Not Blink and No Print Out",
    "Store Having Issues Canceling an Online Order",
    "Uncanceling a Line on an Online Order",
    "Other"
]

const onlineOrderMap = new Map([
    ["Kiosk Will Not Let Store Pick Products to Fill an Online Order", "<h3 style=\"text-align:center;\">Make sure the store is using Google Chrome. If they are using Internet Explorer instead of Chrome, set the kiosk to use Chrome by default and they should be able to pick the order.</h3>"],

    ["Online Order: Blinky Does Not Blink and No Print Out", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A16:B16\"></iframe>"],

    ["Store Having Issues Canceling an Online Order", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A180:B180\"></iframe>"],

    ["Uncanceling a Line on an Online Order", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A170:B170\"></iframe>"],

    ["Other"]
])

function makeOnlineOrderForm() {
    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"onlineOrderDropdown\" id=\"onlineOrderDropdown\" onchange=\"onEventITOnlineOrder(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < onlineOrderIssues.length; i++) {
        input += "<option value=\"" + onlineOrderIssues[i] + "\">" + onlineOrderIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("thirdForm").innerHTML = input;
}

function onEventITOnlineOrder(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onOnlineOrdersOther();
        default:
            defaultOnlineOrder(event.target.value);
            break;
    }
}


function defaultOnlineOrder(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#onlineOrderDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(onlineOrderMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Online Order";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function onOnlineOrdersOther() {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#onlineOrderDropdown").removeClass("bg-info border-info");
    $("#onlineOrderDropdown").addClass("bg-success border-success");
    fifthTask = "Online Orders";
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Online Orders Other";
}
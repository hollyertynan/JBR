const wiFiIssues = [
    "Installing a Second AP",
    "Blinking Red Light on AP",
    "No/Slow WiFi Connection on Wireless Devices",
    "Need to Connect to Manager's WiFi, Don't Know Password",
    "Other"
]



const wiFiMap = new Map([
    ["Installing a Second AP", "<h3 style=\"text-align:center;\">Please provide the store with the directions below. You can also click <u><a href=\"#Foo\" onclick=\"copyToClipboard('https://docs.google.com/document/d/1efqPl4uTyUjOtk2GwoSEELiA1rDdEJtdE4M2CnyyKOg/edit#')\">here</a></u> to copy a link to the directions to provide to the store.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1efqPl4uTyUjOtk2GwoSEELiA1rDdEJtdE4M2CnyyKOg/edit#\"></iframe>"],
    ["Blinking Red Light on AP", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A96:B96\"></iframe>"],
    ["No/Slow WiFi Connection on Wireless Devices", "<h3 style=\"text-align:center;\">Ensure that the problem is happening on all wireless devices in the store. If it is only happening on one, then the problem is with the device and not the WiFi. If the below directions don't work, please follow the directions for 'Blinking Red Light on AP'.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A64:B65\"></iframe>"],
    ["Need to Connect to Manager's WiFi, Don't Know Password", "<h3 style=\"text-align:center;\">Please use the password provided below. <u>DO NOT GIVE THIS PASSWORD IN THE TICKET.</u> Give this password to the manager over the phone.</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A118:B118\"></iframe>"],
    ["Other"]
])


function makeWiFiForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"WiFiDropdown\" id=\"WiFiDropdown\" onchange=\"onEventITWiFi(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < wiFiIssues.length; i++) {
        input += "<option value=\"" + wiFiIssues[i] + "\">" + wiFiIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
    hidePreviousInfo();
}

function onEventITWiFi(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onWiFiOther();
            break;
        default:
            defaultWifi(event.target.value);
            break;
    }
}

function defaultWifi(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#WiFiDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(wiFiMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;');

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask= "WiFi Issues";
    secondTask = taskName;
}

function onWiFiOther() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#WiFiDropdown").removeClass("bg-info border-info");
    $("#WiFiDropdown").addClass("bg-success border-success");
    firstTask = "WiFi Issues",
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other";
}
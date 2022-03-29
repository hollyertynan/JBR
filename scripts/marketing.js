const marketingIssues = [
    "Chamber of Commerce Dues",
    "Problems with Kronos/Time Clock",
    "Store Asking for New Now Hiring Signs"
]

const marketingMap = new Map([
    ["Chamber of Commerce Dues", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=642263605&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A13:D13\"></iframe>"],
    ["Problems with Kronos/Time Clock", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=1095304468&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A5:D5\"></iframe>"]
    ["Store Asking for New Now Hiring Signs"]
])


function onEventMarketing(event) {
    switch(event.target.value) {
        case "Store Asking for New Now Hiring Signs":
            alternativeDefaultMarketing(event.target.value, "Requests for new Now Hiring signs", "Team HR Manager");
            break;
        default: 
            onMarketingDefault(event.target.value);
            break;
    }
}

function onMarketingDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#marketingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(marketingMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function alternativeDefaultMarketing(taskName, request, handler) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    let team = getTeamOfStore();
    document.getElementById("fourthForm").innerHTML = "<h3>" + request + " go to the " + handler + " for a store.</h3>";
    

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

    $("#marketingDropdown").removeClass("bg-info border-info");
    $("#marketingDropdown").addClass("bg-success border-success");

    firstTask = taskName;
}

function blankMarketing() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#marketingDropdown").addClass("bg-info border-info");
    $("#marketingDropdown").removeClass("bg-success border-success");
}


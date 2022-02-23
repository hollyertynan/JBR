const marketingIssues = [
    "Chamber of Commerce Dues",
    "Problems with Kronos/Time Clock"
]

const marketingMap = new Map([
    ["Chamber of Commerce Dues", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=642263605&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A13:D13\"></iframe>"],
    ["Problems with Kronos/Time Clock", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=1095304468&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A5:D5\"></iframe>"]
])


function onEventMarketing(event) {
    switch(event.target.value) {
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

function blankMarketing() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#accountingDropdown").addClass("bg-info border-info");
    $("#accountingDropdown").removeClass("bg-success border-success");
}


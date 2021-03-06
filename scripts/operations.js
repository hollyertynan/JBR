const onOperationsIssues = [
    "Need Orange Shelf Tape",
    "Need New Equipment (Red Hook Locks, Paint Keys, etc)",
    "Forklift Maintenance",
    "Card Swipe Cleaning Cards",
    "Rubbish / Property Maintenance",
    "Store Use Safety Masks",
    "New Glass and / or Plexi Cutter",
    "New Integrity Cleaner Shirt Needed for Porter",
    "Business Cards",
    "New Brush / Cutwheel for the Key Machine",
    "Need Materials for Screen Repair",
    "Ordering More Member Sign-Up Sheets",
    "Setting Up Register Numbers for a New Employee",
    "Store Asking for New Aisle Header Signs",
    "Store Asking for New Now Hiring Signs",
    "Store Asking For Touchpoint Stickers",
    "Need 'Journey IQ' Password Reset",
    "Store Needs Rental Contracts",
    "Store Needs Lanyards",
    "Store Asking for Gift Cards",
    "Clear Plastic Sign Holders",
    "Other"
]

let operationsMap = new Map([
    ["Need Orange Shelf Tape", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A4:D4\"></iframe>"],

    ["Need New Equipment (Red Hook Locks, Paint Keys, etc)", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:C14\"</iframe>"],

    ["Forklift Maintenance", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A12:D12\"</iframe>"],

    ["Card Swipe Cleaning Cards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A18:C18\"</iframe>"],

    ["Rubbish / Property Maintenance", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A13:E13\"</iframe>"],

    ["Store Use Safety Masks", "<h3 style=\"padding-bottom: 2%;\">Stores should be using the Covid-19 Protective Equipment link on the front page of the Resource Center homepage for this. That link will take them to a Google Form they can fill out for more masks. Please instruct them to use that link in the future. The link can be found on the RSC Homepage, then by going to \"Covid-19\" on the sidebar, and clicking \"Equipment Order Form\".</h3>"],

    ["New Glass and / or Plexi Cutter", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A20:D20\"</iframe>"],

    ["New Integrity Cleaner Shirt Needed for Porter", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A21:D21\"</iframe>"],

    ["Business Cards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B13:C13\"</iframe>"],

    ["New Brush / Cutwheel for the Key Machine", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A126:B126\"</iframe>"],

    ["Need Materials for Screen Repair", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A128:B128\"</iframe>"],

    ["Ordering More Member Sign-Up Sheets", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A136:C136\"</iframe>"],

    ["Setting Up Register Numbers for a New Employee", "<h3 class=\"text-center pb-3\">Please send this issue to the POS Team</h3>"],

    ["Store Asking for New Aisle Header Signs"],

    ["Store Asking for New Now Hiring Signs"],

    ["Store Asking For Touchpoint Stickers", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A27:D27\"></iframe>"],

    ["Need 'Journey IQ' Password Reset"],

    ["Store Needs Rental Contracts", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A28:D28\"></iframe>"],

    ["Store Needs Lanyards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=1442970144&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A10:D10\"></iframe>"],

    ["Store Asking for Gift Cards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A15:D15\"></iframe>"],

    ["Clear Plastic Sign Holders", "<iframe class=\"vh-30\" src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A29:D29\"></iframe>"],

    ["Other", "<h3 class=\"text-center\">Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><br/>"]

]);


function onEventOperations(event) {
    document.getElementById("fourthForm").innerHTML = "";
    switch(event.target.value) {
        case "Need New Equipment (Red Hook Locks, Paint Keys, etc)":
            alternativeDefaultOperations(event.target.value, "Requests for New In-Store Equipment", "Team Operations Manager");
            break;
        case "Need 'Journey IQ' Password Reset":
            alternativeDefaultOperations(event.target.value, "Requests for Journey IQ password resets", "Team Operations Manager");
            break;
        case "Need New Equipment":
            alternativeDefaultOperations(event.target.value, "Requests for new in store equipment", "Team Operations Manager");
            break;
        case "Forklift Maintenance":
            alternativeDefaultOperations(event.target.value, "Requests regarding forklift maintenance", "Team Operations Manager");
            break;
        case "Store Asking for New Aisle Header Signs":
            alternativeDefaultOperations(event.target.value, "Requests for new Aisle Headers", "Team Merchandising Manager");
            break;
        case "Store Asking for New Now Hiring Signs":
            alternativeDefaultOperations(event.target.value, "Requests for new Now Hiring signs", "Team HR Manager");
            break;
        default: 
            onOperationsDefault(event.target.value);
            break;
    }
}

function onOperationsDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#operationsDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(operationsMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});

    
    secondTask = taskName;
}

function alternativeDefaultOperations(taskName, request, handler) {
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
        $("#resolutionFrame").html("<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A16:D20\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    } else {
        $("#resolutionFrame").html("<h3 class=\"text-center\">If you put in a store number next time, this will show the correct team right away.</h3><iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=221&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A1:D20\"></iframe>");
        $("#resolutionFrame").attr('style', 'display:block;');
    }

    $("#operationsDropdown").removeClass("bg-info border-info");
    $("#operationsDropdown").addClass("bg-success border-success");

    firstTask = taskName;
}


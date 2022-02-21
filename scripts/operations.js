let operationsMap = new Map([
    ["Need Orange Shelf Tape", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B4:D4\"</iframe>"],

    ["Need New Equipment", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:C14\"</iframe>"],

    ["Forklift Maintenance", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A12:D12\"</iframe>"],

    ["Sequencing", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Card Swipe Cleaning Cards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A18:C18\"</iframe>"],

    ["Rubbish / Property Maintenance", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A13:E13\"</iframe>"],

    ["Store Use Safety Masks", "<h3>UNDER CONSTRUCTION</h3>"],

    ["New Glass and / or Plexi Cutter", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A20:D20\"</iframe>"],

    ["New Integrity Cleaner Shirt Needed for Porter", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A21:D21\"</iframe>"],

    ["Business Cards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=56243274&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B13:C13\"</iframe>"],

    ["New Brush / Cutwheel for the Key Machine", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A126:B126\"</iframe>"],

    ["Need Materials for Screen Repair", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A128:B128\"</iframe>"],

    ["Ordering More Member Sign-Up Sheets", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A136:B136\"</iframe>"],

    ["Setting Up Register Numbers for a New Employee", "<h3 class=\"text-center pb-3\">Please send this issue to the POS Team</h3>"],

    ["Other", "<h3 class=\"text-center\">Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><br/>"]

]);


function onEventOperations(event) {
    switch(event.target.value) {
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
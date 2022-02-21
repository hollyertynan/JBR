let operationsMap = new Map([
    ["Need Orange Shelf Tape", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Need New Equipment", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Forklift Maintenance", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Sequencing", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Card Swipe Cleaning Cards", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Rubbish / Property Maintenance", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Store Use Safety Masks", "<h3>UNDER CONSTRUCTION</h3>"],

    ["New Glass and / or Plexi Cutter", "<h3>UNDER CONSTRUCTION</h3>"],

    ["New Integrity Cleaner Shirt Needed for Porter", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Business Cards", "<h3>UNDER CONSTRUCTION</h3>"],

    ["New Brush / Cutwheel for the Key Machine", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Need Materials for Screen Repair", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Ordering More Member Sign-Up Sheets", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Setting Up Register Numbers for a New Employee", "<h3>UNDER CONSTRUCTION</h3>"],

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
    $("#resolutionFrame").html(accountingMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}
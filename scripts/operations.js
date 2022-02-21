let operationsMap = new Map([
    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

    ["blank", "<h3>UNDER CONSTRUCTION</h3>"],

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
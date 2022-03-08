// OFFICE/KIOSK/RENTAL PRINTER PIPELINE


const officePrinterIssues = [
    "No Power",
    "Not Printing",
    "Paper Continually Gets Jammed",
    "Won't Scan",
    "Fuser Error",
    "Printer Index Out of Range",
    "Store Needs Toner/Price Tickets/Ink Ribbon",
    "Other"
]

const officePrinterMap = new Map([
    ["No Power", "<h3 style=\"text-align:center;\">If the printer is plugged into a power strip, check the switch on the power strip. Ensure the power cable for the printer is plugged in all the way, and that the printer is powered on. If these have all been checked and the printer is still not receiving power, please send to the person listed below. In this case, use the backup responsible person.</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:D14\"></iframe>"],

    ["Not Printing", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:D14\"></iframe>"],

    ["Paper Continually Gets Jammed", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:D14\"></iframe>"],

    ["Won't Scan", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:D14\"></iframe>"],

    ["Fuser Error", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B14:D14\"></iframe>"],

    ["Printer Index Out of Range", "<h3 style=\"text-align:center;\">If the instructions below don't work, please escalate to Evan Pinsoneault rather than the POS Team.</h3><iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A164:B164\"></iframe>"],

    ["Store Needs Toner/Price Tickets/Ink Ribbon", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=1192200083&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A2:D13\"></iframe>"],

    ["Other"]
])


function makeOfficePrinterForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"officePrinterDropdown\" id=\"officePrinterDropdown\" onchange=\"onEventITOfficePrinter(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < officePrinterIssues.length; i++) {
        input += "<option value=\"" + officePrinterIssues[i] + "\">" + officePrinterIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}


function onEventITOfficePrinter(event) {
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onOfficePrinterOther();
            break;
        default:
            defaultOfficePrinter(event.target.value);
            break;
    }
}


function defaultOfficePrinter(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#officePrinterDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(officePrinterMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Office/Kiosk/Rental Printer";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onOfficePrinterOther() {
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#officePrinterDropdown").removeClass("bg-info border-info");
    $("#officePrinterDropdown").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Office/Kiosk/Rental Printer Other";
}






// PRICE TICKET PRINTER PIPELINE   

const priceTicketIssues = [
    "No Power/Light Around the Feed Button is Off",
    "Not Printing and the Light Around the Feed Button is Flashing",
    "Not Printing Anything on the Labels",
    "Tickets are Printing Out Mis-aligned",
    "Won't Print, Displays Message 'Cannot Create Record, All Numbers in Use'",
    "Unit Has Power, Mi9 Thinks It's Printing, but No Labels Print",
    "Other"
]

const priceTicketMap = new Map([
    ["No Power/Light Around the Feed Button is Off", "<iframe class=\"vh-50\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A172:B172\"></iframe>"],
    ["Not Printing and the Light Around the Feed Button is Flashing"],
    ["Not Printing Anything on the Labels", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A22:B22\"></iframe>"],
    ["Tickets are Printing Out Mis-aligned", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A60:B60\"></iframe>"],
    ["Won't Print, Displays Message 'Cannot Create Record, All Numbers in Use'", "<h3 style=\"text-align:center;\">This issue is caused by a backup of downloaded tickets that aren't printed. Please escalate to the POS Team.</h3>"],
    ["Unit Has Power, Mi9 Thinks It's Printing, but No Labels Print", "<iframe class=\"vh-30\"src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A124:B124\"></iframe>"],
    ["Other"]
])


function makePriceTicketForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"priceTicketDropdown\" id=\"priceTicketDropdown\" onchange=\"onEventITPriceTicket(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < priceTicketIssues.length; i++) {
        input += "<option value=\"" + priceTicketIssues[i] + "\">" + priceTicketIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}


function onEventITPriceTicket(event) {
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onPriceTicketOther();
            break;
        case "Not Printing and the Light Around the Feed Button is Flashing":
            flashingLightsPriceTicket();
            break;
        default:
            defaultPriceTicket(event.target.value);
            break;
    }
}


function defaultPriceTicket(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#priceTicketDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(priceTicketMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Price Ticket Printer";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onPriceTicketOther() {
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#priceTicketDropdown").removeClass("bg-info border-info");
    $("#priceTicketDropdown").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Price Ticket Printer Other";
}


function flashingLightsPriceTicket() {
    hidePreviousInfo();
    fiveButtonQuestionnaire();

    document.getElementById("prompt").innerHTML += "What is the color sequence on the Price Ticket Printer?"
    document.getElementById("radioOne").innerHTML = "Flashing Amber";
    document.getElementById("radioTwo").innerHTML = "Flashing Red";
    document.getElementById("radioThree").innerHTML = "Double Flashing Green";
    document.getElementById("radioFour").innerHTML = "Solid Amber";
    document.getElementById("radioFive").innerHTML = "Alternating Red and Green";
    

    //FLASHING AMBER
    document.getElementById("inlineRadio1").onclick = function() {
        source = `<h3 style=\"text-align:center;\">Flashing Amber after powering on:
        The printer has failed its power on self test (POST)
        If this error occurs right after you turn on the printer, contact an authorized reseller for assistance.
        
        Unit needs to be replaced. Escalate to the POS Team.`;
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
        secondTask = "Flashing Amber";
    }
    
    
    //FLASHING RED
    document.getElementById("inlineRadio2").onclick = function() {
        source = `<h3 style=\"text-align:center;\">DIRECT FROM PRINTER USER GUIDE:
        Either the media (label stickers) or the printer ribbon (ink) is out. Open the printer using the two green buttons on either side of the printer and replace appropriate empty roll.
        
        Close the printer when done and press the feed button to resume printing. The feed button light should be solid green or flashing green.</h3>`;
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
        secondTask = "Flashing Red";
    }

    //DOUBLE FLASHING GREEN
    document.getElementById("inlineRadio3").onclick = function() {
        source = `<h3 style=\"text-align:center;\">The printer is paused. Press the feed button to resume printing.</h3>`;
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
        secondTask = "Double Flashing Green";
    }

    //SOLID AMBER
    document.getElementById("inlineRadio4").onclick = function() {
        source = `<h3 style=\"text-align:center;\">The print head is over or under temperature. If it is under temp, operations can continue while it comes back up to temp. If it is over temp, printing will stop until the print head cools to an acceptable printing temperature. When it does, the printer will automatically resume operation.</h3>`;
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
        secondTask = "Solid Amber";
    }

    //ALTERNATELY FLASHING RED AND GREEN
    document.getElementById("inlineRadio5").onclick = function() {
        source = `<h3 style=\"text-align:center;\">Flash memory is not programmed - return the printer to an authorized reseller.

        Unit needs to be replaced. Escalate to the POS Team.</h3>`;
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
        secondTask = "Alternating Red and Green";
    }


    $("#priceTicketDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Not Printing and the Light Around the Feed Button is Flashing";
    fifthTask = "Price Ticket Printer"
}









// PAINT LABEL PRINTER PIPELINE


const paintLabelIssues = [
    "No Power",
    "Printer Index Out of Range",
    "Other"
]

const paintLabelMap = new Map([
    ["No Power", "<h3 style=\"text-align:center;\">Check the power supply cord plugged into the back of the printer. Ensure it is plugged in properly on both sides. If there is other devices plugged into the same outlet and it is working, escalate to the POS Team. If no power is going to any device from that outlet, have an employee at the store switch the printer to another outlet.</h3>"],
    ["Printer Index Out of Range", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A164:B164\"></iframe>"],
    ["Other"]
])


function makePaintLabelForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"paintLabelDropdown\" id=\"paintLabelDropdown\" onchange=\"onEventITPaintLabel(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < paintLabelIssues.length; i++) {
        input += "<option value=\"" + paintLabelIssues[i] + "\">" + paintLabelIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}


function onEventITPaintLabel(event) {
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Other":
            onPaintLabelOther();
            break;
        default:
            defaultPaintLabel(event.target.value);
            break;
    }
}

function defaultPaintLabel(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#paintLabelDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(paintLabelMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    fifthTask = "Paint Label Printer";
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onPaintLabelOther() {
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";
    
    $("#paintLabelDropdown").removeClass("bg-info border-info");
    $("#paintLabelDropdown").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Paint Label Printer Other";
}
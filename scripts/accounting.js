let accountingMap = new Map([
    ["PO / EDI Issues", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Missing / Voided Transactions", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.3kdpu03fle1u\"></iframe>"],

    ["Changing Canadian Conversion Rate", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1ufv0T_8oO5gP0NJDdmSrUx9pE_bvV8wjEQ69pyIaxS8/edit\"></iframe>"],

    ["Setting Up a New Home Heating Customer Account", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A17:D17\"></iframe>"],

    ["Defective Items / Credits", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=B8:D8\"></iframe>"],

    // this one is acting weird - Tynan 2/19/2022
    // changing it to A18-C18 fixed it, although it's got the blank A column space, but whatever.
    ["Store Has a Customer That Was Double Charged", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A18:D18\"></iframe>"], 

    ["Issues With Updates to In-House Accounts"],

    // this one doesn't have anything in old JBR - Tynan 2/19/2022
    ["Sales Audit / Daybook Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A23:D23\"></iframe>"],

    ["Store is Processing a Return and it's Being Declined"],

    ["Other"]

]);


function onEventAccounting(event) {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Store is Processing a Return and it's Being Declined":
            onReturnNotProcessingAccounting();
            break;
        case "Issues With Updates to In-House Accounts":
            onInhouseAccounts();
            break;
        case "PO / EDI Issues":
            makePOEDIForm();
            break;
        case "Other":
            onOtherAccounting();
            break;
        default: 
            onAccountingDefault(event.target.value);
            break;
    }
}

function onAccountingDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(accountingMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}
 
function blankAccounting() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#accountingDropdown").addClass("bg-info border-info");
    $("#accountingDropdown").removeClass("bg-success border-success");
}


//CUSTOM FORM FOR INHOUSE ACCOUNT ISSUES
function onInhouseAccounts() {
    hidePreviousInfo();
    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    showBlankQuestionnaire();

    document.getElementById("radioOne").innerHTML = "Unable to process charges";
    document.getElementById("radioTwo").innerHTML = "Other";

    document.getElementById("prompt").innerHTML += "What is the issue?";

        //UNABLE TO PROCESS CHARGES
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A146:B146\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
            secondTask = "Unable to process charges"
        }
    
    
        //OTHER
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<iframe class=\"vh-70\" src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A21:D21\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
            secondTask = "Other"
        }
    
    firstTask = "Inhouse Account Issues"; 
}

//CUSTOM RETURN NOT PROCESSING FORM
function onReturnNotProcessingAccounting() {
    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    hidePreviousInfo();
    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";
    showBlankQuestionnaire();

    document.getElementById("prompt").innerHTML += "Was the return that is being processed purchased from the store processing the return?";

    //RETURN DONE AT STORE
    document.getElementById("inlineRadio1").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "The return should work automatically, if not escalate to L2.";
    }


    //RETURN NOT DONE AT STORE
    document.getElementById("inlineRadio2").onclick = function() {
        document.getElementById("fifthForm").innerHTML = "Since the returned item(s) wasn't purchased at the store that's processing the return, the customer needs to insert their card into the payment terminal to finish the process. If after trying this it still isn't working, escalate to L2.";
    }
    secondTask = "Returns Not Processing";
}


//CUSTOM OTHER FORM FOR ACCOUNTING
function onOtherAccounting() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    document.getElementById("fifthForm").scrollIntoView({behavior: "smooth"});
    secondTask = "Other Accounting";
}






/*


Below is a custom section specifically for PO/EDI Issues


*/


const purchaseOrderIssues = [
    "PO Not Showing in EDI",
    "Re-opening Closed POs",
    "Store Can't Access EDI",
    "Store Cannot Enter In Counts on the PO/Buttons Greyed Out",
    "Other"
]

const purchaseOrderMap = new Map([
    ["PO Not Showing in EDI", "<h3 style=\"text-align:center\">If a PO is not showing in EDI, it needs to be sent to Accounting. Please fill in the vendor below and send the ticket to the person marked 'Responsible AP Person'. If none exists, please escalate to Damian or Suzanne.</h3><iframe class=\"vh-50\" src=\"http://aubdata2/Reports/Pages/Report.aspx?ItemPath=%2fAccounting+Reports%2fVendor+Info+%28Mi9%29\"></iframe>"],
    ["Re-opening Closed POs", "<iframe class=\"vh-70\" src=\"https://docs.google.com/document/d/1SmP8sj7hde9HTfFBbZ4TNQABBLAipadfiindDCO8I4Q/edit#bookmark=id.qfa9x0wtgtws\"></iframe>\""],
    ["Store Can't Access EDI"],
    ["Store Cannot Enter In Counts on the PO/Buttons Greyed Out", "<iframe class=\"vh-70\" src=\"https://docs.google.com/document/d/1SmP8sj7hde9HTfFBbZ4TNQABBLAipadfiindDCO8I4Q/edit#bookmark=id.ipdmfxc05a8n\"></iframe>\""],
    ["Other", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B25:D25\"></iframe>"]
])


function makePOEDIForm() {
    $("#accountingDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"POEDIDropdown\" id=\"POEDIDropdown\" onchange=\"onEventPOEDIIssues(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < purchaseOrderIssues.length; i++) {
        input += "<option value=\"" + purchaseOrderIssues[i] + "\">" + purchaseOrderIssues[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
}


function onEventPOEDIIssues(event) {
    hidePreviousInfo();
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value){
        case "Store Can't Access EDI":
            onEDIAccess();
            break;
        default:
            defaultPOEDI(event.target.value);
            break;
    }
}

function defaultPOEDI(taskName) {
    hideBlankQuestionnaire();

    $("#POEDIDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(purchaseOrderMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}


function onEDIAccess() {
    $("#POEDIDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    showBlankQuestionnaire();

    document.getElementById("radioOne").innerHTML = "Yes";
    document.getElementById("radioTwo").innerHTML = "No";

    document.getElementById("prompt").innerHTML += "Is the error a runtime error?";
    document.getElementById("optionalNote").innerHTML = "Note: If this is only happening on one device it is a Wifi Error, make sure you check the Kiosk, Mail Server, and Chromebook.";

        //YES RUNTIME ERROR
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B21:D21\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    
        //NO RUNTIME ERROR
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<iframe class=\"vh-70\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A114:B114\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    firstTask = "Store Can't Access EDI";
}



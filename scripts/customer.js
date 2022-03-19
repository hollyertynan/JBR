let customerMap = new Map([
    ["New Military Discount Form",
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.2v2hsqvh4a2u\"></iframe>"],

    ["New Pro Discount Form", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.f0uyn7nakwr8\"></iframe>"],

    ["Merge Customer Accounts",
    "<h3>UNDER CONSTRUCTION</h3>"],

    ["Special Pricing / Price Quote", 
    "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=56243274&amp;widget=true&amp;range=B10:D10\"></iframe>"],

    ["New Tax Exempt Form", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=56243274&amp;widget=true&amp;range=B6:D6\"></iframe>"],

    ["Add Points Request", "<h3 style=\"text-align:center;\">Please fill out the information in the spreadsheet below.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/spreadsheets/d/1W8soXxGHCZeujW2d8V3NTDEhiD3QzQieCAej_Z9HbBI/edit#gid=1988892003\"></iframe>"],

    // we missed this one somewhere along the line
    ["Customer Rewards Issue", 
    "<h3 class=\"text-center\">UNDER MAINTENANCE</h3>"],
    
    ["Store has Customer that was Double Charged", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=A18:D18\"></iframe>"],

    ["Request to Delete Customer Account", "<h3>Please make sure the store has a valid reason for wanting an account deleted. Employee accounts (PAST OR PRESENT) are NOT to be deleted.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.h6e40akfu4us\"></iframe>"],
    
    ["Customer / Store Unable to Register Customer for Online Account", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=0&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=E263:F263\"></iframe>"],

    ["Ordering More Member Sign-Up Sheets", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A136:C136\"</iframe>"],

    ["Customer Lost Year End Rewards", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=790165298&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A16:D16\"</iframe>"],

    ["Other", "<h3 class=\"p-3 text-center\">Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>"]
]);

function onEventCustomer(event) {
    document.getElementById("fourthForm").innerHTML = "";
    switch(event.target.value) {
        case "Merge Customer Accounts":
            makeCustomerMergeForm();
            break;
        default: 
            onCustomerDefault(event.target.value);
            break;
    }
}

function onCustomerDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#customerDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(customerMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}











/*



CUSTOM MERGING CUSTOMER ACCOUNTS PIPELINE



*/



const mergeCriteria = [
    "Normal Customer Account + Normal Customer Account",
    "Normal Customer Account + Military Account",
    "Normal Customer Account + Pro Account",
    "Normal Customer Account + Employee Account",
    "Military Account + Pro Account",
    "Military Account + Military Account",
    "Military Account + Employee Account",
    "Pro Account + Pro Account",
    "Pro Account + Employee Account"
]

const mergeMap = new Map([
    ["Normal Customer Account + Normal Customer Account", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Normal Customer Account + Military Account", "<h3 style=\"text-align:center;\">Please make sure the Military discount is tied to the account that is kept.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Normal Customer Account + Pro Account", "<h3 style=\"text-align:center;\">Unless the customer no longer wants their account to be a Pro account, make sure that the Pro discount is tied to the account that remains.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Normal Customer Account + Employee Account", "<h3 style=\"text-align:center;\">When merging a normal customer account with an employee customer account (whether current or former employee), please make sure the employee account is NOT THE DELETED ACCOUNT.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Military Account + Pro Account", "<h3 style=\"text-align:center;\">Customer accounts can not have both Pro and Military discounts attached to them. Please check with the store and have them check with the customer on which type of account they would like to keep before proceeding.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Military Account + Military Account", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Military Account + Employee Account", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Pro Account + Pro Account", "<h3 style=\"text-align:center;\">Pro accounts can have different tiers. Please check with Misty Snyder on which accoutn should be kept BEFORE completing the instructions below. If Misty is unavailable, check with Jared Brown.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"],

    ["Pro Account + Employee Account", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.ou0zzujvdpu4\"></iframe>"]
])


function onEventCustomerMerge(event) {
    switch(event.target.value) {
        default:
            onMergeDefault(event.target.value);
            break;
    }
}

function makeCustomerMergeForm() {
    $("#customerDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"paymentTerminalDropdown\" id=\"mergeDropdown\" onchange=\"onEventCustomerMerge(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < mergeCriteria.length; i++) {
        input += "<option value=\"" + mergeCriteria[i] + "\">" + mergeCriteria[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = input;
    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}



function onMergeDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#mergeDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(mergeMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}
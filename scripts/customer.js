let customerMap = new Map([
    ["New Military Discount Form",
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.2v2hsqvh4a2u\"></iframe>"],

    ["New Pro Discount Form", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.f0uyn7nakwr8\"></iframe>"],

    ["Merge Customer Accounts", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Special Pricing / Price Quote", 
    "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=56243274&amp;widget=true&amp;range=B10:D10\"></iframe>"],

    ["New Tax Exempt Form", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=56243274&amp;widget=true&amp;range=B5:D5"],

    ["Add Points Request", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Customer Rewards Issue", "<h3>UNDER CONSTRUCTION</h3>"],

    ["Store has Customer that was Double Charged", "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=A18:D18\"></iframe>"],

    ["Request to Delete Customer Account", "<h3>UNDER CONSTRUCTION</h3>"],
    
    ["Customer / Store Unable to Register Customer for Online Account", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=0&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=E263:F263\"></iframe>"],

    ["Ordering More Member Sign-Up Sheets", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A136:C136\"</iframe>"],

    ["Other", "<h3>UNDER CONSTRUCTION</h3>"]
]);


function onEventCustomer(event) {
    switch(event.target.value) {
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
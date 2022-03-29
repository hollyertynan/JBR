let productMap = new Map([
    ["Benjamin Moore National Accounts Order"],

    ["Sending E-Mail to Store for Ben Moore National Accounts Order", "<iframe src=\"https://docs.google.com/spreadsheets/d/1EHxtSvRCfrIEy3LK_fLgnRu5Ov7N6EdMVj2cmKu-Jfo/htmlembed?gid=0&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=C30:D30\"></iframe>"],

    ["Benjamin Moore Web Sales Order", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1zDKyGV8MNtJrN7q_e-5evyLEmWLJbb-DG5uLIPC9t64/edit\"></iframe>"],

    ["Change Product Min and / or Max"],

    ["Changing Min/Max on a Suspended Product", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.2ckvp4ekk3u8\"></iframe>"],

    ["PO/EDI Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=B25:D25\"></iframe>"],

    ["Paint Over Max Order", 
    "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1JqAxLJFS2J_Poag57C5VJPuif1xbDRCXmm5VH6aBeuo/edit\"></iframe>"],

    ["Product Needs a SKU", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B16:D16\"></iframe>"],

    ["UPC Not On File", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B12:D12\"></iframe>"],

    ["Need a Vendor Website Password Reset"],

    ["Retail Price Issues (Not Markdown)"],

    ["Cost Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B2:D2\"></iframe>"],

    ["Smart Cycle Count Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B7:D7\"></iframe>"],

    ["Special Order Issues", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B8:D8\"></iframe>"],

    ["Store Specific Clearance Pricing", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.pufx8h954y10\"></iframe>"],

    ["Store Specific Temporary Pricing", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B10:D10\"></iframe>"],

    ["Customer Pricing Quote", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B3:D3\"></iframe>"],

    ["Honda Orders", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B5:D5\"></iframe>"],

    ["Order More Bad Air Sponges", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B30:D30\"></iframe>"],

    ["Immediate Price Changes", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.wci5p6vv6cm7\"></iframe>"],

    ["Store Needs Bloodborne Kit", "<h3>Bloodborne Kits are ordered by the Team Inventory/Operations Manager. Please Take a look at the Gold List to find the Inventory/Operations Manager for a specific store.</h3><iframe src=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/htmlembed?gid=43&range=A1\"></iframe>"],

    ["Item Packaging Not Correct", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=790165298&amp;widget=true&amp;range=B25:D25\"></iframe>"],

    ["Battery Core Charges", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?single=true&amp;gid=1612994648&amp;widget=true&amp;chrome=false&amp;range=A122:B122\"></iframe>"],

    ["Minimum Quantity Required to Close a PO", "<h3 style=\"float:top\" class=\"p-3 text-center\">Please locate the vendor in the dropdown and send it to the person listed under \"Product Team Person\".</h3> <iframe class=\"vh-100\" src=\"http://aubdata2/Reports/Pages/Report.aspx?ItemPath=%2fAccounting+Reports%2fVendor+Info+%28Mi9%29\"></iframe>"],

    ["Item Description Incorrect / Unclear / Missing", "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B38:D38\"></iframe>"],

    ["Store Needs to Cancel a Transfer", "<iframe src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A184:B184\"></iframe>"],

    ["Other", "<h3 class=\"p-3 text-center\">Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>"]
]);

/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventProduct(event) {
    switch(event.target.value) {
        case "Benjamin Moore National Accounts Order":
            onBenMooreNationalAccountsOrder();
            break;
        case "Change Product Min and / or Max":
            onChangeProductMinMax();
            break;
            break;
        case "Need a Vendor Website Password Reset":
            onVendorWebsitePassword();
            break; 
        case "Retail Price Issues (Not Markdown)":
            onRetailPriceIssueNotMarkdown();
            break; 
        case "Store Needs Bloodborne Kit":
            onBloodborneKit(event.target.value);
            break;
        case "Other":
            onProductDefault(event.target.value);
            break;     
        default: 
            onProductDefault(event.target.value);
            break;
    }
}

//DEFAULT PRODUCT FUNCTION
function onProductDefault(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(productMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;');

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = taskName;
}




//CUSTOM BEN MOORE NATIONAL ACCOUNTS ORDER FORM
function onBenMooreNationalAccountsOrder() {
    hidePreviousInfo();
    fiveButtonQuestionnaire();

    document.getElementById("prompt").innerHTML += "Which step of the process are you completing?"
    document.getElementById("radioOne").innerHTML = "Check store stock and Confirm or Reject order";
    document.getElementById("radioTwo").innerHTML = "Notify the customer of availability";
    document.getElementById("radioThree").innerHTML = "Removing the product from inventory";
    document.getElementById("radioFour").innerHTML = "Completing the order - customer pickup";
    document.getElementById("radioFive").innerHTML = "Submitting signed form for credit";
    

    //CHECK STORE STOCK/CONFIRM OR REJECT ORDER
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/14BPeHu4cadKj3wKrdLXpNsPhba-r39UL-MhWLGYbMwk/edit#bookmark=id.n11v0612bv75\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }
    
    
    //NOTIFY THE CUSTOMER OF AVAILABILITY
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/14BPeHu4cadKj3wKrdLXpNsPhba-r39UL-MhWLGYbMwk/edit#bookmark=id.vlt077hcmc7n\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //REMOVING THE PRODUCT FROM INVENTORY
    document.getElementById("inlineRadio3").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/14BPeHu4cadKj3wKrdLXpNsPhba-r39UL-MhWLGYbMwk/edit#bookmark=id.2fcp7dbzgwyx\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //COMPLETING THE ORDER - CUSTOMER PICKUP
    document.getElementById("inlineRadio4").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/14BPeHu4cadKj3wKrdLXpNsPhba-r39UL-MhWLGYbMwk/edit#bookmark=id.3e7b30r1b0r7\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //SUBMITTING SIGNED FORM FOR CREDIT
    document.getElementById("inlineRadio5").onclick = function() {
        source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/14BPeHu4cadKj3wKrdLXpNsPhba-r39UL-MhWLGYbMwk/edit#bookmark=id.er4asm2ezx8x\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }


    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<h3>UNDER CONSTRUCTION</h3>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Ben Moore National Accounts Order";
}





//CHANGE PRODUCT MAX CUSTOM FORM
function onChangeProductMinMax() {
    hidePreviousInfo();
    showBlankQuestionnaire();

    document.getElementById("radioOne").innerHTML = "Over 5 Skus";
    document.getElementById("radioTwo").innerHTML = "Under 5 Skus";

    document.getElementById("prompt").innerHTML += "How many Skus are there?";

        //OVER 5 SKUS, ONLICK DISPLAY INSTRUCTIONS FOR OVER 5 SKUS ON YES RADIO BUTTON
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.4jld8xy4oocb\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    
        //UNDER 5 SKUS, ONLICK DISPLAY INSTRUCTIONS FOR UNDER 5 SKUS ON NO RADIO BUTTON
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.sl8axyivd97z\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Change Product Min/Max";
}




//CUSTOM VENDOR WEBSITE FORM
function onVendorWebsitePassword() {
    hideBlankQuestionnaire();
    hidePreviousInfo();

    document.getElementById("radioOne").innerHTML = "Orgill";
    document.getElementById("radioTwo").innerHTML = "Emery (EJD)";
    document.getElementById("radioThree").innerHTML = "Benjamin Moore";
    threeButtonQuestionnaire();
    document.getElementById("prompt").innerHTML += "What vendor website needs a password reset?";
    document.getElementById("optionalNote").innerHTML += "Note: if using Orgill, make sure the store has tried the \"Forgot password?\" option.";


    //ORGILL RADIO BUTTON
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B13:D13\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //EMERY RADIO BUTTON
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B13:D13\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //BEN MOORE RADIO BUTTON
    document.getElementById("inlineRadio3").onclick = function() {
        alert(`
    For Benjamin Moore password issues, please have the store contact Evan Conkey at Evan.Conkey@benjaminmoore.com and go from there. We currently have no one in the office who handles these issues.
        `);
    }

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Vendor Website Password";
}




//CUSTOM RETAIL PRICE ISSUES FORM
function onRetailPriceIssueNotMarkdown() {
    hideBlankQuestionnaire();
    hidePreviousInfo();

    document.getElementById("radioOne").innerHTML = "Stihl and Husqvarna";
    document.getElementById("radioTwo").innerHTML = "Honda";
    document.getElementById("radioThree").innerHTML = "All Other Pricing Issues";
    threeButtonQuestionnaire();
    document.getElementById("prompt").innerHTML += "What vendor is this issue for?";


    //STIHL AND HUSQVARNA ISSUES
    document.getElementById("inlineRadio1").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B45:D45\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //HONDA ISSUES
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B44:D44\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //ALL OTHER ISSUES
    document.getElementById("inlineRadio3").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B6:D6\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Price Issue (Not Markdown)";
}

//CUSTOM BLOODBORNE KIT FORM
function onBloodborneKit(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    let team = getTeamOfStore();
    document.getElementById("fourthForm").innerHTML = "<h3>Request for Bloodborne Kits go to the Team Operations Manager for a store.</h3>";
    

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

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");

    firstTask = taskName;
}


function blankProduct() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";

    $("#productDropdown").addClass("bg-info border-info");
    $("#productDropdown").removeClass("bg-success border-success");
    document.getElementById("secondForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onProductOther() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Product Other";
}
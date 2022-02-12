/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventProduct(event) {
    switch(event.target.value) {
        case "1":
            onBenMooreNationalAccountsOrder();
            break;
        case "2":
            onProductDefault(event.target.value, "Ben Moore Web Sales Order")
            break;
        case "3":
            onChangeProductMinMax();
            break;
        case "4":
            onPOEDI();
            break;
        case "5":
            onProductDefault(event.target.value, "Paint Over Max")
            break;
        case "6":
            onNeedsSKU();
            break;
        case "7":
            onUPCNotOnFile();
            break; 
        case "8":
            onVendorWebsitePassword();
            break; 
        case "9":
            onRetailPriceIssueNotMarkdown();
            break; 
        case "10":
            onCostIssue();
            break; 
        case "11":
            onSmartCycleCounts();
            break; 
        case "12":
            onSpecialOrderIssues();
            break; 
        case "13":
            onStoreSpecificClearance();
            break; 
        case "14":
            onStoreSpecificTemporary();
            break; 
        case "15":
            onCustomerPricingQuote();
            break; 
        case "16":
            onHonda();
            break; 
        case "17":
            onOrderBadAirSponge();
            break; 
        case "18":
            onImmediatePriceChanges();
            break; 
        case "19":
            onBloodborneKit();
            break;
        case "20":
            onItemPackagingNotCorrect();
            break;  
        case "21":
            onBatteryCoreCharges();
            break; 
        case "22":
            onMinQuantityRequiredClosePO();
            break;
        case "23":
            onItemDiscriptionIncorrect();
            break; 
        case "24":
            onProductOther();
            break;     
        default: 
            blankProduct();
            break;
    }
}

let productMap = new Map([
    ["2", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1zDKyGV8MNtJrN7q_e-5evyLEmWLJbb-DG5uLIPC9t64/edit\"></iframe>"],
    ["5", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1JqAxLJFS2J_Poag57C5VJPuif1xbDRCXmm5VH6aBeuo/edit\"></iframe>"]
]);

function onProductDefault(caseNum, taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(productMap.get(caseNum));
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = taskName;
}

function onBenMooreNationalAccountsOrder() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<h3>UNDER CONSTRUCTION</h3>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Ben Moore National Accounts Order";
}

function onBenMooreWebSalesOrder() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1zDKyGV8MNtJrN7q_e-5evyLEmWLJbb-DG5uLIPC9t64/edit\"></iframe>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Ben Moore Web Sales Order";
}

function onChangeProductMinMax() {
    showBlankQuestionnaire();
    hidePreviousInfo();

    document.getElementById("prompt").innerHTML += "Are there over 5 Skus?";

        //OVER 5 SKUS, ONLICK DISPLAY INSTRUCTIONS FOR OVER 5 SKUS ON YES RADIO BUTTON
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.4jld8xy4oocb\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    
        //UNDER 5 SKUS, ONLICK DISPLAY INSTRUCTIONS FOR UNDER 5 SKUS ON NO RADIO BUTTON
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<iframe src=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.sl8axyivd97z\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Change Product Min/Max";
}

function onPOEDI() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<h3>UNDER CONSTRUCTION</h3>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "PO EDI";
}

function onPaintOverMax() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1JqAxLJFS2J_Poag57C5VJPuif1xbDRCXmm5VH6aBeuo/edit\"></iframe>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Paint Over Max";
}

function onNeedsSKU() {
    hidePreviousInfo();
    hideBlankQuestionnaire();
    
    $("#productDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html("<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTX24xVOEWwucJGjbvsV4kNsSJ7TlUgTOShNrvZAC9C2ectQ7BzsrYhGjWpENfZ89jXssg9sTS0XL1m/pubhtml?single=true&amp;gid=907924166&amp;widget=true&amp;range=B12:D12\"></iframe>");
    $("#resolutionFrame").attr('style', 'display:block;')

    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    firstTask = "Needs SKU";
}

function onUPCNotOnFile() {
    hideBlankQuestionnaire();
    hidePreviousInfo();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B12:D12\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    alert("Please assign the ticket to the person listed.");
    document.getElementById("resolutionFrame").style.display = "block";
    firstTask = "UPC Not On File";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
}

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
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B13:D13\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //EMERY RADIO BUTTON
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B13:D13\"></iframe>";
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
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B45:D45\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //HONDA ISSUES
    document.getElementById("inlineRadio2").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B44:D44\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    //ALL OTHER ISSUES
    document.getElementById("inlineRadio3").onclick = function() {
        source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B6:D6\"></iframe>";
        document.getElementById("resolutionFrame").innerHTML = source;
        document.getElementById("resolutionFrame").style.display = "block";
    }

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Price Issue (Not Markdown)";
}

function onCostIssue() {
    hideBlankQuestionnaire();
    hidePreviousInfo();

    source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B2:D2\"></iframe>";
    document.getElementById("resolutionFrame").innerHTML = source;
    alert("Please assign the ticket to the person listed.");
    document.getElementById("resolutionFrame").style.display = "block";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Cost Issue";
}

function onSmartCycleCounts() {
    hideBlankQuestionnaire();
    hidePreviousInfo();
    alert("UNDER CONSTRUCTION");

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Smart Cycle Counts";
}

function onSpecialOrderIssues() {
    alert("UNDER CONSTRUCTION");

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    firstTask = "Special Order Issues";
}

function onStoreSpecificClearance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.pufx8h954y10\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for insturctions to process requests for Store Specific Clearance Pricing.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Store Specific Clearance";
}

function onStoreSpecificTemporary() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B10\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the name of the person to forward all Store Specific Temporary Pricing issues to.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Store Specific Temporary";
}

function onCustomerPricingQuote() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B3:D3\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the name of the person to forward all Special Order issues and inquiries to. After following the link, please click Submit.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Customer Pricing Quote";
}

function onHonda() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B5:D5\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the name of the person to forward all Honda Order issues and inquiries to. After following the link, please click Submit</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Honda";
}

function onOrderBadAirSponge() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B30:C30\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the person who creates new POs for Bad Air Sponges.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Order Bad Air Sponge";
}

function onImmediatePriceChanges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.wci5p6vv6cm7\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for instructions to do Immediate Price Changes.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"><h5>After following the instructions, if you have any problems, please escalate this issue to <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B31\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a>, provide any information you think may be helpful and click Submit.</h5><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Immediate Price Changes";
}

function onBloodborneKit() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>These tickets should be going to the stores Inventory/Operations manager. Please click <a href=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/edit#gid=221&range=A21\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for a list of team managers. To determine which team the store is a part of go to the Stores tab, ctrl+f search the store number and look in column c.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Bloodborne Kit";
}

function onItemPackagingNotCorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Only choose this option if you are 100% certain that the item doesn't match the packaging. Call the store and talk with the person who submitted the ticket to confirm. Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B25\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the person to send these tickets to.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Item Packing Not Correct";
}

function onBatteryCoreCharges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>We are legally required to charge a core charge when selling the lawnmower batteries. We are also legally required to take the old battery back. When a store inquires about how the battery core charges work when ringing out a customer, click <a href=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A122:B122\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for an explanation from the Product Team.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Battery Core Charges";
}

function onMinQuantityRequiredClosePO() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1GPHOQxF7bteImiyo-pWVcbZG01d5kVfLHiDy62R087k/edit#gid=0\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for a list of all Product Team responsible people and their vendors, then forward the PO issue to whoever deals with that vendor.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Min Quantity To Close PO";
}

function onItemDiscriptionIncorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B38\" target=\"_blank\" class=\"text-hyperlink-color\">HERE</a> for the person to forward all Item Description issues to.</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Item Discription Incorrect";
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
    document.getElementById("thirdForm").innerHTML += "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid  text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"></div></div><div class=\"col-2\"></div></div></div>";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Product Other";
}
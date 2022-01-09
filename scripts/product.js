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
            onBenMooreWebSalesOrder();
            break;
        case "3":
            onChangeProductMinMax();
            break;
        case "4":
            onPOEDI();
            break;
        case "5":
            onPaintOverMax();
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

function onBenMooreNationalAccountsOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBenMooreWebSalesOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1zDKyGV8MNtJrN7q_e-5evyLEmWLJbb-DG5uLIPC9t64/edit\" target=\"_blank\" class=\"text-warning\">HERE</a> for a link to the Benjamin Moore vendor playbook to process web sales orders.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onChangeProductMinMax() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onPOEDI() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onPaintOverMax() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1JqAxLJFS2J_Poag57C5VJPuif1xbDRCXmm5VH6aBeuo/edit\" target=\"_blank\" class=\"text-warning\">HERE</a> for instructions on how to handle Paint Over Max Orders.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onNeedsSKU() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>If you have a min/max request that contains a product in need of a new sku, or if you have a request to have a sku created for a new item(s), please reassign the ticket/request to the person listed <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B16:D16\" target=\"_blank\" class=\"text-warning\">HERE</a> and make the backup person a follower.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onUPCNotOnFile() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=C12\" target=\"_blank\" class=\"text-warning\">HERE</a> for the person to send all UPC Not On File issues to.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onVendorWebsitePassword() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onRetailPriceIssueNotMarkdown() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3 class=\"text-danger\">UNDER CONSTRUCTION</h3><br><br>";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onCostIssue() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B2:D2\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Cost Issues to. After following the link, please click Submit.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onSmartCycleCounts() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B7:D7\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Smart Cycle Count issues to.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onSpecialOrderIssues() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B8:C8\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Special Order issues and inquiries to. After following the link, please click Submit.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onStoreSpecificClearance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.pufx8h954y10\" target=\"_blank\" class=\"text-warning\">HERE</a> for insturctions to process requests for Store Specific Clearance Pricing.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onStoreSpecificTemporary() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B10\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Store Specific Temporary Pricing issues to.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onCustomerPricingQuote() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B3:D3\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Special Order issues and inquiries to. After following the link, please click Submit.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onHonda() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B5:D5\" target=\"_blank\" class=\"text-warning\">HERE</a> for the name of the person to forward all Honda Order issues and inquiries to. After following the link, please click Submit</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onOrderBadAirSponge() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B30:C30\" target=\"_blank\" class=\"text-warning\">HERE</a> for the person who creates new POs for Bad Air Sponges.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onImmediatePriceChanges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/document/d/1mFusBLuX-9x6au519f7vxTo-QVzDbCIfJl4v-RJS_dY/edit#bookmark=id.wci5p6vv6cm7\" target=\"_blank\" class=\"text-warning\">HERE</a> for instructions to do Immediate Price Changes.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\"><h5>After following the instructions, if you have any problems, please escalate this issue to <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B31\" target=\"_blank\" class=\"text-warning\">HERE</a>, provide any information you think may be helpful and click Submit.</h5><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBloodborneKit() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>These tickets should be going to the stores Inventory/Operations manager. Please click <a href=\"https://docs.google.com/spreadsheets/d/1YcfBW3r3amEy2YHrdHQf1WlJ881D1x3gsnHE4rroB-o/edit#gid=221&range=A21\" target=\"_blank\" class=\"text-warning\">HERE</a> for a list of team managers. To determine which team the store is a part of go to the Stores tab, ctrl+f search the store number and look in column c.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onItemPackagingNotCorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Only choose this option if you are 100% certain that the item doesn't match the packaging. Call the store and talk with the person who submitted the ticket to confirm. Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=790165298&range=B25\" target=\"_blank\" class=\"text-warning\">HERE</a> for the person to send these tickets to.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBatteryCoreCharges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>We are legally required to charge a core charge when selling the lawnmower batteries. We are also legally required to take the old battery back. When a store inquires about how the battery core charges work when ringing out a customer, click <a href=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/edit#gid=1612994648&range=A122:B122\" target=\"_blank\" class=\"text-warning\">HERE</a> for an explanation from the Product Team.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onMinQuantityRequiredClosePO() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1GPHOQxF7bteImiyo-pWVcbZG01d5kVfLHiDy62R087k/edit#gid=0\" target=\"_blank\" class=\"text-warning\">HERE</a> for a list of all Product Team responsible people and their vendors, then forward the PO issue to whoever deals with that vendor.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onItemDiscriptionIncorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<h3>Please click <a href=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/edit#gid=907924166&range=B38\" target=\"_blank\" class=\"text-warning\">HERE</a> for the person to forward all Item Description issues to.</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
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
    document.getElementById("thirdForm").innerHTML += "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3><div class=\"container-fluid bg-dark text-center whitePlaceholder pt-5 pb-5\"><div class=\"row align-items-center\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\"pb-3\"><input id=\"comments\" type=\"text\" name=\"comments\" placeholder=\"Comments\" style=\"width: 100%; text-align: left\" class=\"InitialButtons text-light bg-secondary text-light form-select-lg\">";

    $("#itDropdown").removeClass("bg-info border-info");
    $("#itDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "Product Other";
}
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
            onStoreSpecificClearance();
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
        default: 
            blankProduct();
            break;
    }
}

/* 

default pipeline

*/

function blank() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
}

function onBenMooreNationalAccountsOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBenMooreWebSalesOrder() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onChangeProductMinMax() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onPOEDI() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onPaintOverMax() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onNeedsSKU() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onUPCNotOnFile() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onVendorWebsitePassword() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onRetailPriceIssueNotMarkdown() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onCostIssue() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onSmartCycleCounts() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onSpecialOrderIssues() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onStoreSpecificClearance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onStoreSpecificClearance() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onCustomerPricingQuote() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onHonda() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onOrderBadAirSponge() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onImmediatePriceChanges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBloodborneKit() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onItemPackagingNotCorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onBatteryCoreCharges() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onMinQuantityRequiredClosePO() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function onItemDiscriptionIncorrect() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

function blankProduct() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "";

    $("#productDropdown").removeClass("bg-info border-info");
    $("#productDropdown").addClass("bg-success border-success");
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "";
}

let arrayMasterlist = [
    chromebookIssues,
    backOfficeIssues,
    elvisIssues,
    emailServerIssues,
    itMaintenanceTasks,
    kioskIssues,
    phoneLineSteps,
    onlineOrderIssues,
    paintMachineIssues,
    paymentTerminalIssues,
    onProductIssues,
    onAccountingIssues,
    onCustomerIssues,
    onOperationsIssues,
    marketingIssues,
    purchaseOrderIssues,
    officePrinterIssues,
    priceTicketIssues,
    paintLabelIssues,
    registerHardwareIssues, 
    registerSoftwareIssues,
    reportsIssues,
    voipIssues,
    wiFiIssues
]

let category
let searchStr

let searchResults = [

]

function getCategory(arrayAssignment) {
    switch(arrayAssignment) {
        case chromebookIssues:
            category = " IT > Chromebooks";
            break;
        case backOfficeIssues:
            category = "IT > Back Office";
            break;
        case elvisIssues:
            category = "IT > ELVIS";
            break;
        case emailServerIssues:
            category = "IT > Email Server / OFFICE-PC";
            break;
        case itMaintenanceTasks:
            category = "IT > Maintenance";
            break;
        case kioskIssues:
            category = "IT > Kiosk / AUBKIOSK";
            break;
        case phoneLineSteps:
            category = "IT > Request for New Phone Line";
            break;
        case onlineOrderIssues:
            category = "IT > Online Orders";
            break;
        case paintMachineIssues:
            category = "IT > Paint Computer"
            break;
        case paymentTerminalIssues:
            category = "IT > Payment Terminals";
            break;
        case onProductIssues:
            category = "Product"
            break;
        case onAccountingIssues:
            category = "Accounting";
            break;
        case onCustomerIssues:
            category = "Customer Accounts";
            break;
        case onOperationsIssues:
            category = "Operations"
            break;
        case marketingIssues:
            category = "Marketing"
            break;
        case purchaseOrderIssues:
            category = "Accounting > PO/EDI Issues";
            break;
        case officePrinterIssues:
            category = "IT > Printers > Office/Kiosk/Rental Printer"
            break;
        case priceTicketIssues:
            category = "IT > Printers > Price Ticket Printer"
            break;
        case paintLabelIssues:
            category = "IT > Printers > Paint Label Printer";
            break;
        case registerHardwareIssues:
            category = "IT > Registers > Hardware";
            break;
        case registerSoftwareIssues:
            category = "IT > Registers > Software";
            break;
        case reportsIssues:
            category = "IT > Reports"
            break;
        case voipIssues:
            category = "IT > VoIP / Phone Issues"
            break;
        case wiFiIssues:
            category = "IT > WiFi Issues"
            break;
        default:
            break;
    }
}


function searchSite(searchStr) {
    searchStr = document.getElementById("searchBox").value.toLowerCase();
    document.getElementById("searchDisplay").innerHTML = "";

    let currentSearch

    arrayMasterlist.forEach(arrayArg => {
        if(searchStr.length <= 1) {
            return;
        }
        for(i = 0; i < arrayArg.length; i++) {
            getCategory(arrayArg);
            if(arrayArg[i].toLowerCase().search(searchStr) > -1) {
                document.getElementById("searchDisplay").innerHTML += arrayArg[i] + " - " + category + "<br><br><br>"
                $("#searchResults").modal('show');
            }
        }
    })
}
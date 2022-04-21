// TEMP VARIABLES
let formLink = "";
let sheets


//PERMANENT WRITE VARIABLES
let resolutionLength = "";
let finishedLink = "";
let section = "";

const framePiece = "&amp;widget=false&amp;chrome=true&amp;single=true&amp;";



let saveFile = () => {
    spliceLinkSheets();
    const sFileName = document.getElementById("name").value;


    data = finishedLink + "\r\n" + section + "\r\n" + "\"" + sFileName + "\"";

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}

function getSection(currentSection) {
    section = currentSection;
    return;
}



function getResolutionLength(input) {
    switch(input) {
        case "Short":
            resolutionLength = "class=\"vh-30\"";
            break;
        case "Medium":
            resolutionLength = "class=\"vh-50\"";
            break;
        case "Long":
            resolutionLength = "class=\"vh-100\"";
            break;
        default:
            alert("This is not working.")
            break;
    }
}



function listenForSheets(sheetsFlag) {
    if(resolutionLength == "" && sheetsFlag == true) {
        sheets = true;
        alert("Please select a resolution length before selecting Google Sheets.")
        return;
    } else if (resolutionLength != "" && sheetsFlag == false) {
        sheets = false;
        resolutionLength = "vh-100";
        return;
    } else if (resolutionLength == "" && sheetsFlag == false) { 
        sheets = false;
        resolutionLength = "vh-100"
        return;
    } else {
        sheets = true;
        return;
    }
}



function fillLink(link) {
    formLink = link;
    return;
}



function spliceLinkSheets() {
    if(formLink == "") {
        alert("Please enter a valid link.")
        return;
    } else if(sheets == true) {
        let tempLink = formLink.split("&");
        finishedLink = "<iframe src=\"" + tempLink[0] + framePiece + tempLink[1] + "\"></iframe>";
        finishedLink = finishedLink.split(" ");
        finishedLink = finishedLink[0] + " " + resolutionLength + " " + finishedLink[1]
    } else if(sheets == false) {
        finishedLink = "<iframe class=\"vh-100\" src=\"" + formLink + "\"></iframe>";
    }

    

}




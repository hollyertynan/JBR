const itMaintenanceTasks = [
    "Live Sales Not Loading",
    "Canadian Conversion Rate Change",
    "Canceling Orgill Zeroed Customer BOSS Orders",
    "Updating Store Hours",
    "Running EOD For a Store",
    "Attaching a File to a Ticket",
    "Paint Over Max Order",
    "Other"
]


const itMaintenanceMap = new Map([
    ["Live Sales Not Loading", "<iframe class=\"vh-70\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A8:B8\"></iframe>"],

    ["Canadian Conversion Rate Change", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1ufv0T_8oO5gP0NJDdmSrUx9pE_bvV8wjEQ69pyIaxS8/edit\"></iframe>"],
    ["Canceling Orgill Zeroed Customer BOSS Orders"],

    ["Updating Store Hours", "<h3 style=\"text-align:center\">Do NOT do store hour changes unless you've been instructed to do so by the POS Team.</h3><iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1Z-W6tQayH4jNlQNqtFKw31KUpTgSMVMoNSoDvPC2vVI/edit#\"></iframe>"],

    ["Running EOD For a Store", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1uBxBlALyEP8_D8rgB7-mPfGbiM4Ao2m1GydvxqyfaR8/edit#bookmark=id.4lu14criokzi\"></iframe>"],

    ["Attaching a File to a Ticket", "<iframe class=\"vh-50\" src=\"https://docs.google.com/spreadsheets/d/1tmjYk9mlYNBW_s5s7TGndBt67Kb3I8l7tAaaHQUCApQ/htmlembed?gid=1612994648&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=A152:B152\"></iframe>"],

    ["Paint Over Max Order", "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1JqAxLJFS2J_Poag57C5VJPuif1xbDRCXmm5VH6aBeuo/edit\"></iframe>"],
    
    ["Other"]
])

function makeITMaintenanceForm() {
    var input = "";
    input += "<div class=\"container-fluid text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><div class=\" text-center\"><select name=\"maintenanceDropdown\" id=\"maintenanceDropdown\" onchange=\"onEventITMaintenance(event);\" class=\"form-select form-select-lg InitialButtons bg-info text-light text-center border-info\" style=\"width: 100%\"><option selected value=\"Selected\">Select One:</option>"

    for (var i = 0; i < itMaintenanceTasks.length; i++) {
        input += "<option value=\"" + itMaintenanceTasks[i] + "\">" + itMaintenanceTasks[i] + "</option>";
    }

    input += "</select></div></div><div class=\"col-2\"></div></div></div>";
    document.getElementById("thirdForm").innerHTML = input;
    hidePreviousInfo();
}

function onEventITMaintenance(event) {
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "";
    switch(event.target.value) {
        case "Canceling Orgill Zeroed Customer BOSS Orders":
            onCancelingBossOrders();
            break;
        case "Other":
            onItMaintenanceOther();
            break;
        default:
            defaultItMainteneance(event.target.value);
            break;
    }
}

function defaultItMainteneance(taskName) {
    hidePreviousInfo();
    hideBlankQuestionnaire();

    $("#maintenanceDropdown").removeClass("bg-info border-info").addClass("bg-success border-success");
    $("#resolutionFrame").html(itMaintenanceMap.get(taskName));
    $("#resolutionFrame").attr('style', 'display:block;')

    firstTask = "It Maintenance";
    // leaving for backwards compatability w/ safari and internet explorer
    document.getElementById("resolutionFrame").scrollIntoView({behavior: "smooth"});
    secondTask = taskName;
}

function onCancelingBossOrders() {
    hidePreviousInfo();
    showBlankQuestionnaire();

    document.getElementById("radioOne").innerHTML = "Responsible Person";
    document.getElementById("radioTwo").innerHTML = "Instructions";

    document.getElementById("prompt").innerHTML += "<h3 style=\"text-align:center;\">Please send these issues to the Responsible Person. If this person is on vacation, click 'Instructions' below to do them yourself. If you do them yourself, please not that the order information will disappear, and that you need to log them in <u><a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1L0yROaYYaUZSGvR0nmsw5_FoA188kgciPMjLOgJQ64k/edit#gid=1788086452\">this</a></u> sheet.</h3>";

        // FOR RESPONSIBLE PERSON
        document.getElementById("inlineRadio1").onclick = function() {
            source = "<iframe src=\"https://docs.google.com/spreadsheets/d/1_azII5U0-qWlpkAOptv5oMM8kUAZBBGMrs_xcf2kBJY/htmlembed?gid=2113782330&amp;widget=false&amp;chrome=true&amp;single=true&amp;range=B52:D52\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }
    
    
        //FOR DIRECTIONS
        document.getElementById("inlineRadio2").onclick = function() {
            source = "<iframe class=\"vh-100\" src=\"https://docs.google.com/document/d/1ERHSA0d-D3CgXa87XMhSmjbD9F-J7bLZL-qC_T20H3Q/edit#bookmark=id.xhgpgrbmo8h7\"></iframe>";
            document.getElementById("resolutionFrame").innerHTML = source;
            document.getElementById("resolutionFrame").style.display = "block";
        }

    $("#maintenanceDropdown").removeClass("bg-info border-info");
    $("#maintenanceDropdown").addClass("bg-success border-success");
    firstTask = "IT Maintenance";
    secondTask = "Canceling BOSS Orders";
}



function onItMaintenanceOther() {
    hidePreviousInfo();
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("fifthForm").innerHTML = "<h3>Please escalate to L2 and provide as much detail in the ticket / from the call as possible. Thank you!</h3>";

    $("#maintenanceDropdown").removeClass("bg-info border-info");
    $("#maintenanceDropdown").addClass("bg-success border-success");
    firstTask = "IT Maintenance"
    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
    firstTask = "It Maintenance Other";
}
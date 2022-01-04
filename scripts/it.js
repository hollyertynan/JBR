/*

onEventIT(event)
passing in value from dropdown menu and continues logically

*/

function onEventIT(event) {
    switch(event.target.value) {
        case "1":
            onRegister();
            break;
        case "2":
            onPaymentTerminal();
            break;
        case "3":
            onBackOfficeMi9();
            break;
        case "4":
            onEmailServer();
            break;
        default: 
            blank();
            break;
    }
}

/* 

onRegister() pipeline 

*/

function onRegister() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += "<div class=\"container-fluid bg-dark text-center pb-5\"><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-4\"><button id=\"hardware\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onHardware()\"><h4>Hardware</h4></button></div><div class=\"col-4\"><button id=\"software\" type=\"button\" class=\"btn btn-info text-light InitialButtons h-100\" onclick=\"onSoftware()\"><h4 >Software</h4></button></div><div class=\"col-2\"></div></div></div>";

    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

function blank() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
}

function onHardware() {
    document.getElementById("software").classList.remove("btn-success");
    document.getElementById("hardware").classList.remove("btn-info");

    document.getElementById("software").classList.add("btn-info");
    document.getElementById("hardware").classList.add("btn-success");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

function onSoftware() {
    document.getElementById("software").classList.remove("btn-info");
    document.getElementById("hardware").classList.remove("btn-success");

    document.getElementById("software").classList.add("btn-success");
    document.getElementById("hardware").classList.add("btn-info");

    document.getElementById("fourthForm").scrollIntoView({behavior: "smooth"});
}

/* 

onPaymentTerminal() pipeline

*/

function onPaymentTerminal() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onBackOfficeMi9() pipeline

*/

function onBackOfficeMi9() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}

/*

onEmailServer() pipeline

*/

function onEmailServer() {
    document.getElementById("thirdForm").innerHTML = "";
    document.getElementById("fourthForm").innerHTML = "";
    document.getElementById("thirdForm").innerHTML += ":)";

    document.getElementById("thirdForm").scrollIntoView({behavior: "smooth"});
}
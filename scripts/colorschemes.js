function changeColor(scheme) {
    scheme = localStorage.getItem("Scheme");
    switch(scheme) {
        case "light":
            $(".bg-secondary").removeClass("bg-secondary").addClass("testLighterGray");
            $(".bg-dark").removeClass("bg-dark").addClass("testBgSecondary");
            $(".fixTextLight").removeClass("fixTextLight").addClass("fixTextDark");
            // $(".btn-dark").removeClass("btn-dark").addClass("btn-light");
            document.getElementById("footerButtons").style.color = "black";
            document.getElementById("ticketinfo").style.color = "black";
            document.getElementById("typeStore").style.color = "black";
            document.getElementById("prompt").style.color = "black";
            document.getElementById("radioOne").style.color = "black";
            document.getElementById("radioTwo").style.color = "black";
            document.getElementById("radioThree").style.color = "black";
            document.getElementById("radioFour").style.color = "black";
            document.getElementById("radioFive").style.color = "black";
            $("#thirdForm").removeClass("fixTextLight").addClass("fixTextDark");
            $("#fourthForm").removeClass("fixTextLight").addClass("fixTextDark");
            $("#fifthForm").removeClass("fixTextLight").addClass("fixTextDark");
            $("h3").removeClass("fixTextLight").addClass("fixTextDark");
            
            break;
        case "default":
            $(".testBgSecondary").removeClass("testBgSecondary").addClass("bg-dark");
            $(".testLighterGray").removeClass("testLighterGray").addClass("bg-secondary");
            $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");
            $(".btn-light").removeClass("btn-light").addClass("btn-dark");
            document.getElementById("footerButtons").style.color = "white";
            document.getElementById("ticketinfo").style.color = "white";
            document.getElementById("typeStore").style.color = "white";
            document.getElementById("footerButtons").style.color = "white";
            document.getElementById("ticketinfo").style.color = "white";
            document.getElementById("typeStore").style.color = "white";
            document.getElementById("prompt").style.color = "white";
            document.getElementById("radioOne").style.color = "white";
            document.getElementById("radioTwo").style.color = "white";
            document.getElementById("radioThree").style.color = "white";
            document.getElementById("radioFour").style.color = "white";
            document.getElementById("radioFive").style.color = "white";
            $("#thirdForm").removeClass("fixTextDark").addClass("fixTextLight");
            $("#fourthForm").removeClass("fixTextDark").addClass("fixTextLight");
            $("#fifthForm").removeClass("fixTextDark").addClass("fixTextLight");
            $("h3").removeClass("fixTextDark").addClass("fixTextLight");
            break;

    }

    /* 
    
    FIX DROPDOWN
    
    */

    var mySelect = document.getElementById('colorsSelect');

    for(var i, j = 0; i = mySelect.options[j]; j++) {
        if(i.value == scheme) {
            mySelect.selectedIndex = j;
            break;
        }





}



}



/* 

STORE SCHEME FOR ACROSS SESSIONS

*/


function storeScheme(scheme) {
    localStorage.setItem("Scheme", scheme);
    changeColor(scheme);
}
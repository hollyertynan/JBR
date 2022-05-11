function changeColor(scheme) {
    scheme = localStorage.getItem("Scheme");

    var propertySwitch = document.querySelector(':root');

    switch(scheme) {

        // SOFT BROWNS STYLE
        case "brown":
            $(".bg-secondary").removeClass("bg-secondary").addClass("mainbgswitch");
            $(".bg-dark").removeClass("bg-dark").addClass("testBgSecondary");
            $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");

            propertySwitch.style.setProperty('--main-bg-color-switch', '#b1672d');
            propertySwitch.style.setProperty("--secondary-bg-color-switch", "#49310c")
            propertySwitch.style.setProperty("--default-btn-info", "#efb963")


            // change text to white
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











        // GREEN FOREST THEME
        case "forest":
            $(".bg-secondary").removeClass("bg-secondary").addClass("mainbgswitch");
            $(".bg-dark").removeClass("bg-dark").addClass("testBgSecondary");
            $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");

            propertySwitch.style.setProperty('--main-bg-color-switch', '#236537');
            propertySwitch.style.setProperty("--secondary-bg-color-switch", "#2a4732")
            propertySwitch.style.setProperty("--default-btn-info", "#448475")


            // change text to white
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










        // LEVI THEME
        case "levi":
            $(".bg-secondary").removeClass("bg-secondary").addClass("mainbgswitch");
            $(".bg-dark").removeClass("bg-dark").addClass("testBgSecondary");
            $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");

            propertySwitch.style.setProperty('--main-bg-color-switch', '#ae4257');
            propertySwitch.style.setProperty("--secondary-bg-color-switch", "#102443")
            propertySwitch.style.setProperty("--default-btn-info", "#f5c5b0")


            // change text to white
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








        //LIGHT THEME
        case "light":
            propertySwitch.style.setProperty('--main-bg-color-switch', '#d7dbdd');
            propertySwitch.style.setProperty("--secondary-bg-color-switch", "#fbfefc")
            propertySwitch.style.setProperty("--default-btn-info", "#5bc0de")


            $(".bg-secondary").removeClass("bg-secondary").addClass("mainbgswitch");
            $(".bg-dark").removeClass("bg-dark").addClass("testBgSecondary");
            $(".fixTextLight").removeClass("fixTextLight").addClass("fixTextDark");

            
            

            // change text to black
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









        // DARK THEME
        case "default":
            $(".testBgSecondary").removeClass("testBgSecondary").addClass("bg-dark");
            $(".mainbgswitch").removeClass("mainbgswitch").addClass("bg-secondary");
            $(".fixTextDark").removeClass("fixTextDark").addClass("fixTextLight");
            $(".btn-light").removeClass("btn-light").addClass("btn-dark");
            propertySwitch.style.setProperty("--default-btn-info", "#5bc0de")

            // change text to white
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
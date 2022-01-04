// use a map or associative array to store all stores... unsure, gonna implement associative array first

var allStoreNames = [
    {
        "Store": "001", 
        "Name": "FITCHBURG, MA"}, 
    {
        "Store": "003", 
        "Name": "MEREDITH, NH"}, 
    {
        "Store": "004", 
        "Name": "GARDNER, MA"}, 
    {
        "Store": "006", 
        "Name": "MOULTONBORO, NH"}, 
    {
        "Store": "007", 
        "Name": "TEWKSBURY, MA"}, 
    {
        "Store": "008", 
        "Name": "CLINTON, MA"}, 
    {
        "Store": "010", 
        "Name": "PERU, NY"}, 
    {
        "Store": "016", 
        "Name": "NORWAY, ME"}, 
    {
        "Store": "017", 
        "Name": "TURNERS FALLS, MA"}, 
    {
        "Store": "018", 
        "Name": "SHELBURNE FALLS, MA"}, 
    {
        "Store": "022", 
        "Name": "LINCOLN, NH"}, 
    {
        "Store": "025", 
        "Name": "SAINT JOHNSBURY, VT"}, 
    {
        "Store": "032", 
        "Name": "FRANKLIN, MA 032"}, 
    {
        "Store": "033", 
        "Name": "GREAT BARRINGTON, MA"}, 
    {
        "Store": "034", 
        "Name": "STAFFORD SPRINGS, CT"}, 
    {
        "Store": "037", 
        "Name": "WEBSTER, MA"}, 
    {
        "Store": "039", 
        "Name": "WINDSOR, VT"}, 
    {
        "Store": "040", 
        "Name": "BREWER, ME"}, 
    {
        "Store": "042", 
        "Name": "LUDLOW, VT"}, 
    {
        "Store": "044", 
        "Name": "WALPOLE, NH"}, 
    {
        "Store": "045", 
        "Name": "MONTPELIER, VT"}, 
    {
        "Store": "049", 
        "Name": "BARRE, VT"}, 
    {
        "Store": "051", 
        "Name": "WATERBURY, VT"}, 
    {
        "Store": "054", 
        "Name": "FRANKLIN, NH"}, 
    {
        "Store": "055", 
        "Name": "NEWPORT, NH"}, 
    {
        "Store": "056", 
        "Name": "OLD TOWN, ME"}, 
    {
        "Store": "057", 
        "Name": "MORRISVILLE, VT"}, 
    {
        "Store": "060", 
        "Name": "GOUVERNEUR, NY"}, 
    {
        "Store": "062", 
        "Name": "HARDWICK, VT"}, 
    {
        "Store": "063", 
        "Name": "MIDDLEBURY, VT"}, 
    {
        "Store": "064", 
        "Name": "AUGUSTA, ME"}, 
    {
        "Store": "065", 
        "Name": "LITTLETON, MA"}, 
    {
        "Store": "069", 
        "Name": "LUNENBURG, MA"}, 
    {
        "Store": "070", 
        "Name": "PUTNAM, CT"}, 
    {
        "Store": "072", 
        "Name": "SAINT ALBANS, VT"}, 
    {
        "Store": "074", 
        "Name": "EASTHAMPTON, MA"}, 
    {
        "Store": "075", 
        "Name": "ELIZABETHTOWN, NY"}, 
    {
        "Store": "076", 
        "Name": "SWANTON, VT"}, 
    {
        "Store": "079", 
        "Name": "FAIR HAVEN, VT"}, 
    {
        "Store": "080", 
        "Name": "ALLENSTOWN, NH"}, 
    {
        "Store": "083", 
        "Name": "VERGENNES, VT"}, 
    {
        "Store": "084", 
        "Name": "TICONDEROGA, NY"}, 
    {
        "Store": "089", 
        "Name": "WAREHAM, MA"}, 
    {
        "Store": "090", 
        "Name": "WELLS, ME"}, 
    {
        "Store": "091", 
        "Name": "MANCHESTER, VT"}, 
    {
        "Store": "092", 
        "Name": "BERLIN, NH"}, 
    {
        "Store": "094", 
        "Name": "WILLIAMSTOWN, MA"}, 
    {
        "Store": "095", 
        "Name": "SANFORD, ME"}, 
    {
        "Store": "096", 
        "Name": "NORTH ADAMS, MA"}, 
    {
        "Store": "097", 
        "Name": "LISBON FALLS, ME"}, 
    {
        "Store": "098", 
        "Name": "SO. BURLINGTON, VT"}, 
    {
        "Store": "100", 
        "Name": "MILTON, VT"}, 
    {
        "Store": "101", 
        "Name": "WINCHESTER, NH"}, 
    {
        "Store": "103", 
        "Name": "RUMFORD, ME"}, 
    {
        "Store": "104", 
        "Name": "SOUTHBRIDGE, MA"}, 
    {
        "Store": "106", 
        "Name": "LINCOLN, ME"}, 
    {
        "Store": "107", 
        "Name": "NORTH WINDHAM, ME"}, 
    {
        "Store": "108", 
        "Name": "FARMINGTON, ME"}, 
    {
        "Store": "109", 
        "Name": "SARANAC LAKE, NY"}, 
    {
        "Store": "113", 
        "Name": "TUPPER LAKE, NY"}, 
    {
        "Store": "118", 
        "Name": "GREENFIELD, MA"}, 
    {
        "Store": "120", 
        "Name": "PLATTSBURGH, NY"}, 
    {
        "Store": "124", 
        "Name": "NEWPORT, ME"}, 
    {
        "Store": "132", 
        "Name": "EASTON, NY"}, 
    {
        "Store": "133", 
        "Name": "WATERVILLE, ME"}, 
    {
        "Store": "135", 
        "Name": "NAPLES, ME"}, 
    {
        "Store": "136", 
        "Name": "LAKE PLACID, NY"}, 
    {
        "Store": "140", 
        "Name": "WEST CARTHAGE, NY"}, 
    {
        "Store": "141", 
        "Name": "CONCORD, NH"}, 
    {
        "Store": "144", 
        "Name": "HAVERHILL, MA"}, 
    {
        "Store": "148", 
        "Name": "AYER, MA"}, 
    {
        "Store": "151", 
        "Name": "MIDDLEBORO, MA"}, 
    {
        "Store": "152", 
        "Name": "CARVER, MA"}, 
    {
        "Store": "153", 
        "Name": "KINGSTON, MA"}, 
    {
        "Store": "155", 
        "Name": "SANDWICH, MA"}, 
    {
        "Store": "156", 
        "Name": "SO. SANDWICH, MA"}, 
    {
        "Store": "158", 
        "Name": "POCASSET, MA"}, 
    {
        "Store": "159", 
        "Name": "COTUIT, MA"}, 
    {
        "Store": "161", 
        "Name": "JEFFERSONVILLE, VT"}, 
    {
        "Store": "163", 
        "Name": "WARNER, NH"}, 
    {
        "Store": "164", 
        "Name": "BUXTON, ME"}, 
    {
        "Store": "167", 
        "Name": "ALTON, NH"}, 
    {
        "Store": "168", 
        "Name": "HILLSBORO, NH"}, 
    {
        "Store": "171", 
        "Name": "BELFAST, ME"}, 
    {
        "Store": "172", 
        "Name": "FALMOUTH, MA"}, 
    {
        "Store": "173", 
        "Name": "SHELBURNE, VT"}, 
    {
        "Store": "175", 
        "Name": "LEE, NH"}, 
    {
        "Store": "176", 
        "Name": "NEWMARKET, NH"}, 
    {
        "Store": "177", 
        "Name": "RICHFIELD SPRINGS, NY"}, 
    {
        "Store": "178", 
        "Name": "DOVER, NH"}, 
    {
        "Store": "181", 
        "Name": "PLYMOUTH, MA"}, 
    {
        "Store": "182", 
        "Name": "COHASSET, MA"}, 
    {
        "Store": "183", 
        "Name": "HINESBURG, VT"}, 
    {
        "Store": "187", 
        "Name": "LANCASTER, NH"}, 
    {
        "Store": "188", 
        "Name": "STOW, MA"}, 
    {
        "Store": "189", 
        "Name": "OSSIPEE, NH"}, 
    {
        "Store": "190", 
        "Name": "IPSWICH, MA"}, 
    {
        "Store": "191", 
        "Name": "BRISTOL, NH"}, 
    {
        "Store": "192", 
        "Name": "BEVERLY, MA"}, 
    {
        "Store": "193", 
        "Name": "SUDBURY, MA"}, 
    {
        "Store": "194", 
        "Name": "MONROE, CT"}, 
    {
        "Store": "195", 
        "Name": "ALEXANDRIA, VA"}, 
    {
        "Store": "196", 
        "Name": "BLUE BELL, PA"}, 
    {
        "Store": "197", 
        "Name": "DOYLESTOWN, PA"}, 
    {
        "Store": "198", 
        "Name": "LYNDONVILLE, VT"}, 
    {
        "Store": "199", 
        "Name": "RICHBORO, PA"}, 
    {
        "Store": "200", 
        "Name": "NEW HOPE, PA"}
    ]

var inputTable = "";

inputTable += "<input type=\"text\" maxlength=\"3\" inputmode=\"numeric\" name=\"typeStore\" id=\"typeStore\" list=\"\stores\" class=\"form-select-lg InitialButtons bg-dark text-center border-dark whitePlaceholder\" style=\"width: 100%\" placeholder=\"Store Number\"><datalist name=\"stores\" id=\"stores\">";

for(var index in allStoreNames) {
    inputTable += "<option value=\"" + allStoreNames[index].Store + "\">" + allStoreNames[index].Name + "</option>";
}

inputTable += "</datalist>";

document.getElementById("taskInfo").innerHTML += inputTable;

/* broken validation
$(document).ready(function() {

    $("#storeTicketForm").validate({
        rules: {
            taskInfo: {
                required: true
            },

            ticketInfo: {
                required: true
            },
        },

        messages: {
            tastInfo: {
                required: "Input Required"
            },

            ticketInfo: {
                required: "Input Required"
            }
        }
    });

});
*/
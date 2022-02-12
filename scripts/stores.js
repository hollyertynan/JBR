// use a map or associative array to store all stores... unsure, gonna implement associative array first

var allStoreNames = [
    {
        "Store": "001", 
        "Name": "FITCHBURG, MA",
        "Team": "1"}, 
    {
        "Store": "003", 
        "Name": "MEREDITH, NH",
        "Team": "2"}, 
    {
        "Store": "004", 
        "Name": "GARDNER, MA",
        "Team": "1"}, 
    {
        "Store": "006", 
        "Name": "MOULTONBORO, NH",
        "Team": "2"}, 
    {
        "Store": "007", 
        "Name": "TEWKSBURY, MA",
        "Team": "2"}, 
    {
        "Store": "008", 
        "Name": "CLINTON, MA",
        "Team": "1"}, 
    {
        "Store": "010", 
        "Name": "PERU, NY",
        "Team": "3"}, 
    {
        "Store": "016", 
        "Name": "NORWAY, ME",
        "Team": "2"}, 
    {
        "Store": "017", 
        "Name": "TURNERS FALLS, MA",
        "Team": "1"}, 
    {
        "Store": "018", 
        "Name": "SHELBURNE FALLS, MA",
        "Team": "1"}, 
    {
        "Store": "022", 
        "Name": "LINCOLN, NH",
        "Team": "2"}, 
    {
        "Store": "025", 
        "Name": "SAINT JOHNSBURY, VT",
        "Team": "2"}, 
    {
        "Store": "032", 
        "Name": "FRANKLIN, MA 032",
        "Team": "1"}, 
    {
        "Store": "033", 
        "Name": "GREAT BARRINGTON, MA",
        "Team": "3"}, 
    {
        "Store": "034", 
        "Name": "STAFFORD SPRINGS, CT",
        "Team": "1"}, 
    {
        "Store": "037", 
        "Name": "WEBSTER, MA",
        "Team": "1"}, 
    {
        "Store": "039", 
        "Name": "WINDSOR, VT",
        "Team": "3"}, 
    {
        "Store": "040", 
        "Name": "BREWER, ME",
        "Team": "2"}, 
    {
        "Store": "042", 
        "Name": "LUDLOW, VT",
        "Team": "3"}, 
    {
        "Store": "044", 
        "Name": "WALPOLE, NH",
        "Team": "3"}, 
    {
        "Store": "045", 
        "Name": "MONTPELIER, VT",
        "Team": "3"}, 
    {
        "Store": "049", 
        "Name": "BARRE, VT",
        "Team": "3"}, 
    {
        "Store": "051", 
        "Name": "WATERBURY, VT",
        "Team": "3"}, 
    {
        "Store": "054", 
        "Name": "FRANKLIN, NH",
        "Team": "2"}, 
    {
        "Store": "055", 
        "Name": "NEWPORT, NH",
        "Team": "3"}, 
    {
        "Store": "056", 
        "Name": "OLD TOWN, ME",
        "Team": "2"}, 
    {
        "Store": "057", 
        "Name": "MORRISVILLE, VT",
        "Team": "3"}, 
    {
        "Store": "060", 
        "Name": "GOUVERNEUR, NY",
        "Team": "3"}, 
    {
        "Store": "062", 
        "Name": "HARDWICK, VT",
        "Team": "3"}, 
    {
        "Store": "063", 
        "Name": "MIDDLEBURY, VT",
        "Team": "3"}, 
    {
        "Store": "064", 
        "Name": "AUGUSTA, ME",
        "Team": "2"}, 
    {
        "Store": "065", 
        "Name": "LITTLETON, MA",
        "Team": "2"}, 
    {
        "Store": "069", 
        "Name": "LUNENBURG, MA",
        "Team": "1"}, 
    {
        "Store": "070", 
        "Name": "PUTNAM, CT",
        "Team": "1"}, 
    {
        "Store": "072", 
        "Name": "SAINT ALBANS, VT",
        "Team": "3"}, 
    {
        "Store": "074", 
        "Name": "EASTHAMPTON, MA",
        "Team": "1"}, 
    {
        "Store": "075", 
        "Name": "ELIZABETHTOWN, NY",
        "Team": "3"}, 
    {
        "Store": "076", 
        "Name": "SWANTON, VT",
        "Team": "3"}, 
    {
        "Store": "079", 
        "Name": "FAIR HAVEN, VT",
        "Team": "3"}, 
    {
        "Store": "080", 
        "Name": "ALLENSTOWN, NH",
        "Team": "2"}, 
    {
        "Store": "083", 
        "Name": "VERGENNES, VT",
        "Team": "3"}, 
    {
        "Store": "084", 
        "Name": "TICONDEROGA, NY",
        "Team": "3"}, 
    {
        "Store": "089", 
        "Name": "WAREHAM, MA",
        "Team": "1"}, 
    {
        "Store": "090", 
        "Name": "WELLS, ME",
        "Team": "2"}, 
    {
        "Store": "091", 
        "Name": "MANCHESTER, VT",
        "Team": "3"}, 
    {
        "Store": "092", 
        "Name": "BERLIN, NH",
        "Team": "2"}, 
    {
        "Store": "094", 
        "Name": "WILLIAMSTOWN, MA",
        "Team": "3"}, 
    {
        "Store": "095", 
        "Name": "SANFORD, ME",
        "Team": "2"}, 
    {
        "Store": "096", 
        "Name": "NORTH ADAMS, MA",
        "Team": "3"}, 
    {
        "Store": "097", 
        "Name": "LISBON FALLS, ME",
        "Team": "2"}, 
    {
        "Store": "100", 
        "Name": "MILTON, VT",
        "Team": "3"}, 
    {
        "Store": "101", 
        "Name": "WINCHESTER, NH",
        "Team": "1"}, 
    {
        "Store": "103", 
        "Name": "RUMFORD, ME",
        "Team": "2"}, 
    {
        "Store": "104", 
        "Name": "SOUTHBRIDGE, MA",
        "Team": "1"}, 
    {
        "Store": "106", 
        "Name": "LINCOLN, ME",
        "Team": "2"}, 
    {
        "Store": "107", 
        "Name": "NORTH WINDHAM, ME",
        "Team": "2"}, 
    {
        "Store": "108", 
        "Name": "FARMINGTON, ME",
        "Team": "2"}, 
    {
        "Store": "109", 
        "Name": "SARANAC LAKE, NY",
        "Team": "3"}, 
    {
        "Store": "113", 
        "Name": "TUPPER LAKE, NY",
        "Team": "3"}, 
    {
        "Store": "118", 
        "Name": "GREENFIELD, MA",
        "Team": "1"}, 
    {
        "Store": "120", 
        "Name": "PLATTSBURGH, NY",
        "Team": "3"}, 
    {
        "Store": "124", 
        "Name": "NEWPORT, ME",
        "Team": "2"}, 
    {
        "Store": "132", 
        "Name": "EASTON, NY",
        "Team": "3"}, 
    {
        "Store": "133", 
        "Name": "WATERVILLE, ME",
        "Team": "2"}, 
    {
        "Store": "135", 
        "Name": "NAPLES, ME",
        "Team": "2"}, 
    {
        "Store": "136", 
        "Name": "LAKE PLACID, NY",
        "Team": "3"}, 
    {
        "Store": "140", 
        "Name": "WEST CARTHAGE, NY",
        "Team": "3"}, 
    {
        "Store": "141", 
        "Name": "CONCORD, NH",
        "Team": "2"}, 
    {
        "Store": "144", 
        "Name": "HAVERHILL, MA",
        "Team": "2"}, 
    {
        "Store": "148", 
        "Name": "AYER, MA",
        "Team": "1"}, 
    {
        "Store": "151", 
        "Name": "MIDDLEBORO, MA",
        "Team": "1"}, 
    {
        "Store": "152", 
        "Name": "CARVER, MA",
        "Team": "1"}, 
    {
        "Store": "153", 
        "Name": "KINGSTON, MA",
        "Team": "1"}, 
    {
        "Store": "155", 
        "Name": "SANDWICH, MA",
        "Team": "1"}, 
    {
        "Store": "156", 
        "Name": "SO. SANDWICH, MA",
        "Team": "1"}, 
    {
        "Store": "158", 
        "Name": "POCASSET, MA",
        "Team": "1"}, 
    {
        "Store": "159", 
        "Name": "COTUIT, MA",
        "Team": "1"}, 
    {
        "Store": "161", 
        "Name": "JEFFERSONVILLE, VT",
        "Team": "3"}, 
    {
        "Store": "163", 
        "Name": "WARNER, NH",
        "Team": "3"}, 
    {
        "Store": "164", 
        "Name": "BUXTON, ME",
        "Team": "2"}, 
    {
        "Store": "167", 
        "Name": "ALTON, NH",
        "Team": "2"}, 
    {
        "Store": "168", 
        "Name": "HILLSBORO, NH",
        "Team": "3"},
    {
        "Store": "170",
        "Name": "WESTMINSTER, MA",
        "Team": "1"},
    {
        "Store": "171", 
        "Name": "BELFAST, ME",
        "Team": "2"}, 
    {
        "Store": "172", 
        "Name": "FALMOUTH, MA",
        "Team": "1"}, 
    {
        "Store": "173", 
        "Name": "SHELBURNE, VT",
        "Team": "3"}, 
    {
        "Store": "175", 
        "Name": "LEE, NH",
        "Team": "2"}, 
    {
        "Store": "176", 
        "Name": "NEWMARKET, NH",
        "Team": "2"}, 
    {
        "Store": "177", 
        "Name": "RICHFIELD SPRINGS, NY",
        "Team": "3"}, 
    {
        "Store": "178", 
        "Name": "DOVER, NH",
        "Team": "2"}, 
    {
        "Store": "181", 
        "Name": "PLYMOUTH, MA",
        "Team": "1"}, 
    {
        "Store": "182", 
        "Name": "COHASSET, MA",
        "Team": "1"}, 
    {
        "Store": "183", 
        "Name": "HINESBURG, VT",
        "Team": "3"}, 
    {
        "Store": "187", 
        "Name": "LANCASTER, NH",
        "Team": "2"}, 
    {
        "Store": "188", 
        "Name": "STOW, MA",
        "Team": "2"}, 
    {
        "Store": "189", 
        "Name": "OSSIPEE, NH",
        "Team": "2"}, 
    {
        "Store": "190", 
        "Name": "IPSWICH, MA",
        "Team": "1"}, 
    {
        "Store": "191", 
        "Name": "BRISTOL, NH",
        "Team": "2"}, 
    {
        "Store": "192", 
        "Name": "BEVERLY, MA",
        "Team": "1"}, 
    {
        "Store": "193", 
        "Name": "SUDBURY, MA",
        "Team": "2"}, 
    {
        "Store": "194", 
        "Name": "MONROE, CT",
        "Team": "1"}, 
    {
        "Store": "195", 
        "Name": "ALEXANDRIA, VA",
        "Team": "1"}, 
    {
        "Store": "196", 
        "Name": "BLUE BELL, PA",
        "Team": "1"}, 
    {
        "Store": "197", 
        "Name": "DOYLESTOWN, PA",
        "Team": "1"}, 
    {
        "Store": "198", 
        "Name": "LYNDONVILLE, VT",
        "Team": "2"}, 
    {
        "Store": "199", 
        "Name": "RICHBORO, PA",
        "Team": "1"}, 
    {
        "Store": "200", 
        "Name": "NEW HOPE, PA",
        "Team": "1"},
    {
        "Store": "201",
        "Name": "SOUTH ROYALTON, VT",
        "Team": "3"},
    ]

var inputTable = "";

inputTable += "<input type=\"text\" maxlength=\"3\" inputmode=\"numeric\" name=\"typeStore\" id=\"typeStore\" list=\"\stores\" class=\"form-select-lg InitialButtons bg-dark text-center whitePlaceholder\" style=\"width: 100%\" placeholder=\"Store Number\"><datalist name=\"stores\" id=\"stores\">";

for(var index in allStoreNames) {
    inputTable += "<option value=\"" + allStoreNames[index].Store + "\">" + allStoreNames[index].Name + "</option>";
}

inputTable += "</datalist>";

document.getElementById("taskInfo").innerHTML += inputTable;

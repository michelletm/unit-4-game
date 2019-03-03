var wins = 0;
var losses = 0;
var total = 0;


$(document).ready(function() {

    $("#button1").on("click", function(event) {
        console.log(this)
        console.log($(this))
    })

    $(".btn").on("click", function(event) {
        console.log(this)
        console.log($(this).attr("data-id"))

    })

    $("#numnum").html("")
    $("#numwins").html(wins)
    $("#numlosses").html(losses)
    $("#numtotal").html(total)
    
    
});

var numList = ["19", "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];

let chosenNum = numList[Math.floor(Math.random() * numList.length)];

let number = numList[chosenNum];



var crystalList = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

let chosenCrystal = crystalList[Math.floor(Math.random() * crystalList.length)];

let crystal = crystalList[chosenCrystal];



function startGame () {

    $("#numnum").attr("numnum", number);
    $("#numnum").text(number);
    //$(".btn").each(crystal, function(); 
    
    $(".btn").attr("value", crystal);
    
    //$(".btn").each(function(assignCrystal));
    
    //$(".btn").attr("value", crystal);
    

}

//function assignCrystal () {
    //$(".btn").attr("value", crystal);
//}

function addingCrystals () {

    
    let newtotal = parseInt(total) + parseInt(crystal);
    
    $("#numtotal").html(newtotal);

}




$(document).ready(function() {
    
    $("#button1").click(startGame);

    $(".btn").click(addingCrystals);


})


var numList = ["19", "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44" ];

var chosenNum = "";


var crystalList = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

var chosenCrystal1 = "";

var chosenCrystal2 = "";

var chosenCrystal3 = "";

var chosenCrystal4 = "";




var wins = 0;

var losses = 0;

var score = 0;


chosenNum = numList[Math.floor(Math.random() * numList.length)];


chosenCrystal1 = crystalList[Math.floor(Math.random() * crystalList.length)];

chosenCrystal2 = crystalList[Math.floor(Math.random() * crystalList.length)];

chosenCrystal3 = crystalList[Math.floor(Math.random() * crystalList.length)];

chosenCrystal4 = crystalList[Math.floor(Math.random() * crystalList.length)];
///////////////////



//$(document).ready(function() {


function startGame() {

    var wins = 0;

    var losses = 0;

    var score = 0;


    $("#numnum").attr(chosenNum);
    $("#image1").attr(chosenCrystal1);
    $("#image2").attr(chosenCrystal2);
    $("#image3").attr(chosenCrystal3);
    $("#image4").attr(chosenCrystal4);
} 



$("#button1").click(startGame() {



})

}





function clickCrystal() {

    
}




$("image1").click(function() {


});

$("image2").click(function() {

});



$("#numnum").text()
$("#numwins").text()
$("#numlosses").text()
$("#numtotal").text()







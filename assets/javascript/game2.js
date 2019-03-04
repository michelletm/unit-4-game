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
    
    //$("#image1").on("click", function(event) {
        //console.log(this)
        //console.log($(this).attr("data-id=1"))

    //})

    //$("#image2").on("click", function(event) {
        //console.log(this)
        //console.log($(this).attr("data-id=2"))

    //})

    //$("#image3").on("click", function(event) {
        //console.log(this)
        //console.log($(this).attr("data-id=3"))

    //})

    //$("#image4").on("click", function(event) {
        //console.log(this)
        //console.log($(this).attr("data-id=4"))

    //})



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


//let crystal1 = crystalList[chosenCrystal];

//let crystal2 = crystalList[chosenCrystal];


//let crystal3 = crystalList[chosenCrystal];


//let crystal4 = crystalList[chosenCrystal];




function startGame () {

    $("#numnum").attr("numnum", number);
    $("#numnum").text(number);
    //$(".btn").each(crystal, function () {
        //$.attr(this, value, crystal);
    //});

    //assigningCrystals (value);
    
    
    
    //var list = $("#data-id=1", "#data-id=2", "#data-id=3", "#data-id=4")
        //.each( function(value) {
    
    
    
    
    $(".btn").each(function (){
        
        let num = Math.floor(Math.random()*10 + 2)
        
        $(this).attr("value", crystal)
        chosenCrystal = crystalList[Math.floor(Math.random() * crystalList.length)];
        crystal = crystalList[chosenCrystal];
    });

    

    //$("#image1").attr("value", crystal1);
    //$("#image2").attr("value", crystal2);
    //$("#image3").attr("value", crystal3);
    //$("#image4").attr("value", crystal4);
    
    
    
    //$(".btn").each(crystal, function(); 
    //$(".btn").each(function () {
    //$(".btn").attr("value", crystal);
    //assignCrystal ();
    
    //$(".btn").each(function(assignCrystal));
    
    //$(".btn").attr("value", crystal);
    

}

//function assigningCrystals () {

    //for(var i = 0; i > crystalList.length; i++);
    //$(".btn").attr("value", crystal);
//}



//function assignCrystal () {
    //$(".btn").each("value", crystal);
//}

//function assignCrystal () {
    //$(".btn").attr("value", crystal);
//}

function addingCrystals () {

    //var subtotal = 0;

    //$(".btn").each(crystal, function() {

    //var crystalvalue = $(this).val();
    //var subtotal = subtotal + crystalvalue;
    //$(".btn").each(crystal, function() {
        //subtotal = subtotal + this;
    //});

    //let x = total + parseInt(crystal);

    //let crystalx = [crystal1, crystal2, crystal3, crystal4];

    let newtotal = parseInt(total) + parseInt(crystal);

    
    $("#numtotal").html(newtotal);

}

function restartGame () {
    
    $("#numnum").html("");
    $("#numtotal").html("");
//wins not included since it needs to stay the same

}


$(document).ready(function() {
    
    $("#button1").click(startGame);

    $(".btn").click(addingCrystals);
        //$(".btn").trigger("click");

    
    
        if (total === number) {
            wins++;
            alert("You Win!");
        }

        else {
            losses++
            restartGame ()
        }

        


});

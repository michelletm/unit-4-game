$(document).ready(function() {

    $("#button1").on("click", function(event) {
        console.log(this)
        console.log($(this))
    })

    $(".btn").on("click", function(event) {
        console.log(this)
        console.log($(this).attr("data-id"))

    })

    $("#numnum").html("h")
    $("#numwins").html("8")
    $("#numlosses").html("9")
    $("#numtotal").html("77")
    
    
});

//function startGame () {



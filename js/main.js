let options = diaoptions;

//add pixels and changes bar color depeneding on the level of public opinion
function addpx(px, toadd) {
    let barnum = (parseInt(px.replace(/px/, "")) + parseInt(toadd));
    let barheight = $(".progress-bar-vertical").css("min-height");
    barheight = (parseInt(barheight.replace(/px/, "")));
    let percent = barnum / barheight;
    percent = percent * 100;

    if (percent > 99.99) {
        //high gameover
        $("#bar").removeClass("bg-success");
        $("#bar").addClass("bg-danger");
        $("#bar").css({
            "height": "700px"
        });
        gameover(1);
    } else if (percent < 0) {
        //low gameover
        $("#bar").css({
            "height": "0px"
        });
        gameover(0);
    } else if (percent < 100 && percent > 75) {
        //bar is yellow for high
        $("#bar").removeClass("bg-success");
        $("#bar").removeClass("bg-warning");
        $("#bar").addClass("bg-warning");
    } else if (percent < 75 && percent > 25) {
        //bar is green
        $("#bar").removeClass("bg-warning");
        $("#bar").removeClass("bg-success");
        $("#bar").addClass("bg-success");
    } else if (percent < 25) {
        //bar is yellow for low
        $("#bar").removeClass("bg-success");
        $("#bar").removeClass("bg-warning");
        $("#bar").addClass("bg-warning");
    }

    //add px back to string and return
    barnum = barnum + "px";
    return barnum;

}

//drop index 0-3 from array
function nextset() {
    for (var i = 0; i < 4; i++) {
        options.shift();
    }
    updatebuttons();
}

//hides and shows buttons
function buttons() {
    $("#dia-1").toggleClass("nodisplay");
    $("#dia-2").toggleClass("nodisplay");
    $("#dia-3").toggleClass("nodisplay");
    $("#dia-4").toggleClass("nodisplay");
}

//updates buttons with the new array
function updatebuttons() {
    //set text
    $("#choicetext1").text(options[0].text);
    $("#choicetext2").text(options[1].text);
    $("#choicetext3").text(options[2].text);
    $("#choicetext4").text(options[3].text);

    //set ids
    $("#choicetext1").data("id", options[0].newid);
    $("#choicetext2").data("id", options[1].newid);
    $("#choicetext3").data("id", options[2].newid);
    $("#choicetext4").data("id", options[3].newid);
}

//gameover
function gameover(type) {
    //display gameover screen in reponse text. make it creative please.
    //if is a low gameover 0
    //Your huberious ways have made you an enemy of the Romen government. Because of that you are captured and imprisoned
    //if is a high gameover 1
    //your presence with Jesus becomes noticed and you are also seen as a threat to the Jewish ways leading being unjustily imprisoned

    //hide all elements
    $("#dia-1").css("display", "none");
    $("#dia-2").css("display", "none");
    $("#dia-3").css("display", "none");
    $("#dia-4").css("display", "none");
    $("#response-text").css("display", "none");
    $("#story-text").css("display", "none");

    //display gameover
    $("#gameover-text").addClass("display");
    //display reset button
    $("#gameover-btn").addClass("display");
}


$(document).ready(function () {
    updatebuttons();

    //start button listener
    $("#start-btn").click(function () {
        $("#title-container").toggleClass("display");
        $("#story-container").toggleClass("display");
    });

    //choice 1 listener
    $("#dia-1").click(function () {
        //get choice
        choice = options[$("#dia-1").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        $("#response-text").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
    });

    //for a real choice making system.
    /*$("#dia-1").click(function () {
        let choice = $("#dia-1").data('id');
        choice = diaoptions[choice];
        $("#dia-1").attr('data-id', choice.newid);
        let newchoice = diaoptions[choice.newid]
        $("#choicetext1").text(newchoice.text);
        $("#bar").css({
            "height": addpx(newchoice.change)
        })

        //add response text box over the story text box for click

    });*/

    //choice 2 listener
    $("#dia-2").click(function () {
        //get choice
        choice = options[$("#dia-2").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        $("#response-text").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
    });


    //choice 3 listener
    $("#dia-3").click(function () {
        //get choice
        choice = options[$("#dia-3").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        $("#response-text").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
    });


    //choice 4 listener
    $("#dia-4").click(function () {
        //get choice
        choice = options[$("#dia-4").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        $("#response-text").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
    });

    //response area listener
    $("#response-text").click(function () {
        //hide reponse box
        $("#response-text").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
        //update buttons with function above
        nextset();
        //show buttons with updated text
        buttons();
    });


});
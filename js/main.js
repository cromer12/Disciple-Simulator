/*
*todo:
    game over text for 0 and 1
    scrolling marque text at end of game text
*
*/

let options = diaoptions;
let q = 0;

//add pixels and changes bar color depeneding on the level of public opinion
function addpx(px, toadd) {
    let barnum = (parseInt(px.replace(/px/, "")) + parseInt(toadd * 10));
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
    updatebuttons();
    nextquestion();
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
    $("#choicetext1").text(options[q].dialog[0].text);
    $("#choicetext2").text(options[q].dialog[1].text);
    $("#choicetext3").text(options[q].dialog[2].text);
    $("#choicetext4").text(options[q].dialog[3].text);

    //set ids
    $("#choicetext1").data("id", options[q].dialog[0].newid);
    $("#choicetext2").data("id", options[q].dialog[1].newid);
    $("#choicetext3").data("id", options[q].dialog[2].newid);
    $("#choicetext4").data("id", options[q].dialog[3].newid);
}

function showresponse() {
    $("#response-text").toggleClass("display");
    $("#response-btn").toggleClass("display");
    $("#story-text").toggleClass("nodisplay");
}

//win
function win() {
    gameover(2);
    let txt = 'aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl';
    let mark = '<marquee behavior="scroll" direction="up" scrollamount="3" loop="1">' + txt + '</marquee>';
    $("#story-container").html(mark);
    $("#story-container").css("padding-top", "0px");
    $("#story-container").css("padding-bottom", "0px");
    $("#story-container").attr('id', 'scrollingBox')
}

//gameover
function gameover(type) {
    //display gameover screen in reponse text. make it creative please.
    //if is a low gameover 0
    //Your huberious ways have made you an enemy of the Romen government. Because of that you are captured and imprisoned
    //if is a high gameover 1
    //your presence with Jesus becomes noticed and you are also seen as a threat to the Jewish ways leading being unjustily imprisoned

    //if is a win gameover 2
    //just hide everything

    //hide all elements
    $("#dia-1").css("display", "none");
    $("#dia-2").css("display", "none");
    $("#dia-3").css("display", "none");
    $("#dia-4").css("display", "none");
    $("#response").css("display", "none");
    $("#story-text").css("display", "none");

    if (type == 0) {
        //display gameover
        $("#gameover-text").addClass("display");
        $("#gameover-text").text("gameover 0");
        //display reset button
        $("#gameover-btn").addClass("display");
        $("#story-title").text("Game Over");
    } else if (type == 1) {
        //display gameover
        $("#gameover-text").addClass("display");
        $("#gameover-text").text("gameover 1");
        //display reset button
        $("#gameover-btn").addClass("display");
        $("#story-title").text("Game Over");
    } else {

    }

}

function fadeout() {
    //edit the second paramater to prolong screen time of scrolling text
    setTimeout(function () {
        $('body').html('<div id="overlay"></div>');
        //do what you need here
        $('#overlay').animate({
            opacity: 1,
        }, 5000, function () {
            // Animation complete.
        });
    }, 5000);
}

function nextquestion() {
    $("#story-title").text(options[q].question.title);
    $("#story-text").text(options[q].question.text);
}

function startup() {
    updatebuttons();
    nextquestion();
}


$(document).ready(function () {
    startup();

    //start button listener
    $("#start-btn").click(function () {
        $("#title-container").toggleClass("display");
        $("#story-container").toggleClass("display");
    });

    //choice 1 listener
    $("#dia-1").click(function () {
        //get choice
        choice = options[q].dialog[$("#dia-1").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        showresponse();
    });

    //choice 2 listener
    $("#dia-2").click(function () {
        //get choice
        choice = options[q].dialog[$("#dia-2").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        showresponse();
    });


    //choice 3 listener
    $("#dia-3").click(function () {
        //get choice
        choice = options[q].dialog[$("#dia-3").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        showresponse();
    });


    //choice 4 listener
    $("#dia-4").click(function () {
        //get choice
        choice = options[q].dialog[$("#dia-4").data('id')];
        //change bar height
        $("#bar").css({
            "height": addpx($("#bar").css('height'), choice.change)
        });
        //add response text  to response box
        $("#response-text").text(choice.response);
        //hide all buttons
        buttons();
        //show response box
        showresponse();
    });

    //response area listener
    $("#response").click(function () {
        //hide reponse box
        $("#response-text").toggleClass("display");
        $("#response-btn").toggleClass("display");
        $("#story-text").toggleClass("nodisplay");
        //increment the set
        q++;
        //win check
        if (q == options.length) {
            win();
        } else {
            //update buttons with function above
            nextset();
            //show buttons with updated text
            buttons();
        }
    });
});
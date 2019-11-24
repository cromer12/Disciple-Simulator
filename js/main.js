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
    let txt = 'You are there when Jesus is crucified. The crowds surrounding him are hurling insults like stones.  You are close enough to him to hear him cry, "My God, my God, why have you forsaken me?" as he draws his last breath. The sky grew dark as Jesus\'s lifeless body hung there. "Surely," you hear a soldier say, "this man was the Son of God." You depart, head hung low, to the city to mourn Jesus\'s loss. You feel as if your own father has died; your heart is cold and your mind is empty of all thought. After a few days of mourning, you walk down the street to leave for your home. You see a woman running down the street. She is shouting something; you can barely make the words out. "He lives! He lives!" you hear as a faint echo. "Truly I tell you, he lives!" you feel as if you swallowed a brick. The weight in your stomach sudden turns into your heart racing. "He lives?" you ask yourself.  The burden falls from your heart and you have faith. "He lives!" you shout!';
    let mark = '<marquee behavior="scroll" direction="up" scrollamount="3" loop="1">' + txt + '</marquee>';
    $("#story-container").html(mark);
    $("#story-container").css("padding-top", "0px");
    $("#story-container").css("padding-bottom", "0px");
    $("#story-container").attr('id', 'scrollingBox')
}

//gameover
function gameover(type) {

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
        $("#gameover-text").text('You are walking, minding your own business when suddenly, a man grabs the back of your arm. You struggle for only an instant before you are tackled to the ground by the man. "You are going away for a long time boy," growls the man behind you. You realize you are being arrested for your social misconduct.  You are bound and thrown into a jail cell. It will be five years before you see the light of day again. One night while you are sleeping in your cell, a loud crack fills the entire prison. You jump to your feet to see your cell door wide open. You run out to see the guard about to fall his sword and a man running from his cell to stop him. "Do not take your own life," shouts the prisoner, "We are all still here!" You approach this man and find out his name is Peter. You hear of Jesus and his story; you decide to become one of his followers.');
        //display reset button
        $("#gameover-btn").addClass("display");
        $("#story-title").text("Roman Prison");
    } else if (type == 1) {
        //display gameover
        $("#gameover-text").addClass("display");
        $("#gameover-text").text('You walk into a synagogue and two Pharisees walk up to you. "Hello brother," they say, "We need to speak to you outside." You step out with the pair. "Your presence with Jesus been noticed," one of the men say, "and, as I am sure you understand, that makes you a threat and enemy to the temple." Stunned by their words, you are bound. A few days later you appear before a Jewish court. "Stone this heretic!" shouts one of the men. You are locked up until after Passover. . . Today is your last day. Looking up, you see a stone as large as chest hanging fifteen feet in the air. You are not first to die for a belief outside of Judaism, but as you take your dying breath, Jesus appears to you. It is almost as if he is floating in mid-air. There are wounds on his hands and feet. Suddenly, your heart jumps and the words "Jesus, I believe in you," flow from your lips. There is a loud crack, then all that you can see is Jesus. Brilliant light bursts forth filling you sight "Son," he says, "Your sins, are forgiven; Welcome Home." ');
        //display reset button
        $("#gameover-btn").addClass("display");
        $("#story-title").text("Jewish End");
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
let diaoptions = [{

    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew. What do you do?"
    },

    dialog: [{
            //text to display on the button
            text: "Sit on the ground and watch from afar",
            //set change values negative to reduce meter
            change: -2,
            //reponse to go in story box
            response: ""
        },
        {
            text: "Leave the crowd",
            change: -5,
            response: ""
        },
        {
            text: "Approach the river's edge",
            change: 2,
            response: ""
        },
        {
            text: "Wade into the river",
            change: 10,
            response: ""
        }
    ]

}, {
    question: {
        title: "House at Capernaum",
        text: 'While you are walking down the streets of Capernaum, you notice three men carrying a paralyzed man on a strecher. "Move out of the way!," they shout as they pass you. You notice the man carrying a side by himself is struggling to hold up the weight. What do you do?'
    },

    dialog: [{
            text: "Follow the three men and see where they are in such a hurry to",
            change: 2,
            response: ""
        },
        {
            text: "Step out of the way and contiue on your way",
            change: -5,
            response: ""
        },
        {
            text: "Stick out your foot",
            change: -10,
            response: "trip and fall"
        },
        {
            text: 'Run after them and while shouting, "Allow me to help you!"',
            change: 10,
            response: ""
        }
    ]
}, {
    question: {
        title: "Sabbath Day Miracle",
        text: '"Stand up in front of everyone," he states. It is the same man you have seen before. He looks similar to other Jewish man to you, but there is something unshakable about his presence. Beside him stands another man with a disformed hand. The familiar man contiues, “Which is lawful on the Sabbath: to do good or to do evil, to save life or to kill?”'
    },

    dialog: [{
            text: 'Shout, "it is lawful to do good any day!"',
            change: 15,
            response: "Suddenly, the man's hand is healed! Intrigued by this man, you discover his name is Jesus and decide to follow him. A rabbi with this kind of wisdom does not appear everyday!"
        },
        {
            text: 'Shout, "it is not lawful to save a life on the Sabbath!"',
            change: -15,
            response: "To your surpise, the man's hand is healed! Intrigued by this man, you discover his name is Jesus and decide to follow him. Someone needs to keep tabs on this heretic after all."
        },
        {
            text: "Remain silent",
            change: 5,
            response: "Suddenly, the man's hand is healed! Intrigued by this man, you discover his name is Jesus and decide to follow him."
        },
        {
            text: "Turn and leave",
            change: -5,
            response: "Though you left, a burning desire to know more about this man burns inside of you. Murmurings of a miracle fill the chatter of the streets. You ask around and find out his name is Jesus and that he has just left for the lake."
        }
    ]
}, {
    question: {
        title: "Fireside Discussion",
        text: 'Your sandle breaks and you fall behind the crowd. By the time you caught up to the crowd, the sun has set. You see many fires on the hillside, and decide to sit down by the nearest one. The woman beside you says, "Did you understand what the rabbi meant by mustard seed?"'
    },

    dialog: [{
            text: "Mustard seed? Pah, who cares?",
            change: -10,
            response: ""
        },
        {
            text: 'Having no idea what she is talkig about you quip, "Of course, God can take any seed and make it bare fruit!!"',
            change: -15,
            response: ""
        },
        {
            text: 'You pause for a second and respond, "I missed that part, can you tell me what he said?"',
            change: 5,
            response: ""
        },
        {
            text: "You avoid eye contact and look down.",
            change: 0,
            response: ""
        }
    ]
}, {
    question: {
        title: "Lost and Found",
        text: "You wake in the morning to find that most of people have left. You also notice Jesus and his followers are misssing. Saddened by this discovery you head back to town and spend the next few weeks laboring in a vineyard. Coming to collect your pay, you here a laborer mention that one of Jesus's followers is in town preaching. You go to town, hoping to find Jesus and instead hear a man named Peter preaching."
    },

    dialog: [{
            text: "Wait for Peter to finish and follow close by him",
            change: 5,
            response: ""
        },
        {
            text: "Introduce yourself to him",
            change: 10,
            response: ""
        },
        {
            text: "Try to blend into the crowd and keep your distance",
            change: -3,
            response: ""
        },
        {
            text: "Speak against Peter's teachings",
            change: -20,
            response: ""
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "By The Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew."
    },

    dialog: [{
            text: "Wade by the river",
            change: -10,
            response: "You see a man in the water 0"
        },
        {
            text: "Wade by the river 1",
            change: 20,
            response: "You see a man in the water 1"
        },
        {
            text: "Wade by the river 2",
            change: 30,
            response: "You see a man in the water 2"
        },
        {
            text: "Wade by the river 3",
            change: 40,
            response: "You see a man in the water 3"
        }
    ]
}];
let diaoptions = [{

    question: {
        title: "By Water",
        text: "You see a large crowd gathing by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew. What do you do?"
    },

    dialog: [{
            //text to display on the button
            text: "Sit on the ground and watch from afar",
            //set change values negative to reduce meter
            change: -2,
            //reponse to go in story box
            response: 'You see one man dunk the other into the water. As the dunked is raised up, you see the sky split open and a dove desends down towards the one in the water. You feel the ground rumble as the words, "You are my Son, whom I love; with you I am well pleased," echo throughout all the land. You decide to follow this man to uncover the mystery of this experience.'
        },
        {
            text: "Leave the crowd",
            change: -5,
            response: "You shrug at the sight of these men standing in the water. You turn your back and contiue on your way to Capernaum. On the way, you sense a slight shake coming from the ground below followed by a crack of thunder. You look around, caught off guard by these strange occurances. Seeing nothing around you that indicates danger, you relax and contiue on your way"
        },
        {
            text: "Approach the river's edge",
            change: 2,
            response: 'You see the features of the man\'s face clearly. He looks like an average man, but his eyes are bright with life. Just before he is dipped into the water, he catches your gaze. You are stunned for a moment as he is laid under the water. Suddenly, the sky rips open and a booming voice declares, "You are my Son, whom I love; with you I am well pleased." You have a hard time making out the message as the words echo throughout the valley. You look up to see a dove descending gently towards the man. After this experience, you decide to follow this man.'
        },
        {
            text: "Wade into the river",
            change: 10,
            response: "You feel drown to the pair. Before you realize it, you are waist deep in the water approaching the two. The man was dunked by the other and suddenly, it was like lightning struck you. You awake on the edge of the river; You are alone, and the sun has set. You legs are tingling and the only thing your remember is the face of the man who was dipped. After contemplating your experience a bit more, you look around to see you are on the shore of Capernaum! You must have floated quite a distance before waking up. It seems someone is looking out for you. You quickly rise and head toward the city lights, feet still tingling a little with each step."
        }
    ]

}, {
    question: {
        title: "Capernaum's House",
        text: 'While you are walking down the streets of Capernaum, you notice three men carrying a paralyzed man on a strecher. "Move out of the way!" they shout as they pass you. You notice the man carrying a side by himself is struggling to hold up the weight. What do you do?'
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
        title: "Sabbath Miracle",
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
            response: "To your surpise, the man's hand is healed! Intrigued by this man, you discover his name is Jesus and decide to follow him. Someone needs to keep tabs on this man."
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
        title: "Baskets Full",
        text: 'Upon arriving, you see Peter climb into a boat with Jesus. The large crowd in front of you follows the direction the boat is heading and you choose to follow along yourself. You stop with the crowd as the sun is setting. You think to yourself, "I am glad I bought this fish and bread in town. I will not be hungry tonight." Jesus and his disciples have exited the boat and you notice Peter walking your way. "Have any food?" asks the familiar voice.'
    },

    dialog: [{
            text: "Offer your last loaf of bread",
            change: 5,
            response: ""
        },
        {
            text: "Give him a fish you bought from town a few hours ago",
            change: 10,
            response: ""
        },
        {
            text: "Tell him you have nothing to spare",
            change: 0,
            response: ""
        },
        {
            text: 'Lie by saying, "I have no food!"',
            change: -10,
            response: ""
        }
    ]
}, {
    question: {
        title: "Unclean Hands",
        text: 'You approach Jesus and see a circle of Pharisees around him. One of them speaks in an accusatory tone "Why don’t your disciples live according to the tradition of the elders instead of eating their food with defiled hands?" You are caught off guard by the question. Jesus says "Isaiah was right when he prophesied about you hypocrites..."'
    },

    dialog: [{
            text: "You stand in anticipation and awe as this moment unfolds",
            change: 0,
            response: ""
        },
        {
            text: "Side with the disciples",
            change: 10,
            response: ""
        },
        {
            text: "Side with the Pharisees",
            change: -10,
            response: ""
        },
        {
            text: "Attempt to leave",
            change: -5,
            response: ""
        }
    ]
}, {
    question: {
        title: "Divorce Law",
        text: 'You travel the countyside with Jesus\'s following. You witness a blind man healed, another meal for thousands appears from no where, and a demon is casted out from a boy. Finally after crossing the Jordan, a group of pharisees approaches Jesus again. You catch words of divorce and decide to move closer to the converstaion. "Moses permitted a man to write a certificate of divorce and send her away," said the Pharisee who started the confrontation. Jesus pauses with a slight grimace on his face. "It was because your hearts were hard that Moses wrote you this law,” he said in a low tone.'
    },

    dialog: [{
            text: "Look appauled at the Pharisees upon hearing Jesus's words",
            change: 5,
            response: ""
        },
        {
            text: "Defend the ideals of the Pharisees to those around you",
            change: -10,
            response: ""
        },
        {
            text: "Pause to contemplate Jesus's teachings",
            change: 2,
            response: ""
        },
        {
            text: "Acknowledge the person next to you",
            change: -5,
            response: ""
        }
    ]
}, {
    question: {
        title: "Tax Collection",
        text: 'You head to Jerusalem for the Passover celebration. As you are walking through the market square, you see a large crowd standing in a circle. You approach to see what has caused such a great gathering. There is are some Pharisees and Herodians talking to Jesus. "Teacher, we know that you are a man of integrity. You aren’t swayed by others, because you pay no attention to who they are; but you teach the way of God in accordance with the truth. Is it right to pay the imperial tax to Caesar or not? Should we pay or shouldn’t we?"'
    },

    dialog: [{
            text: "Reach your hand into your coin purse",
            change: 5,
            response: ""
        },
        {
            text: 'Shout, "Why trap an innocent man!?"',
            change: 10,
            response: "You see a man in the water 1"
        },
        {
            text: 'Leave shouting, "Guards!"',
            change: -10,
            response: "You see a man in the water 2"
        },
        {
            text: 'Push your way through the crowds for a better look',
            change: 15,
            response: "You see a man in the water 3"
        }
    ]
}, {
    question: {
        title: "Pilate's Orders",
        text: '"Give us Barabbas!" you hear being shouted from the town square. Your curiosity compels you to go towards the rioting. You arrive to see Pilate standing with beaten Jesus on one side and a grizzly looking man on the other. "That must be Barabbas," you think to yourself. Pilate says, "What shall I do, then, with the one you call the king of the Jews?" then the crowd errupts with, "crucify him!"'
    },

    dialog: [{
            text: 'Shout, "Release Jesus! He is blameless!"',
            change: 5,
            response: ""
        },
        {
            text: 'Follow the crowd by shouting, "crucify him!"',
            change: -5,
            response: ""
        },
        {
            text: "Attempt to push your to the front of the crowd",
            change: -10,
            response: "You see a man in the water 2"
        },
        {
            text: "Stand knowing the situation is unchangeable",
            change: 0,
            response: "You see a man in the water 3"
        }
    ]
}];
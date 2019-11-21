let diaoptions = [{

    question: {
        title: "By Water",
        text: "You see a large crowd gathering by the Jordan. In the water is a man wearing camel's skin and he is about to submerge a Jew. What do you do?"
    },

    dialog: [{
            //text to display on the button
            text: "Sit on the ground and watch from afar",
            //set change values negative to reduce meter
            change: -2,
            //reponse to go in story box
            response: 'You see one man dunk the other into the water. As the dunked one is raised up, you see the sky split open and a dove desends down towards the one in the water. You feel the ground rumble as the words, "You are my Son, whom I love; with you I am well pleased," echo throughout all the land. You decide to follow this man to uncover the mystery of this experience.'
        },
        {
            text: "Leave the crowd",
            change: -5,
            response: "You shrug at the sight of these men standing in the water. You turn your back and continue on your way to Capernaum. On the way, you sense a slight shake coming from the ground below followed by a crack of thunder. You look around, caught off guard by these strange occurances. Seeing nothing around you that indicates danger, you relax and continue on your way"
        },
        {
            text: "Approach the river's edge",
            change: 5,
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
            response: 'You run to catch up with the three men. As they turn the corner, you hear the low rumble of a crowd. You turn the corner and see a house with people littered everywhere. There are people lining the steps, peeking into the windows, and bursting through the entryways. You notice that the three men you saw earlier are on the roof now. You hear a loud "crack," they remove the section of the roof and lower the man down. A moment passes and a man holding the same stretcher comes brusting from the front door! He is now walking and shouting that a man has healed him! The stranger you saw at the river earlier enters your mind. You wonder for a moment, and seeing no way into the house, decide to leave.'
        },
        {
            text: "Step out of the way and continue on your way",
            change: -5,
            response: "You sidestep the trio at the last second. As they pass you, you get a look at the face of the man on the stretcher. His face is hallow and he appears to be in pain. You grimace at the sight of this poor soul. After they have passed, you continue on your way down the streets of Capernaum toward the synagogue."
        },
        {
            text: "Stick out your foot",
            change: -15,
            response: 'You move out the way and lazily put your foot out. The man at the back, carrying an end by himself notices your foot at the last moment. He narrowly dodges it, but in one smooth action, knees the inside of our theigh. Pain rockets from the impact and you fall down. As the group turns the corner, you hear the man in the back sarcastically shouts, "Do not worry! We will be back to get you shortly!" You cannot help but to notice an older woman selling fruit laughing quietly to herself at the justice she witnessed. Embarrassed, you get back up to your feet and head down the street towards the synagogue.'
        },
        {
            text: 'Run after them and while shouting, "Allow me to help you!"',
            change: 10,
            response: 'You turn and sprint towards the group, "Let me help you with this end!" You catch up and grab a corner of the stretcher. "Not a moment too soon," remarks the man beside you, "My arms were about to give out." You continue with the group until you reach a house overflowing with people. "How are we going to get him inside?" asks one of the men up front. "There is not anyone on the roof! Quickly now!" states the man beside you. You head to the roof, stretcher in tow, and begin peeling the roof off of the building. Within a few moments, you see the man who had been in the river yesterday looking up at you. Stunned, you fall backwards away from the hole as the trio lowers the stretcher down into the hole. A moment passes and you hear a shout, "I am healed!" Walking out of front door is the man you just brought to the roof on a stretcher. You look down the hole and see that the man from the river has vanished before you could speak with him. Frustrated, you get down from the roof and head towards the synagogue.'
        }
    ]
}, {
    question: {
        title: "Sabbath Miracle",
        text: '"Stand up in front of everyone," he states. It is the same man you have seen before. He looks similar to other Jewish man to you, but there is something unshakable about his presence. Beside him stands another man with a disformed hand. The familiar man continues, “Which is lawful on the Sabbath: to do good or to do evil, to save life or to kill?”'
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
            response: "You wrapped your arms angrily around yourself, upset you missed the teaching. The woman seeing your posture offers to tell you the teaching. You agree to listen and after about an hour, she has finished reciting the parables. You thank her, she leaves, and you doze off beside the fire."
        },
        {
            text: 'Having no idea what she is talking about you quip, "Of course, God can take any seed and make it bear fruit!!"',
            change: -15,
            response: "Her eyes narrow as she sees right through your lie. Irritated by your attempt at lying, she huffs as gets up and finds another group of people to chat with. Shortly after she leaves, the others around the fire leave as well leaving you alone. Saddened by the outcome of your actions, you find solace in a good night's rest."
        },
        {
            text: 'You pause for a second and respond, "I missed that part, can you tell me what he said?"',
            change: 5,
            response: "she smiles softly and tells you all she had heard during the teaching. After she has finished reciting the parables and words of Jesus, she leaves to return to her family. You look around and notice that everyone has left the fire you are at as well. Find peace in the of Jesus, you mediate on the meanings of the parables and doze off."
        },
        {
            text: "You avoid eye contact and look down.",
            change: 0,
            response: "She assumes you are either deaf or dumb... or maybe both. She breaks a piece of bread and places it in your lap with a smile. Then she quickly stands and goes to a different group. You cannot help but wonder what compelled her for such kindness... Maybe it was the words Jesus spoke that evening."
        }
    ]
}, {
    question: {
        title: "Lost and Found",
        text: "You wake in the morning to find that most of people have left. You also notice Jesus and his followers are gone as well. Saddened by this discovery you head back to town and spend the next few weeks laboring in a vineyard. Coming to collect your pay, you hear a laborer mention that someone in town mentioned Jesus. You go to town, purchase some bread and a fish, and search hoping to find Jesus and instead find a man named Peter preaching."
    },

    dialog: [{
            text: "Wait for Peter to finish and follow close to him",
            change: 5,
            response: "You hear Peter preach of forgiveness of sin and the coming messiah. You discover that Peter use to be a fisherman before Jesus called him. You blend into the large crowd that is following Peter out of town."
        },
        {
            text: "Introduce yourself to him",
            change: 10,
            response: '"Hello Peter!" you state as you walk up to him. He seems a little uncomfortable. He quick mutters "Hello!" and turns to walk away from you. You could tell he was not try to offend you. you assume you may have put him on edge with your forwardness. You follow Peter out of town with a large crowd of followers right behind you.'
        },
        {
            text: "Try to blend into the crowd and keep your distance",
            change: -3,
            response: "You make your way up to the back of the crowd. You pull your cloak over your head and get close enough to Peter to hear him. As you're making your way through the crowd, you make eye contact with a guard. He makes a suspicious squint and you duck and turn another way. Luckily, the guard does not think much more of you. You keep your position in the crowd and follow Peter out of town."
        },
        {
            text: "Speak against Peter's teachings",
            change: -20,
            response: "You push your way to the front of the crowd and begin to call Peter a heretic! Before you get two sentences into your monologue, a guard tackles you to the ground. You are escorted to the town gate and tossed out. After a few hours, you see Peter followed by a large crowd come out of the gate. You decide you do not have much better to do and blend into the crowd."
        }
    ]
}, {
    question: {
        title: "Baskets Full",
        text: 'Upon arriving, you see Peter climb into a boat with Jesus. The large crowd in front of you follows the direction the boat is heading and you choose to follow along yourself. You stop with the crowd as the sun is setting. You think to yourself, "I am glad I bought this fish and bread back in town. I will not be hungry tonight." Jesus and his disciples have exited the boat and you notice Peter walking your way. "Have any food?" he asks.'
    },

    dialog: [{
            text: "Offer your last loaf of bread",
            change: 5,
            response: '"Here, take this," you say handing Peter a loaf of bread. "I know it is not much, but its all the bread I have," you state with a smile. Peter takes the bread and smiles softly at you. fortunately for you, he does not recongize you from the town. He takes the loaf, gives it to Jesus, bread is broken, and basket upon basket is filled with the bread Jesus is breaking. You a filled with joy knowing your bread had a part to play in this miracle.'
        },
        {
            text: "Give him a fish you bought from town a few hours ago",
            change: 10,
            response: '"I have just the thing," you say handing Peter a fish. "I bought it only an hour ago, it is still fresh!" you state with enthusiasm. Peter gladly takes the fish from you and quickly returns to Jesus. He takes the fish, gives it to Jesus, bread is broken, and basket upon basket is filled with food as Jesus is blessing it. You are filled with joy knowing your bread had a part to play in this miracle.'
        },
        {
            text: "Tell him you have nothing to spare",
            change: 0,
            response: 'He looks a little disheartened at your response. He can clearly see the loaf of bread hanging from your pocket. "I understand," says Peter, "after all, a few loafs will not feed this whole lot!" You chuckle a little feeling as if your wisdom was understood by Peter. You see Peter return to Jesus with a few loafs and a couple of fishes. Jesus gives thanks, breaks bread, and the disciples fill a basket... then two baskets... then three... before you know it, everyone has feasted and all are filled! You feel foolish for allowing your "wisdom" to come inbetween you and God.'
        },
        {
            text: 'Lie by saying, "I have no food!"',
            change: -10,
            response: 'He can clearly see the loaf of bread hanging from your pocket. "I understand it is a lot of ask, but please do not lie," Peter states frustratedly. You see Peter return to Jesus with a few loafs and a couple of fishes. After a short time, there is food for everyone. You desire for self preservation is foolish when God is involved in a situation. You guiltily eat wishing you could turn back time.'
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
            response: 'As you become acutely aware of the tension in the air, your eyes dart back and forth from Jesus to the Pharisee. Jesus continues, "as it is written: \'These people honor me with their lips, but their hearts are far from me. They worship me in vain; their teachings are merely human rules.\' You have let go of the commands of God and are holding on to human traditions." For a moment, you could hear a quill drop from the next valley over. Jesus says, "You have a fine way of setting aside the commands of God in order to observe your own traditions! For Moses said, \‘Honor your father and mother,\’ and, ‘Anyone who curses their father or mother is to be put to death.\’ But you say that if anyone declares that what might have been used to help their father or mother is Corban (that is, devoted to God)— then you no longer let them do anything for their father or mother. Thus you nullify the word of God by your tradition that you have handed down. And you do many things like that." All stand speechless as Jesus begins teaching the crowd... '
        },
        {
            text: "Side with the disciples",
            change: 10,
            response: 'Feeling a protective urge surge through your body, you quickly move to stand beside Peter and brace yourself for the oncoming conflict. Then Jesus speaks, "as it is written: \'These people honor me with their lips, but their hearts are far from me. They worship me in vain; their teachings are merely human rules.\' You have let go of the commands of God and are holding on to human traditions." For a moment, you could hear a quill drop from the next valley over. Jesus says, "You have a fine way of setting aside the commands of God in order to observe your own traditions! For Moses said, \‘Honor your father and mother,\’ and, ‘Anyone who curses their father or mother is to be put to death.\’ But you say that if anyone declares that what might have been used to help their father or mother is Corban (that is, devoted to God)— then you no longer let them do anything for their father or mother. Thus you nullify the word of God by your tradition that you have handed down. And you do many things like that." All stand speechless as Jesus begins teaching the crowd...'
        },
        {
            text: "Side with the Pharisees",
            change: -10,
            response: 'The Pharisee\'s words stir up a sudden unsecurity. You have eaten with unclean hands as well! How could I blatant disobey God\'s Law?? How could this "Rabbi" do the same as well? As you look up with a chip on your shoulder, Jesus speaks, "as it is written: \'These people honor me with their lips, but their hearts are far from me. They worship me in vain; their teachings are merely human rules.\' You have let go of the commands of God and are holding on to human traditions." For a moment, you could hear a quill drop from the next valley over. Jesus says, "You have a fine way of setting aside the commands of God in order to observe your own traditions! For Moses said, \‘Honor your father and mother,\’ and, ‘Anyone who curses their father or mother is to be put to death.\’ But you say that if anyone declares that what might have been used to help their father or mother is Corban (that is, devoted to God)— then you no longer let them do anything for their father or mother. Thus you nullify the word of God by your tradition that you have handed down. And you do many things like that." All stand speechless as Jesus begins teaching the crowd... '
        },
        {
            text: "Attempt to leave",
            change: -5,
            response: 'Feeling fearful of the oncoming conflict, you walk down the hill to join the gathering crowd. You see Jesus speak, and then the Pharisee slumps slowly before puffing up his chest while walking off. Jesus then turns to look at the crowd, and for a moment, he makes eye contact with you, "Listen to me, everyone, and understand this. Nothing outside a person can defile them by going into them. Rather, it is what comes out of a person that defiles them." You understand now why the Pharisee was so upset, and why Jesus could not be tried any longer.'
        }
    ]
}, {
    question: {
        title: "Divorce Law",
        text: 'You travel the countyside with Jesus\'s following. You witness a blind man healed, another meal for thousands appears from no where, and a demon is casted out from a boy. Finally after crossing the Jordan, a group of Pharisees approaches Jesus again. You catch words of divorce and decide to move closer to the converstaion. "Moses permitted a man to write a certificate of divorce and send her away," said the Pharisee who started the confrontation. Jesus pauses with a slight grimace on his face. "It was because your hearts were hard that Moses wrote you this law,” he said in a low tone.'
    },

    dialog: [{
            text: "Look appauled at the Pharisees upon hearing Jesus's words",
            change: 5,
            response: 'The Pharisee\'s words struck you on the cheek as if someone hit you with a cheap shot. You know they\'re right, but being around Jesus has changed how you feel and think. You thought it was clear this law was created because of the hardness of man\'s heart. Jesus continues speaking and you are compelled to listen "But at the beginning of creation God \'made them male and female. For this reason a man will leave his father and mother and be united to his wife,  and the two will become one flesh.\' So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."'
        },
        {
            text: "Defend the ideals of the Pharisees to those around you",
            change: -10,
            response: '"The words of the Pharisees must be true! It is the way we have been taught our entire lives," you say to those around you. You begin to speak again, then Jesus speaks, " "But at the beginning of creation God \'made them male and female. For this reason a man will leave his father and mother and be united to his wife,  and the two will become one flesh.\' So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate." Your heart is moved, both with anger and repentance. "Lord,"  you say in your spirit, "forgive me for my blindness. May these scales fall from my eye so I can see." You hang your head in despair at the revelation your heart received.'
        },
        {
            text: "Pause to contemplate Jesus's teachings",
            change: 2,
            response: 'You think to yourself, "Does God give man a law he cannot follow? Did Moses have to give man a way out? Maybe we were doomed to fail from the start." You stand looking at the ground as you think. You brought back by the voice of Jesus, "But at the beginning of creation God \'made them male and female. For this reason a man will leave his father and mother and be united to his wife,  and the two will become one flesh.\' So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate." His words pierce your heart and you feel tears in your eyes. For the first time in your life, you begin to understand what having a "tender heart" truly means.'
        },
        {
            text: "Acknowledge the person next to you",
            change: -5,
            response: 'You shuffle your feet around uncomfortably. Those around you notice your discomfort and you accidentally make eye contact with the man beside you. "Hello," you say greeting him with your best efforts to hide how you feel. He smirks at you and does not offer any comfort in this tension situation. Jesus speaks, "But at the beginning of creation God \'made them male and female. For this reason a man will leave his father and mother and be united to his wife,  and the two will become one flesh.\' So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate." You\'re stunned by Jesus\'s words. The man next to you punches you softly on the shoulder and says, "From the face your making, you look like you have had more than one divorce!" The comment hurts your feelings and you turn your back and sulk away from the crowd.'
        }
    ]
}, {
    question: {
        title: "Tax Collection",
        text: 'You head to Jerusalem for the Passover celebration. As you are walking through the market square, you see a large crowd standing in a circle. You approach to see what has caused such a great gathering. There are some Pharisees and Herodians talking to Jesus. "Teacher, we know that you are a man of integrity. You aren\'t swayed by others, because you pay no attention to who they are; but you teach the way of God in accordance with the truth. Is it right to pay the imperial tax to Caesar or not? Should we pay or shouldn\'t we?"'
    },

    dialog: [{
            text: "Reach your hand into your coin purse",
            change: 5,
            response: 'Suddenly, you feel the urge to reach in your pocket and pull out a denarius. You begin to roll it around in your fingers. Just then you wake up to hear, “bring me a denarius and let me look at it," and see Jesus looking at you holding out his hand. You bring Jesus the denarius and he asks “Whose image is this? And whose inscription?” "Caesar’s," the crowd replies. Then Jesus says, "Give back to Caesar what is Caesar’s and to God what is God’s," and pushes the coin back into your hand. Everyone was amazed by such a truth stated so plainly. You walk away from the crowd with Jesus\'s words still repeating in your mind.'
        },
        {
            text: 'Shout, "Why trap an innocent man!?"',
            change: 10,
            response: 'You shout draws the attention of the crowd around you. One man looks angry at your shout and another joins in shouting, "That is right! This man is blameless!" A few moment later Jesus speaks, “bring me a denarius and let me look at it," and see Jesus looking at you holding out his hand. You see a Pharisee forcibly place a coin in Jesus\'s hand. Jesus asks “Whose image is this? And whose inscription?” "Caesar’s," the crowd replies. Then Jesus says, "Give back to Caesar what is Caesar’s and to God what is God’s" You begin to cheer loudly as the you see the Pharisees hang their heads at this failed attempt to entrap Jesus. You leave the gathering feeling encouraged and empowered.'
        },
        {
            text: 'Leave shouting, "Guards!"',
            change: -10,
            response: 'As you exit the crowd, you begin to open your mouth to shout and you hear an older lady say, "I wouldn\'t do that if I were you. I would hate to see this encounter interrupted." You look down to see the same older lady from Capernaum. Shocked you say, "are you following me? I saw you a few weeks ago in Capernaum?" She laughs with a slight whistle, "follow you? No, I am following that man over there," and she points toward Jesus. As you turn around to follow her finger, you bump into into a guard and almost knock him over. "Watch where you are going, I should arrest you!" says the guard. You quickly apologize and the guard walks away from you. You turn to talk to the older woman and discover she has vanished! "She must have left when she saw the guard... I would have too," you think. You leave to go to make your purchases, but you cannot shake the feeling that she may have been a ghost...'
        },
        {
            text: 'Push your way through the crowds for a better look',
            change: 15,
            response: ""
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
            response: "helpless"
        },
        {
            text: 'Follow the crowd by shouting, "crucify him!"',
            change: -5,
            response: "helpless"
        },
        {
            text: "Attempt to push your to the front of the crowd",
            change: -10,
            response: "helpless"
        },
        {
            text: "Stand knowing the situation is unchangeable",
            change: 0,
            response: "helpless"
        }
    ]
}];
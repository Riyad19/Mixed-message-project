first_Message = ["Rise and Grind!",
"Take control of your life!",
"Take control of your feelings!",
"Yo bruh, what are you doing, wake up, its your time, lets go!",
"Attack the day without mercy.",
"You got work to do! It's grind season!",
"Get it done today! Attack it! Destroy it and get it DONE!",
"Stop waiting for something to move you, and move yourself!",
"If you want it to happen, get off your butt and make it happen.",
"Change your mind! Change your life.",
"Take full ownership of your time, your mind, your day.",
"You gotta change or nothing changes.",
"If we gon' be champions, process driven!"
]

second_Message = ["You don't belong at the bottom! Get to where you're supposed to be!",
"Stop being a lazy bum ass person thats full of excuses.",
"You are the reason why you're not winning.",
"You gotta get comfortable being uncomfortable!",
"You cant get the end result without the grind!",
"People who do stuff consistently and on time, they surpass people who talented and gifted.",
"You control your mood! You control your feelings!",
"You can't just talk about it, you gotta be about it!",
"How does the lion become the king of the jungle? His MENTALITY!",
"Mental toughness: Decide, Commit, Act, Succeed, Repeat.",
"Do not take the easy way out.",
"While the other guys sleeping, i'm working!",
"Don't stop when you're tired, stop when you're done!",
"Time waits for no-one!",
"When your feelings tell you no, you tell them to SHUT THE FUCK UP!",
"No ones coming to do the hard work for you!",
"There is no shortcut to excellence."]

final_Message = ["Show up EVERYDAY",
"Work hard EVERYDAY",
"Hustle EVERYDAY", 
"Improve EVERYDAY",
"Keep GRINDING!",
"I will not stop!",
"I do not stop!",
"No more excuses!",
"You gotta move YOU!",
"You gotta go all in!",
"You will NOT outwork me!",
"We do NOT retreat! We do NOT give up! We do NOT surrender!",
"No such thing as tomorrow, we only got today!",
"I will do whatever it takes",
"Where do you start? Right HERE! when do you start? RIGHT NOW!"
]

const randomMessage1 = first_Message[(Math.floor(Math.random() * (first_Message.length)))];
console.log(randomMessage1);
const randomMessage2 = second_Message[(Math.floor(Math.random() * (second_Message.length)))];
console.log(randomMessage2);
const randomMessage3 = final_Message[(Math.floor(Math.random() * (final_Message.length)))];
console.log(randomMessage3);

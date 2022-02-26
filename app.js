//----------------------------------------- HARRY POTTER 5-A-SIDE FOOTBALL ----------------------------------------------------

//------------- HOUSE NAMES, BLOOD-TYPES, SPELLS AND PLAYING POSITION -----------------
const houses = ["Godric Gryffindor", "Salazar Slytherin", 
"Rowena Ravenclaw", "Helga Hufflepuff"];

const bloodTypes = ["Pure-blood", "Half-blood", "Muggle-born"];

const spellsCast = ["Expecto Patronum", "Confundo", "Obliviate", 
"Avada Kedavra", "Expelliarmus", "Wingardium Leviosa"];

const playerPosition = [
    /* 1-2-1 Diamond Formation + Goalkeeper */
    /* x 1 */"Goal-keeper", 
    /* x 1 */"Defender",
    /* x 2 */"Midfielder",
    /* x 1 */"Striker"
];

//----------------------------------------- ENEMIES AND GOODIES TEAM FACTS ----------------------------------------------------
//------------- ENEMIES STATS -----------------
const theEnemies =[
    {
    id: 0,
    character: "Bellatrix Lestrange",
    stength: 95 + "%",
    title: "Mistress of the Dark Arts",
    job: "Witch",
    house: houses[1],
    bloodType: bloodTypes[0],
    greeting: function(){
        return "Oi, do you know who I am?! " +
        "I am " + this.character + ", " + this.title + ". A " + 
        this.bloodType + ". " + "Be warned, filthy muggle!"
    },
    position: playerPosition[0] // Goalkeeper;
},
    {
    id: 1,
    character: "Lucius Malfoy",
    stength: 86 + "%",
    title: "Father of Draco, and a social elite",
    job: "Wizard",
    house: houses[1],
    bloodType: bloodTypes[0],
    greeting: function(){
        return "So you're friends with Potter? Ah...what a shame. " +
        "I am " + this.character + ", " + this.title + ". A " +
        this.bloodType + ". " + "I'll make sure my son disposes of you."
    },
    position: playerPosition[1] // Defender;
},
{
    id: 2,
    character: "Lord Voldemort",
    stength: 99 + "%",
    title: "Lord of Darkness",
    job: "Destroyer of Good",
    house: houses[1],
    bloodType: bloodTypes[1],
    greeting: function(){
        return "Well well well... Look who it is. Come to beg for forgiveness before the match? " +
        "You know me. I am " + this.character + ", " + this.title + ", " + this.job + ". I may be only a " + this.bloodType +
        ", " + " But I will take your soul from your body quicker than you can say " + spellsCast[3] + "."
    },
    position: playerPosition[2] // Midfielder;
    },
    {
        id: 3,
        character: "Dolores Umbridge",
        stength: 88 + "%",
        title: "Head of the Improper Use of Magic Office",
        job: "Witch",
        house: houses[1],
        bloodType: bloodTypes[0],
        greeting: function(){
            return "Before you speak, let me remind you, you must not tell lies. " +
            "My name is " + this.character + ", " + this.title + ". A " +
            this.bloodType + ". " + "Get in my way and see what happens."
        },
        position: playerPosition[2] // Midfielder;
    },
    {
        id: 4,
        character: "Draco Malfoy",
        stength: 74 + "%",
        title: "Son of Lucius, friend of Voldemort",
        job: "Wizard",
        house: houses[1],
        bloodType: bloodTypes[0],
        greeting: function(){
            return "Well this is going to be a catastrophic defeat on our behalf. " +
            "It's " + this.character + ", " + this.title + ", A " +
            this.bloodType + ". " + "I will dispose of you, one, by one."
        },
        position: playerPosition[3] // Striker;
    }
];

//------------- GOODIES STATS -----------------
const theGoodies =[
    {
    id: 0,
    character: "Rubeus Hagrid",
    stength: 85 + "%",
    title: "Gamekeeper and keeper of keys",
    job: "Wizard",
    house: houses[0],
    bloodType: bloodTypes[0],
    greeting: function(){
        return "Ello, are ye a friend of 'arry's? " +
        "You can call me " + this.character + ", " + this.title + ". A " + 
        this.bloodType + ". " + "FYI do not go to the top floor of the castle...I should't have said that."
    },
    position: playerPosition[0] // Goalkeeper;
},
    {
    id: 1,
    character: "Professor Minerva McGonagall",
    stength: 94 + "%",
    title: "Transformation teacher and master shapeshifter",
    job: "Witch",
    house: houses[0],
    bloodType: bloodTypes[0],
    greeting: function(){
        return "Aye hello there, " +
        "I am " + this.character + ", " + this.title + ". A " +
        this.bloodType + ". " + "Or am I?"
    },
    position: playerPosition[1] // Defender;
},
{
    id: 2,
    character: "Harry Potter",
    stength: 100 + "%",
    title: "The boy that lived",
    job: "Wizard - Destroyer of Evil",
    house: houses[0],
    bloodType: bloodTypes[1],
    greeting: function(){
        return "Come on gang, let's do this! Let's team together and punish Slytherin for good! " +
        "My name is " + this.character + ", " + this.title + ", " + this.job + ". Lord Voldemort despises me! I am a " + this.bloodType +
        ", " + "and I want you to meet my Owl Hedwig. See you around!";
    },
    position: playerPosition[2] // Midfielder;
    },
    {
        id: 3,
        character: "Professor Pomona Sprout",
        stength: 80 + "%",
        title: "Head of Herbology",
        job: "Witch",
        house: houses[3],
        bloodType: bloodTypes[0],
        greeting: function(){
            return "Ok everyone, cover your ears, I have a mandrake in my hand and I'm not afraid to use him. " +
            "Call me " + this.character + ", " + this.title + ". A " +
            this.bloodType + ". " + "I know the deadly herbs from the non-deadly...don't test me."
        },
        position: playerPosition[2] // Midfielder;
    },
    {
        id: 4,
        character: "Hermione Granger",
        stength: 88 + "%",
        title: "Best student in school",
        job: "Witch",
        house: houses[0],
        bloodType: bloodTypes[2],
        greeting: function(){
            return "Truly, this is not my ideal type of fun, believe me, it's barbaric. " +
            "Hi, I'm " + this.character + ", the " + this.title + ", A " +
            this.bloodType + ". " + "I have been outsmarting my fellow friends since they were in diapers."
        },
        position: playerPosition[3] // Striker;
    }
];

//----------------------------------------- ENEMIES AND GOODIES TEAM FACTS ----------------------------------------------------
/* Access individual greetings;
console.log(theEnemies[0].greeting());
*/

//------------- ALL ENEMIES NAMES -----------------
let allEnemies = "";
for(let i = 0; i < theEnemies.length; i++){
    allEnemies += theEnemies[i].character + "\n \n";
}

//------------- ALL GOODIES NAMES -----------------
let allGoodies = "";
for(let i = 0; i < theGoodies.length; i++){
    allGoodies += theGoodies[i].character + "\n \n";
}

console.log(allEnemies + allGoodies);

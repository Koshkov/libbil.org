
// Move to global functions
function genRandomInt(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// Move to global functions
// Function generates a random, valid Cutter author number
function genRandomCutter(){
    const initialLetters ="BCDFGHJKLMNPRTVWXZQAEIOUYS";
    var index = Math.floor(Math.random() * initialLetters.length)
    return initialLetters.charAt(index) + genRandomInt(2+(index > 17),10) + genRandomInt(3,10);
}

// Move to global functions
function getCutter(last_name, expand){
    let cutter = "";
    last_name = last_name.toUpperCase();
    cutter += last_name.charAt(0);
    //cutter += isVowel(cutter)
    cutter += cutterAfterConso(last_name.charAt(1));
    let i = 0;
    while(i < last_name.length && i < expand){
        cutter += cutterExpansion(last_name.charAt(i+2));
        i++;
    }
    console.log(cutter);
    return cutter;
    //Q,S
}

function isVowel(char){
    return "aeiouAEIOUY".indexOf(char) == -1;
}

function isConso(char){
    return !isVowel(char);
}

function cutterAfterVowel(char){
}

// Returns 2 if not in list
function cutterAfterConso(char){
    return 3 + "AEIORUY".indexOf(char);
}

// Returns 2 if not in list
function cutterAfterQu(char){
    return 3 + "AEIORTY".indexOf(char);
}


// Move to global functions
function cutterExpansion(char){
    // Branchless encoding of the Cutter expansion table
    //0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    //A B C D E F G H I J K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
    // 3 4 5 6 7 8 9
    char = char.charCodeAt(0) - 65;
    return 3 + (char > 3) + (char > 7) + (char > 11) + (char > 14) + (char > 18) + (char > 21);
}

// State management
let names = [
    "Anderson","Adams","Andretti",
    "Bard","Bartley",
    "Carl","Cantor","Christoph", "Cutter",
    "Drake","Doe","Dewey",
    "Elias",
    "Farnsworth","Frank","Finley",
    "Gale",
    "Hilger","Holmes",
    "Jacobsen","Jerome","Jones","James",
    "Maude","Morris",
    "Lewis","Laurent","Lawrence",
    "Quincey","Quinten",
    "Richards","Roberts","Rowley",
    "Smith","Scorcese",
    "Tolkin",
    "Volterra","Victor",
    "Washington","Watson","Westley","Woolfe",
    "Yves",
    "Zimmerman"
];

let name = "";

function initName(){
    name = names[genRandomInt(0,names.length)];
}

function write(){
    var cutter = document.getElementById("cutter_name");
    cutter.innerHTML = "<p>"+name+" <input placeholder='A00' maxlength=3 type='text'  id='cutter' required></p>";
}

function solve(){
    getCutter(name,1);
}

function check(){}

initName();
write();
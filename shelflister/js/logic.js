function initLCC(){
    for(let i = 0; i < 5; i++){
        lcc.push(genRandomLCC());
    }
}

// Function generates a random valid LCC number
function genRandomLCC(){
    const short_list = [
        ["TC",[203,380]],
        ["TC",[401,506]],
        ["TD",[511,780]]
    ];
    let lcc = "";
    var index = Math.floor(Math.random() * short_list.length);
    var range = short_list[index][1];
    lcc += short_list[index][0];
    lcc += " " + genRandomInt(range[0],range[1]) + " ";
    lcc += genRandomCutter() + " " + genRandomYear();
    return lcc;
}

function genRandomInt(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function genRandomYear() {
    return genRandomInt(1500,2027);
}

// Function generates a random, valid Cutter author number
function genRandomCutter(){
    const initialLetters ="BCDFGHJKLMNPRTVWXZQAEIOUYS";
    var index = Math.floor(Math.random() * initialLetters.length)
    return initialLetters.charAt(index) + genRandomInt(2+(index > 17),10) + genRandomInt(3,10);
}

function solve(){
    lcc = lcc.sort();
    write();
}

function check(){
    var x =JSON.stringify(lcc);
    var y = JSON.stringify(lcc.sort());
    if(x != y) {
        document.body.style.background = "red";
    } else {
        document.body.style.background = "lightgreen";
    }
}

function up(k){
    if((k != lcc.length -1)){
        let tmp = lcc[k];
        lcc[k] = lcc[k+1];
        lcc[k+1] = tmp;
        write();
    }
}

function down(j){
    if((j != 0)){
        let tmp = lcc[j];
        lcc[j] = lcc[j-1];
        lcc[j-1] = tmp;
        write();
    }
}

// Updates the state of the shelf
function write(){
    var shelf = document.getElementById("shelf_list");
    let text = "";
    for(let i = 0; i < lcc.length; i++){
        text += "<shelf-item>"+lcc[i]+"</self-item>";
        /*
        let code = lcc[i].split(" ");
        text+="<div><div class='spine'>"+i+"<div class='label'>";
        for(let j = 0; j < code.length; j++){
            text += code[j] + "<br/>";
        }
        text +="</div></div>";
        text += "<div class='controller'><button onclick=down("+i+")>&lt;</button><button onclick=up("+i+")>&gt;</button></div></div>";
        */
    }
    shelf.innerHTML = text;
}

let lcc = [];
initLCC(); // Initialize the game
write();   // Draw the initial shelf to the screen
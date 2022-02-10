let gameboard= ["X", "O", "X", "O"];

let player1;
let player2;


for(i=0; i<3; i++){
    let row= document.createElement("div");
    for (j=0; j<3; i++){
    var box= document.createElement("div");
    row.appendChild(box);
    }
    document.getElementById("container").appendChild("row");
}

//create a grid
//style gird so it appears like a TicTacBoard
//Player 1, Player 2 or Player 1 and computer setup prompt
// store player 1 and player 2 move 
// insert the combinations of winners  vs losers
//declare on the screen who wins or not. 
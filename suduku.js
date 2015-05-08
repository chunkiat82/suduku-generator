var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

var board = new Array(9);
for (var i = 0; i < 9; i++) {
	board[i] = new Array(9);
}

var rows = new Array(9);
for (var i = 0; i < 9; i++) {
	rows[i] = ['1','2','3','4','5','6','7','8','9'];
}

var columns = new Array(9);
for (var i = 0; i < 9; i++) {
	columns[i] = ['1','2','3','4','5','6','7','8','9'];
}

var squares = new Array(9);
for (var i = 0; i < 9; i++) {
	squares[i] = ['1','2','3','4','5','6','7','8','9'];
}

function randomDataGenerator(board){

	//generator centers

	for (var i = 0; i<9 ; i++){		
		var row = rows[i];
		for (var j = 0; j<9 ; j++){
			var column = columns[j];
			var squareIndex = parseInt(i / 3) + parseInt(i / 3) * 2 + parseInt(j / 3);
			console.log("squareIndex="+parseInt(i / 3)+"-"+parseInt(j / 3));
			var square = squares[squareIndex];

			console.log("i,j,k="+i+","+j+","+squareIndex);

			console.log("rowBefore="+row);
			console.log("columnBefore="+column);
			console.log("squareBefore="+square);

			var selectedSet = row;
			if (row.length > column.length){
				selectedSet = column;
				if (column.length > square.length){
					selectedSet = square;
				}
			}
			if (row.length > square.length){
				selectedSet = square;
				if (square.length > column.length){
					selectedSet = column;
				}
			}
			
			var found = false;
			while (!found){
				var outputChance = chance.pick(selectedSet);
				found = column.indexOf(outputChance) != -1 && square.indexOf(outputChance) != -1 && row.indexOf(outputChance) != -1;				
			}
		
			

			row.splice(row.indexOf(outputChance),1);
			column.splice(column.indexOf(outputChance),1);
			square.splice(square.indexOf(outputChance),1);

			console.log("outputChance="+outputChance);
			console.log("row="+row);
			console.log("column="+column);
			console.log("square="+square);
			
			board[i][j]= outputChance<1 ? " " : outputChance
			printBoard(board);
			console.log("");
			console.log("--------------------------------");
			console.log("");
		}		
	}
}

function pickLogic(){

}

function printBoard(board){
	for (var i = 0; i<9 ; i++){
		process.stdout.write("|");
		for (var j = 0; j<9 ; j++){			
			process.stdout.write(" "+board[i][j]+" | ");
		}
		process.stdout.write("\n");
	}
}

randomDataGenerator(board);
printBoard(board);

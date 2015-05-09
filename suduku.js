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

function randomDataGenerator(board,i,j){

	if (j>9){
		++i;
		j=1;
	}

	if (i<=9){
		console.log("i="+i+", j="+j);

		//should pass in rows, columns and squares too
		var selectedValue = selectValue(i-1,j-1);
		if (selectedValue == 0 ){
			return;
		}else{
			board[i-1][j-1]= selectedValue;
		}

		randomDataGenerator(board,i,++j);
	}
	
}

function selectValue(i,j){
	var row = rows[i];
	var column = columns[j];
	var squareIndex = parseInt(i / 3) + parseInt(i / 3) * 2 + parseInt(j / 3);
	var square = squares[squareIndex];
	//console.log("squareIndex="+parseInt(i / 3)+"-"+parseInt(j / 3));
	
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
	
	var outputChance = chance.pick(selectedSet);
	var found = column.indexOf(outputChance) != -1 && square.indexOf(outputChance) != -1 && row.indexOf(outputChance) != -1;

	if (found){		
		row.splice(row.indexOf(outputChance),1);
		column.splice(column.indexOf(outputChance),1);
		square.splice(square.indexOf(outputChance),1);
		return outputChance;
	}else{
		console.log("outputChance="+outputChance);
		console.log("row="+row);
		console.log("column="+column);
		console.log("square="+square);
		return 0;
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

randomDataGenerator(board,1,1);
printBoard(board);

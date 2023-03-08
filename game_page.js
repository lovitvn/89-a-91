
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	

    charAt1 = num1.charAt(1);
	



    question_num = "<h4>. "+num1+"X"+num2+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_num + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	answer = document.getElementById("inputCheckBox").value;
	if(answer == num1)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}


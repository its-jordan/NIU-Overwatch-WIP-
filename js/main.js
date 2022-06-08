// JavaScript Document

function returnActiveTeamAway(){
	var e = document.getElementById("away-team");
	var strUser = e.value;
	document.getElementById("left").className = strUser;
}

function returnActiveTeamHome(){
	var e = document.getElementById("home-team");
	var strUser = e.value;
	document.getElementById("right").className = strUser;
}

function awayScore(){
	var scoreAway = document.getElementById("score-away").value;

	document.getElementById("away-team-score").innerHTML = scoreAway;
	document.getElementById("away-team-score").className = "team-score";
}

function homeScore(){
	var scoreHome = document.getElementById("score-home").value;

	document.getElementById("home-team-score").innerHTML = scoreHome;
	document.getElementById("home-team-score").className = "team-score";
}
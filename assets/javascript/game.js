
document.getElementById("wins").innerHTML = "0";
document.getElementById("losses").innerHTML = "0";
document.getElementById("guess-left").innerHTML = "9";

var win_count = 0; 
var guess_left = 9; 
var loss_count = 0;
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computer_guess = options[Math.floor(Math.random() * options.length)];
console.log('computer guessed:', computer_guess);
var guesses_so_far = [];

function game_init() {
	computer_guess = options[Math.floor(Math.random() * options.length)];
	console.log('computer guessed:', computer_guess);
	guess_left = 9;
	document.getElementById("guess-left").innerHTML = guess_left;
	document.getElementById("your-guess").innerHTML = "";
	document.getElementById("wins").innerHTML = win_count;
	document.getElementById("losses").innerHTML = loss_count;
	guesses_so_far = [];
}

document.addEventListener("keydown", function(event) {
  	var user_input = event.which;
	console.log('You pressed: ', user_input);
 		
 	var ch = String.fromCharCode(user_input).toLowerCase();
 	console.log('You pressed: ', ch);
		if (ch === computer_guess) {
			win_count++; 
			console.log("Your wins:", win_count); 
			game_init();
		}
		else {
			//loss_count++; console.log("Your losses:", loss_count); document.getElementById("losses").innerHTML = loss_count;
			guess_left--;
			if (guess_left) {
				console.log("guesses left", guess_left);
				document.getElementById("guess-left").innerHTML = guess_left;
				guesses_so_far.push(ch);
				document.getElementById("your-guess").innerHTML = guesses_so_far.toString();
			}
			else {
				loss_count++;
				game_init();
			}
		}
});
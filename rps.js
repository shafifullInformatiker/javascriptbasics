const rps = () => {
    let userScore = 0;
    let computerScore = 0;
    let moves = 0;
    const prompt = require('prompt-sync')();
    const play = () => {
        const computerOptions = ["rock","paper","scissors"]
             moves = prompt ("Please Enter the Number of Rounds you Want to play Rock, Paper and Scissors: ");
             while(isNaN(moves) || moves < 0){
                moves = prompt("This is not a number or minus number. please enter a number: ");
            }
                
                while( moves > 0){
                    moves--;        
                    choice = prompt("Enter Rock, Paper or Scissors: ");
                    while(choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors"){
                        choice = prompt("invalid input, please enter only rock, paper or scissors: ");
                    }
                    const selector = Math.floor(Math.random()*3);
                    const computerChoice = computerOptions[selector];
                    // Function to to select winner
                    whoWins(choice,computerChoice)
                    console.log("your Score " + userScore);
                    console.log("Computer Score " + computerScore);
                    // game over function
                     if(moves == 0){
                       gameOver();
                     }
            } 

              
    }
    // Function to selection winner
    const whoWins = (player,computer) => {
        let result = ""
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result = 'it is Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result = 'Computer Won';
                computerScore++;
            }else{
                result = 'You Won Yahoo'
                userScore++;   
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result = 'Computer Won !';
                computerScore++;
            }else{
                result  = 'You Won Yahoo';
                userScore++;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result  = 'Computer Won !';
                computerScore++;
            }else{
                result = 'you Won Yahoo';
                userScore++;
            }
        }
        console.log("Your Choice is " + player);
        console.log("computer Choice is " + computer);
        console.log(result);
    }
    
    // Function to run when game is over
    const gameOver = () => {
        let ans;
    
        if(userScore > computerScore){
            ans = prompt("Congratulation you won the game. do you want to play again? ");
            if(ans.toLowerCase() == "yes"){
                rps();
            }else{
                console.log("Have a good day");
            }
        }
        else if(userScore < computerScore){
          ans = prompt("Unfortunally you lost this time. do you want to play once again? ");
          if(ans == "yes"){
            rps();
        }else{
            console.log("Have a Good Day");
        }
        }
        else{
           ans = prompt("looks like we have no winner this time, do you want to play again? ");
           if(ans == "yes"){
            rps();
        }else{
            console.log("Have a Good Day");
        }
        } 
    }
    
    
    // call play function
    play();
    
    }
    
    // Call rps game
    rps();
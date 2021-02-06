function logic(one, two) {
    if (one === two) {
        console.log("It´s a tie!")
    }
    else if (one === "scissors") {
        if (two === "paper") {
            console.log("Scissors cut paper. Player One Wins!")
        }
        else if (two === "rock") {
            console.log("Rock crushes scissors. Player Two Wins!")
        }
        else if (two === "lizard") {
            console.log("Scissors decapitate lizard. Player One Wins")
        }
        else if (two === "spock") {
            console.log("Spock smashes scissors. Player Two Wins!")
        }
    }
    else if (one === "paper") {
        if (two === "scissors ") {
            console.log("Scissors cut paper. Player Two Wins!")
        }
        else if (two === "rock") {
            console.log("Paper covers rock. Player One Wins!")
        }
        else if (two === "lizard") {
            console.log("Lizard eats paper. Player Two Wins")
        }
        else if (two === "spock") {
            console.log("Paper disproves Spock. Player One Wins!")
        }
    }
    else if (one === "rock") {
        if (two === "scissors ") {
            console.log("Rock crushes scissors. Player One Wins!")
        }
        else if (two === "paper") {
            console.log("Paper covers rock. Player Two Wins!")
        }
        else if (two === "lizard") {
            console.log("Rock crushes lizard. Player One Wins!")
        }
        else if (two === "spock") {
            console.log("Spock vaporizes rock. Player Two Wins!")
        }
    }
    else if (one === "lizard") {
        if (two === "scissors ") {
            console.log("Scissors decapitate lizard. Player Two Wins")
        }
        else if (two === "paper") {
            console.log("Lizard eats paper. Player One Wins")
        }
        else if (two === "rock") {
            console.log("Rock crushes lizard. Player Two Wins!")
        }
        else if (two === "spock") {
            console.log("Lizard poisons Spock. Player One Wins!")
        }
    }
    else if (one === "spock") {
        if (two === "scissors ") {
            console.log("Spock smashes scissors. Player One Wins!")
        }
        else if (two === "paper") {
            console.log("Paper disproves Spock. Player Two Wins!")
        }
        else if (two === "rock") {
            console.log("Spock vaporizes rock. Player One Wins!")
        }
        else if (two === "lizard") {
            console.log("Lizard poisons Spock. Player Two Wins!")
        }
    }
}

export default logic
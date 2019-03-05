import { elements } from "./elements";
import { MDL } from "./model";
import { VIEW } from "./view";


///// Controller /////
const CTRL = (function(MDL, VIEW) {

    const playAgain = () => {
        // Game returns here
        MDL.exited = false;
        return null;
    };

    const stopGame = () => {
        // Game returns here
       MDL.exited = true;
       return null;
    };

    const handleSelection = (event) => {
        return new Promise((resolve) => {
            let userPick;
            if(event.target.classList.contains("rock")) userPick = "rock";
            else if(event.target.classList.contains("paper")) userPick = "paper";
            else if(event.target.classList.contains("scissors")) userPick = "scissors";
            else console.log("ERROR: invalid element selected in handleSelection");
    
            let compPick = ["rock", "paper", "scissors"][Math.round(Math.random()*2)];
            console.log(compPick);
            switch(true) {
                case(userPick === compPick):
                VIEW.clearGameView();
                VIEW.displayTie(userPick, compPick);
                break;
                case(userPick === "rock" && compPick === "scissors"):
                case(userPick === "paper" && compPick === "rock"):
                case(userPick === "scissors" && compPick === "paper"):
                MDL.playerScore ++;
                VIEW.clearGameView();
                VIEW.displayWin(userPick, compPick);
                break;
                case(userPick === "rock" && compPick === "paper"):
                case(userPick === "paper" && compPick === "scissors"):
                case(userPick === "scissors" && compPick === "rock"):
                MDL.compScore ++;
                VIEW.clearGameView();
                VIEW.displayLose(userPick, compPick);
                break;
                default:
                console.log("ERROR: user selection is not properly comparing to computer selection in handleSelection");
            }
            setTimeout(() => {
                VIEW.askToPlayAgain();
                elements.playYes().addEventListener("click", () => {
                    resolve(playAgain());
                });
                elements.playNo().addEventListener("click",() => {
                    resolve(stopGame());
                });
            }, 3000);
        });
    };

    const initSelection = () => {
        return new Promise((resolve) => {
            elements.rock().addEventListener("click", (event) => {
                resolve(handleSelection(event));
            });
            elements.paper().addEventListener("click", (event) => {
                resolve(handleSelection(event));
            });
            elements.scissors().addEventListener("click", (event) => {
                resolve(handleSelection(event));
            });
        });
    };

    const userSelection = () => {
        return new Promise((resolve) => {
            VIEW.clearGameView();
            VIEW.displayChoices();
            resolve(initSelection());
        });
    };

    const initializeGame = () => {
        return new Promise((resolve) => {
            MDL.exited = false;
            VIEW.clearGameView();
            VIEW.welcomeScreen();
            elements.yesButton().addEventListener("click", () => {
                resolve(userSelection());
            });
            elements.noButton().addEventListener("click", () => {
                // Game returns here
                MDL.exited = true;
                resolve(null);
            });
        });
    };

    return {
        initializeGame,
        userSelection,
        handleSelection,
    };
} (MDL, VIEW) );


///// EXECUTION /////
const gameLoop = () => {
    CTRL.initializeGame()
    .then(() => {
        if(MDL.exited === false) {
            return gameLoop();
        } 
        else {
            VIEW.clearGameView()
            VIEW.gameOverDisplay()
        }
    });
};

gameLoop();

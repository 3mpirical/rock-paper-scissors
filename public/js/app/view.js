import { elements } from "./elements";
import { MDL } from "./model";

const VIEW = (function(MDL) {

    const appendP = (string, ...nodeClass) => {
        let node = document.createElement("p");
        [...nodeClass].forEach((item, index, arr) => {
            node.classList.add(item);
        });
        node.textContent = string;
        elements.gameView.appendChild(node);
    };

    const appendImage = (src, nodeClass) => {
        let node = document.createElement("div");
        node.classList.add("image");
        node.innerHTML = `
            <img class="${nodeClass}" src="${src}"/>
        `;
        elements.gameView.appendChild(node);
    };

    const appendRock = () => {
        appendImage("../img/rock.svg", "rock");
    };

    const appendPaper = () => {
        appendImage("../img/paper.svg", "paper");
    };

    const appendScissors = () => {
        appendImage("../img/scissors.svg", "scissors");
    };

    const welcomeScreen = () => {
        appendP("Welcome to Rock Paper Scissors.", "welcome", "u-margin-b")
        appendP("Would You like to play a game?", "none");

        appendP("Yes", "button", "yes");
        appendP("No", "button", "no");
    };

    const displayChoices = () => {
        appendP("Select rock, paper, or scissors.", "select-prompt", "u-margin-b")
        appendP("Best of luck to you.", "select-prompt")

        appendRock();
        appendPaper();
        appendScissors();
    };

    const displayTie = (userPick, compPick) => {
        appendP("It's A Tie!", "u-margin-b");
        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);
        appendImage(`../img/${userPick}.svg`, "left-pick");
        appendP("equals", "beats");
        appendImage(`../img/${compPick}.svg`, "right-pick");
    };

    const displayWin = (userPick, compPick) => {
        appendP("You Win!", "u-margin-b");
        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);
        appendImage(`../img/${userPick}.svg`, "left-pick");
        appendP("beats", "beats");
        appendImage(`../img/${compPick}.svg`, "right-pick");
    };

    const displayLose = (userPick, compPick) => {
        appendP("... You Lose ...", "u-margin-b");
        appendP(`You selected ${userPick}, and the computer selected ${compPick}`);
        appendImage(`../img/${compPick}.svg`, "left-pick");
        appendP("beats", "beats");
        appendImage(`../img/${userPick}.svg`, "right-pick");
    };

    const askToPlayAgain = () => {
        appendP("Return to the Main Screen?", "play-again");

        appendP("Yes", "button", "play-yes");
        appendP("No", "button", "play-no");
    };

    const gameOverDisplay = () => {
        appendP("Thanks for playing!!!", "u-margin-b");
        appendP(`Player Score   : ${MDL.playerScore}`, "u-margin-b");
        appendP(`Computer Score : ${MDL.compScore}`, "u-margin-b");
    };

    const clearGameView = () => {
        elements.gameView.innerHTML = "";
    };

    return {
        welcomeScreen,
        clearGameView,
        displayChoices,
        displayTie,
        displayWin,
        displayLose,
        askToPlayAgain,
        gameOverDisplay,
    };
} (MDL) );


export { VIEW };
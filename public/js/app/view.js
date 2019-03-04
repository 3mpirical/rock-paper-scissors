import { elements } from "./elements";
import { MDL } from "./model";

const VIEW = (function(MDL) {

    const welcomeScreen = () => {
        let node = document.createElement("p");
        node.classList.add("welcome");
        node.textContent = "Welcome to Rock Paper Scissors.";
        elements.gameView.appendChild(node);
    };

    const clearGameView = () => {
        elements.gameView.innerHTML = "";
    };

    return {
        welcomeScreen,
        clearGameView,
    };
} (MDL) );


export { VIEW };
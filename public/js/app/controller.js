import { elements } from "./elements";
import { MDL } from "./model";
import { VIEW } from "./view";


///// Controller /////
const CTRL = (function(MDL, VIEW) {




    const initializeGame = () => {
        VIEW.welcomeScreen()
        console.log(elements.gameView)


    };

    return {
        initializeGame
    };
} (MDL, VIEW) );


///// EXECUTION /////
CTRL.initializeGame();

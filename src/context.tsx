import { createContext } from "react";
import { Game, Players } from "./types"

export let game = {
    round: 0,
    currentPlayer: Players.Black,
    winner: Players.Unknown
}

export const updateGame = (newStatus: Game) => {
  game = {...newStatus}
}

export function finishTurn() {
    console.log("finishTurn")
    // let newState = { ...game }
    // console.log("before", newState)
    switch (game.currentPlayer) {
        case Players.Unknown:
            game.currentPlayer = Players.Black;
            game.round = 1;
            break;
        case Players.Black:
            game.currentPlayer = Players.White;
            break;
        case Players.White:
            game.currentPlayer = Players.Black;
            game.round++;
            break;
    }
    
    // game = { ...newState }
    console.log("after", game)
    return game;
    
}

export const GameContext = createContext({game, updateGame, finishTurn});
export enum Players {
    Unknown = "Unknown",
    White = "White",
    Black = "Black"
}

export let initGame = {
    round: 0,
    currentPlayer: Players.Black,
    winner: Players.Unknown
}

export type Game = {
    round: number;
    currentPlayer: Players.White | Players.Black,
    winner: Players,
}
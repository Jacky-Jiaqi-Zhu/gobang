import React, { createContext, useContext, useState } from 'react';
import Board from './components/Board/Board';
import Dashboard from './components/Dashboard/Dashboard';
import './App.scss';
import { initGame, Players } from './types';
// import { game, updateGame, finishTurn } from './context';

export const GameContext = createContext({ game: initGame, finishTurn: () => {} });

function App() {
	const [ round, setRound ] = useState(0);
	const [ currentPlayer, setCurrentPlayer ] = useState(Players.Black);
  const [winner, setWinner] = useState(Players.Unknown);
  // const [stoneMapping, setStoneMapping] = useState([[]])

	const game = {
		round,
		currentPlayer,
    winner,
    // stoneMapping
	};

	const finishTurn = () => {
		switch (currentPlayer) {
			case Players.Unknown:
				setCurrentPlayer(Players.Black);
				setRound(1);
				break;
			case Players.Black:
				setCurrentPlayer(Players.White);
				break;
			case Players.White:
				setCurrentPlayer(Players.Black);
				setRound(round+1);
				break;
		}
	};

	return (
		<GameContext.Provider value={{ game, finishTurn }}>
			<div className="App">
				<Board />
				<Dashboard />
			</div>
		</GameContext.Provider>
	);
}

export default App;

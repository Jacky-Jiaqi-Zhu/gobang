import "./Cross.scss";
import { useState, useMemo, useEffect, useContext } from "react";
import { Players } from "../../types";
import { GameContext } from "../../App";


function Cross({ rowNum, colNum, maxRow, maxCol }: {rowNum: number, colNum: number, maxRow: number, maxCol: number}) {
    const { game, finishTurn } = useContext(GameContext);
    const [player, setPlayer] = useState(Players.Unknown);

    const edgeClasses = useMemo(() => {
        let classes = " ";
        if (rowNum === 1) {
            classes += "edge-top ";
        }
        if (colNum === 1) {
            classes += "edge-left ";
        }
        if (rowNum === maxRow) {
            classes += "edge-bottom ";
        }
        if (colNum === maxCol) {
            classes += "edge-right ";
        }
        return classes;
    }, [rowNum, colNum, maxRow, maxCol])
    
    const stoneClasses = useMemo(() => {
        let classes:string = 'empty';
        if (player === Players.White) {
            classes = "white";
        } else if (player === Players.Black) {
            classes = "black";
        }
        return classes;
    }, [player])

    const handleClick = () => {
        console.log(`click on: ${rowNum} ${colNum}`,)
        console.log(game)
        // cross is empty, place stone for current player
        if (player === Players.Unknown) {
            console.log("before set:", game.currentPlayer)
            setPlayer(game.currentPlayer);
            finishTurn();
            console.log("new game ", game)
        }

    }

    return (
        // CSS BEM naming: http://getbem.com/naming/  
        <div className={`cross ${edgeClasses}`} data-row-number={rowNum} data-col-number={colNum}>
            <div className="cross__row cross__row--top">
                <div className="cross__inner top left"></div>
                <div className="cross__inner top right"></div>
            </div>
            <div className="cross__row cross__row--bottom">
                <div className="cross__inner bottom left"></div>
                <div className="cross__inner bottom right"></div>
            </div>
            <div className="stone-box">
                <div className={`stone ${stoneClasses}`} onClick={handleClick}></div>
            </div>
        </div >
    )
}

export default Cross;
import "./Board.scss"
import Cross from "../Cross/Cross";
import { useContext } from "react";
import { GameContext } from "../../App";

function Board() {
    const { game } = useContext(GameContext);
    const maxRow = 15;
    const maxCol = 15;

    const drawCrosses = () => {
        const rows = [];
        for (let r = 1; r <= maxRow; r++) {
            const row = [];
            for (let c = 1; c <= maxCol; c++) {
                row.push(<Cross key={`c${c}r${r}`} rowNum={r} colNum={c} maxRow={maxRow} maxCol={maxCol}></Cross>)
            }
            rows.push(row)
        }
        return rows;
    }

    return (
        <div className={`board current-${game.currentPlayer.toLowerCase()}`}>
            {drawCrosses().map((row, index) => (
                <div className={`board__row`} key={index}>{row}</div>
            ))}
        </div>

    )
}

export default Board;

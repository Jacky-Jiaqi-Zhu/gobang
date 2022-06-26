import { useContext } from "react"
import { GameContext } from "../../App";
// import { GameContext } from "../../context"
import "./Dashboard.scss";

function Dashboard() {
    const { game } = useContext(GameContext);

    console.log("Dashboard ", game)

    return (
        <div className="dashboard">
            <div>Round: {game.round}</div>
            <div>Current Player: {game.currentPlayer}</div>
            <div>Winner: {game.winner}</div>
        </div>
    )
}

export default Dashboard;
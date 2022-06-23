import boardImg from "../assets/boards/ps4.jpg";
import "./Game.css";

const Game = () => {
    return (
        <div className="container">
            <img src={boardImg} alt="ps4" />
        </div>
    );
};

export default Game;

import boardImg from "../assets/boards/ps4.jpg";
import "./Game.css";

const Game = () => {
    const onClick = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.target.offsetHeight) * 100
        );
        const coords = { xCoord, yCoord };
        console.log(coords);
        return coords;
    };

    return (
        <div className="container">
            <img src={boardImg} alt="ps4" className="board" onClick={onClick} />
        </div>
    );
};

export default Game;

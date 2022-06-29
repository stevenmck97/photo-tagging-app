import { useState } from "react";
import boardImg from "../assets/boards/ps4.jpg";
import Modal from "../components/Modal";
import "./Game.css";
import getCharacterDocs from "../utils/firebaseHandler";

const Game = () => {
    const [coords, setCoords] = useState({});
    const [modalClass, setModalClass] = useState("none");
    const [modalCoords, setModalCoords] = useState({});

    const onClick = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.target.offsetHeight) * 100
        );

        const modalXCoord = Math.round(e.pageX);
        const modalYCoord = Math.round(e.pageY);
        const coords = { xCoord, yCoord };
        const modalCoords = { modalXCoord, modalYCoord };
        console.log(coords);
        console.log(modalCoords);

        setCoords(coords);
        setModalCoords(modalCoords);
        isActive();
    };

    const isActive = () => {
        if (modalClass === "none") {
            setModalClass("block");
        } else if (modalClass === "block") {
            setModalClass("none");
        }

        console.log(modalClass);
    };

    return (
        <div className="container">
            <img src={boardImg} alt="ps4" className="board" onClick={onClick} />
            <Modal props={modalCoords} modalClass={modalClass} />
        </div>
    );
};

export default Game;

const Modal = ({ props, modalClass }) => {
    const styles = {
        position: {
            left: props.modalXCoord + 25 + "px",
            top: props.modalYCoord + "px",
            display: modalClass,
            position: "absolute",
            background: "white",
        },
    };

    return (
        <div style={styles.position} className="modal">
            <p className="modal-item">Nathan Drake</p>
            <p className="modal-item">Kratos</p>
            <p className="modal-item">Solid Snake</p>
        </div>
    );
};

export default Modal;

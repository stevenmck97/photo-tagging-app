const Modal = ({ props, modalClass }) => {
    const styles = {
        position: {
            left: props.xCoord + "%",
            top: props.yCoord + "%",
            display: modalClass,
            position: "absolute",
            background: "white",
        },
    };

    return (
        <div style={styles.position} className="modal">
            <p>test</p>
            <p>bro</p>
        </div>
    );
};

export default Modal;

import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
  return <div className={styles["modal"]}>{props.children}</div>;
};

const element = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        element
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        element
      )}
    </>
  );
};

export default Modal;

import Button from './Button';
import styles from './Modal.module.css';

const Modal = (props) => {

    const modalHandler = () => {
        props.onConfirm(false, '');
    };
    return (
        <div className={styles.modal_background}>
            <div className={styles.modal_container}>
                <div className={styles.modal_title}>invalid input</div>
                <div className={styles.modal_message}>{props.messageDisplayed}</div>
                <div className={styles.btn_div}>
                    <Button className={styles.modal_button} type="button" onClick={modalHandler}>Okay</Button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
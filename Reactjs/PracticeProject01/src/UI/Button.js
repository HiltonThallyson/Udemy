import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button type={props.type} className={styles.button} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;
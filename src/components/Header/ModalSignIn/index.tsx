import Modal from "react-modal";
import styles from "./styles.module.scss"
import { ButtonSignIn } from "../ButtonSignIn";

interface ModalSignInProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function ModalSignIn({ isOpen, onRequestClose }: ModalSignInProps){
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} 
        className={styles.reactModalContent} overlayClassName={styles.reactModalOverlay}>
            
            <button type="button" onClick={onRequestClose} 
            className={styles.reactModalClose}> <img src="/images/close.svg" alt="Fechar modal"/> </button>

            <h1 className={styles.titleLogin}> Login </h1>
            <p className={styles.descLogin}> Escolha uma dessas opções para fazer o login. </p>
            <ButtonSignIn />

        </Modal>
    );
}
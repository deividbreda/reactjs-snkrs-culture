import { useState } from "react";
import { ModalSignIn } from "../ModalSignIn";

import styles from "./styles.module.scss"

export function SignInButton(){
    const [modalLogIn, setModalLogIn] = useState(false);

    function handleOpenModalLogIn(){
        setModalLogIn(true)
    }

    function handleCloseModalLogIn(){
        setModalLogIn(false)
    }
    
    return(
        <>
            <ModalSignIn isOpen={modalLogIn} onRequestClose={handleCloseModalLogIn} />
            <button className={styles.buttonLogIn} onClick={handleOpenModalLogIn}> ENTRAR </button>
        </>
    );
}
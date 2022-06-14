import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FiLogOut } from 'react-icons/fi'
import { ModalSignIn } from "../ModalSignIn";

import styles from "./styles.module.scss"

export function SignInButton(){
    const [modalLogIn, setModalLogIn] = useState(false);

    const { data: session } = useSession();

    function handleOpenModalLogIn(){
        setModalLogIn(true)
    }

    function handleCloseModalLogIn(){
        setModalLogIn(false)
    }
    
    return(
        <>
            <ModalSignIn isOpen={modalLogIn} onRequestClose={handleCloseModalLogIn} />

            {session ? (
                <button 
                className={styles.buttonLogged} 
                onClick={() => signOut()}> 
                    {session.user.name} <FiLogOut color="#fff" className={styles.closeIcon}/>
                </button>
            ) : (
                <button 
                className={styles.buttonLogIn} 
                onClick={handleOpenModalLogIn}> 
                    ENTRAR 
                </button>
            )}
        </>
    );
}
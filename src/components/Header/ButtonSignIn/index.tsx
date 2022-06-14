import styles from "./styles.module.scss"
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { signIn, signOut, useSession } from 'next-auth/react'

export function ButtonSignIn() {
    return(
        <div className={styles.buttonContent}>
            <button onClick={() => signIn('google')}> <i> {<FaGoogle color="red"/>} </i> Google </button>
            <button onClick={() => signIn('facebook')}> <i> {<FaFacebook color="blue"/>} </i> Facebook </button>
            <button onClick={() => signIn('github')}> <i> {<FaGithub />} </i> Github </button>
        </div>
    );
}
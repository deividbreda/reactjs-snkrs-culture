import styles from "./styles.module.scss"
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"

export function ButtonSignIn() {
    return(
        <div className={styles.buttonContent}>
            <button> <i> {<FaGoogle />} </i> Google </button>
            <button> <i> {<FaFacebook />} </i> Facebook </button>
            <button> <i> {<FaGithub />} </i> Github </button>
        </div>
    );
}
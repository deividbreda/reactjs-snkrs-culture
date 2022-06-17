import Link from 'next/link';
import { SignInButton } from '../SignIn';
import styles from './styles.module.scss'

export function Header(){
    return(
        <>
            <header className={styles.headerContent}>
                <div className="containerWidth">       
                    <div className="col col-3-logo">
                        <div className={styles.itemContent}>
                            <a> <img className={styles.logo} src="/images/logo.png" alt="" /> </a>
                        </div>
                    </div>

                    <div className="col col-3-menu">
                        <nav> 
                            <Link href="/"> 
                                <a> Home </a> 
                            </Link>

                            <Link href="/sneakers"> 
                                <a> Sneakers </a> 
                            </Link>

                            <Link href="/news"> 
                                <a href=""> News </a>  
                            </Link> 
                        </nav>
                    </div>

                    <div className="col col-3-signIn">
                        <SignInButton />
                    </div>
                </div>    
            </header>
        </>
    );
}
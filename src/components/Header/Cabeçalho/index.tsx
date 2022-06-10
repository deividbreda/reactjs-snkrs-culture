import { useState } from 'react';
import { SignInButton } from '../SignIn';
import styles from './styles.module.scss'

export function Header(){
    return(
        <>
            <header className={styles.headerContent}>
                <div className="containerWidth">
                    <div className="col">
                        <div className="col col-3-logo">
                            <div className={styles.itemContent}>
                                <img className={styles.logo} src="/images/logo.png" alt="" />
                            </div>
                        </div>

                        <div className="col col-3-menu">
                            <nav> 
                                <a href=""> Home </a>  
                                <a href=""> Sneakers </a> 
                                <a href=""> News </a>  
                                <a href=""> Raffles </a>       
                            </nav>
                        </div>

                        <div className="col col-3-signIn">
                            <SignInButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
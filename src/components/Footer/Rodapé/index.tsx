import styles from "./styles.module.scss"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import Link from "next/link";

export function Footer(){
    return(
        <>
        <div className={styles.footerUp}>
            <div className="containerWidth">
                <div className={styles.allConteudoRodape}>
                    <div className="col col-2">          
                        <img className={styles.logoRodape} src="/images/logorodape.png" alt="" />
                        <p className={styles.desc}> O seu melhor portal de noticias sobre a cultura Sneakerhead, fique ligado dentro das novidades e lançamentos! </p> 
                           
                            
                                    <a className={styles.icon} href=""> {<FaFacebookSquare />} </a>
                                    <a className={styles.icon} href=""> {<FaInstagramSquare />} </a> 
                                
                            
                    </div>

                    <div className="col col-2">
                        <div className={styles.itemContent}> 
                            <ul className={styles.links}>
                                <li>
                                    <Link href="/sneakers">
                                        <a> Sneakers </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news">
                                        <a> News </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className={styles.footerDown}>
            <div className="containerWidth">
                <div className="col col-2">
                    <span> &copy; SNKRS.culture </span>
                </div>

                <div className="col col-2">
                    <span>  </span>
                </div>
            </div>
        </footer>
        </>
    );
}
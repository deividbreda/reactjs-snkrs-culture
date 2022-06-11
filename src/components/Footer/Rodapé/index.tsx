import styles from "./styles.module.scss"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

export function Footer(){
    return(
        <>
        <div className={styles.footerUp}>
            <div className="containerWidth">
                <div className="col col-3-logo-rodape">          
                    <img className={styles.logoRodape} src="/images/logorodape.png" alt="" />
                    <p className={styles.desc}> O seu melhor portal de noticias sobre a cultura Sneakerhead, fique ligado dentro das novidades e lançamentos! </p>
                </div>

                <div className="col col-3-links-rodape">
                    <div className={styles.itemContent}> 
                        <h1> Links </h1>
                        <ul>
                            <li> <a href=""> Sneakers </a> </li>
                            <li> <a href=""> News </a> </li>
                            <li> <a href=""> Raffle </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="col col-3-links-rodape">
                    <div className={styles.itemContent}> 
                        <h1> Social </h1>
                        <ul> 
                            <li>
                                <a className={styles.icon} href=""> {<FaFacebookSquare />} </a>
                                <a className={styles.icon} href=""> {<FaInstagramSquare />} </a> 
                            </li>
                        </ul>
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
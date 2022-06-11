import Head from "next/head";

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title> Home | SNKRS.culture </title>
      </Head>
      
      <main className={styles.contentDestaque}>
        <div className="containerWidth">
          <section className={styles.textDestaque}>
            <h1> Noticias sobre a cultura <span> Sneakerhead </span> </h1>
            <p> Tenha acesso as informações de novos tênis e sobre o mundo sneakerhead. </p>
          </section>
        </div>
      </main>

        <div className="containerWidth">
          <section className={styles.posts}>
            <div className={styles.news}>
              <div className="col col-2">
                <div className={styles.new}>
                  <img src="/images/categoria1.jpg" alt="" />
                  <div className={styles.cover}>
                    <div className={styles.text}>
                      <h1> Novo modelo slide da Adidas está sendo chamado de o novo Yeezy Slide </h1>
                      <p> 21/06/2022 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-2">
                <div className={styles.new}>
                  <img src="/images/categoria1.jpg" alt="" />
                  <div className={styles.cover}>
                    <div className={styles.text}>
                      <h1> Novo modelo slide da Adidas está sendo chamado de o novo Yeezy Slide </h1>
                      <p> 21/06/2022 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sneakers}>
              <div className="col col-3">
                <a href="">
                  <div className={styles.sneaker}>
                    <img src="/images/categoria1.jpg" alt="" />
                    <div className={styles.text}>
                      <h1> "Novo" Yeezy slide? </h1>
                      <p> Novo modelo slide da Adidas está sendo chamado de o novo Yeezy Slide </p>
                      <span> 12/06/2022 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col col-3">
                <a href="">
                  <div className={styles.sneaker}>
                    <img src="/images/categoria1.jpg" alt="" />
                    <div className={styles.text}>
                      <h1> "Novo" Yeezy slide? </h1>
                      <p> Novo modelo slide da Adidas está sendo chamado de o novo Yeezy Slide </p>
                      <span> 12/06/2022 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col col-3">
                <a href="">
                  <div className={styles.sneaker}>
                    <img src="/images/categoria1.jpg" alt="" />
                    <div className={styles.text}>
                      <h1> "Novo" Yeezy slide? </h1>
                      <p> Novo modelo slide da Adidas está sendo chamado de o novo Yeezy Slide </p>
                      <span> 12/06/2022 </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

import styles from './home.module.scss'

type Product = {
  slug: string;
  title: string;
  img: string;
  excerpt: string;
  publicatedDate: string;
}

type Noticia = {
  slug: string;
  title: string;
  img: string;
  excerpt: string;
  publicatedDate: string;
}

interface HomeProps {
  products: Product[],
  news: Noticia[]
}

export default function Home({ products, news }: HomeProps) {
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
              {news.map(noticia => (
                <div key={noticia.slug} className="col col-2">
                <div className={styles.new}>
                  <img src={noticia.img} alt="" />
                    <div className={styles.cover}>
                      <div className={styles.text}>
                        <h1> {noticia.title} </h1>
                        <p> {noticia.publicatedDate} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sneakers}>
              {products.map(product => (
                <div key={product.slug} className="col col-3">
                  <a href="">
                    <div className={styles.sneaker}>
                      <img src={product.img} alt="" />
                      <div className={styles.text}>
                        <h1> {product.title} </h1>
                        <p> {product.excerpt} </p>
                        <span> {product.publicatedDate} </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const responseNews = await prismic.getByType("news", {
    pageSize: 2,
  });

  const news = responseNews.results.map(noticia => {
    return {
      slug: noticia.uid,
      title: RichText.asText(noticia.data.title),
      img: noticia.data.image.url,
      excerpt: noticia.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      publicatedDate: new Date(noticia.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  })

  const responseProduct = await prismic.getByType("product", {
    pageSize: 6,
  });

  const products = responseProduct.results.map(product => {
    return {
      slug: product.uid,
      title: RichText.asText(product.data.title),
      img: product.data.image.url,
      excerpt: product.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      publicatedDate: new Date(product.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  })

  return {
    props: { products, news }
  }
}

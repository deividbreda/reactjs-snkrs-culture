import Head from "next/head";
import { GetStaticProps } from 'next';
import styles from "./styles.module.scss"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import Link from "next/link";

type New = {
    slug: string,
    title: string,
    img: string,
    excerpt: string,
    publicatedDate: string,
}

interface NewsProps {
    news: New[],
}

export default function News({ news }: NewsProps){
    return (
        <>
            <Head>
                <title> News | SNKRS.culture </title>
            </Head>

            <div className="containerWidth">
                <div className={styles.news}>
                    <h1 className={styles.titlePageCategory}> News </h1>

                    {news.map(noticia => (
                        <div key={noticia.slug} className={styles.new}>
                            <Link href={`/news/${noticia.slug}`}>
                                <a>
                                    <img className={styles.img} src={noticia.img} alt="" />
                                    <div className={styles.cover}>
                                        <span> {noticia.publicatedDate} </span>
                                        <h1> {noticia.title} </h1>
                                        <p> {noticia.excerpt} </p>
                                    </div>
                                </a>
                            </Link>         
                        </div> 
                    ))}  
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.getByType("news", {
        pageSize: 100,
    });

    const news = response.results.map(noticias => {
        return {
            slug: noticias.uid,
            title: RichText.asText(noticias.data.title),
            img: noticias.data.image.url,
            excerpt: noticias.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            publicatedDate: new Date(noticias.last_publication_date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })
        }
    })

    return {
        props: {
            news,
        }
    }
}
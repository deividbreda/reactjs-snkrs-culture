import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

import styles from './news.module.scss'

interface NoticiaProps {
    noticia: {
        slug: string,
        img: string,
        title: string,
        content: string,
        updatedAt: string,
    }
}

export default function Noticia({ noticia }: NoticiaProps){
    return(
        <>
            <Head> 
                <title> {noticia.title} | SNKRS.culture </title>
            </Head>

            <div className={styles.categoryFocus}>
                <img src={noticia.img} alt="" />
                <div className={styles.cover}>
                    <div className="containerWidth">
                        <div className={styles.text}>
                            <Link href="/news">
                                <a> News </a>
                            </Link>                
                            <h1> {noticia.title} </h1>
                            <time> {noticia.updatedAt} </time>
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerWidth">
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: noticia.content }} /> 
                    <img src={noticia.img} alt="" />
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = getSession({ req });
    const { slug } = params;

    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('news', String(slug), {})

    const noticia = {
        slug,
        title: RichText.asText(response.data.title),
        img: response.data.image.url,
        content: RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            noticia,
        }
    }
}
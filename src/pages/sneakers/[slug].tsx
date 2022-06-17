import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

import styles from "./sneaker.module.scss";

interface SneakerProps {
    sneaker: {
        slug: string,
        img: string,
        title: string,
        content: string,
        updatedAt: string,
    }
}

export default function Sneaker({ sneaker }: SneakerProps){
    return(
        <>
            <Head> 
                <title> {sneaker.title} | SNKRS.culture </title>
            </Head>

            <div className={styles.categoryFocus}>
                <img src={sneaker.img} alt="" />
                <div className={styles.cover}>
                    <div className="containerWidth">
                        <div className={styles.text}>
                            <Link href="/sneakers">
                                <a> Sneakers </a>
                            </Link>                
                            <h1> {sneaker.title} </h1>
                            <time> {sneaker.updatedAt} </time>
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerWidth">
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: sneaker.content }} /> 
                    <img src={sneaker.img} alt="" />
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });
    const { slug } = params;

    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('product', String(slug), {})

    const sneaker = {
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
            sneaker,
        }
    }
}
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

type Product = {
    slug: string,
    title: string,
    img: string,
    excerpt: string,
    publicatedDate: string,
}

interface ProductsProps {
    products: Product[]
}

export default function Products({ products }: ProductsProps) {
    return (
        <>
        <Head>
            <title> Sneakers | Ignews</title>
        </Head>

        <div className="containerWidth">
            <div className={styles.sneakers}>
                <h1 className={styles.titlePageCategory}> Sneakers </h1>

                <div className={styles.sneakers}>  
                    {products.map(product => (
                        <div key={product.slug} className="col col-4">
                            <a href="">
                            <div className={styles.sneaker}>
                                <img src={product.img} alt="" />
                                <div className={styles.text}>
                                    <h1> {product.title} </h1>
                                    <span> {product.publicatedDate} </span>
                                </div>
                            </div>
                            </a>
                        </div>          
                    ))}  
                </div>
            </div>
        </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.getByType('product', {
        pageSize: 100,
    });

    const products = response.results.map(product => {
        return {
            slug: product.id,
            title: RichText.asText(product.data.title),
            img: product.data.image.url,
            excerpt: product.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            publicatedDate: new Date(product.last_publication_date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })
        }
    })

    return {
        props: { products }
    }
}
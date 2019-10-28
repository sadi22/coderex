import React, {Component, Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import styles from '../../styles/blog';
import { getDataByEndPoint } from '../../api/api';


class Category extends Component {
    static async getInitialProps(context) {
        const { slug } = context.query;
        const categories = await getDataByEndPoint(`wp/v2/categories?slug=${slug}`).then(data=>{return data[0]});
        if (categories) {
            const posts = await getDataByEndPoint(`wp/v2/posts?categories=${categories.id}`).then(data=>{return data});
            return { categories, posts };
        }
        return { categories };
    }

    render() {
        const { posts, categories, siteOptions } = this.props;
        const { acf } = categories;
        let seo_title = categories.name;
        let seo_description = categories.name;
        let seo_canonical = categories.link;
        if(categories.yoast_meta_rest) {
            seo_title = categories.yoast_meta_rest.yoast_wpseo_title;
            seo_description = categories.yoast_meta_rest.yoast_wpseo_metadesc;
            seo_canonical = categories.yoast_meta_rest.yoast_wpseo_canonical;
        }
        return (
            <Fragment>
                   <Head>
                        <title>{seo_title}</title>
                        {categories.yoast_meta && categories.yoast_meta.map((meta, i)=>{
                            return (
                                <Fragment key={i}>
                                    {meta.name && <meta name={meta.name} content={meta.content}/>}
                                    {meta.property && (<meta property={meta.property} content={meta.content}/>)}
                                </Fragment>   
                            )
                        })}
                    </Head>
                    <div className="blog">
                        <section className="inner-page-banner blog-single-banner pos-relative" 
                            style={{backgroundImage: `url(${"category_image" in acf ? acf.category_image.url : ''})`}}
                        >
                            <div className="overlay"></div>
                            <div className="cr-container">
                                <div className="cr-row">
                                    <div className="cr-col">
                                        <div className="banner-content align-center-center">
                                            <h1 className="circular-700 color-fff crx crx-animated text-center">{categories.name}</h1>                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="blog-list">
                            <div className="cr-container">
                                <div className="cr-row">
                                    <div className="cr-col">
                                        <div className="post-wrapper">
                                            {posts.map((post, index) => {
                                            
                                                const {title, excerpt, link, featured_image, slug, author_name, date_gmt, category_info} = post;
                                                let actualPage = 'post';  
                                                let post_image = featured_image ?  (featured_image.media_details.sizes ? featured_image.media_details.sizes.medium_large.source_url : 'https://via.placeholder.com/768x512.png/09f/000/coderex-post-image?text=CodeRex+post+image') : 'https://via.placeholder.com/768x512.png/09f/000/coderex-post-image?text=CodeRex+post+image';                                      
                                                return (
                                                    <div className="single-post" key={index}>
                                                        {post_image && 
                                                            <figure>
                                                                <Link
                                                                    as={`/post/${slug}`}
                                                                    href={`/${actualPage}?slug=${slug}&apiRoute=post`}
                                                                >
                                                                    <a>
                                                                        <img 
                                                                            src={post_image} 
                                                                            className="img-fluid" 
                                                                            alt={featured_image ? (featured_image.alt_text ? featured_image.alt_text : 'coderex') : 'coderex'}
                                                                            title={featured_image ? (featured_image.media_details.image_meta ? featured_image.media_details.image_meta.title : 'coderex') : 'coderex'}
                                                                        />
                                                                    </a>
                                                                </Link>
                                                                
                                                            </figure>
                                                        }
                                                        
                                                        <div className="post-title">
                                                            <p className="category">
                                                                {category_info && 
                                                                    category_info.map((term, index) => {
                                                                        const {term_slug, term_name} = term;
                                                                        return (
                                                                            <Link
                                                                                as={`/category/${term_slug}`}
                                                                                href={`/category?slug=${term_slug}&apiRoute=post`}
                                                                                key={index}
                                                                            >
                                                                                <a>{ (index ? ', ' : '') + term_name} </a>
                                                                            </Link>
                                                                            
                                                                        )
                                                                    })
                                                                }
                                                            </p>
                                                            
                                                            <h1>
                                                                <Link
                                                                    as={`/post/${slug}`}
                                                                    href={`/post?slug=${slug}&apiRoute=post`}
                                                                >
                                                                    <a className="title circular-700">{title.rendered}</a>
                                                                </Link>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <style jsx>
                            {styles}
                        </style>
                        <style jsx global>{`
                            img.custom-logo-link {
                                display: none;
                            }
                            img.blog-logo {
                                display: block;
                            }
                        `}</style>
                    </div>
                </Fragment>
        );
    }
}


export default PageWrapper(Category);
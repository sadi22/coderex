import React, {Component, Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { getPostBySlug, getDataByEndPoint } from '../../../api/api';
import PageWrapper from '../../../components/PageWrapper';
import SocialLink from '../../../components/SocialLink';
import styles from '../../../styles/blog';


class Index extends Component {
    static async getInitialProps(context) {
        const { pageno, apiRoute } = context.query;
        let apiMethod = getDataByEndPoint(`wp/v2/posts?page=${pageno}`);
    
        try {
            const [page, posts] = await Promise.all([
                await getPostBySlug('blog').then(data=>{return data[0]}),
                apiMethod.then(data => {
                    return data;
                }),
            ]);
        
            return { page, posts };
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    render() {
        const { page, posts, siteOptions, recentPost, pageno } = this.props;
        let seo_title = page.title.rendered;
        let seo_description = page.title.rendered;
        let seo_canonical = page.link;
        if(page.yoast_meta_rest) {
            seo_title = page.yoast_meta_rest.yoast_wpseo_title;
            seo_description = page.yoast_meta_rest.yoast_wpseo_metadesc;
            seo_canonical = page.yoast_meta_rest.yoast_wpseo_canonical;
        }
        const { post_options } = siteOptions;
        let activePage = parseInt(pageno);
        let totalPages = Math.ceil(post_options.total_posts/10);
        let paginateItems = [];
        for (let number = 1; number <= totalPages; number++) {
            paginateItems.push({
                'pageNo' : number,
                'currentPage' : activePage == number
            })
        }
        let blogBgImage = page.featured_image ? 
            page.featured_image.source_url : 
            'https://via.placeholder.com/1920x1080.png/09f/fff/coderex-post-image?text=CodeRex+post+image';
        return (
               <Fragment>
                   <Head>
                        <title>{seo_title}</title>
                        {page.yoast_meta && page.yoast_meta.map((meta, i)=>{
                            return (
                                <Fragment key={i}>
                                    {meta.name && <meta name={meta.name} content={meta.content}/>}
                                    {meta.property && (<meta property={meta.property} content={meta.content}/>)}
                                </Fragment>   
                            )
                        })}
                    </Head>
                    <div className="blog">
                        <section className="inner-page-banner blog-single-banner pos-relative" style={{backgroundImage: `url(${blogBgImage})`}}>
                            <div className="overlay"></div>
                            <div className="cr-container">
                                <div className="cr-row">
                                    <div className="cr-col">
                                        <div className="banner-content align-center-center">
                                            <h1 className="circular-700 color-fff crx crx-animated text-center">The Blog</h1>                    
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
                                                                    as={`/post/${post.slug}`}
                                                                    href={`/post/[slug]`}
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
                                                                                href={`/category/[slug]`}
                                                                                key={index}
                                                                            >
                                                                                <a>{ (index ? '' : '') + term_name}<span> ,</span></a>
                                                                            </Link>
                                                                            
                                                                        )
                                                                    })
                                                                }
                                                            </p>
                                                            
                                                            <h1>
                                                                <Link
                                                                    as={`/post/${post.slug}`}
                                                                    href={`/post/[slug]`}
                                                                >
                                                                    <a className="title circular-700">{title.rendered}</a>
                                                                </Link>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        
                                        <div className="post-pagination">
                                            {activePage != 1 && 
                                                <Link
                                                as={`/blog/page/${activePage-1}`}
                                                href={`/blog/page/[pageno]`}
                                                >
                                                    <a className="prev page-numbers">
                                                        <span>
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                                                        </span>
                                                    </a>
                                                </Link>
                                            }
                                            {paginateItems.map((item, index) => {
                                                const {pageNo, currentPage} = item;
                                                let as = pageNo === 1 ? `/blog` : `/blog/page/${pageNo}`;
                                                let href = pageNo === 1 ? `/blog` : `/blog/page/[pageno]`;
                                                if(currentPage) {
                                                    return (
                                                        <span 
                                                            aria-current="page" 
                                                            className="page-numbers current"
                                                            key={index}
                                                        >
                                                            { pageNo + '.'}
                                                        </span>
                                                    )
                                                }
                                                return (
                                                    <Link
                                                        as={as}
                                                        href={href}
                                                        key={index}
                                                    >
                                                        <a className="page-numbers">{ pageNo + '.'}</a>
                                                    </Link>
                                                )
                                            })}

                                            { (totalPages > 1 && totalPages > activePage) && 
                                                <Link
                                                    as={`/blog/page/${activePage+1}`}
                                                    href={`/blog/page/[pageno]`}
                                                >
                                                    <a className="next page-numbers">
                                                        <span>
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                                        </span>
                                                    </a>
                                                </Link>
                                            }
                                            
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
                            .blog-banner .cr-social-link {
                                z-index: 3; 
                            }
                            .blog-banner .cr-social-link li a {
                                background: #00146b!important;
                                color: #fff!important; 
                            }
                            .blog-banner .cr-social-link li a:hover {
                                background: #00b4ff!important; 
                            }
                            
                            @media (max-width: 1199px) {
                                .blog-banner .cr-social-link {
                                    text-align: center;
                                }
                                .blog-banner .cr-social-link li a {
                                    background: #fff!important;
                                    color: #00146b!important; 
                                }
                                .blog-banner .cr-social-link li a:hover {
                                    background: #00b4ff!important;
                                    color: #fff!important; 
                                }
                                                        
                            }
                        `}</style>
                    </div>
                </Fragment>
        );
    }
}
export default PageWrapper(Index);
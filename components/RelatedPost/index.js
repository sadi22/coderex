import React, { Component } from 'react';
import Link from 'next/link';
import styles from './style';


class RelatedPost extends Component {
    
    render() {
        const {relatedPosts} = this.props;
        return (
            <div className="single">
                <section className="blog-list">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2 className="circular-700 color-fff">Related posts</h2>
                                </div>
                                
                                <div className="post-wrapper">
                                    {relatedPosts.map((post, index) => {
                                        const {title, excerpt, link, featured_image, slug, author_name, date_gmt, category_info} = post;
                                        let post_image = featured_image ?  (featured_image.media_details.sizes ? featured_image.media_details.sizes.medium_large.source_url : 'https://via.placeholder.com/768x512.png/09f/000/coderex-post-image?text=CodeRex+post+image') : 'https://via.placeholder.com/768x512.png/09f/000/coderex-post-image?text=CodeRex+post+image';                                      
                                        let actualPage = 'post';  
                                        return (
                                            <div className="single-post" key={index}>
                                                <figure>
                                                    <Link
                                                        as={`/post/${slug}`}
                                                        href={`/post/[]`}
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
                                                <div className="post-title">
                                                    <p className="category">
                                                        {post.category_info && 
                                                            post.category_info.map((term, index) => {
                                                                const {term_slug, term_name} = term;
                                                                return (
                                                                    <Link
                                                                        as={`/category/${term_slug}`}
                                                                        href={`/category?slug=${term_slug}&apiRoute=post`}
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
                                                            href={`/post?slug=${post.slug}&apiRoute=post`}
                                                            key={index}
                                                        >
                                                            <a href="" className="title circular-700">{post.title.rendered}</a>
                                                        </Link>
                                                        
                                                    </h1>
                                                </div>
                                            </div>
                                        )
                                    })}
                    
                                </div>
                                {/* <--/post-wrapper--> */}
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>
            </div>
        )
    }
}

export default RelatedPost;


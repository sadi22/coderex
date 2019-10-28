import React, {Component, Fragment} from 'react';
import PageWrapper from '../../components/PageWrapper';
import RelatedPost from '../../components/RelatedPost';
import SinglePost from '../../components/Single';
import Head from 'next/head';
import _ from 'lodash';
import { getPostBySlug, getDataByEndPoint } from '../../api/api';

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        try {
            const post = await getDataByEndPoint(`wp/v2/posts?slug=${slug}`).then(data => {
                return data[0];
            })

            if(post) {
                const relatedPosts = await getDataByEndPoint(`wp/v2/posts?exclude=${post.id}&category=${post.categories}&per_page=2`).then(data => {
                    return data;
                })
    
                const postComments = await getDataByEndPoint(`wp/v2/comments?post=${post.id}`).then(data => {
                    return data;
                })
               
                return { post, relatedPosts, postComments };
            }

            return {post};
           
        } catch (err) {
            console.log(err);
        }
        return null;
    }
    render() {
        const { post, relatedPosts, postComments, siteOptions } = this.props;
        let comments = [];
        let seo_title = post.title.rendered;
        let seo_description = '';
        let seo_canonical = post.link;
        if(post.yoast_meta_rest) {
            seo_title = post.yoast_meta_rest.yoast_wpseo_title;
            seo_description = post.yoast_meta_rest.yoast_wpseo_metadesc;
            seo_canonical = post.yoast_meta_rest.yoast_wpseo_canonical;
        }
        return (
            <Fragment>
                <Head>
                    <title>{seo_title}</title>
                    {post.yoast_meta && post.yoast_meta.map((meta, i)=>{
                        return (
                            <Fragment key={i}>
                                {meta.name && <meta name={meta.name} content={meta.content}/>}
                                {meta.property && (<meta property={meta.property} content={meta.content}/>)}
                            </Fragment>   
                        )
                    })}
                </Head>
                <div className="single">
                    <SinglePost post={post} postComments={postComments}/>
                    <RelatedPost relatedPosts={relatedPosts}/>
                </div>
            </Fragment>
        );
    }
}

export default PageWrapper(Post);
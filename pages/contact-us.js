import React, {Component, Fragment} from 'react';
import PageWrapper from '../components/PageWrapper';
import styles from '../styles/contact-us';
import parse from 'html-react-parser';
import Head from 'next/head';
import { getPostBySlug  } from '../api/api';


class Contact extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('contact-us').then(data=>{return data[0]});
            
            return { page };
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    render() {
        const {page} = this.props;
        const {acf} = page;
        let seo_title = page.title.rendered;
        let seo_description = page.title.rendered;
        let seo_canonical = page.link;
        if(page.yoast_meta_rest) {
            seo_title = page.yoast_meta_rest.yoast_wpseo_title;
            seo_description = page.yoast_meta_rest.yoast_wpseo_metadesc;
            seo_canonical = page.yoast_meta_rest.yoast_wpseo_canonical;
        }

        return (
            <div>
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
                <section className="cr-contact pos-relative">
                    <div className="overlay contact-illustration">
                        <img src="../static/images/contact-illustration.gif" className="img-fluid" alt="illustration img" />
                    </div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="contact-content">
                                    {acf && <h1 className="circular-700 pos-relative">{parse(acf.heading)}</h1>}
                                    {acf && <div className="description">{parse(acf.description)}</div>}
                                    
                                    <form action="">
                                        <div className="groups">
                                            <input type="text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="groups">
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="groups">
                                            <input type="text" name="company_name" placeholder="Company Name" />
                                        </div>
                                        <div className="groups">
                                            <select name="budget">
                                                <option value="">What Is Your Budget?</option>
                                                <option value="">$1500</option>
                                                <option value="">$2000</option>
                                                <option value="">$2500</option>
                                                <option value="">$3000</option>
                                            </select>
                                        </div>
                                        <div className="groups">
                                            <textarea name="msg" placeholder="Message"></textarea>
                                        </div>
                                        
                                        <button type="submit" className="cr-btn-default contact-btn svg-btn-effect">
                                            <svg>
                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                            </svg>
                                            <span>Send Message</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <style jsx>
                    {styles}
                </style>
                <style jsx global>{`
                    .cr-contact .contact-content .description p {
                        font-size: 26px;
                        line-height: 46px;
                    }
                    @media (max-width: 767px) {
                        .cr-contact .contact-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default PageWrapper(Contact);
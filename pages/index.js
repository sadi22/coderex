
import React, { Component, Fragment } from 'react';
import PageWrapper from '../components/PageWrapper'
import Head from 'next/head';
import HomeHero from '../components/HomeHero'
import Introduction from '../components/Introduction'
import Benefits from '../components/Benefits'
import WorkProcess from '../components/WorkProcess'
import CaseStudy from '../components/CaseStudy'
import Testimonial from '../components/Testimonial';
import CoderexAim from '../components/CoderexAim'
import Features from '../components/Features'
import ProvidedServices from '../components/ProvidedServices';
import Pricing from '../components/Pricing';
import { getPostBySlug  } from '../api/api';


class Home extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('home').then(data=>{return data[0]});
            return { page };
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    render() {
        const { page, siteOptions } = this.props;
        let seo_title = page.title.rendered;
        let seo_description = page.title.rendered;
        let seo_canonical = page.link;
        if(page.yoast_meta_rest) {
            seo_title = page.yoast_meta_rest.yoast_wpseo_title;
            seo_description = page.yoast_meta_rest.yoast_wpseo_metadesc;
            seo_canonical = page.yoast_meta_rest.yoast_wpseo_canonical;
        }
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
                {page.acf && <HomeHero content={page.acf.hero}/>}
                {page.acf && <Introduction content={page.acf.introduction}/>}
                {page.acf && <Benefits content={page.acf.benefits}/>}
                {page.acf && <WorkProcess content={page.acf.coderex_work_process} />}
                {page.acf && <Features content={page.acf.our_features} />}
                {page.acf && <Testimonial content={page.acf.testimonial}/>}
                {page.acf && <CoderexAim content={page.acf.coderex_aim} />}
                {page.acf && <CaseStudy content={page.acf.case_study_slider} />}
                {page.acf && <Pricing content={page.acf.pricing} />}
                {page.acf && <ProvidedServices content={page.acf.provided_services}/>}
                
            </Fragment>
        );
        
    }
}

export default PageWrapper(Home)

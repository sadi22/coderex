import React, {Component, Fragment} from 'react';
import PageWrapper from '../components/PageWrapper';
import AboutHero from '../components/AboutHero';
import AboutOverview from '../components/AboutOverview';
import AboutFeature from '../components/AboutFeature';
import Career from '../components/Career';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import GivingBack from '../components/GivingBack';
import Head from 'next/head';
import { getPostBySlug  } from '../api/api';


class About extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('about').then(data=>{return data[0]});
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
        let buttonLink = acf.overview_section.button_link ?  acf.overview_section.button_link.url : '#';
        let buttonTarget = acf.overview_section.button_link ?  acf.overview_section.button_link.target : '_self';
        
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
                
                {page.acf && <AboutHero content={page.acf.hero_section}/>}
                {page.acf && <AboutOverview content={page.acf.overview_section}/>}
                {page.acf && <AboutFeature content={page.acf.features}/>}
                {page.acf && <Team content={page.acf.team}/>}
                {page.acf && <Career content={page.acf.career}/>}
                {page.acf && <Testimonial content={page.acf.video_testimonial}/>}
                {page.acf && <GivingBack content={page.acf.giving_back}/>}
                            

            </Fragment>
        );
    }
}

export default PageWrapper(About);
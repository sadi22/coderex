import React, {Component, Fragment} from 'react';
import PageWrapper from '../components/PageWrapper';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudyOverview from '../components/CaseStudyOverview';
import CaseStudyLaptopView from '../components/CaseStudyLaptopView';
import CaseStudyWebsiteOverview from '../components/CaseStudyWebsiteOverview';
import CaseStudyCompare from '../components/CaseStudyCompare';
import CaseStudyMobileView from '../components/CaseStudyMobileView';
import CaseStudySpecialFeature from '../components/CaseStudySpecialFeature';
import CaseStudyHighlight from '../components/CaseStudyHighlight';
import CaseStudyOptimization from '../components/CaseStudyOptimization';
import CaseStudyBrand from '../components/CaseStudyBrand';
import RelatedProject from '../components/RelatedProject';
import $ from 'jquery';
import parse from 'html-react-parser';
import { getPostBySlug  } from '../api/api';

class CaseStudy extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('case-study').then(data=>{return data[0]});
            return { page };
        } catch (err) {
            console.log(err);
        }
        return null;
    }
    

    render() {
        const {page} = this.props;
        
        return (
            <Fragment>
                {page.acf && <CaseStudyHero content={page.acf.hero_section}/>}
                {page.acf && <CaseStudyOverview content={page.acf.case_study_overview}/>}
                {page.acf && <CaseStudyLaptopView content={page.acf.laptop_view}/>}
                {page.acf && <CaseStudyWebsiteOverview content={page.acf.website_overview}/>}
                {page.acf && <CaseStudyCompare content={page.acf.website_compare}/>}
                {page.acf && <CaseStudyMobileView content={page.acf.mobile_view}/>}
                {page.acf && <CaseStudySpecialFeature content={page.acf.special_feature}/>}
                {page.acf && <CaseStudyHighlight content={page.acf.section_highlight}/>}
                {page.acf && <CaseStudyOptimization content={page.acf.optimization}/>}
                {page.acf && <CaseStudyBrand content={page.acf.branding}/>}
                {page.acf && <RelatedProject content={page.acf.related_project}/>}
            </Fragment>
        );
    }
}

export default PageWrapper(CaseStudy);
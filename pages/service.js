import React, {Component, Fragment} from 'react';
import PageWrapper from '../components/PageWrapper';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import Services from '../components/Services';
import ServiceType from '../components/ServiceType';
import $ from 'jquery';
import parse from 'html-react-parser';
import { getPostBySlug  } from '../api/api';


class Service extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('service').then(data=>{return data[0]});
            return { page };
        } catch (err) {
            console.log(err);
        }
        return null;
    }
    

    render() {
        const {page} = this.props;
        const {acf} = page;
        
        return (
            <Fragment>
                {page.acf && <ServiceHero content={page.acf.hero_section}/>}
                {page.acf && <ServiceOverview content={page.acf.service_overview_section}/>}
                {page.acf && <Services content={page.acf.services}/>}
                {page.acf && <ServiceType content={page.acf.types_of_services}/>}

            </Fragment>
        );
    }
}
export default PageWrapper(Service);
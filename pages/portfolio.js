import React, {Component, Fragment} from 'react';
import PageWrapper from '../components/PageWrapper';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioOverview from '../components/PortfolioOverview';
import Project from '../components/Project';
import $ from 'jquery';
import parse from 'html-react-parser';
import { getPostBySlug  } from '../api/api';

class Portfolio extends Component {
    static async getInitialProps(context) {
        try {
            const page = await getPostBySlug('portfolio').then(data=>{return data[0]});
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
                {page.acf && <PortfolioHero content={page.acf.hero_section}/>}
                {page.acf && <PortfolioOverview content={page.acf.overview}/>}
                {page.acf && <Project content={page.acf.project}/>}

            </Fragment>
        );
    }
}

export default PageWrapper(Portfolio);
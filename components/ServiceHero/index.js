import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';


class AboutHero extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="inner-page-banner service-banner pos-relative">
                    {content.welcome_image &&
                        <img src={content.welcome_image.url} className="service-banner-img crx crx-animated" alt="banner img" />
                    }

                    <SocialLink />

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="banner-content align-center-center text-center">
                                    <h1 className="circular-700 color-fff crx crx-animated">{parse(content.heading)}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    
                `}</style>
            </Fragment>
        )
    }
}

export default AboutHero;


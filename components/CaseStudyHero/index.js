import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyHero extends Component {   

    render() {
        const {content} = this.props;
        let heroBg = content.background_image ? content.background_image.url : '';
        return (
            <Fragment>
                <section className="inner-page-banner case-study-banner pos-relative">
                    <SocialLink />

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="ipad-wrapper">
                                    <img src="../../static/images/ipad-frame.png" alt="ipad frame" className="ipad-frame img-fluid" />
                                    <img src="../../static/images/ipad-pen.png" alt="ipad frame" className="ipad-pen img-fluid" />
                                    <span className="ipad-shadow"></span>
                                    {content.site_screenshot &&
                                        <div className="scrolling-img-frame">
                                            <img src={content.site_screenshot.url} alt="project image" className="scroll-img img-fluid" />
                                        </div>
                                    }
                                </div>

                                <div className="banner-content align-center-center">
                                    <h1 className="circular-700 color-fff crx crx-animated">{parse(content.heading)}</h1>
                                    <p className="title-26 color-fff crx crx-animated">{parse(content.short_description)}</p>
                                    {content.link_text &&
                                        <a href={content.link ? content.link.url : '#'} target={content.link ? content.link.target : '_self'} className="circular-700 crx crx-animated">{parse(content.link_text)} <img src="../../static/images/arrow-right-white.png" className="crx crx-animated" alt="arrow" /></a>
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
                    .inner-page-banner.case-study-banner {
                        background-image: url('${heroBg}');
                    }
                    
                    @media (max-width: 1199px) {
                        .case-study-banner .cr-social-link {
                            text-align: center;
                        }
                    }
                `}</style>
            </Fragment>
        )
    }
}

export default CaseStudyHero;


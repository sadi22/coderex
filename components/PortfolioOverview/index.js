import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class PortfolioOverview extends Component {   

    render() {
        const {content} = this.props;
        let button_link = content.button_link ? content.button_link.url : '#';
        let button_target = content.button_link ? content.button_link.target : '_self';
        let site_demo_image = content.site_demo_image ? content.site_demo_image.url : '';

        return (
            <Fragment>
                <section className="featured-portfolio">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="content-wrapper">
                                    <div className="img-area pos-relative">
                                        <div className="monitor-area pos-relative">
                                            <img src="../static/images/featured-portfolio-monitor.png" alt="monitor" className="monitor img-fluid" />
                                            <div className="scrolling-img-frame"> </div>
                                        </div>
                                        <img src="../static/images/featured-portfolio-keyboard.png" alt="keyboard" className="keyboard img-fluid" />
                                    </div>

                                    <div className="content-area">
                                        <h5 className="circular-700 crx crx-animated">{parse(content.title)}</h5>
                                        <div className="crx crx-animated description">{parse(content.description)}</div>
                                        {content.button_text &&
                                        <a href={button_link} target={button_target} className="cr-btn-default contact-btn svg-btn-effect crx crx-animated">
                                            <svg>
                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                            </svg>
                                            <span>{parse(content.button_text)}</span>
                                        </a>
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
                        background: #e8e8e8 url(${site_demo_image});
                    }
                    
                    .featured-portfolio .content-wrapper .content-area .description p {
                        font-size: 30px;
                        line-height: 52px;
                        text-align: justify;
                    }
                    @media (max-width: 1300px) {
                        .featured-portfolio .content-wrapper .content-area .description p {
                            text-align: center;
                        }
                    }
                    
                    @media (max-width: 991px) {
                        .featured-portfolio .content-wrapper .content-area .description p {
                            font-size: 25px;
                            line-height: 40px;
                        }
                    }
                    
                    @media (max-width: 767px) {
                        .featured-portfolio .content-wrapper .content-area .description p {
                            font-size: 22px;
                            line-height: 34px;
                        }
                    }

                `}</style>
            </Fragment>
        )
    }
}

export default PortfolioOverview;


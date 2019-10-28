import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class ServiceOverview extends Component {   

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="service-welcome-txt pos-relative">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="welcome-content">
                                    <h5 className="circular-700 verticle-txt crx crx-animated">{parse(content.heading)}</h5>
                                    <div className="description crx crx-animated">{parse(content.description)}</div>

                                    {content.button_text &&
                                        <a 
                                        href={content.button_link ? content.button_link.url : '#'} target={content.button_link ? content.button_link.target : '_self'} 
                                        className="cr-btn-default contact-btn svg-btn-effect crx crx-animated"
                                        >
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
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .service-welcome-txt .welcome-content .description p{
                        font-size: 26px;
                        line-height: 46px;
                    }
                    @media (max-width: 767px) {
                        .service-welcome-txt .welcome-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }

                `}</style>
            </Fragment>
        )
    }
}

export default ServiceOverview;


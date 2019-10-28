import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import SocialLink from '../SocialLink';
import styles from './style';
import parse from 'html-react-parser';


class PortfolioHero extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="inner-page-banner portfolio-banner pos-relative">
                    <SocialLink />

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">

                                <div className="ipad-img">
                                {content.top_image &&
                                    <img src={content.top_image.url} alt="img" className="img2 crx crx-animated" />
                                }
                                {content.bottom_image &&
                                    <img src={content.bottom_image.url} alt="img" className="img1 crx crx-animated" />
                                }
                                </div>

                                <div className="banner-content align-center-center text-center">
                                    <h1 className="circular-700 color-fff crx crx-animated">{parse(content.heading)}</h1>
                                    <div className="crx description crx-animated">{parse(content.description)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .portfolio-banner .banner-content .description p{
                        font-size: 26px;
                        line-height: 46px;
                        color: #fff;
                    }
                    @media (max-width: 991px) {

                        .portfolio-banner .cr-social-link {
                            text-align: center;
                        }
                    }
                    @media (max-width: 767px) {
                        .portfolio-banner .banner-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                `}</style>
            </Fragment>
        )
    }
}

export default PortfolioHero;


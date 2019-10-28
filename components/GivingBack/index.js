import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class GivingBack extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-giving-back section-padding">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="featured-giving-back">
                                    <div className="section-title">
                                        <h2 className="circular-700">{parse(content.heading)}</h2>
                                        <div className="description">{parse(content.description)}</div>
                                    </div>

                                    <div className="giving-back giving1 crx crx-animated">
                                        <a href={content.giving_back1.link ? content.giving_back1.link.url : '#'} target={content.giving_back1.link ? content.giving_back1.link.target : '_self'} >

                                            {content.giving_back1.giving_back_logo &&
                                                <img src={content.giving_back1.giving_back_logo.url} alt="giving back icon" />
                                            }
                                            <h4>{parse(content.giving_back1.giving_back_title)}</h4>
                                            <h6 className="text-capitalize readmore">Read More <img src="../static/images/arrow-right-white.png" alt="arrow" /></h6>
                                        </a>
                                    </div>
                                </div>

                                <div className="giving-back-wrapper">
                                    <div className="giving-back giving2 crx crx-animated">
                                        <a href={content.giving_back2.link ? content.giving_back2.link.url : '#'} target={content.giving_back2.link ? content.giving_back2.link.target : '_self'} >

                                            {content.giving_back2.giving_back_logo &&
                                                <img src={content.giving_back2.giving_back_logo.url} alt="giving back icon" />
                                            }
                                            <h4>{parse(content.giving_back2.giving_back_title)}</h4>
                                            <h6 className="text-capitalize readmore">Read More <img src="../static/images/arrow-right-white.png" alt="arrow" /></h6>
                                        </a>
                                    </div>

                                    <div className="sml-giving">
                                        <div className="giving-back giving3 crx crx-animated">
                                            <a href={content.giving_back3.link ? content.giving_back3.link.url : '#'} target={content.giving_back3.link ? content.giving_back3.link.target : '_self'} >

                                                {content.giving_back3.giving_back_logo &&
                                                    <img src={content.giving_back3.giving_back_logo.url} alt="giving back icon" />
                                                }
                                            </a>
                                        </div>

                                        <div className="giving-back giving4 crx crx-animated">
                                            <a href={content.giving_back4.link ? content.giving_back4.link.url : '#'} target={content.giving_back4.link ? content.giving_back4.link.target : '_self'} >

                                                {content.giving_back4.giving_back_logo &&
                                                    <img src={content.giving_back4.giving_back_logo.url} alt="giving back icon" />
                                                }
                                            </a>
                                        </div>
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
                    .cr-giving-back .section-title .description p {
                        text-align: justify;
                        color: #fff;
                        font-size: 26px;
                        line-height: 46px;
                    }
                                        
                    @media (max-width: 767px) {
                        .cr-giving-back .section-title .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }

                `}</style>
            </Fragment>
        )
    }
}

export default GivingBack;


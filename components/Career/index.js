import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class Career extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-join-team pos-relative section-padding">
                    <div className="overlay"></div>
                    {content.left_image &&
                        <img src={content.left_image.url} alt="team-illustration" className="team-illustration team-illustration1" />
                    }
                    {content.middle_large_image &&
                        <img src={content.middle_large_image.url} alt="team-illustration" className="team-illustration team-illustration2" />
                    }
                    {content.right_image &&
                        <img src={content.right_image.url} alt="team-illustration" className="team-illustration team-illustration3" />
                    }
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="join-content">
                                    <h2 className="circular-700 crx crx-animated">{parse(content.heading)}</h2>
                                    <div className="description crx crx-animated">{parse(content.description)}</div>
                                    
                                    {content.button_text &&
                                        <a href={content.button_link ? content.button_link.url : '#'} className="cr-btn-default contact-btn svg-btn-effect crx crx-animated" target={content.button_link ? content.button_link.target : '_self'}>
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
                    .cr-join-team .join-content .description p{
                        font-size: 26px;
                        line-height: 46px;
                    }
                    @media (max-width: 767px) {
                        .cr-join-team .join-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }

                `}</style>
            </Fragment>
        )
    }
}

export default Career;


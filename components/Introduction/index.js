import React, { Component } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class Introduction extends Component {   

    render() {
        const {content} = this.props;
        let buttonLink = content.button_url ?  content.button_url.url : '#';
        return (
            <div>
                <section className="cr-hire pos-relative">
                    {content.image &&
                        <img src={parse(content.image.url)} alt="illustration hire img" className="img-fluid hire-illustration" />
                    }
                    
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="hire-content">
                                    <h2 className="circular-700 color-232 crx">{parse(content.heading)}</h2>
                                    <div className="crx description">{parse(content.description)}</div>

                                    {content.button_text &&
                                        <Link
                                        href={buttonLink}
                                        >
                                            <a className="cr-btn-default lets-talk-btn svg-btn-effect crx">
                                                <svg>
                                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                </svg>
                                                <span>{content.button_text}</span>
                                            </a>
                                        </Link>
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
                    .cr-hire .hire-content .description p {
                        font-size: 26px;
                        line-height: 46px;
                        letter-spacing: 1px;
                        text-align: justify;
                    }
                    @media (max-width: 1199px) {
                        .cr-hire .hire-content .description p {
                            font-size: 20px;
                            line-height: 34px;
                            letter-spacing: normal;
                        }
                    }
                    @media (max-width: 991px) {
                        .cr-hire .hire-content .description p {
                            text-align: center;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Introduction;


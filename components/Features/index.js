import React, { Component } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';



class Features extends Component {         

    render() {
        const {content} = this.props;
        
        let buttonLink = content.button_link ?  content.button_link.url : '#';
        return (
            <div>
                <section className="cr-expectation pos-relative section-padding">
                    <div className="overlay1 crx crx-animated"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="overlay2 crx crx-animated"></div>
                                <div className="expectation-wrapper">
                                    <div className="section-title">
                                        <h2 className="crx crx-animated">{parse(content.heading)}</h2>
                                        <div className="description crx crx-animated">{parse(content.description)}</div>

                                        {content.button_text &&
                                            <Link
                                            href={buttonLink}
                                            >
                                                <a target={content.button_link ? content.button_link.target : '_self'} className="cr-btn-default schedule-call svg-btn-effect">
                                                    <svg>
                                                        <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                    </svg>
                                                    <span>{parse(content.button_text)}</span>
                                                </a>
                                            </Link>
                                        }
                                    </div>

                                    <div className="expectations">
                                        {content.features.map((itemContent, index) => {
                                            return(
                                                <div className={`single-item item-${index+1} crx crx-animated`} key={index+1}>
                                                    <div className="item-icon">
                                                        {itemContent.image &&
                                                            <img src={parse(itemContent.image.url)} alt="icon" />
                                                        }
                                                    </div>
                                                    <h5>{parse(itemContent.heading)}</h5>
                                                    <div className="description">{parse(itemContent.description)}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* <!--/col--> */}
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .cr-expectation .expectations .single-item .description p {
                        color: #fff;
                    }

                    @media (max-width: 991px) {
                        .cr-expectation .section-title .description p {
                            color: #fff;
                            text-align: center;
                        }
                    }
                    @media (max-width: 575px) {
                        .cr-expectation .expectations .single-item .description p {
                            text-align: center;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Features;

import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class Benefits extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-benefits pos-relative"> 
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <h2 className="section-title circular-700 color-232 crx">{parse(content.heading)}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cr-benefit-content-area pos-relative">
                        <div className="overlay">
                        {content.image &&
                            <img src={content.image.url} alt="benefits image" />
                        }
                        </div>

                        <div className="cr-container">
                            <div className="cr-row">
                                <div className="cr-col">
                                    <div className="benefits-content">

                                        {content.single_benefit.map((item, index) => {
                                            return(
                                                <div className="single-benefits" key={index}>
                                                    {item.icon &&
                                                        <img src={item.icon.url} alt="icon" />
                                                    }
                                                    <div className="benefit-title">
                                                        <h5>{parse(item.title)}</h5>
                                                        <p>{parse(item.description)}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-area">
                        {content.button_text &&
                            <Link
                            href={content.button_link ? content.button_link.url : '#'}
                            >
                            <a target={content.button_link ? content.button_link.target : '_self'} className="cr-btn-default discuss-btn svg-btn-effect">
                                <svg>
                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                </svg>
                                <span>{parse(content.button_text)}</span>
                            </a>
                            </Link>
                        }
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

export default Benefits;


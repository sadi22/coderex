import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CoderexAim extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-aim pos-relative">
                    {content.left_image &&
                        <img src={content.left_image.url} alt="illustration" className="left-bottom-btn" />
                    }

                    {content.right_image &&
                        <div className="cr-aim-image">
                            <img src={content.right_image.url} alt="illustration" />
                        </div>
                    }

                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="aim-content">
                                    <h2 className="section-title circular-700 color-232">{parse(content.heading)}</h2>
                                    <p className="description title-26">{parse(content.description)}</p>
                                    {content.button_text &&
                                    <a href={content.button_link ? content.button_link.url : '#'} target={content.button_link ? content.button_link.target : '_self'} className="cr-btn-default talk-us-btn svg-btn-effect">
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
                    

                `}</style>
            </Fragment>
        )
    }
}

export default CoderexAim;


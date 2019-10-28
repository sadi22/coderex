import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyBrand extends Component {   

    render() {
        const {content} = this.props;
        let fontLength = content.typography.font_family.length ;

        return (
            <Fragment>
                <section className="project-typography">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="typography-wrapper">
                                    <div className="typo-title">
                                        <h4 className="circular-700">{parse(content.typography.title)}</h4>
                                    </div>
                                    <div className="project-brand-color">
                                        {content.typography.image &&
                                            <img src={content.typography.image.url} alt="img" />
                                        }
                                    </div>
                                    <div className="project-font-family">
                                        {content.typography.font_family.map((item, index) => {
                                            
                                            return(
                                                <div className="single-font-family" key={index}>
                                                    <h5 className="circular-700">{parse(item.name)}</h5>
                                                    {item.sample_image &&
                                                        <img src={item.sample_image.url} alt="img" />
                                                    }
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>

                                <div className="project-color">
                                    {content.color.color.map((item, index) => {
                                        return(
                                            <div 
                                            className={`single-color color-${index+1} `}
                                            style={{backgroundColor: item.background_color, color: item.text_color}}
                                            key={index}
                                            >
                                                <span>{item.background_color}</span>
                                            </div>
                                        )
                                    })}
                                    
                                    <div className="color-title">
                                        <h4 className="circular-700 pos-relative">{parse(content.color.title)}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {content.complete_view_image &&
                <section className="complete-view pos-relative">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="complete-view-img">
                                    <img src={content.complete_view_image.url} alt="complete-view-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    @media (max-width: 1199px) {
                        .project-typography .project-font-family .single-font-family {
                            width: calc(100% / ${fontLength});
                        }
                    }
                `}</style>
            </Fragment>
        )
    }
}

export default CaseStudyBrand;


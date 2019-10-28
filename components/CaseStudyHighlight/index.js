import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyHighlight extends Component {   

    render() {
        const {content} = this.props;
        let bgImage = content.background_image ? content.background_image.url : "";
        return (
            <Fragment>
                <section className="section-highlight pos-relative">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="highlight-content">
                                    {content.section_image &&
                                    <img src={content.section_image.url} alt="highlight section img" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {content.mockup_view &&                      
                    <section className="mockup-view">
                        <img src={content.mockup_view.url} alt="mockup-view-img" className="mockup-view-img" />
                    </section>
                }

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .section-highlight{
                        background-image: url('${bgImage}');
                    }
                    
                `}</style>
            </Fragment>
        )
    }
}

export default CaseStudyHighlight;


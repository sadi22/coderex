import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import ReactCompareImage from 'react-compare-image';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyCompare extends Component {   

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="case-study-compare">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title">
                                    <h4>{parse(content.heading)}</h4>
                                    <p className="title-26">{parse(content.description)}</p>
                                </div>

                                <div className="compare-imgs">
                                    <ReactCompareImage leftImage={content.new_website_image.url} rightImage={content.old_website_image.url} />
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

export default CaseStudyCompare;


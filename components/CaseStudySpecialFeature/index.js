import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudySpecialFeature extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="special-feature">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="special-feature-content">
                                    <h4>{parse(content.title)}</h4>
                                    <p className="title-26">{parse(content.description)}</p>
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

export default CaseStudySpecialFeature;


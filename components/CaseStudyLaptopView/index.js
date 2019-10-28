import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyLaptopView extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="laptop-view pos-relative">
                    <div className="overlay"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="img-area">
                                    {content &&
                                        <img src={content.url} alt="laptop view image" />
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

export default CaseStudyLaptopView;


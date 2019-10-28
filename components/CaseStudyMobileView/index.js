import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyMobileView extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="mobile-view">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                {content.mobile_view_image &&
                                <div className="mobile-view-wrapper">
                                    {content.mobile_view_image.map((item, index) => {
                                        return(
                                            <div className="single-img" key={index}>
                                                {item.image &&
                                                    <img src={item.image.url} alt="mobile view img" />
                                                }
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                                }
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

export default CaseStudyMobileView;


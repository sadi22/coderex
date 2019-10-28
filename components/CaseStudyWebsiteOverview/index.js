import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyWebsiteOverview extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="case-overview">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="overview-content">
                                    <h4>{parse(content.title)}</h4>
                                    <p className="title-26">{parse(content.description)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {content.page_screenshot &&
                    <div className="img-area">
                        {content.page_screenshot.map((item, index) => {
                            return(
                                <div className="single-img" key={index}>
                                    {item.image &&
                                        <img src={item.image.url} alt="site image" />
                                    }
                                </div>
                            )
                        })}
                    </div>
                    }

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

export default CaseStudyWebsiteOverview;


import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class CaseStudyOverview extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="case-details">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="content-wrapper">
                                    <div className="key-point">
                                        <h4 className="circular-700 crx crx-animated">{parse(content.case_study_task.title)}</h4>
                                        {content.case_study_task.tasks &&
                                            <ul className="crx crx-animated">
                                                {content.case_study_task.tasks.map((item, index) => {
                                                    return(
                                                        <li key={index}>{parse(item.task)}</li>
                                                    )
                                                })}
                                            </ul>
                                        }
                                    </div>

                                    <div className="about-project">
                                        <h4 className="circular-700 crx crx-animated">{parse(content.overview_title)}</h4>
                                        <div className="title-26 description crx crx-animated">{parse(content.overview_details)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .case-details .about-project .description p {
                        font-size: 26px;
                        line-height: 46px;
                    }
                    @media (max-width: 1199px) {
                        .case-details .about-project .description p {
                            font-size: 20px;
                            line-height: 34px;
                        }
                    }
                
                    @media (max-width: 767px) {
                        .case-details .about-project .description p {
                            margin-top: 16px;
                            text-align: left;
                        }
                    }

                `}</style>
            </Fragment>
        )
    }
}

export default CaseStudyOverview;


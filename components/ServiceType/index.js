import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class ServiceType extends Component {   

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="free-service pos-relative">
                    {content.top_left_image &&
                        <img src={content.top_left_image.url} alt="service-illustration" className="service-illustration1 crx crx-animated" />
                    }
                    {content.top_right_image &&
                        <img src={content.top_right_image.url} alt="service-illustration" className="service-illustration2 crx crx-animated" />
                    }
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <h2 className="section-title circular-700 color-fff">{parse(content.heading)}</h2>
                                <div className="free-service-content">
                                    <div className="free-single-item free1 text-center crx crx-animated">
                                        <span className="parent display-block">
                                            <span className="child1 display-block"></span>
                                            <span className="child2 display-block"></span>
                                            <span className="child3 display-block"></span>
                                            <span className="child4 display-block"></span>
                                        </span>
                                        <h5 className="circular-700 color-fff crx crx-animated">
                                            {parse(content.services_type1.service_title)}
                                        </h5>
                                        <p className="color-fff crx crx-animated">
                                            {parse(content.services_type1.service_description)}
                                        </p>
                                    </div>

                                    <div className="free-single-item free2 text-center crx crx-animated">
                                        <span className="parent display-block">
                                            <span className="child1 display-block"></span>
                                            <span className="child2 display-block"></span>
                                            <span className="child3 display-block"></span>
                                        </span>
                                        <h5 className="circular-700 crx crx-animated">
                                            {parse(content.services_type2.service_title)}
                                        </h5>
                                        <p className="crx crx-animated">
                                            {parse(content.services_type2.service_description)}
                                        </p>
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
                    

                `}</style>
            </Fragment>
        )
    }
}

export default ServiceType;


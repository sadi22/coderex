import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class Services extends Component {   

    render() {
        const {content} = this.props;

        return (
            <Fragment>
                <section className="cr-service pos-relative">
                    <div className="shape"></div>
                    <div className="cr-service-wrapper">
                        {content.map((serviceItem, index) => {
                            let serviceCount = '';
                            if(index+1 < 10){
                                serviceCount = '0'+ (index+1);
                            }else{
                                serviceCount = index+1;
                            }
                            
                            return(
                                <div className={`single-service service-${index+1} `} key={index+1}>
                                    <div className="overlay crx crx-animated"></div>
                                    <div className="cr-container">
                                        <div className="cr-row">
                                            <div className="cr-col">
                                                <div className="content-wrapper">
                                                    <div className="content-image crx crx-animated">
                                                        <div className="icon-wrapper">
                                                            {serviceItem.image &&
                                                                <img src={serviceItem.image.url} className="service-icon crx crx-animated" alt="icon" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <span className="circular-700 crx crx-animated">{serviceCount}</span>
                                                        <h3 className="circular-700 crx crx-animated">{parse(serviceItem.heading)}</h3>
                                                        <div className="description crx crx-animated">{parse(serviceItem.description)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

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

export default Services;


import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class Pricing extends Component {   

    componentDidMount(){

        //------table hover------
        $(".single-price-plan").hover(function () {
            $(this).addClass("active"); 
            $(this).siblings(".popular").removeClass("active");
        }, function () {
            $(this).removeClass("active");
            $(".single-price-plan.popular").addClass("active");
        })
    }

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-pricing">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2>{parse(content.heading)}</h2>
                                    <p>{parse(content.description)}</p>
                                </div>

                                <div className="pricing-wrapper">
                                    {content.single_pricing.map((item, index) => {
                                        let popular_plan = item.popular_plan == true ? 'popular active' : '';

                                        return(
                                            <div className={`single-price-plan text-center ${popular_plan}`} key={index}>
                                                <div className="price-header">
                                                    <h6>{parse(item.plan_title)}</h6>
                                                    {item.plan_image &&
                                                        <div className="plan-img">
                                                            <img src={item.plan_image.url} alt="pricing img" />
                                                        </div>
                                                    }
                                                </div>
                                                
                                                <div className="price-body">
                                                    <h5>{parse(item.time)}</h5>
                                                    {item.features &&
                                                        <ul>
                                                            {item.features.map((feature, index) => {
                                                                return(
                                                                    <li key={index}>{parse(feature.feature_title)}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    }
                                                </div>
                                                
                                                <div className="price-footer">
                                                    <h3>${parse(item.price)} <span>/ {parse(item.duration)}</span></h3>
                                                    {item.button_text &&

                                                        <a href={item.button_link ? item.button_link.url : '#'} target={item.button_link ? item.button_link.target : '_self'} className="price-btn cr-btn-default contact-btn svg-btn-effect">
                                                            <svg>
                                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                            </svg>
                                                            <span>{parse(item.button_text)}</span>
                                                        </a>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })}

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

export default Pricing;


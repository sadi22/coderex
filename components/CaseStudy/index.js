
import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class CaseStudy extends Component {   
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null,
        };
    }
    
    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }

    render() {
        const {content} = this.props;
        return (
            <div>
                <section className="cr-portfolio section-padding">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2>{parse(content.title)}</h2>
                                    <p>{parse(content.description)}</p>
                                </div>

                                <div className="portfolio-content-wrapper">
                                    <div className="portfolio-img-wrapper" id="cr-portfolio-img">
                                        <Slider
                                            asNavFor={this.state.nav2}
                                            ref={slider => (this.slider1 = slider)}
                                            arrows= {false}
                                            autoplay= {true}
                                            fade= {false}
                                            dots= {true}
                                            cssEase= {'ease-in-out'}
                                            autoplaySpeed= {7000}
                                            speed= {1300}
                                            customPaging={ i => (<button> </button>)}
                                        >
                                            {content.slider_content.map((imgItem, index) => {
                                                return(
                                                    <div  key={index}>
                                                    {imgItem.image &&
                                                        <img src={imgItem.image.url} alt="portfolio img" className="img-fluid" />
                                                    }
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    </div>

                                    <div className="portfolio-content" id="cr-portfolio-content">
                                        <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        slidesToShow={1}
                                        autoplaySpeed= {7000}
                                        speed= {1100}
                                        autoplay={true}
                                        cssEase= {'ease-in-out'}
                                        arrows= {false}
                                        fade= {true}
                                        centerMode= {false}
                                        focusOnSelect= {true}
                                        >
                                            {content.slider_content.map((contentItem, index) => {
                                                let buttonLink = contentItem.button_link.url ?  contentItem.button_link.url : '#';

                                                return(
                                                    <div className="single-content" key={index}>
                                                        <span className="count circular-700">0{index+1}</span>
                                                        <h5 className="color-232">{parse(contentItem.title)}</h5>
                                                        <div className="description">{parse(contentItem.description)}</div>
                                                        
                                                        
                                                        {contentItem.button_text &&
                                                            <Link
                                                            href={buttonLink}
                                                            >
                                                                <a href={buttonLink} target={contentItem.button_link? contentItem.button_link.target : '_self'} className="cr-btn-default view-case-btn svg-btn-effect">
                                                                    <svg>
                                                                        <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                                    </svg>
                                                                    <span>{parse(contentItem.button_text)}</span>
                                                                </a>
                                                            </Link>
                                                        }
                                                    </div>
                                                )
                                            })}
                                            

                                        </Slider>
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
                    
                    .cr-portfolio .portfolio-content-wrapper .portfolio-content h5 {
                        -webkit-animation: fadeOutUp 1s both;
                        -moz-animation: fadeOutUp 1s both;
                        -ms-animation: fadeOutUp 1s both;
                        -o-animation: fadeOutUp 1s both;
                        animation: fadeOutUp 1s both;
                    }
                    .cr-portfolio .portfolio-content-wrapper .portfolio-content p {
                        -webkit-animation: fadeOutUp 1s both 0.2s;
                        -moz-animation: fadeOutUp 1s both 0.2s;
                        -ms-animation: fadeOutUp 1s both 0.2s;
                        -o-animation: fadeOutUp 1s both 0.2s;
                        animation: fadeOutUp 1s both 0.2s;
                    }
                    .cr-portfolio .portfolio-content-wrapper .portfolio-content .svg-btn-effect {
                        -webkit-animation: fadeOutUp 1s both 0.3s;
                        -moz-animation: fadeOutUp 1s both 0.3s;
                        -ms-animation: fadeOutUp 1s both 0.3s;
                        -o-animation: fadeOutUp 1s both 0.3s;
                        animation: fadeOutUp 1s both 0.3s;
                    }

                    .cr-portfolio .portfolio-content-wrapper .portfolio-content .slick-active h5 {
                        -webkit-animation: fadeInUp 1s both 0.5s;
                        -moz-animation: fadeInUp 1s both 0.5s;
                        -ms-animation: fadeInUp 1s both 0.5s;
                        -o-animation: fadeInUp 1s both 0.5s;
                        animation: fadeInUp 1s both 0.5s;
                    }
                    .cr-portfolio .portfolio-content-wrapper .portfolio-content .slick-active p {
                        -webkit-animation: fadeInUp 1s both 0.7s;
                        -moz-animation: fadeInUp 1s both 0.7s;
                        -ms-animation: fadeInUp 1s both 0.7s;
                        -o-animation: fadeInUp 1s both 0.7s;
                        animation: fadeInUp 1s both 0.7s;
                    }
                    .cr-portfolio .portfolio-content-wrapper .portfolio-content .slick-active .svg-btn-effect {
                        -webkit-animation: fadeInUp 1s both 0.9s;
                        -moz-animation: fadeInUp 1s both 0.9s;
                        -ms-animation: fadeInUp 1s both 0.9s;
                        -o-animation: fadeInUp 1s both 0.9s;
                        animation: fadeInUp 1s both 0.9s;
                    }
                    .cr-portfolio .portfolio-content-wrapper .slick-dots {
                        position: absolute;
                        top: 50%;
                        left: -74px;
                        bottom: inherit;
                        -webkit-transform: translateY(-50%);
                        -moz-transform: translateY(-50%);
                        -ms-transform: translateY(-50%);
                        -o-transform: translateY(-50%);
                        transform: translateY(-50%);
                    }

                    .cr-portfolio .portfolio-content-wrapper .slick-dots li {
                        line-height: normal;
                        cursor: pointer;
                        display: block;
                    }

                    .cr-portfolio .portfolio-content-wrapper .slick-dots li button {
                        width: 20px;
                        background: #00146b;
                        border: none;
                        height: 2px;
                        padding: 0;
                        cursor: pointer;
                        -webkit-transition: all 0.5s ease;
                        -moz-transition: all 0.5s ease;
                        -ms-transition: all 0.5s ease;
                        -o-transition: all 0.5s ease;
                        transition: all 0.5s ease;
                    }
                    .cr-portfolio .portfolio-content-wrapper .slick-dots li button:before{
                        display: none;
                    }

                    .cr-portfolio .portfolio-content-wrapper .slick-dots li.slick-active button {
                        width: 33px;
                        background: #00b4ff;
                    }
                    .fadeOutUp {
                        -webkit-animation-name: fadeOutUp;
                        animation-name: fadeOutUp;
                    }
                    .fadeInUp {
                        -webkit-animation-name: fadeInUp;
                        animation-name: fadeInUp;
                    }

                    @media (max-width: 1700px) {
                        .cr-portfolio .portfolio-content-wrapper .slick-dots {
                            left: -30px;
                        }
                    }

                    @media (max-width: 1500px) {
                        .cr-portfolio .portfolio-content-wrapper .slick-dots {
                            left: 0;
                        }
                    }

                    @media (max-width: 991px) {
                        .cr-portfolio .portfolio-content-wrapper .slick-dots {
                            display: none !important;
                        }
                    }

                    @-webkit-keyframes fadeOutUp {
                        from { opacity: 1; }
                        to {
                            opacity: 0;
                            -webkit-transform: translate3d(0, -100%, 0);
                            transform: translate3d(0, -100%, 0);
                        }
                    }
                    @keyframes fadeOutUp {
                        from { opacity: 1; }
                        to {
                          opacity: 0;
                          -webkit-transform: translate3d(0, -100%, 0);
                          transform: translate3d(0, -100%, 0);
                        }
                    }
                      
                    @-webkit-keyframes fadeInUp {
                        from {
                          opacity: 0;
                          -webkit-transform: translate3d(0, 100%, 0);
                          transform: translate3d(0, 100%, 0);
                        }
                        to {
                          opacity: 1;
                          -webkit-transform: translate3d(0, 0, 0);
                          transform: translate3d(0, 0, 0);
                        }
                    }
                      
                    @keyframes fadeInUp {
                        from {
                          opacity: 0;
                          -webkit-transform: translate3d(0, 100%, 0);
                          transform: translate3d(0, 100%, 0);
                        }
                        to {
                          opacity: 1;
                          -webkit-transform: translate3d(0, 0, 0);
                          transform: translate3d(0, 0, 0);
                        }
                    }
                      
                      
                `}</style>
            </div>
        )
    }
}

export default CaseStudy;


import React, { Component } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class WorkProcess extends Component {   
    componentDidMount(){
        setInterval(function() {
            $(".procedure-content-wrapper").addClass('rex-animated');
        }, 1000);
    
        setInterval(function() {
            $(".procedure-content-wrapper").removeClass('rex-animated');
        }, 12000);
    }

    render() {
        const {content} = this.props;

        return (
            <div>
                <section className="cr-work-procedure section-padding">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <h2 className="section-title circular-700 color-fff text-center">{parse(content.heading)}</h2>
                                <div className="procedure-content-wrapper pos-relative">
                                    <span className="progress-bar">
                                    <span className="progress-bar-inner"><img src="../../static/images/plane.png" alt="plane" /></span>
                                        <span className="stripe-wrapper">
                                            <span className="stripe1"></span>
                                            <span className="stripe2"></span>
                                            <span className="stripe3"></span>
                                            <span className="stripe4"></span>
                                            <span className="stripe5"></span>
                                            <span className="stripe6"></span>
                                            <span className="stripe7"></span>
                                            <span className="stripe8"></span>
                                        </span>
                                    </span>
                                    
                                    <div className="procedure-content">
                                        <div className="single-process process1">
                                            <div className="icon">
                                                <span className="parent1">
                                                    <span className="child1"></span>
                                                    <span className="child2"></span>
                                                    <span className="child3"></span>
                                                    <span className="child4"></span>
                                                    <span className="child5"></span>
                                                </span>
                                            </div>
                                            <h5>{parse(content.step_one_title)}</h5>
                                        </div>

                                        <div className="single-process process2">
                                            <div className="icon">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 150" xml="preserve">
                                                    <g className="group1">
                                                        <polygon className="st0" points="72,5.2 114,82 72,82 	"/>
                                                        <polygon className="st1" points="72,5.2 30,82 72,82 	"/>
                                                    </g>
                                                    <g className="group2">
                                                        <path className="st0" d="M90.5,113L90.5,113c-1.9,0-3.5-1.6-3.5-3.5v-13c0-1.9,1.6-3.5,3.5-3.5l0,0c1.9,0,3.5,1.6,3.5,3.5v13
                                                            C94,111.4,92.4,113,90.5,113z"/>
                                                        <circle className="st0" cx="91" cy="123" r="3"/>
                                                    </g>
                                                    <g className="group3">
                                                        <path className="st2" d="M72.5,145L72.5,145c-1.9,0-3.5-1.6-3.5-3.5v-34c0-1.9,1.6-3.5,3.5-3.5l0,0c1.9,0,3.5,1.6,3.5,3.5v34
                                                            C76,143.4,74.4,145,72.5,145z"/>
                                                        <circle className="st0" cx="73" cy="97.1" r="3"/>
                                                    </g>
                                                    <g className="group4">
                                                        <path className="st0" d="M54.5,113L54.5,113c-1.9,0-3.5-1.6-3.5-3.5v-13c0-1.9,1.6-3.5,3.5-3.5h0c1.9,0,3.5,1.6,3.5,3.5v13
                                                            C58,111.4,56.4,113,54.5,113z"/>
                                                        <circle className="st0" cx="55" cy="123" r="3"/>
                                                    </g>
                                                </svg>

                                            </div>
                                            <h5>{parse(content.step_two_title)}</h5>
                                        </div>

                                        <div className="single-process process3">
                                            <div className="icon">
                                                
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 150" xml="preserve">
                                                    <polygon className="st0" points="23.8,101 11,122 139,122 126,101 "/>
                                                    <polygon className="st1" points="41,73.8 28,94.8 121.8,94.8 109,73.8 "/>
                                                    <polygon className="st2" points="57.8,47 45.3,67.7 104.3,67.7 92.2,47 "/>
                                                    <polygon className="st3" points="74.8,21.8 63.5,39.8 87,39.8 "/>
                                                </svg>
                                            </div>
                                            <h5>{parse(content.step_three_title)}</h5>
                                        </div>
                                    </div>
                                    
                                    {content.button_text &&
                                    <div className="procedure-btn text-center">
                                        <Link
                                        href={content.button_link ? content.button_link.url : '#'}
                                        >
                                            <a target={content.button_link ? content.button_link.target : '_self'} className="cr-btn-default schedule-call svg-btn-effect">
                                                <svg>
                                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                                </svg>
                                                <span>{parse(content.button_text)}</span>
                                            </a>
                                        </Link>
                                    </div>
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
            </div>
        )
    }
}

export default WorkProcess;

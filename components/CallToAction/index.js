import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';
import Link from 'next/link';


class CallToAction extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-cta pos-relative">
                    <div className="overlay"></div>
                    <img src="../../static/images/cta-img.png" alt="cta img" className="img-fluid cta-img" />
                    <div className="cta-content crx">
                        <h2>Let us help you deliver your next project!</h2>

                        <Link
                        href="contact.html"
                        >
                            <a className="cr-btn-default contact-btn svg-btn-effect">
                                <svg>
                                    <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                </svg>
                                <span>Contact Us</span>
                            </a>
                        </Link>
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

export default CallToAction;


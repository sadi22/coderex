import React, {Component} from 'react';
import styles from './style';

class Page404 extends Component{
    render() {
        return (
            <div>
                <div id="primary" className="content-area error-page">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <main id="main" className="site-main">
                                    <section className="error-404 not-found">
                                        <img src="../../static/images/404.png" alt="404 img" />
                                        <header className="page-header">
                                            <h1 className="page-title"> Oops! Something went wrong...! </h1>
                                            <p>We can't find the page you're looking for</p>
                                        </header>
                                        <a href="/" className="cr-btn-default backtohome-btn svg-btn-effect">
                                            <svg>
                                                <rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
                                            </svg>
                                            <span>Back to home</span>
                                        </a>
                                    </section>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    .error-page {
                        background: #00146b;
                    }
                `} </style>
            </div>
        )
    }
}
export default Page404;
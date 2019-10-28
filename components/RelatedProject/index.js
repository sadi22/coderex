import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class RelatedProject extends Component {   

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="portfolio-section related-portfolio">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="section-title text-center">
                                    <h2 className="circular-700">{parse(content.heading)}</h2>
                                </div>

                                <div className="portfolio-wrapper">
                                    {content.project.map((item, index) => {
                                        return(
                                            <div className="single-portfolio" key={index}>
                                                <figure className="crx crx-animated">
                                                    {item.image &&
                                                    <a href={item.project_link ? item.project_link.url : '#'} target={item.project_link ? item.project_link.target : '_self'}>
                                                        <img src={item.image.url} className="img-fluid" alt="portfolio img" />
                                                    </a>
                                                    }
                                                </figure>
                                                <div className="portfolio-title">
                                                    <a href="" className="title circular-700">{parse(item.title)}<img src="../../static/images/arrow-right-black.png" alt="arrow" /></a>
                                                    <p className="category">
                                                        <span>{parse(item.tags)}</span>
                                                    </p>
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

export default RelatedProject;


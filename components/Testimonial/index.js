import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import styles from './style';
import parse from 'html-react-parser';


class Testimonial extends Component {   
    componentDidMount(){
        $(document).ready(function(){
            $('.testimonial-video').on("click", function(e){
                e.preventDefault();
                $('.testimonial-modal').addClass('show');
                $('.testimonial-iframe-video').attr('src', $(this).attr('href'));
            }); 

            $('.testimonial-modal-wrapper').on("click", function(e){
                e.stopPropagation();    
            }); 

            $('.testimonial-modal').on("click", function(e){
                $(this).removeClass('show'); 
                $('.testimonial-iframe-video').attr('src', ' ');
            }); 

        });
    }

    render() {
        const {content} = this.props;
        
        return (
            <Fragment>
                <section className="cr-testimonial section-padding pos-relative">
                    <div className="overlay1 crx crx-animated"></div>
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <h2 className="section-title crx crx-animated">{parse(content.heading)}</h2>
                                <div className="testimonial-wrapper">

                                    { content.testimonials &&

                                        content.testimonials.map((testimonialItem, index) => {

                                        let author_img = testimonialItem.author_image ? testimonialItem.author_image.url : '../static/images/testimonial-author-placeholder.png';
                                        return(
                                            <div className={`single-testimonial testimonial${index+1} pos-relative crx crx-animated`} key={index}>
                                                <img src={author_img} alt="author img" className="img-fluid" />
                                                <div className="content">
                                                    <span>{parse(testimonialItem.author_name)}</span>
                                                    {testimonialItem.video_url &&
                                                        <a className="testimonial-video" href={testimonialItem.video_url}>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></a>
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

                <div className="testimonial-modal">
                    <div className="testimonial-modal-wrapper">
                        <span className="close-video"></span>
                        <iframe width="560" height="315" className="testimonial-iframe-video" src=" " frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <style jsx>
                    {styles}
                </style>

                <style jsx global>{`
                    

                `}</style>
            </Fragment>
        )
    }
}

export default Testimonial;


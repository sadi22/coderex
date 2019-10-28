import React, { Component, Fragment } from 'react';
import WPAPI from 'wpapi';
import Config from '../../config';
import ReactNotification, { store } from 'react-notifications-component'


const wp = new WPAPI({ endpoint: Config.apiUrl });

export default class extends Component {
    state = {
        'name' : '',
        'email' : '',
        'comment' : '',
        'showComments': '',
        'commentSubmit': '',
        'isReply': false,
        'replyForm': {}
    }

    /**
     * Post comment
     * @param {*} event 
     */
    handleSubmit (event) {
        event.preventDefault();
    
        if(this.props.replyForm) {
            wp.comments().create({
                post: this.props.postId,                               
                parent: this.props.parent,                               
                author_email: this.state.email,
                author_name: this.state.name, 
                content: this.state.comment
            }).then(function( createdComment ) {
                store.addNotification({
                    title: "Thank you!",
                    message: "You comment has been submitted for admin approval",
                    type: "default",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                });
            }).catch(function( err ) {
                store.addNotification({
                    title: "Opps!",
                    message: "Something went wrong. Try again later",
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                });
            });
        }else {
            wp.comments().create({
                post: this.props.postId,                               
                author_email: this.state.email,
                author_name: this.state.name, 
                content: this.state.comment
            }).then(function( createdComment ) {
                store.addNotification({
                    title: "Thank you!",
                    message: "You comment has been submitted for admin approval",
                    type: "default",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                });
            }).catch(function( err ) {
                store.addNotification({
                    title: "Opps!",
                    message: "Something went wrong. Try again later",
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                });
            });
        }
        
    }


    cancelReply(event) {
        event.preventDefault();
        this.props.cancelreply(event);
    }

    render() {
        const {postId, replyForm, parent} = this.props;
        return (
            <div>
                <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a {`${replyForm ? `Reply` : `Comment`}`}
                        {replyForm && <small><a 
                            rel="nofollow" 
                            id="cancel-comment-reply-link" 
                            href=""
                            onClick={this.cancelReply.bind(this)}
                        >Cancel reply</a></small>}
                    </h3>
                    <form onSubmit={this.handleSubmit.bind(this)} className="comment-form">
                        <p className="comment-notes">
                            <span id="email-notes">Your email address will not be published.</span> Required fields are marked
                            <span className="required">*</span>
                        </p>

                        <p className="comment-form-comment">
                            <label htmlFor="comment">Comment</label>
                            <textarea 
                                id="comment" 
                                name="comment" 
                                placeholder="Tell Us Your Idea" 
                                value={this.state.comment}
                                onChange={(event) => {this.setState({'comment' : event.target.value})}}
                                required="required"
                            />
                        </p>

                        <p className="comment-form-author">
                            <label htmlFor="author">Name <span className="required">*</span></label>
                            <input 
                                id="author" 
                                name="author" 
                                type="text" 
                                value={this.state.name}
                                onChange={(event) => {this.setState({'name' : event.target.value})}}
                                placeholder="Name*" 
                                required="required" 
                            />
                        </p>

                        <p className="comment-form-email">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                value={this.state.email}
                                onChange={(event) => {this.setState({'email' : event.target.value})}}
                                placeholder="Email*" 
                                required="required" 
                            />
                        </p>

                        <p className="form-submit">
                            <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                            <input type="hidden" name="comment_post_ID" value="25" id="comment_post_ID" />
                            <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                        </p>
                    </form>

                    <ReactNotification />
                </div>

                <style jsx global>{`
                    
                    .comment-respond {
                        margin-top: 70px;
                    }
                    .blog-details .comment-respond .comment-reply-title {
                        font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
                        line-height: 1.1;
                        letter-spacing: -2px;
                        font-family: 'Circular Std Bold';
                        margin-bottom: 5px;
                    }
                    .comment-respond .comment-reply-title small {
                        display: none;
                    }
                    .comment-respond .comment-form {
                        display: flex;
                        flex-flow: row wrap;
                    }
                    .comment-respond .comment-form .comment-notes {
                        margin-bottom: 40px;
                    }
                    .comment-respond .comment-form label {
                        display: none;
                    }
                    .comment-respond .comment-form textarea,
                    .comment-respond .comment-form input[type="number"],
                    .comment-respond .comment-form input[type="url"],
                    .comment-respond .comment-form input[type="email"],
                    .comment-respond .comment-form input[type="text"] {
                        height: 50px;
                        background: transparent;
                        color: #23252d;
                        font-size: 20px;
                        padding: 9px 0px;
                        border-radius: 0;
                        font-family: 'Didact Gothic', sans-serif;
                        border: none;
                        border-bottom: 1px solid #e8e9ef;
                    }
                    .comment-respond .comment-form textarea:focus,
                    .comment-respond .comment-form input[type="number"]:focus,
                    .comment-respond .comment-form input[type="url"]:focus,
                    .comment-respond .comment-form input[type="email"]:focus,
                    .comment-respond .comment-form input[type="text"]:focus {
                        border-bottom-color: #00b4ff;
                    }
                    .comment-respond .comment-form textarea::-webkit-input-placeholder,
                    .comment-respond .comment-form input[type="number"]::-webkit-input-placeholder,
                    .comment-respond .comment-form input[type="url"]::-webkit-input-placeholder,
                    .comment-respond .comment-form input[type="email"]::-webkit-input-placeholder,
                    .comment-respond .comment-form input[type="text"]::-webkit-input-placeholder {
                        color: #23252d;
                    }
                    .comment-respond .comment-form textarea::-moz-placeholder,
                    .comment-respond .comment-form input[type="number"]::-moz-placeholder,
                    .comment-respond .comment-form input[type="url"]::-moz-placeholder,
                    .comment-respond .comment-form input[type="email"]::-moz-placeholder,
                    .comment-respond .comment-form input[type="text"]::-moz-placeholder {
                        color: #23252d;
                    }
                    .comment-respond .comment-form textarea:-ms-input-placeholder,
                    .comment-respond .comment-form input[type="number"]:-ms-input-placeholder,
                    .comment-respond .comment-form input[type="url"]:-ms-input-placeholder,
                    .comment-respond .comment-form input[type="email"]:-ms-input-placeholder,
                    .comment-respond .comment-form input[type="text"]:-ms-input-placeholder {
                        color: #23252d;
                    }
                    .comment-respond .comment-form textarea:-moz-placeholder,
                    .comment-respond .comment-form input[type="number"]:-moz-placeholder,
                    .comment-respond .comment-form input[type="url"]:-moz-placeholder,
                    .comment-respond .comment-form input[type="email"]:-moz-placeholder,
                    .comment-respond .comment-form input[type="text"]:-moz-placeholder {
                        color: #23252d;
                    }
                    .comment-respond .comment-form textarea {
                        min-height: 120px;
                    }
                    .comment-respond .comment-form .comment-form-comment {
                        order: 4;
                        width: 100%;
                        margin-top: 30px;
                        margin-bottom: 50px;
                    }
                    .comment-respond .comment-form .comment-form-author {
                        order: 1;
                        width: calc(50% - 15px);
                        margin-right: 15px;
                    }
                    .comment-respond .comment-form .comment-form-email {
                        order: 2;
                        width: calc(50% - 15px);
                        margin-left: 15px;
                    }
                    .comment-respond .comment-form .comment-form-url {
                        order: 3;
                        width: 100%;
                        display: none;
                    }
                    .comment-respond .comment-form .form-submit {
                        order: 5;
                        width: 100%;
                        text-align: center;
                        margin-bottom: 0;
                    }
                    .comment-respond .comment-form .form-submit .submit {
                        width: auto;
                        border-color: #00b4ff;
                        background: #00b4ff;
                        color: #fff;
                    }
                    .comment-respond .comment-form .form-submit .submit:hover {
                        background: #f4f6fb;
                        border-color: #e8e9ef;
                        color: #00b4ff;
                    }

                    @media (max-width: 991px) {
                        .comment-respond .comment-form textarea,
                        .comment-respond .comment-form input[type="number"],
                        .comment-respond .comment-form input[type="url"],
                        .comment-respond .comment-form input[type="email"],
                        .comment-respond .comment-form input[type="text"] {
                            font-size: 18px;
                        }
                    
                    }
                    @media (max-width: 767px) {
                        .comment-respond .comment-form .comment-form-author {
                            width: 100%;
                            margin-right: 0;
                        }
                        .comment-respond .comment-form .comment-form-email {
                            width: 100%;
                            margin-left: 0;
                        }
                    
                    }

                `}</style>
            </div>
        )
    }
}
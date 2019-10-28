import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import CommentForm from './CommentForm';
import styles from './style';
import parse from 'html-react-parser';
import moment from 'moment';


class Comment extends Component {
    state = {
        'showComments': false,
        'commentSubmit': '',
        'isReply': false,
        'replyForm': {}
    }

    componentDidMount(){
        //--------------blog single all comment show -----------------
        // $("#blog-comment-wrapper .show-all-comment").on('click', function () {
        //     $("#blog-comment-wrapper > ul").slideDown();
        // });
    }

    /**
     * handle reply
     * @param {*} event 
     */
    handleReply (commentID, postId, event) {
        event.preventDefault();
       
        this.setState({
            replyForm: {[commentID] : true}
        });
        // event.target.parentNode
    }


    cancelreply(event) {
        event.preventDefault();
        this.setState({
            replyForm: {}
        });
    }


    showAllComments(event) {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    

    render() {
        const { postComments } = this.props;
        let comments = [];
        [...postComments].reverse().map((comment, index) => {
            if(!comment.parent) {
                comments = {
                    ...comments,
                    [comment.id] : comment
                }
            }else {
                let child = comments[comment.parent]['child'] ? comments[comment.parent]['child'] : [];
                child.push(comment);
                comments = {
                    ...comments,
                    [comment.parent] : {
                        ...comments[comment.parent],
                        'child': child
                    }
                }
            }
            
        })

        return (
            <div>
                <div className="comments-wrapper" id="blog-comment-wrapper">
                    <h2 className="comment-count">
                        {postComments.length > 1 &&
                            <span>
                                <span>{`${postComments.length} Comment${postComments.length>1 ? 's' : ''}`}, {' '}</span>
                                {postComments.length>0 && <span className="show-all-comment" onClick={() => this.showAllComments(this)}>  See all Comments</span>}
                            </span>
                        }
                        {!postComments.length>0 && <span className="no-comment"> No Comments</span>}
                    </h2>

                    <ul style={{display: `${this.state.showComments ? 'block' : 'none'}`}}>
                        {Object.keys(comments).reverse().map((comment, index) => {
                            return (
                                <li className="comment parent" key={index}>
                                    <article className="comment-body">
                                        <footer className="comment-meta">
                                            <div className="comment-author vcard">
                                                <img alt="" src={comments[comment].author_avatar_urls[96]} /> <b className="fn">{comments[comment].author_name}</b> 
                                                    <span className="says">says:</span>
                                            </div>

                                            <div className="comment-metadata">
                                                <span className="date">{moment(comments[comment].date).fromNow()}</span>
                                            </div>
                                        </footer>

                                        <div className="comment-content">
                                            {parse(comments[comment].content.rendered)}
                                        </div>

                                        <div className="reply">
                                            <a 
                                                rel="nofollow" 
                                                className="comment-reply-link" 
                                                href="#"
                                                onClick={this.handleReply.bind(this, comment, this.props.postId)}
                                            >
                                                Reply 
                                                <i className="fa fa-reply"></i>
                                            </a>
                                        </div>
                                        {this.state.replyForm[comment] && <CommentForm 
                                                            postId={this.props.postId} 
                                                            replyForm={true} 
                                                            parent={comment}
                                                            cancelreply={this.cancelreply.bind(this)}
                                                        />}
                                    </article>

                                    {comments[comment].child && 
                                        <ul className="children">
                                            {comments[comment].child.reverse().map((childComment, index) => {
                                                return (
                                                    <li className="comment" key={index}>
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img alt="" src={childComment.author_avatar_urls[96]} /> <b className="fn">{childComment.author_name}</b> 
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <span className="date">{moment(childComment.date).fromNow()}</span>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                {parse(childComment.content.rendered)}
                                                            </div>

                                                            <div className="reply">
                                                                <a 
                                                                    rel="nofollow" 
                                                                    className="comment-reply-link" 
                                                                    href=""
                                                                    onClick={this.handleReply.bind(this, childComment.id, this.props.postId)}
                                                                >Reply 
                                                                </a>
                                                            </div>
                                                            {this.state.replyForm[childComment.id] && <CommentForm 
                                                                postId={this.props.postId} 
                                                                replyForm={true} 
                                                                parent={childComment.id}
                                                                cancelreply={this.cancelreply.bind(this)}
                                                            />}
                                                        </article>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    }

                                </li>
                            )
                            })}
                    </ul>
                </div>

                <CommentForm postId={this.props.postId} replyForm={false}/>

                {/* /comment form-- */}
                <style jsx>
                    {styles}
                </style>

                <style jsx global> {`
                    .comments-wrapper ul li.comment .comment-body .comment-content p{
                        margin-bottom: 5px;
                    }
                `}</style>

                
            </div>
        )
    }
}

export default Comment;


import css from 'styled-jsx/css';
export default css`

.comments-wrapper {
    border: 1px solid #e9edf4;
    padding: 37px 0 44px;
    margin-top: 70px;
}
.comments-wrapper .comment-count {
    text-align: center;
}
.comments-wrapper .comment-count span {
    font-size: 16px;
    line-height: 20px;
    font-family: 'Circular Std Bold';
    text-transform: uppercase;
    color: #23252d;
}
.comments-wrapper .comment-count .show-all-comment {
    color: #00b4ff;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 3px;
}
.comments-wrapper > ul {
    margin-top: 20px;
    display: none;
}
.comments-wrapper ul li.comment {
    border-bottom: 1px solid #e9edf4;
    padding: 30px 40px;
}
.comments-wrapper ul li.comment:last-child {
    padding-bottom: 0;
    border-bottom: none;
}
.comments-wrapper ul li.comment .comment-body {
    position: relative;
    padding-left: 115px;
}
.comments-wrapper ul li.comment .comment-meta {
    display: flex;
    flex-flow: row;
    align-items: center;
}
.comments-wrapper ul li.comment .comment-meta .comment-author img {
    position: absolute;
    margin-bottom: 0;
    left: 0;
    top: 8px;
    border-radius: 100%;
    max-width: 90px;
    max-height: 90px;
}
.comments-wrapper ul li.comment .comment-meta .comment-author .says {
    display: none;
}
.comments-wrapper ul li.comment .comment-meta .comment-author .fn {
    color: #23252d;
    font-size: 20px;
    text-transform: capitalize;
}
.comments-wrapper ul li.comment .comment-meta time,
.comments-wrapper ul li.comment .comment-meta .date {
    font-size: 16px;
    margin-left: 30px;
    color: #9a9595;
    line-height: normal;
}
.comments-wrapper ul li.comment .comment-content p {
    margin-bottom: 5px;
    margin-top: 2px;
}
.comments-wrapper ul li.comment .comment-reply-link {
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.5px;
}
.comments-wrapper ul li.comment .comment-reply-link i {
    vertical-align: middle;
    font-size: 16px;
    margin-left: 2px;
}
.comments-wrapper ul li.comment .comment-reply-link:hover {
    text-decoration: underline;
}
.comments-wrapper ul li.comment ul.children li.comment {
    padding: 30px 0 0 50px;
    border-bottom: none;
}





@media (max-width: 1199px) {
    .comments-wrapper ul li.comment {
        padding: 30px 20px;
    }
}
@media (max-width: 991px) {
    .comments-wrapper .comment-count span {
        display: block;
        line-height: 30px;
    }
    .comments-wrapper ul li.comment ul.children li.comment {
        padding: 30px 0 0 30px;
    }

}
@media (max-width: 991px) and (min-width: 575px) {
    .comments-wrapper ul li.comment ul.children li.comment {
        padding-left: 0;
    }
}

@media (max-width: 575px) {
    .comments-wrapper ul li.comment .comment-body {
        padding-left: 0;
    }
    .comments-wrapper ul li.comment .comment-meta {
        margin-top: 85px;
    }
    .comments-wrapper ul li.comment .comment-meta .comment-author img {
        max-width: 70px;
        max-height: 70px;
        top: -80px;
    }
}




`
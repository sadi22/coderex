import css from 'styled-jsx/css';
export default css`

.blog-single-banner .overlay {
    background: rgba(0, 20, 107, 0.9);
}


.blog-details {
    padding-bottom: 100px;
}
.blog-details .details-content-wrapper {
    padding: 0 115px;
    margin-top: -313px;
}
.blog-details .content-header h1 {
    font-size: calc(28px + (50 - 28) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.2;
    letter-spacing: -1px;
    max-width: 830px;
    width: 100%;
    color: #fff;
    margin-bottom: 45px;
}
.blog-details .content-header .meta {
    margin-bottom: 15px;
}
.blog-details .content-header .meta li {
    display: inline-block;
    color: #fff;
}
.blog-details .content-header .meta li a {
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Circular Std Bold';
    display: inline-block;
    margin-right: 10px;
}
.blog-details .content-header .meta li:first-child a{
    margin-left: 0;
}
.blog-details .content-header .meta li a:hover {
    color: #00b4ff;
}
.blog-details .feature-img {
    box-shadow: 0px 11px 40px 0px rgba(87, 95, 131, 0.12);
}
.blog-details .content-text {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
}
.blog-details .content-text .social-share {
    width: 200px;
    padding-right: 30px;
    padding-top: 68px;
}
.blog-details .content-text .social-share li {
    margin-bottom: 15px;
    color: #23252d;
    font-size: 20px;
}
.blog-details .content-text .social-share li:first-child {
    margin-bottom: 10px;
}
.blog-details .content-text .social-share li:last-child {
    margin-bottom: 0;
}
.blog-details .content-text .social-share li a {
    font-size: 16px;
    background: #00146b;
    color: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    line-height: normal;
    width: 38px;
    height: 38px;
    text-align: center;
    padding: 8px 5px;
    border-radius: 100%;
}
.blog-details .content-text .social-share li a:hover {
    color: #fff;
    background: #00b4ff;
}
.blog-details .content-text .social-share li a svg{
    width: 18px; 
}
.blog-details .content-text .social-share.mobile-device {
    padding-right: 0;
    padding-top: 40px;
    text-align: center;
    width: 100%;
    display: none;
}
.blog-details .content-text .social-share.mobile-device li {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0;
}
.blog-details .content-text .social-share.mobile-device li:first-child {
    margin-bottom: 0;
}
.blog-details .content-text .social-share.mobile-device li:last-child {
    margin-right: 0px;
}
.blog-details .content-text .the-content {
    width: calc(100% - 200px);
    margin-left: auto;
    padding-top: 68px;
}
.blog-details .content-text .the-content p {
    text-align: justify;
}
.blog-details .content-text .the-content img {
    margin-bottom: 20px;
}
.blog-details .like-post {
    margin-top: 136px;
}
.blog-details .like-post .heart-pulse {
    width: 85px;
    height: 85px;
    border-radius: 100%;
    box-shadow: inset 0 0 25px 5px rgba(0, 0, 0, 0.09);
    margin: 0px auto;
    position: relative;
}
.blog-details .like-post .heart-pulse:after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.1), inset 0 0 4px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.1), inset 0 0 4px 8px rgba(0, 0, 0, 0.1);
    bottom: -2px;
    width: 60px;
    height: 2px;
    -moz-border-radius: 100%;
    border-radius: 100%;
    left: 16px;
}
.blog-details .like-post .heart-pulse:before {
    content: "";
    position: absolute;
    height: 50px;
    width: 1px;
    border-left: 2px dashed #00b4ff;
    top: -78px;
    left: 50%;
    margin-left: -2px;
}
.blog-details .like-post .heart-pulse .center-heart {
    width: 25px;
    height: 25px;
    background: #00b4ff;
    display: block;
    position: absolute;
    top: 35px;
    left: 31px;
    border-radius: 0 0 2px 0px;
    cursor: pointer;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.blog-details .like-post .heart-pulse .center-heart:after,
.blog-details .like-post .heart-pulse .center-heart:before {
    width: 100%;
    height: 100%;
    background: #00b4ff;
    content: "";
    position: absolute;
}
.blog-details .like-post .heart-pulse .center-heart:before {
    top: -13px;
    left: 0;
    border-radius: 14px 14px 0 0;
}
.blog-details .like-post .heart-pulse .center-heart:after {
    top: 0;
    left: -13px;
    border-radius: 14px 0 0 14px;
}
.blog-details .like-post .heart-pulse .center-heart small {
    position: relative;
    z-index: 1;
    text-align: center;
    display: inline-block;
    line-height: normal;
    font-size: 15px;
    color: #fff;
    left: 0px;
    bottom: 12px;
    font-family: 'CircularStd-Medium';
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.blog-details .like-post .heart-pulse:hover .center-heart {
    -webkit-animation: pulse 1s linear infinite;
    -moz-animation: pulse 1s linear infinite;
    -ms-animation: pulse 1s linear infinite;
    -o-animation: pulse 1s linear infinite;
    animation: pulse 1s linear infinite;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    25% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    30% {
        -webkit-transform: rotate(45deg) scale(1.1);
        -moz-transform: rotate(45deg) scale(1.1);
        -ms-transform: rotate(45deg) scale(1.1);
        -o-transform: rotate(45deg) scale(1.1);
        transform: rotate(45deg) scale(1.1);
    }
    50% {
        -webkit-transform: rotate(45deg) scale(1.05);
        -moz-transform: rotate(45deg) scale(1.05);
        -ms-transform: rotate(45deg) scale(1.05);
        -o-transform: rotate(45deg) scale(1.05);
        transform: rotate(45deg) scale(1.05);
    }
    70% {
        -webkit-transform: rotate(45deg) scale(1.1);
        -moz-transform: rotate(45deg) scale(1.1);
        -ms-transform: rotate(45deg) scale(1.1);
        -o-transform: rotate(45deg) scale(1.1);
        transform: rotate(45deg) scale(1.1);
    }
    90% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    100% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    25% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    30% {
        -webkit-transform: rotate(45deg) scale(1.1);
        -moz-transform: rotate(45deg) scale(1.1);
        -ms-transform: rotate(45deg) scale(1.1);
        -o-transform: rotate(45deg) scale(1.1);
        transform: rotate(45deg) scale(1.1);
    }
    50% {
        -webkit-transform: rotate(45deg) scale(1.05);
        -moz-transform: rotate(45deg) scale(1.05);
        -ms-transform: rotate(45deg) scale(1.05);
        -o-transform: rotate(45deg) scale(1.05);
        transform: rotate(45deg) scale(1.05);
    }
    70% {
        -webkit-transform: rotate(45deg) scale(1.1);
        -moz-transform: rotate(45deg) scale(1.1);
        -ms-transform: rotate(45deg) scale(1.1);
        -o-transform: rotate(45deg) scale(1.1);
        transform: rotate(45deg) scale(1.1);
    }
    90% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    100% {
        -webkit-transform: rotate(45deg) scale(1);
        -moz-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        -o-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
}

.blog-details .liketxt {
    text-align: center;
    font-size: 15px;
    line-height: 26px;
    display: block;
    text-transform: capitalize;
    margin-top: 26px;
}

@media (max-width: 1300px) {
    .blog-details {
        padding-bottom: 90px;
    }
    .blog-details .details-content-wrapper {
        padding: 0 70px;
    }
    .blog-details .content-text .social-share {
        width: 130px;
    }
    .blog-details .content-text .the-content {
        width: calc(100% - 130px);
    }

}

@media (max-width: 1199px) {
    .blog-details .details-content-wrapper {
        padding: 0 50px;
        margin-top: -253px;
    }
    .blog-details .content-header h1 {
        max-width: 650px;
    }
}

@media (max-width: 991px) {
    .blog-details {
        padding-bottom: 80px;
    }
    .blog-details .details-content-wrapper {
        padding: 0;
        margin-top: -220px;
    }
    .blog-details .content-header h1 {
        margin-bottom: 25px;
    }
    .blog-details .content-text .social-share {
        width: 90px;
        padding-right: 20px;
        padding-top: 38px;
    }
    .blog-details .content-text .the-content {
        width: calc(100% - 90px);
        padding-top: 38px;
    }

}

@media (max-width: 767px) {
    .blog-details .content-text .social-share {
        display: none;
    }
    .blog-details .content-text .social-share.mobile-device {
        display: block;
    }
    .blog-details .content-text .the-content {
        width: 100%;
    }
}






`
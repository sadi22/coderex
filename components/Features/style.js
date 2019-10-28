import css from 'styled-jsx/css';
export default css`


.cr-expectation {
    padding-top: 240px;
    margin-top: 150px;
}
.cr-expectation .expectation-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.cr-expectation .overlay1 {
    position: absolute;
    width: 0;
    right: 0;
    bottom: 0;
    height: 92%;
    background: #00146b;
}
.cr-expectation .overlay1.crx-animated {
    width: 55%;
    -webkit-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.5s;
    -moz-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.5s;
    -ms-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.5s;
    -o-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.5s;
    transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.5s;
}
.cr-expectation .overlay2 {
    position: absolute;
    background: #f3f7ff;
    width: 0;
    height: 395px;
    z-index: -1;
    top: -240px;
    right: 60px;
}
.cr-expectation .overlay2.crx-animated {
    width: 75%;
    -webkit-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -moz-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -ms-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -o-transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    transition: width 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
}
.cr-expectation .section-title {
    width: 41%;
    padding-right: 100px;
    overflow: hidden;
}
.cr-expectation .section-title h2 {
    margin-bottom: 10px;
}
.cr-expectation .section-title .description {
    margin-bottom: 50px;
    text-align: justify;
}
.cr-expectation .expectations {
    width: 59%;
    padding-left: 160px;
}
.cr-expectation .expectations .single-item {
    position: relative;
    padding: 0 0 118px 230px;
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
}
.cr-expectation .expectations .single-item.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease 0.8s;
    -moz-transition: all 0.8s ease 0.8s;
    -ms-transition: all 0.8s ease 0.8s;
    -o-transition: all 0.8s ease 0.8s;
    transition: all 0.8s ease 0.8s;
}
.cr-expectation .expectations .single-item .item-icon {
    width: 180px;
    height: 180px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    background: #00146b;
}
.cr-expectation .expectations .single-item h5 {
    font-family: 'CircularStd-Medium';
    margin-bottom: 20px;
    color: #fff;
}
.cr-expectation .expectations .single-item.item-2 .item-icon {
    justify-content: flex-end;
}
.cr-expectation .expectations .single-item:last-child {
    padding-bottom: 0;
}
.cr-expectation .expectations .item-1 .item-icon img {
    width:100%;
}
.cr-expectation .expectations .item-1 .item-icon .img1 {
    margin-top: 8px;
}
.cr-expectation .expectations .item-1 .item-icon .img2 {
    margin-top: -15px;
    -webkit-animation: headphone 1.5s ease infinite;
    -moz-animation: headphone 1.5s ease infinite;
    -ms-animation: headphone 1.5s ease infinite;
    -o-animation: headphone 1.5s ease infinite;
    animation: headphone 1.5s ease infinite;
}
.cr-expectation .expectations .item-2 .item-icon .icon-wrapper {
    width: 107px;
    height: 140px;
    position: relative;
}
.cr-expectation .expectations .item-2 .item-icon .img1 {
    position: absolute;
    bottom: -7px;
    left: 0;
    z-index: 1;
}
.cr-expectation .expectations .item-2 .item-icon .img2 {
    position: absolute;
    bottom: -7px;
    right: -10px;
    z-index: 1;
    transform-origin: left;
    -webkit-animation: handIcon 10s ease infinite;
    -moz-animation: handIcon 10s ease infinite;
    -ms-animation: handIcon 10s ease infinite;
    -o-animation: handIcon 10s ease infinite;
    animation: handIcon 10s ease infinite;
}
.cr-expectation .expectations .item-2 .item-icon .img3 {
    position: absolute;
    left: 20px;
    top: 4px;
    z-index: 0;
    transform: scale(1);
    -webkit-animation: dollarIcon 10s ease infinite;
    -moz-animation: dollarIcon 10s ease infinite;
    -ms-animation: dollarIcon 10s ease infinite;
    -o-animation: dollarIcon 10s ease infinite;
    animation: dollarIcon 10s ease infinite;
}
.cr-expectation .expectations .item-3 .item-icon .dot {
    position: absolute;
    z-index: 1;
    top: 58px;
    right: 56px;
}
.cr-expectation .expectations .item-3 .item-icon span {
    width: 10px;
    height: 10px;
    background: #fff;
    display: inline-block;
    border-radius: 100%;
    -webkit-animation: loading 1s ease infinite;
    -moz-animation: loading 1s ease infinite;
    -ms-animation: loading 1s ease infinite;
    -o-animation: loading 1s ease infinite;
    animation: loading 1s ease infinite;
}
.cr-expectation .expectations .item-3 .item-icon .dot1 {
    animation-delay: 0.1s;
}
.cr-expectation .expectations .item-3 .item-icon .dot2 {
    animation-delay: 0.3s;
}
.cr-expectation .expectations .item-3 .item-icon .dot3 {
    animation-delay: 0.5s;
}

@keyframes headphone {
    0% { margin-top: -6px; }
    50% { margin-top: -11px; }
    100% { margin-top: -6px; }
}

@keyframes handIcon {
    0%, 20% { transform: rotate(0deg); right: -10px; }
    40%, 70% { transform: rotate(-70deg); right: -40px; }
    80%, 100% { transform: translateY(0); right: -10px; }
}

@keyframes dollarIcon {
    0%, 20% { left: 20px; top: 4px; opacity: 1; }
    40% { left: 11px; top: 33px; transform: scale(1); opacity: 1; }
    70% { left: 7px; top: 100px; transform: scale(0.5); z-index: 0; opacity: 0; }
    80% { left: 20px; top: 4px; opacity: 0; transform: scale(1); }
    100% { left: 20px; top: 4px; opacity: 1; }
}

@-webkit-keyframes loading {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
}
@keyframes loading {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
}


@media (max-width: 1500px) {
    .cr-expectation .overlay1.crx-animated {
        width: 60%;
        height: 90%;
    }
    .cr-expectation .overlay2.crx-animated {
        width: 70%;
        height: 300px;
    }
    .cr-expectation .section-title {
        width: 40%;
        padding-right: 80px;
    }
    .cr-expectation .expectations {
        width: 60%;
        padding-left: 100px;
    }

}
@media (max-width: 1300px) {
    .cr-expectation {
        margin-top: 100px;
        padding-top: 160px;
    }
    .cr-expectation .overlay1.crx-animated {
        height: 95%;
    }
    .cr-expectation .overlay2.crx-animated {
        height: 240px;
        top: -160px;
    }
    .cr-expectation .section-title {
        padding-right: 50px;
    }
    .cr-expectation .expectations {
        padding-left: 30px;
    }
    .cr-expectation .expectations .single-item {
        padding: 0 0 80px 230px;
    }

}

@media (max-width: 1199px) {
    .cr-expectation {
        padding-bottom: 100px;        
    }

    .cr-expectation .expectations .single-item {
        padding: 0 0 50px 150px;
    }
    .cr-expectation .expectations .single-item .item-icon {
        width: 120px;
        height: 120px;
        display: block;
    }
    .cr-expectation .expectations .single-item h5 {
        margin-bottom: 5px;
    }
    .cr-expectation .expectations .item-1 .item-icon .img1 {
        width: 75px;
    }
    .cr-expectation .expectations .item-1 .item-icon .img2 {
        width: 100px;
        margin-top: -4px;
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-expectation .expectations .item-2 .item-icon .icon-wrapper {
        width: 91px;
        height: 85px;
    }
    .cr-expectation .expectations .item-2 .item-icon .img1 {
        width: 42px;
        left: -5px;
    }
    .cr-expectation .expectations .item-2 .item-icon .img2 {
        height: 100px;
        right: 2px;
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-expectation .expectations .item-2 .item-icon .img3 {
        width: 22px;
        left: 27px;
        top: 3px;
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-expectation .expectations .item-3 .item-icon .dot {
        top: 32px;
        right: 33px;
    }
    .cr-expectation .expectations .item-3 .item-icon span {
        width: 8px;
        height: 8px;
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }

}

@media (max-width: 991px) {
    .cr-expectation {
        padding-top: 100px;
        margin-top:0;
    }
    .cr-expectation .expectation-wrapper {
        display: block;
    }
    .cr-expectation .overlay1.crx-animated {
        width: 100%;
        height: 100%;
    }
    .cr-expectation .overlay2.crx-animated {
        display: none;
    }
    .cr-expectation .section-title {
        width: 100%;
        text-align: center;
        padding-right: 0;
    }
    .cr-expectation .section-title h2{
        color: #fff;
        text-align: center;
    }
    .cr-expectation .expectations {
        padding-left: 0;
        width: 100%;
        padding-right: 0;
        margin-top: 70px;
    }

}

@media (max-width: 767px) {
    .cr-expectation {
        padding-bottom: 90px;
    }
}

@media (max-width: 575px) {
    .cr-expectation .expectations .single-item {
        padding: 0 0 50px 0px;
        text-align: center;
    }
    .cr-expectation .expectations .single-item .item-icon {
        position: relative;
        left: inherit;
        top: inherit;
        margin: 0 auto 20px auto;
    }
}
`
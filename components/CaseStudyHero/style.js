import css from 'styled-jsx/css';
export default css`


.case-study-banner {
    overflow: visible;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
}

@media (max-width: 1199px) {
    .case-study-banner .cr-col {
        padding-top: 150px;
    }
}
.case-study-banner .banner-content {
    align-items: flex-start;
    text-align: left;
}

@media (max-width: 1199px) {
    .case-study-banner .banner-content {
        align-items: center;
        text-align: center;
        padding: 50px 0 120px;
        height: auto;
    }
}

.case-study-banner .banner-content h1 {
    margin-top: 95px;
    max-width: 640px;
    z-index: 3;
    position:relative;
}

.case-study-banner .banner-content h1.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}

@media (max-width: 1700px) {
    .case-study-banner .banner-content h1 {
        margin-top: 0;
        max-width: 590px;
    }
}

@media (max-width: 1300px) {
    .case-study-banner .banner-content h1 {
        max-width: 500px;
    }
}

.case-study-banner .banner-content p {
    max-width: 480px;
    width: 100%;
    margin-top: 5px;
    line-height: 38px;
    z-index: 3;
    position:relative;
}

@media (max-width: 767px) {
    .case-study-banner .banner-content p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 34px;
    }
}

.case-study-banner .banner-content a {
    color: #fff;
    margin-top: 26px;
    text-transform: capitalize;
    z-index: 3;
    position:relative;
}

.case-study-banner .banner-content a img {
    display: inline-block;
    margin-left: 6px;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.case-study-banner .banner-content a img.crx-animated {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
}

.case-study-banner .banner-content a:hover img {
    margin-left: 10px;
}

.case-study-banner .banner-content p,
.case-study-banner .banner-content a {
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px);
}

.case-study-banner .banner-content p.crx-animated,
.case-study-banner .banner-content a.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}

.case-study-banner .banner-content p.crx-animated {
    -webkit-transition: all 0.8s ease 0.4s;
    -moz-transition: all 0.8s ease 0.4s;
    -ms-transition: all 0.8s ease 0.4s;
    -o-transition: all 0.8s ease 0.4s;
    transition: all 0.8s ease 0.4s;
}

.case-study-banner .banner-content a.crx-animated {
    -webkit-transition: all 0.8s ease 0.8s;
    -moz-transition: all 0.8s ease 0.8s;
    -ms-transition: all 0.8s ease 0.8s;
    -o-transition: all 0.8s ease 0.8s;
    transition: all 0.8s ease 0.8s;
}

.case-study-banner .ipad-wrapper {
    position: absolute;
    right: -110px;
    top: 220px;
}

@media (max-width: 1700px) {
    .case-study-banner .ipad-wrapper {
        right: 40px;
        top: 140px;
        max-width: 708px;
        width: 100%;
    }
}

@media (max-width: 1500px) {
    .case-study-banner .ipad-wrapper {
        max-width: 600px;
    }
}

@media (max-width: 1300px) {
    .case-study-banner .ipad-wrapper {
        max-width: 510px;
    }
}

@media (max-width: 1199px) {
    .case-study-banner .ipad-wrapper {
        position: relative;
        top: inherit;
        right: inherit;
        margin: 0 auto;
    }
}

@media (max-width: 767px) {
    .case-study-banner .ipad-wrapper {
        max-width: 92%;
    }
}

.case-study-banner .ipad-wrapper .ipad-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    border-radius: 30px;
    box-shadow: -12px 60px 200px 0px rgba(51, 51, 51, 0.35);
    z-index: -1;
}

.case-study-banner .ipad-wrapper .ipad-pen {
    position: absolute;
    top: 0;
    left: -109px;
    z-index: 2;
    -webkit-animation: penMove 2s infinite ease;
    -moz-animation: penMove 2s infinite ease;
    -ms-animation: penMove 2s infinite ease;
    -o-animation: penMove 2s infinite ease;
    animation: penMove 2s infinite ease;
}

@media (max-width: 1700px) {
    .case-study-banner .ipad-wrapper .ipad-pen {
        max-width: 280px;
        width: 100%;
    }
}

@media (max-width: 1500px) {
    .case-study-banner .ipad-wrapper .ipad-pen {
        max-width: 200px;
        left: -66px;
        top: 50px;
    }
}

@media (max-width: 1300px) {
    .case-study-banner .ipad-wrapper .ipad-pen {
        max-width: 140px;
        left: -48px;
        top: 70px;
    }
}

@media (max-width: 575px) {
    .case-study-banner .ipad-wrapper .ipad-pen {
        display: none;
    }
}

.case-study-banner .ipad-wrapper .scrolling-img-frame {
    position: absolute;
    top: 50%;
    right: 51%;
    width: calc(100% - 110px);
    height: calc(100% - 70px);
    background: #e8e8e8;
    overflow: hidden;
    -webkit-transform: translate(50%, -50%);
    -moz-transform: translate(50%, -50%);
    -ms-transform: translate(50%, -50%);
    -o-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
}

@media (max-width: 1300px) {
    .case-study-banner .ipad-wrapper .scrolling-img-frame {
        width: calc(100% - 78px);
        height: calc(100% - 50px);
    }
}

@media (max-width: 575px) {
    .case-study-banner .ipad-wrapper .scrolling-img-frame {
        width: calc(100% - 50px);
        height: calc(100% - 30px);
    }
}

.case-study-banner .ipad-wrapper .scrolling-img-frame .scroll-img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: projectMove 7s infinite ease;
    -moz-animation: projectMove 7s infinite ease;
    -ms-animation: projectMove 7s infinite ease;
    -o-animation: projectMove 7s infinite ease;
    animation: projectMove 7s infinite ease;
}

@media (max-width: 575px) {
    .case-study-banner .ipad-wrapper .scrolling-img-frame .scroll-img {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
}

@-webkit-keyframes projectMove {
    0% {
        top: 0px;
    }

    25% {
        top: -25%;
    }

    50% {
        top: -50%;
    }

    75% {
        top: -75%;
    }

    100% {
        top: -100%;
    }
}

@keyframes projectMove {
    0% {
        top: 0px;
    }

    25% {
        top: -25%;
    }

    50% {
        top: -50%;
    }

    75% {
        top: -75%;
    }

    100% {
        top: -100%;
    }
}

@-webkit-keyframes penMove {
    0% {
        -webkit-transform: translateY(-60px);
        -moz-transform: translateY(-60px);
        -ms-transform: translateY(-60px);
        -o-transform: translateY(-60px);
        transform: translateY(-60px);
    }

    50% {
        -webkit-transform: translateY(-20px);
        -moz-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -o-transform: translateY(-20px);
        transform: translateY(-20px);
    }

    100% {
        -webkit-transform: translateY(-60px);
        -moz-transform: translateY(-60px);
        -ms-transform: translateY(-60px);
        -o-transform: translateY(-60px);
        transform: translateY(-60px);
    }
}

@keyframes penMove {
    0% {
        -webkit-transform: translateY(-60px);
        -moz-transform: translateY(-60px);
        -ms-transform: translateY(-60px);
        -o-transform: translateY(-60px);
        transform: translateY(-60px);
    }

    50% {
        -webkit-transform: translateY(-20px);
        -moz-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -o-transform: translateY(-20px);
        transform: translateY(-20px);
    }

    100% {
        -webkit-transform: translateY(-60px);
        -moz-transform: translateY(-60px);
        -ms-transform: translateY(-60px);
        -o-transform: translateY(-60px);
        transform: translateY(-60px);
    }
}





`
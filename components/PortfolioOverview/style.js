import css from 'styled-jsx/css';
export default css`

.featured-portfolio {
    padding-bottom: 92px;
    padding-top: 230px;
    overflow: hidden;
}

@media (max-width: 1500px) {
    .featured-portfolio {
        padding-top: 200px;
        padding-bottom: 110px;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio {
        padding-top: 130px;
        padding-bottom: 0;
    }
}

@media (max-width: 991px) {
    .featured-portfolio {
        padding-top: 100px;
    }
}

.featured-portfolio .content-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 1700px) {
    .featured-portfolio .content-wrapper {
        justify-content: flex-end;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper {
        display: block;
    }
}

.featured-portfolio .content-wrapper .img-area {
    width: 100%;
    max-width: 588px;
}

@media (max-width: 1700px) {
    .featured-portfolio .content-wrapper .img-area {
        max-width: 638px;
        padding-right: 50px;
    }
}

@media (max-width: 1500px) {
    .featured-portfolio .content-wrapper .img-area {
        max-width: 558px;
        padding-right: 0;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper .img-area {
        max-width: 588px;
        padding-right: 0;
        margin: 0 auto;
    }
}

.featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
    position: absolute;
    top: 25px;
    left: 50%;
    width: calc(100% - 50px);
    height: 302px;
    overflow: hidden;
    transform: translateX(-50%);
    background-position: center 0%;
    background-size: 100%;
    animation: portProjectMove 20s infinite linear 0.5s;
}

@media (max-width: 1500px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        top: 18px;
        width: calc(100% - 36px);
        height: 298px;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: 315px;
    }
}

@media (max-width: 767px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: 270px;
    }
}

@media (max-width: 575px) {
    .featured-portfolio .content-wrapper .img-area .scrolling-img-frame {
        height: calc(100% - 110px);
    }
}

.featured-portfolio .content-wrapper .img-area .keyboard {
    position: absolute;
    bottom: -110px;
    max-width: none;
    left: -260px;
}

@media (max-width: 1700px) {
    .featured-portfolio .content-wrapper .img-area .keyboard {
        max-width: 890px;
        left: -230px;
    }
}

@media (max-width: 1500px) {
    .featured-portfolio .content-wrapper .img-area .keyboard {
        max-width: 716px;
        left: -140px;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper .img-area .keyboard {
        max-width: none;
        left: -247px;
    }
}

@media (max-width: 1199px) {
    .featured-portfolio .content-wrapper .img-area .keyboard {
        max-width: 890px;
        left: -207px;
    }
}

@media (max-width: 767px) {
    .featured-portfolio .content-wrapper .img-area .keyboard {
        display: none;
    }
}

.featured-portfolio .content-wrapper .content-area {
    width: 100%;
    padding-left: 70px;
    position: relative;
    max-width: 640px;
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper .content-area {
        max-width: 786px;
        padding-left: 0;
        position: relative;
        text-align: center;
        margin: 130px auto 0;
    }
}

@media (max-width: 767px) {
    .featured-portfolio .content-wrapper .content-area {
        margin: 40px auto 0;
    }
}

.featured-portfolio .content-wrapper .content-area h5 {
    color: #00b4ff;
    position: absolute;
    left: 12px;
    top: 20px;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
    -ms-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
}

.featured-portfolio .content-wrapper .content-area h5.crx-animated {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}

@media (max-width: 1500px) {
    .featured-portfolio .content-wrapper .content-area h5 {
        left: 41px;
    }
}

@media (max-width: 1300px) {
    .featured-portfolio .content-wrapper .content-area h5 {
        left: inherit;
        position: relative;
        margin-bottom: 30px;
    }

    .featured-portfolio .content-wrapper .content-area h5.crx-animated {
        -webkit-transform: inherit;
        -moz-transform: inherit;
        -ms-transform: inherit;
        -o-transform: inherit;
        transform: inherit;
    }
}

.featured-portfolio .content-wrapper .content-area .description {
    margin-bottom: 43px;
}


.featured-portfolio .content-wrapper .content-area p,
.featured-portfolio .content-wrapper .content-area .cr-btn-default {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
}

.featured-portfolio .content-wrapper .content-area p.crx-animated,
.featured-portfolio .content-wrapper .content-area .cr-btn-default.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}

.featured-portfolio .content-wrapper .content-area p.crx-animated {
    -webkit-transition: all 0.8s ease 0.4s;
    -moz-transition: all 0.8s ease 0.4s;
    -ms-transition: all 0.8s ease 0.4s;
    -o-transition: all 0.8s ease 0.4s;
    transition: all 0.8s ease 0.4s;
}

.featured-portfolio .content-wrapper .content-area .cr-btn-default {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
}

@-webkit-keyframes portProjectMove {
    from {
        background-position: center 0%;
    }

    to {
        background-position: center 100%;
    }
}

@keyframes portProjectMove {
    from {
        background-position: center 0%;
    }

    to {
        background-position: center 100%;
    }
}



`
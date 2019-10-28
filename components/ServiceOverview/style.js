import css from 'styled-jsx/css';
export default css`


.service-welcome-txt {
    padding-top: 225px;
    padding-bottom: 150px;
}
.service-welcome-txt .welcome-content {
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    padding-left: 65px;
    position: relative;
}
.service-welcome-txt .welcome-content .verticle-txt {
    color: #00b4ff;
    display: inline-block;
    position: absolute;
    left: 63px;
    top: -44px;
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
    -ms-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
}
.service-welcome-txt .welcome-content .verticle-txt.crx-animated {
    left: 12px;
    top: 18px;
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
.service-welcome-txt .welcome-content .description {
    text-align: justify;
    margin-bottom: 45px;
}
.service-welcome-txt .welcome-content .description,
.service-welcome-txt .welcome-content .cr-btn-default {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
}
.service-welcome-txt .welcome-content .description.crx-animated,
.service-welcome-txt .welcome-content .cr-btn-default.crx-animated {
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
.service-welcome-txt .welcome-content .description.crx-animated {
    -webkit-transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.service-welcome-txt .welcome-content .cr-btn-default.crx-animated {
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    -ms-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
}



@media (max-width: 1500px) {
    .service-welcome-txt {
        padding-top: 185px;
    }
}

@media (max-width: 1300px) {
    .service-welcome-txt {
        padding-bottom: 130px;
    }
}

@media (max-width: 1199px) {
    .service-welcome-txt {
        padding-top: 115px;
        padding-bottom: 120px;
    }
    .service-welcome-txt .welcome-content {
        max-width: 100%;
        padding-left: 0;
    }
    .service-welcome-txt .welcome-content .verticle-txt.crx-animated {
        -webkit-transform-origin: inherit;
        -moz-transform-origin: inherit;
        -ms-transform-origin: inherit;
        -o-transform-origin: inherit;
        transform-origin: inherit;
        -webkit-transform: inherit;
        -moz-transform: inherit;
        -ms-transform: inherit;
        -o-transform: inherit;
        transform: inherit;
        position: inherit;
        left: inherit;
        top: inherit;
        margin-bottom: 10px;
    }

}

@media (max-width: 991px) {
    .service-welcome-txt {
        padding-top: 83px;
        padding-bottom: 90px;
    }
    .service-welcome-txt .welcome-content {
        text-align: center;
    }
}





`
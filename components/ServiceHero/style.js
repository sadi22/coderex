import css from 'styled-jsx/css';
export default css`

.service-banner {
    overflow: visible;
}
.service-banner .service-banner-img {
    position: absolute;
    right: 130px;
    bottom: -66px;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
}
.service-banner .service-banner-img.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease 0.4s;
    -moz-transition: all 0.8s ease 0.4s;
    -ms-transition: all 0.8s ease 0.4s;
    -o-transition: all 0.8s ease 0.4s;
    transition: all 0.8s ease 0.4s;
}
.service-banner .banner-content h1 {
    max-width: 830px;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
    visibility: hidden;
}
.service-banner .banner-content h1.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease 0s;
    -moz-transition: all 0.8s ease 0s;
    -ms-transition: all 0.8s ease 0s;
    -o-transition: all 0.8s ease 0s;
    transition: all 0.8s ease 0s;
    opacity: 1;
    visibility: visible;
}



@media (max-width: 1700px) {
    .service-banner .service-banner-img {
        right: 30px;
    }
}
@media (max-width: 1500px) {
    .service-banner .service-banner-img {
        right: 30px;
        max-width: 370px;
        width: 100%;
        bottom: -58px;
    }
}

@media (max-width: 1300px) {
    .service-banner .banner-content {
        align-items: flex-start;
        text-align: left;
    }
    .service-banner .banner-content h1 {
        max-width: 720px;
    }
}

@media (max-width: 1199px) {
    .service-banner .service-banner-img {
        right: 30px;
        max-width: 310px;
        width: 100%;
        bottom: -48px;
    }
    .service-banner .banner-content h1 {
        max-width: 630px;
    }
}

@media (max-width: 991px) {
    .service-banner .service-banner-img {
        max-width: 250px;
        bottom: -40px;
        right: 10px;
    }
    .service-banner .banner-content h1 {
        max-width: 520px;
    }
}

@media (max-width: 767px) {
    .service-banner .service-banner-img {
        display: none;
    }
    .service-banner .cr-social-link {
        text-align: center;
    }
    .service-banner .banner-content {
        align-items: center;
        text-align: center;
    }

}



`
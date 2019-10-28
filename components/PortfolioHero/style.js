import css from 'styled-jsx/css';
export default css`


.portfolio-banner {
    background: #00146b;
    background: -moz-linear-gradient(69deg, #00146b 66%, #fff 50%);
    background: -webkit-linear-gradient(69deg, #00146b 66%, #fff 50%);
    background: linear-gradient(20deg, #00146b 66%, #fff 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=$secondary-color, endColorstr='#fff', GradientType=1);
    overflow: visible;
}

@media (max-width: 1700px) {
    .portfolio-banner {
        background: -moz-linear-gradient(65deg, #00146b 67%, #fff 50%);
        background: -webkit-linear-gradient(65deg, #00146b 67%, #fff 50%);
        background: linear-gradient(25deg, #00146b 67%, #fff 50%);
    }
}

@media (max-width: 991px) {
    .portfolio-banner {
        background: -moz-linear-gradient(70deg, #00146b 84%, #fff 50%);
        background: -webkit-linear-gradient(70deg, #00146b 84%, #fff 50%);
        background: linear-gradient(20deg, #00146b 84%, #fff 50%);
    }
}

@media (max-width: 767px) {
    .portfolio-banner {
        background: -moz-linear-gradient(58deg, #00146b 83%, #fff 50%);
        background: -webkit-linear-gradient(58deg, #00146b 83%, #fff 50%);
        background: linear-gradient(32deg, #00146b 83%, #fff 50%);
    }
}

@media (max-width: 575px) {
    .portfolio-banner {
        background: #00146b;
    }
}

.portfolio-banner .ipad-img {
    position: absolute;
    max-width: 860px;
    right: -53px;
    bottom: -100px;
    width: 100%;
}

@media (max-width: 1700px) {
    .portfolio-banner .ipad-img {
        right: 20px;
        max-width: 770px;
    }
}

@media (max-width: 1500px) {
    .portfolio-banner .ipad-img {
        right: 50px;
        max-width: 680px;
    }
}

@media (max-width: 1300px) {
    .portfolio-banner .ipad-img {
        max-width: 590px;
        bottom: 20px;
    }
}

@media (max-width: 1199px) {
    .portfolio-banner .ipad-img {
        max-width: 440px;
        bottom: 20px;
        right: 20px;
    }
}

@media (max-width: 991px) {
    .portfolio-banner .ipad-img {
        max-width: 550px;
        bottom: inherit;
        right: inherit;
        position: relative;
        padding-top: 240px;
        margin: 0 auto;
    }
}

.portfolio-banner .ipad-img .img1 {
    z-index: 0;
    -webkit-transform: translateY(-60px);
    -moz-transform: translateY(-60px);
    -ms-transform: translateY(-60px);
    -o-transform: translateY(-60px);
    transform: translateY(-60px);
}

.portfolio-banner .ipad-img .img1.crx-animated {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

.portfolio-banner .ipad-img .img2 {
    z-index: 1;
    bottom: 200px;
    position: absolute;
    -webkit-transform: translateY(160px);
    -moz-transform: translateY(160px);
    -ms-transform: translateY(160px);
    -o-transform: translateY(160px);
    transform: translateY(160px);
}

.portfolio-banner .ipad-img .img2.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 1s cubic-bezier(0.63, -0.02, 0.25, 1) 0.7s;
    -moz-transition: all 1s cubic-bezier(0.63, -0.02, 0.25, 1) 0.7s;
    -ms-transition: all 1s cubic-bezier(0.63, -0.02, 0.25, 1) 0.7s;
    -o-transition: all 1s cubic-bezier(0.63, -0.02, 0.25, 1) 0.7s;
    transition: all 1s cubic-bezier(0.63, -0.02, 0.25, 1) 0.7s;
}

@media (max-width: 1300px) {
    .portfolio-banner .ipad-img .img2 {
        bottom: 120px;
        -webkit-transform: translateY(120px);
        -moz-transform: translateY(120px);
        -ms-transform: translateY(120px);
        -o-transform: translateY(120px);
        transform: translateY(120px);
    }
}

@media (max-width: 1199px) {
    .portfolio-banner .ipad-img .img2 {
        bottom: 90px;
        -webkit-transform: translateY(70px);
        -moz-transform: translateY(70px);
        -ms-transform: translateY(70px);
        -o-transform: translateY(70px);
        transform: translateY(70px);
    }
}

@media (max-width: 575px) {
    .portfolio-banner .ipad-img .img2 {
        bottom: 60px;
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        -ms-transform: translateY(50px);
        -o-transform: translateY(50px);
        transform: translateY(50px);
    }
}

.portfolio-banner .banner-content {
    align-items: flex-start;
    text-align: left;
}

@media (max-width: 1500px) {
    .portfolio-banner .banner-content {
        height: 555px;
    }
}

@media (max-width: 1300px) {
    .portfolio-banner .banner-content {
        height: 520px;
    }
}

@media (max-width: 1199px) {
    .portfolio-banner .banner-content {
        height: 480px;
    }
}

@media (max-width: 991px) {
    .portfolio-banner .banner-content {
        height: auto;
        padding: 60px 0 120px 0;
        text-align: center;
        display: block;
    }
}

.portfolio-banner .banner-content h1.crx-animated {
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

.portfolio-banner .banner-content .description {
    max-width: 480px;
    width: 100%;
    margin-top: 5px;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px);
}

@media (max-width: 991px) {
    .portfolio-banner .banner-content .description{
        margin: 5px auto 0;
    }
}

.portfolio-banner .banner-content .description.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
}





`
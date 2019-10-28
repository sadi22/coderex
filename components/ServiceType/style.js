import css from 'styled-jsx/css';
export default css`


.free-service {
    background: #00146b;
    padding-bottom: 50px;
    padding-top: 86px;
    margin-bottom: 107px;
}
.free-service .service-illustration1 {
    position: absolute;
    top: -371px;
    left: -150px;
}
.free-service .service-illustration1.crx-animated {
    left: 0;
    -webkit-transition: all 1s ease 0.2s;
    -moz-transition: all 1s ease 0.2s;
    -ms-transition: all 1s ease 0.2s;
    -o-transition: all 1s ease 0.2s;
    transition: all 1s ease 0.2s;
}
.free-service .service-illustration2 {
    position: absolute;
    top: -305px;
    right: 0;
}
.free-service .service-illustration2.crx-animated {
    top: -275px;
    -webkit-transition: all 1s ease 0.4s;
    -moz-transition: all 1s ease 0.4s;
    -ms-transition: all 1s ease 0.4s;
    -o-transition: all 1s ease 0.4s;
    transition: all 1s ease 0.4s;
}
.free-service h2.section-title {
    max-width: 710px;
    width: 100%;
    text-align: center;
    margin: 0 auto 85px;
}
.free-service .free-service-content {
    display: flex;
    flex-flow: row;
    margin-left: -60px;
}
.free-service .free-single-item {
    width: calc(50% - 60px);
    margin-left: 60px;
    padding: 80px 100px 70px;
    border-radius: 10px;
    position: relative;
    background: #061a75;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.free-service .free-single-item:before {
    background: #00146b;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
.free-service .free-single-item.crx-animated:before {
    height: 0;
    -webkit-transition: all 1.4s cubic-bezier(0.79, 0.02, 0.07, 1.04);
    -moz-transition: all 1.4s cubic-bezier(0.79, 0.02, 0.07, 1.04);
    -ms-transition: all 1.4s cubic-bezier(0.79, 0.02, 0.07, 1.04);
    -o-transition: all 1.4s cubic-bezier(0.79, 0.02, 0.07, 1.04);
    transition: all 1.4s cubic-bezier(0.79, 0.02, 0.07, 1.04);
}
.free-service .free-single-item h5 {
    margin: 42px 0 38px;
}
.free-service .free-single-item h5,
.free-service .free-single-item p {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
    width: 100%;
}
.free-service .free-single-item h5.crx-animated,
.free-service .free-single-item p.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}
.free-service .free-single-item h5.crx-animated {
    -webkit-transition: all 0.8s ease 0.9s;
    -moz-transition: all 0.8s ease 0.9s;
    -ms-transition: all 0.8s ease 0.9s;
    -o-transition: all 0.8s ease 0.9s;
    transition: all 0.8s ease 0.9s;
}
.free-service .free-single-item p.crx-animated {
    -webkit-transition: all 0.8s ease 1.1s;
    -moz-transition: all 0.8s ease 1.1s;
    -ms-transition: all 0.8s ease 1.1s;
    -o-transition: all 0.8s ease 1.1s;
    transition: all 0.8s ease 1.1s;
}
.free-service .free-single-item.free2 {
    background: #fff;
    box-shadow: 0px 11px 40px 0px rgba(87, 95, 131, 0.1);
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    -ms-transform: translateY(100px);
    -o-transform: translateY(100px);
    transform: translateY(100px);
}
.free-service .free-single-item.free2 a.readmore {
    color: #23252d;
}
.free-service .free-single-item a.readmore {
    font-size: 20px;
    color: #fff;
    text-transform: capitalize;
    font-family: 'Circular Std Bold';
    margin-top: 30px;
    display: inline-block;
}
.free-service .free-single-item a.readmore img {
    display: inline-block;
    margin-left: 8px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.free-service .free-single-item a.readmore:hover img {
    margin-left: 15px;
}
.free-service .free1 .parent {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.free-service .free1 .parent span {
    position: absolute;
    bottom: -100%;
    border-radius: 100%;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -ms-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}
.free-service .free1 .parent .child1 {
    width: 150px;
    height: 150px;
    background: #3636d2;
    left: 0;
}
.free-service .free1 .parent .child2 {
    width: 110px;
    height: 110px;
    background: #fff;
    left: 50%;
    margin-left: -55px;
}
.free-service .free1 .parent .child3 {
    width: 75px;
    height: 75px;
    background: #00146b;
    left: 50%;
    margin-left: -37px;
}
.free-service .free1 .parent .child4 {
    width: 35px;
    height: 35px;
    background: #00b4ff;
    left: 50%;
    margin-left: -17px;
}
.free-service .free1.crx-animated .parent span {
    bottom: 0;
}
.free-service .free1.crx-animated .parent .child1 {
    -webkit-transition-delay: 1s;
    -moz-transition-delay: 1s;
    -ms-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
}
.free-service .free1.crx-animated .parent .child2 {
    -webkit-transition-delay: 0.8s;
    -moz-transition-delay: 0.8s;
    -ms-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
}
.free-service .free1.crx-animated .parent .child3 {
    -webkit-transition-delay: 0.6s;
    -moz-transition-delay: 0.6s;
    -ms-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
}
.free-service .free1.crx-animated .parent .child3 {
    -webkit-transition-delay: 0.4s;
    -moz-transition-delay: 0.4s;
    -ms-transition-delay: 0.4s;
    -o-transition-delay: 0.4s;
    transition-delay: 0.4s;
}
.free-service .free2 .parent {
    width: 140px;
    height: 150px;
    margin: 0 auto;
    position: relative;
}
.free-service .free2 .parent span {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 35px;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -ms-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}
.free-service .free2 .parent .child1 {
    background: #3636d2;
    left: 0;
}
.free-service .free2 .parent .child2 {
    background: #00b4ff;
    left: 50%;
    margin-left: -17px;
}
.free-service .free2 .parent .child3 {
    background: #00146b;
    right: 0;
}
.free-service .free2.crx-animated .parent .child1 {
    height: 50px;
    -webkit-transition-delay: 0.4s;
    -moz-transition-delay: 0.4s;
    -ms-transition-delay: 0.4s;
    -o-transition-delay: 0.4s;
    transition-delay: 0.4s;
}
.free-service .free2.crx-animated .parent .child2 {
    height: 100px;
    -webkit-transition-delay: 0.6s;
    -moz-transition-delay: 0.6s;
    -ms-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
}
.free-service .free2.crx-animated .parent .child3 {
    height: 150px;
    -webkit-transition-delay: 0.8s;
    -moz-transition-delay: 0.8s;
    -ms-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
}


@media (max-width: 1700px) {
    .free-service .service-illustration1 {
        top: -346px;
        max-width: 576px;
        width: 100%;
    }
    .free-service .service-illustration2 {
        max-width: 480px;
        width: 100%;
    }
    .free-service .service-illustration2.crx-animated {
        top: -260px;
    }

}

@media (max-width: 1500px) {
    .free-service {
        margin-bottom: 30px;
    }
    .free-service .service-illustration1 {
        top: -312px;
        max-width: 490px;
    }
    .free-service .service-illustration2 {
        max-width: 400px;
    }
    .free-service .service-illustration2.crx-animated {
        top: -240px;
    }
    .free-service .free-single-item {
        padding: 80px 30px 70px;
    }

}

@media (max-width: 1300px) {
    .free-service {
        margin-bottom: 0;
    }
}

@media (max-width: 1199px) {
    .free-service .service-illustration1 {
        top: -302px;
        max-width: 440px;
    }
    .free-service .service-illustration2 {
        max-width: 340px;
    }
    .free-service .service-illustration2.crx-animated {
        top: -220px;
    }
    .free-service .free-service-content {
        margin-left: -30px;
    }
    .free-service .free-single-item {
        padding: 50px 20px 40px;
        width: calc(50% - 30px);
        margin-left: 30px;
    }

}

@media (max-width: 991px) {
    .free-service {
        padding-bottom: 90px;
    }
    .free-service .service-illustration1 {
        top: -252px;
        max-width: 330px;
    }
    .free-service .service-illustration2 {
        max-width: 280px;
    }
    .free-service .service-illustration2.crx-animated {
        top: -205px;
    }
    .free-service .free-service-content {
        margin-left: 0;
        display: block;
    }
    .free-service .free-single-item {
        width: 100%;
        margin-left: 0;
    }
    .free-service .free-single-item.free2 {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        margin-top: 30px;
    }

}

@media (max-width: 767px) {
    .free-service .service-illustration1.crx-animated {
        top: -243px;
        max-width: 410px;
        right: 50%;
        left: inherit;
        -webkit-transform: translateX(50%);
        -moz-transform: translateX(50%);
        -ms-transform: translateX(50%);
        -o-transform: translateX(50%);
        transform: translateX(50%);
    }
    .free-service .service-illustration2 {
        display: none;
    }

}





`
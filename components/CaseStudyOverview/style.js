import css from 'styled-jsx/css';
export default css`

    .case-details {
        padding-top: 310px;
        padding-bottom: 136px;
    }

    @media (max-width: 1700px) {
        .case-details {
            padding-top: 270px;
        }
    }

    @media (max-width: 1500px) {
        .case-details {
            padding-top: 170px;
        }
    }

    @media (max-width: 1300px) {
        .case-details {
            padding-top: 146px;
        }
    }

    @media (max-width: 1199px) {
        .case-details {
            padding-top: 94px;
            padding-bottom: 90px;
        }
    }

    .case-details .content-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    @media (max-width: 767px) {
        .case-details .content-wrapper {
            display: block;
        }
    }

    .case-details .key-point {
        width: 20%;
        padding-right: 30px;
    }

    @media (max-width: 1500px) {
        .case-details .key-point {
            width: 25%;
        }
    }

    @media (max-width: 1199px) {
        .case-details .key-point {
            width: 30%;
        }
    }

    @media (max-width: 991px) {
        .case-details .key-point {
            width: 40%;
        }
    }

    @media (max-width: 767px) {
        .case-details .key-point {
            width: 100%;
            padding-right: 0;
            margin-bottom: 50px;
        }
    }

    .case-details .key-point h4 {
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        -ms-transform: translateY(50px);
        -o-transform: translateY(50px);
        transform: translateY(50px);
    }

    .case-details .key-point h4.crx-animated {
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

    .case-details .key-point ul {
        margin-top: 42px;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        .case-details .key-point ul {
            margin-top: 22px;
        }
    }

    .case-details .key-point ul li {
        color: #000000;
        font-size: 16px;
        font-family: 'CircularStd-Medium';
        text-transform: uppercase;
        position: relative;
        padding-left: 33px;
        line-height: 28px;
        margin-bottom: 33px;
        -webkit-transform: translateX(-80%);
        -moz-transform: translateX(-80%);
        -ms-transform: translateX(-80%);
        -o-transform: translateX(-80%);
        transform: translateX(-80%);
    }

    @media (max-width: 991px) {
        .case-details .key-point ul li {
            margin-bottom: 10px;
            padding-left: 20px;
        }
    }

    .case-details .key-point ul li:before {
        content: "";
        position: absolute;
        left: 0;
        top: 11px;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #00b4ff;
    }

    .case-details .key-point ul.crx-animated li {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition: all 0.8s ease 0.4s;
        -moz-transition: all 0.8s ease 0.4s;
        -ms-transition: all 0.8s ease 0.4s;
        -o-transition: all 0.8s ease 0.4s;
        transition: all 0.8s ease 0.4s;
    }

    .case-details .about-project {
        width: 65%;
        padding-left: 30px;
    }

    @media (max-width: 1500px) {
        .case-details .about-project {
            width: 70%;
        }
    }

    @media (max-width: 991px) {
        .case-details .about-project {
            width: 60%;
            padding-left: 0;
        }
    }

    @media (max-width: 767px) {
        .case-details .about-project {
            width: 100%;
        }
    }

    .case-details .about-project .description {
        margin-top: 40px;
        text-align: justify;
    }

    .case-details .about-project h4,
    .case-details .about-project .description {
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        -ms-transform: translateY(50px);
        -o-transform: translateY(50px);
        transform: translateY(50px);
    }

    .case-details .about-project h4.crx-animated,
    .case-details .about-project .description.crx-animated {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }

    .case-details .about-project h4.crx-animated {
        -webkit-transition: all 0.8s ease 0.3s;
        -moz-transition: all 0.8s ease 0.3s;
        -ms-transition: all 0.8s ease 0.3s;
        -o-transition: all 0.8s ease 0.3s;
        transition: all 0.8s ease 0.3s;
    }

    .case-details .about-project .description.crx-animated {
        -webkit-transition: all 0.8s ease 0.6s;
        -moz-transition: all 0.8s ease 0.6s;
        -ms-transition: all 0.8s ease 0.6s;
        -o-transition: all 0.8s ease 0.6s;
        transition: all 0.8s ease 0.6s;
    }



`
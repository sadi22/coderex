import css from 'styled-jsx/css';
export default css`


.cr-join-team {
    background: #f3f7ff;
    padding-bottom: 350px;
    margin-bottom: 360px;
}
.cr-join-team .overlay {
    background: #fff;
    width: 13.5%;
}
.cr-join-team .team-illustration {
    position: absolute;
    bottom: -200px;
}
.cr-join-team .team-illustration1 {
    left: 0;
}
.cr-join-team .team-illustration2 {
    left: 290px;
}
.cr-join-team .team-illustration3 {
    right: 0;
}
.cr-join-team .join-content {
    max-width: 530px;
    margin-left: auto;
    width: 100%;
    overflow: hidden;
}
.cr-join-team .join-content h2 {
    margin-bottom: 25px;
}

.cr-join-team .join-content .description {
    margin-bottom: 45px;
}
.cr-join-team .join-content h2,
.cr-join-team .join-content .description,
.cr-join-team .join-content .cr-btn-default {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
}
.cr-join-team .join-content h2.crx-animated,
.cr-join-team .join-content .description.crx-animated,
.cr-join-team .join-content .cr-btn-default.crx-animated {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
}
.cr-join-team .join-content h2.crx-animated {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}
.cr-join-team .join-content .description.crx-animated {
    -webkit-transition: all 1s ease 0.3s;
    -moz-transition: all 1s ease 0.3s;
    -ms-transition: all 1s ease 0.3s;
    -o-transition: all 1s ease 0.3s;
    transition: all 1s ease 0.3s;
}
.cr-join-team .join-content .cr-btn-default.crx-animated {
    -webkit-transition: all 1s ease 0.5s;
    -moz-transition: all 1s ease 0.5s;
    -ms-transition: all 1s ease 0.5s;
    -o-transition: all 1s ease 0.5s;
    transition: all 1s ease 0.5s;
}



@media (max-width: 1700px) {
    .cr-join-team {
        margin-bottom: 320px;
    }
    .cr-join-team .team-illustration {
        bottom: -160px;
        width: 100%;
    }
    .cr-join-team .team-illustration1 {
        max-width: 190px;
    }
    .cr-join-team .team-illustration2 {
        max-width: 760px;
    }
    .cr-join-team .team-illustration3 {
        max-width: 180px;
    }
    .cr-join-team .join-content {
        margin-right: 80px;
    }

}

@media (max-width: 1500px) {
    .cr-join-team {
        margin-bottom: 290px;
        padding-top: 110px;
        padding-bottom: 380px;
    }
    .cr-join-team .team-illustration {
        bottom: -150px;
    }
    .cr-join-team .team-illustration1 {
        max-width: 160px;
    }
    .cr-join-team .team-illustration2 {
        max-width: 720px;
    }
    .cr-join-team .team-illustration3 {
        max-width: 150px;
    }

}

@media (max-width: 1199px) {
    .cr-join-team {
        margin-bottom: 240px;
        padding-bottom: 310px;
    }
    .cr-join-team .overlay {
        width: 18%;
    }
    .cr-join-team .team-illustration {
        bottom: -123px;
    }
    .cr-join-team .team-illustration2 {
        max-width: 600px;
        left: 230px;
    }
    .cr-join-team .join-content {
        margin-right: 0;
        max-width: 590px;
    }

}

@media (max-width: 991px) {
    .cr-join-team {
        margin-bottom: 205px;
        padding-bottom: 240px;
    }
    .cr-join-team .overlay {
        display: none;
    }
    .cr-join-team .team-illustration {
        bottom: -93px;
    }
    .cr-join-team .team-illustration1 {
        max-width: 100px;
    }
    .cr-join-team .team-illustration2 {
        max-width: 460px;
        left: 160px;
    }
    .cr-join-team .team-illustration3 {
        max-width: 90px;
    }
    .cr-join-team .join-content {
        text-align: center;
        margin-right: auto;
    }

}

@media (max-width: 767px) {
    .cr-join-team .team-illustration {
        bottom: -88px;
    }
    .cr-join-team .team-illustration2 {
        max-width: 420px;
        left: inherit;
        right: 0;
    }
    .cr-join-team .team-illustration3 {
        display: none;
    }

}

@media (max-width: 575px) {
    .cr-join-team {
        padding-bottom: 200px;
    }
    .cr-join-team .team-illustration1 {
        display: none;
    }
    .cr-join-team .team-illustration2 {
        right: 50%;
        -webkit-transform: translateX(50%);
        -moz-transform: translateX(50%);
        -ms-transform: translateX(50%);
        -o-transform: translateX(50%);
        transform: translateX(50%);
    }

}







`
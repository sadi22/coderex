import css from 'styled-jsx/css';
export default css`


.cr-hero {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
}
.cr-hero .overlay {
    background: rgba(0, 20, 107, 0.9);
}
.cr-hero .coderex-shape {
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
.cr-hero .coderex-shape .circle-wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #7d86b1;
    margin: 0 auto;
    position: relative;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 225px;
    margin-top: -124px;
    animation: circle-spin 30s linear infinite;
}
.cr-hero .coderex-shape .circle-wrapper .sml-circle {
    color: #fff;
    width: 50%;
    display: block;
    height: 1px;
    position: absolute;
}
.cr-hero .coderex-shape .circle-wrapper .sml-circle i,
.cr-hero .coderex-shape .circle-wrapper .sml-circle span {
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    border-radius: 100%;
    right: -25px;
    position: absolute;
    top: -25px;
}
.cr-hero .coderex-shape .circle-wrapper .sml1 {
    top: 50%;
    left: 50%;
    margin-top: -1px;
    transform: rotate(120deg);
    transform-origin: left;
}
.cr-hero .coderex-shape .circle-wrapper .sml1 i,
.cr-hero .coderex-shape .circle-wrapper .sml1 span {
    animation: circle-spin1 30s linear reverse infinite;
}
.cr-hero .coderex-shape .circle-wrapper .sml2 {
    left: 50%;
    top: 50%;
    transform: rotate(240deg);
    transform-origin: left;
    margin-top: -1px;
}
.cr-hero .coderex-shape .circle-wrapper .sml2 i,
.cr-hero .coderex-shape .circle-wrapper .sml2 span {
    animation: circle-spin-f 30s linear reverse infinite;
}
.cr-hero .coderex-shape .circle-wrapper .sml3 {
    left: 50%;
    top: 50%;
    transform: rotate(360deg);
    transform-origin: left;
    margin-top: -1px;
}
.cr-hero .coderex-shape .circle-wrapper .sml3 i,
.cr-hero .coderex-shape .circle-wrapper .sml3 span {
    animation: circle-spin 30s linear reverse infinite;
}
.cr-hero .hero-content {
    padding-top: 30px;
    height: 100vh;
    min-height: 850px;
    width: 55%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;
}
.cr-hero .hero-content h1 {
    margin-bottom: 27px;
    width: 100%;
}
.cr-hero .hero-content .description {
    margin-bottom: 45px;
    max-width: 700px;
    width: 100%;
}
.cr-hero .hero-content h1,
.cr-hero .hero-content p {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}
.cr-hero .hero-content h1.crx-animated,
.cr-hero .hero-content p.crx-animated {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}
.cr-hero .hero-content h1.crx-animated {
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}
.cr-hero .hero-content p.crx-animated {
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
}
.cr-hero .hero-content .svg-btn-effect {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
}
.cr-hero .hero-content .svg-btn-effect.crx-animated {
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

@keyframes circle-spin1 {
    0% {
        transform: rotate(240deg);
    }
    100% {
        transform: rotate(600deg);
    }
}

@keyframes circle-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes circle-spin-f {
    0% {
        transform: rotate(120deg);
    }
    100% {
        transform: rotate(480deg);
    }
}




@media (max-width: 1700px) {
    .cr-hero .coderex-shape {
        max-width: 730px;
        width: 100%;
    }
    .cr-hero .coderex-shape .circle-wrapper {
        width: 280px;
        height: 280px;
        left: 188px;
        margin-top: -116px;
    }
    .cr-hero .hero-content p {
        max-width: 630px;
    }
}

@media (max-width: 1500px) {
    .cr-hero .coderex-shape {
        max-width: 640px;
    }
    .cr-hero .coderex-shape .circle-wrapper {
        width: 230px;
        height: 230px;
        left: 172px;
        margin-top: -93px;
    }
    .cr-hero .hero-content {
        width: 55%;
    }
    .cr-hero .hero-content p {
        max-width: 550px;
    }
}

@media (max-width: 1300px) {
    .cr-hero .coderex-shape {
        max-width: 580px;
    }
    .cr-hero .coderex-shape .circle-wrapper {
        width: 220px;
        height: 220px;
        left: 147px;
        margin-top: -90px;
    }
    .cr-hero .hero-content {
        width: 52%;
    }
}

@media (max-width: 1199px) {
    .cr-hero .coderex-shape {
        max-width: 430px;
    }
    .cr-hero .coderex-shape .circle-wrapper {
        width: 150px;
        height: 150px;
        left: 120px;
        margin-top: -60px;
    }
    .cr-hero .coderex-shape .circle-wrapper .sml-circle i,
    .cr-hero .coderex-shape .circle-wrapper .sml-circle span {
        right: -20px;
    }
    .cr-hero .coderex-shape .circle-wrapper .sml-circle img {
        width: 50px;
    }
    .cr-hero .hero-content {
        width: 58%;
        padding-top: 0;
    }
}

@media (max-width: 991px) {
    .cr-hero {
        padding: 110px 0 140px;
    }
    .cr-hero .coderex-shape {
        max-width: 430px;
        position: relative;
        top: inherit;
        transform: inherit;
        right: inherit;
        margin: 0 auto;
    }
    .cr-hero .hero-content {
        width: 100%;
        text-align: center;
        height: auto;
        min-height: auto;
        margin-top: 40px;
    }
    .cr-hero .hero-content p {
        margin-left: auto;
        margin-right: auto;
    }
    .cr-hero .hero-content .svg-btn-effect {
        margin-left: auto;
        margin-right: auto;
    }
    .cr-social-link {
        text-align: center;
    }

}

@media (max-width: 575px) {
    .cr-hero .coderex-shape {
        max-width: 320px;
    }
    .cr-hero .coderex-shape .circle-wrapper {
        width: 110px;
        height: 110px;
        left: 89px;
        margin-top: -45px;
    }
    .cr-hero .hero-content p {
        font-size: 20px;
        line-height: 34px;
    }
}

`
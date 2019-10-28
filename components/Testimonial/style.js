import css from 'styled-jsx/css';
export default css`

.cr-testimonial {
    padding-bottom: 65px;
    padding-top: 140px;
}
.cr-testimonial .overlay1 {
    left: 0;
    width: 100%;
    max-width: 0;
    background: #f3f7ff;
    height: 345px;
    top: calc(15% + 130px);
    position: absolute;
}
.cr-testimonial .overlay1.crx-animated {
    max-width: 550px;
    -webkit-transition: all 0.8s ease 0.8s;
    -moz-transition: all 0.8s ease 0.8s;
    -ms-transition: all 0.8s ease 0.8s;
    -o-transition: all 0.8s ease 0.8s;
    transition: all 0.8s ease 0.8s;
}
.cr-testimonial .section-title {
    text-align: center;
    width: 100%;
    margin-bottom: 64px;
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}
.cr-testimonial .section-title.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}
.cr-testimonial .testimonial-wrapper {
    max-width: 1060px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
}
.cr-testimonial .testimonial-wrapper .single-testimonial {
    width: calc(52.7% - 60px);
    margin-left: 60px;
    margin-bottom: 60px;
}
.cr-testimonial .testimonial-wrapper .single-testimonial:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
}
.cr-testimonial .testimonial-wrapper .single-testimonial.crx-animated:before {
    width: 0;
}
.cr-testimonial .testimonial-wrapper .single-testimonial.testimonial1.crx-animated:before {
    -webkit-transition: all 0.8s ease 0.4s;
    -moz-transition: all 0.8s ease 0.4s;
    -ms-transition: all 0.8s ease 0.4s;
    -o-transition: all 0.8s ease 0.4s;
    transition: all 0.8s ease 0.4s;
}
.cr-testimonial .testimonial-wrapper .single-testimonial.testimonial2.crx-animated:before {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
}
.cr-testimonial .testimonial-wrapper .single-testimonial:nth-child(odd) {
    margin-left: 0;
    -webkit-transform: translateY(60px);
    -moz-transform: translateY(60px);
    -ms-transform: translateY(60px);
    -o-transform: translateY(60px);
    transform: translateY(60px);
}
.cr-testimonial .testimonial-wrapper .single-testimonial img {
    width: 100%;
}
.cr-testimonial .testimonial-wrapper .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: rgba(20, 19, 78, 0.75);
}
.cr-testimonial .testimonial-wrapper .content a {
    background: #fff;
    width: 52px;
    height: 52px;
    font-size: 20px;
    padding: 9px 20px;
    text-align: center;
    border-radius: 100%;
    color: #00146b;
}
.cr-testimonial .testimonial-wrapper .content a:hover {
    background: #00b4ff;
    color: #fff;
}
.cr-testimonial .testimonial-wrapper .content span {
    font-size: 20px;
    color: #fff;
    position: absolute;
    bottom: 12px;
    left: 35px;
    transform-origin: left;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.testimonial-modal{
    position: fixed;
    z-index: 999;
    right: 0;
    top: 0;
    background: rgba(34, 34, 34, 0.70);
    width: 100%;
    height: 100%;
    display: none;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.testimonial-modal.show{
    display: flex;
}



@media (max-width: 1300px) {
    .cr-testimonial {
        padding-bottom: 50px;
        padding-top: 90px;
    }
}
@media (max-width: 1199px) {
    .cr-testimonial .overlay1.crx-animated {
        max-width: 410px;
        height: 200px;
        margin-top: 0;
        top: 200px;
        -webkit-transform: inherit;
        -moz-transform: inherit;
        -ms-transform: inherit;
        -o-transform: inherit;
        transform: inherit;
    }

}

@media (max-width: 991px) {
    .cr-testimonial {
        padding-bottom: 77px;
    }
    .cr-testimonial .testimonial-wrapper .single-testimonial {
        width: calc(52.1% - 30px);
        margin-left: 30px;
        margin-bottom: 30px;
    }
    

}

@media (max-width: 767px) {
    .cr-testimonial {
        padding-bottom: 47px;
    }
    .cr-testimonial .overlay1 {
        display: none;
    }
    .cr-testimonial .testimonial-wrapper {
        display: block;
    }
    .cr-testimonial .testimonial-wrapper .single-testimonial {
        width: 100%;
        margin-left: 0;
    }
    .cr-testimonial .testimonial-wrapper .single-testimonial:last-child {
        margin-bottom: 0;
    }
    .cr-testimonial .testimonial-wrapper .single-testimonial:nth-child(odd) {
        -webkit-transform: inherit;
        -moz-transform: inherit;
        -ms-transform: inherit;
        -o-transform: inherit;
        transform: inherit;
    }
    

}

@media (max-width: 575px) {
    .cr-testimonial .section-title {
        text-align: center;
    }

}
`
import css from 'styled-jsx/css';
export default css`

.inner-page-banner .about-banner-img {
    position: absolute;
    right: -18px;
    bottom: 0;
    width: 28vw;
    -webkit-transform: translateX(50px);
    -moz-transform: translateX(50px);
    -ms-transform: translateX(50px);
    -o-transform: translateX(50px);
    transform: translateX(50px);
}

.inner-page-banner .about-banner-img.crx-animated {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
}

@media (max-width: 575px) {
    .inner-page-banner .about-banner-img {
        display: none;
    }
}





`
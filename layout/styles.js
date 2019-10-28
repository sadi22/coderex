import css from 'styled-jsx/css'
import theme from '../styles/theme';
export default css.global`

.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */
@charset 'UTF-8';.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(fonts/slick.eot);src:url(fonts/slick.eot?#iefix) format('embedded-opentype'),url(fonts/slick.woff) format('woff'),url(fonts/slick.ttf) format('truetype'),url(fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'â†'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'â†’'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'â†'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'â€¢';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}/*# sourceMappingURL=slick-theme.min.css.map */
.notification-container-bottom-center,.notification-container-bottom-left,.notification-container-bottom-right,.notification-container-mobile-bottom,.notification-container-mobile-top,.notification-container-top-center,.notification-container-top-left,.notification-container-top-right{position:fixed;z-index:8000}.notification-container-top-center{transform:translateX(-50%);top:20px;left:50%}.notification-container-bottom-center{transform:translateX(-50%);bottom:20px;left:50%}.notification-container-top-left{left:20px;top:20px}.notification-container-top-right{right:20px;top:20px}.notification-container-bottom-left{left:20px;bottom:20px}.notification-container-bottom-right{bottom:20px;right:20px}.notification-container-mobile-top{right:20px;left:20px;top:20px}.notification-container-mobile-bottom{right:20px;left:20px;bottom:20px;margin-bottom:-15px}.notification-default{border-left:8px solid #0562c7}.notification-default,.notification-default .timer{background-color:#007bff}.notification-default .timer-filler{background-color:#fff}.notification-default .notification-close{background-color:#007bff}.notification-success{border-left:8px solid #1f8838}.notification-success,.notification-success .timer{background-color:#28a745}.notification-success .timer-filler{background-color:#fff}.notification-success .notification-close{background-color:#28a745}.notification-danger{border-left:8px solid #bd1120}.notification-danger,.notification-danger .timer{background-color:#dc3545}.notification-danger .timer-filler{background-color:#fff}.notification-danger .notification-close{background-color:#dc3545}.notification-info{border-left:8px solid #138b9e}.notification-info,.notification-info .timer{background-color:#17a2b8}.notification-info .timer-filler{background-color:#fff}.notification-info .notification-close{background-color:#17a2b8}.notification-warning{border-left:8px solid #ce9c09}.notification-warning,.notification-warning .timer{background-color:#eab000}.notification-warning .timer-filler{background-color:#fff}.notification-warning .notification-close{background-color:#eab000}.notification-awesome{border-left:8px solid #4c3fb1}.notification-awesome,.notification-awesome .timer{background-color:#685dc3}.notification-awesome .timer-filler{background-color:#fff}.notification-awesome .notification-close{background-color:#685dc3}@keyframes timer{0%{width:100%}to{width:0}}.notification-item{display:flex;position:relative;border-radius:3px;margin-bottom:15px;box-shadow:1px 3px 4px rgba(0,0,0,.2);cursor:pointer}.notification-item .timer{width:100%;margin-top:10px}.notification-item .timer,.notification-item .timer .timer-filler{height:3px;border-radius:5px}.notification-item .notification-title{color:#fff;font-weight:700;font-size:14px;margin-top:5px;margin-bottom:5px}.notification-item .notification-message{color:#fff;max-width:calc(100% - 15px);font-size:14px;line-height:150%;word-wrap:break-word;margin-bottom:0;margin-top:0}.notification-item .notification-content{padding:8px 15px;display:inline-block;width:100%}.notification-item .notification-close{width:18px;height:18px;border-radius:50%;display:inline-block;position:absolute;right:10px;top:10px}.notification-item .notification-close:after{content:"\D7";position:absolute;transform:translate(-50%,-50%);color:#fff;font-size:12px;left:50%;top:50%}.n-parent{width:275px}.notification-container-mobile-bottom .n-parent,.notification-container-mobile-bottom .notification-item,.notification-container-mobile-top .n-parent,.notification-container-mobile-top .notification-item{max-width:100%;width:100%}.notification-container-bottom-right .n-parent,.notification-container-top-right .n-parent{margin-left:auto}.notification-container-bottom-left .n-parent,.notification-container-top-left .n-parent{margin-right:auto}.notification-container-mobile-bottom .n-parent,.notification-container-mobile-top .n-parent{margin-left:auto;margin-right:auto}
#nprogress{pointer-events:none}#nprogress .bar{background:#00b4ff;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #00b4ff,0 0 5px;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#00b4ff;border-left-color:#00b4ff;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}


*,
::after,
::before {
    box-sizing: border-box
}
* {
    margin: 0px;
    padding: 0px;
}
*:focus {
    box-shadow: none;
    outline: none;
}
html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block
}
body, html {
    height: 100%;
    width: 100%;
}
body, p {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a {
    text-decoration: none;
    color: ${theme.colors.primaryColor};
}

h1, h2, h3, h4, h5, h6, p, figur, a {
    margin: 0px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    -webkit-font-variant-ligatures: common-ligatures;
    font-variant-ligatures: common-ligatures;
}
img {
    vertical-align: middle;
    border-style: none;
    display: block;
    max-width: 100%;
}
a:hover,
a:focus,
input:focus,
button:focus,
a:active {
    text-decoration: none;
    outline: none;
    outline-offset: 0px;
    box-shadow: none;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
button{
    cursor: pointer;
}
input,
textarea,
select {
    border: 1px solid #e8e9ef;
    border-radius: 5px;
    height: 58px;
    background: #f4f6fb;
    color: #23252d;
    font-size: 18px;
    resize: none;
    width: 100%;
    padding: 10px 20px;
}
textarea{
    min-height: 150px;
    height: auto;
}

.cr-container,
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}
@media (min-width:576px) {
    .cr-container,
    .container {
        max-width: 540px
    }
}

@media (min-width:768px) {
    .cr-container,
    .container {
        max-width: 720px
    }
}

@media (min-width:992px) {
    .cr-container,
    .container {
        max-width: 960px
    }
}

@media (min-width:1200px) {
    .cr-container,
    .container {
        max-width: 1140px
    }
}

@media (min-width:1301px) {
    .cr-container {
        max-width: 1280px;
    }
}

@media (min-width:1501px) {
    .cr-container {
        max-width: 1430px;
    }
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}
.cr-row {
    margin-right: -15px;
    margin-left: -15px;
}
.cr-col {
    position: relative;
    width: 100%;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}


/*----------typography--------*/
body, p {
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    font-family: ${theme.fontFamily.bodyFont};
    color: ${theme.colors.bodyFontColor};
}

//---heading tag Typogrpahy---*/
h1 {
    font-size: calc(35px + (90 - 35) * ((100vw - 320px) / (2560 - 320)));
    line-height: 1.1;
    letter-spacing: -4px;
    font-family: ${theme.fontFamily.circulerBold};
}
h2 {
    font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (2560 - 320)));
    line-height: 1.1;
    letter-spacing: -2px;
    font-family: ${theme.fontFamily.circulerBold};
}
h3 {
    font-size: calc(28px + (50 - 28) * ((100vw - 320px) / (2560 - 320)));
    line-height: 1.1;
    letter-spacing: -1px;
    font-family: ${theme.fontFamily.circulerBold};
}
h4 {
    font-size: calc(26px + (40 - 26) * ((100vw - 320px) / (2560 - 320)));
    line-height: 1.1;
    letter-spacing: -1px;
    font-family: ${theme.fontFamily.circulerMedium};
}
h5 {
    font-size: 30px;
    line-height: 40px;
    font-family: ${theme.fontFamily.circulerBold};
}
h6 {
    font-size: 20px;
    line-height: 30px;
    font-family: ${theme.fontFamily.circulerBold};
}

.title-26{
    font-size: 26px;
    line-height: 46px;
}

@media only screen and (max-width: 1500px){
    h1 {
        letter-spacing: -2px;
    }
    h2 {
        letter-spacing: -1px;
    }
}

@media only screen and (max-width: 1300px){
    h2 {
        line-height: 1.2;
        letter-spacing:normal;
    }
}

/*---------helper css----------*/
.fw-300 {
    font-weight: 300;
}.fw-400 {
    font-weight: 400;
}.fw-500 {
    font-weight: 500;
}.fw-600 {
    font-weight: 600;
}.fw-700 {
    font-weight: 700;
}.fw-800 {
    font-weight: 800;
}.fw-900 {
    font-weight: 900;
}

.color-00b{
    color: #00b4ff;
}
.color-001{
    color: #00146b;
}
.color-232{
    color: #23252d;
}
.color-fff{
    color: #ffffff;
}

.circular-700 {
    font-family: ${theme.fontFamily.circulerBold};
}
.circular-500 {
    font-family: ${theme.fontFamily.circulerMedium};
}

//----------------
.section-padding {
    padding: 150px 0;
}
.pos-relative {
    position: relative;
}
.display-block {
    display: block;
}
.display-inline li {
    display: inline-block;
}
.text-center{
    text-align: center;
}
.text-left{
    text-align: left;
}
.text-right{
    text-align: right;
}
.text-uppercase{
    text-transform: uppercase;
}
.text-capitalize{
    text-transform: capitalize;
}

//-----------------
.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-work-procedure .procedure-content .single-process:before,
.comment-respond .comment-form input,
a,
.transition-3s {
    transition: all 0.3s ease;
}

.cr-work-procedure .procedure-content .single-process,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process1 span,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover,
.cr-work-procedure .procedure-content .process3 .parent3 span,
.cr-work-procedure .procedure-content .process4 .parent4 span,
.transition-5s {
    transition: all 0.5s ease;
}


button[type="submit"],
input[type="submit"],
.cr-btn-default {
    display: inline-block;
    height: 60px;
    line-height: 62px;
    padding: 0px 50px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 50px;
    font-weight: 700;
    color: ${theme.colors.primaryColor};
    font-family: ${theme.fontFamily.circulerBold};
    position: relative;
    z-index: 1;
    cursor: pointer;
}

.svg-btn-effect {
    position: relative;
    display: inline-block; 
}
.svg-btn-effect svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%; 
}
.svg-btn-effect svg rect {
    fill: none;
    stroke: #00b4ff;
    stroke-dasharray: 353, 0;
    stroke-width: 2px;
    stroke-dashoffset: 0;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; 
}
.svg-btn-effect:hover svg rect {
    stroke-dasharray: 154, 537;
    stroke-dashoffset: 420; 
}
.svg-btn-effect.contact-btn:hover svg rect {
    stroke-dasharray: 115, 543; 
}
.svg-btn-effect.view-case-btn:hover svg rect {
    stroke-dasharray: 133, 543; 
}
.svg-btn-effect.lets-talk-btn:hover svg rect {
    stroke-dasharray: 94,544;
    stroke-dashoffset: 410;
}
.svg-btn-effect.discuss-btn:hover svg rect {
    stroke-dashoffset: 396;
}
.svg-btn-effect.schedule-call:hover svg rect {
    stroke-dasharray: 139, 566;
}
.svg-btn-effect.talk-us-btn:hover svg rect {
    stroke-dasharray: 114, 497;
    stroke-dashoffset: 358;
}
.overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}


.display-hide,
.cr-hero .hero-content h1,
.cr-hero .hero-content p,
.cr-hero .hero-content .svg-btn-effect,
.cr-hire .hire-content h2,
.cr-hire .hire-content p,
.cr-hire .hire-content .cr-btn-default,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover,
.cr-expectation .expectations .single-item,
.inner-page-banner .about-banner-img,
.inner-page-banner .banner-content h1,
.welcome-txt .welcome-content .content-wrapper h2,
.welcome-txt .welcome-content .content-wrapper .description,
.welcome-txt .welcome-content .content-wrapper .cr-btn-default,
.cr-cost .cost-content .single-cost h4,
.cr-cost .cost-content .single-cost p,
.cr-cost .cost-content .cost1 .icon img,
.cr-cost .cost-content .cost2 .circle-parent .circle-child3,
.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-provided-services .service-list h2,
.cr-provided-services .service-list ul,
.cr-testimonial .section-title,
.portfolio-banner .ipad-img .img1,
.portfolio-banner .ipad-img .img2,
.portfolio-banner .banner-content p,
.featured-portfolio .content-wrapper .content-area p,
.featured-portfolio .content-wrapper .content-area .cr-btn-default,
.service-banner .service-banner-img,
.service-welcome-txt .welcome-content .verticle-txt,
.service-welcome-txt .welcome-content p,
.service-welcome-txt .welcome-content .cr-btn-default,
.cr-service .service-1 .content-image .icon-wrapper img,
.cr-service .service-2 .content-image .icon-wrapper,
.cr-service .service-3 .content-image .icon-wrapper,
.cr-service .service-4 .content-image .icon-wrapper img,
.cr-service .service-5 .content-image .icon-wrapper img,
.cr-service .service-6 .content-image .icon-wrapper:before,
.cr-service .service-6 .content-image .icon-wrapper img,
.free-service .service-illustration1,
.free-service .service-illustration2,
.free-service .free-single-item h5,
.free-service .free-single-item p,
.case-study-banner .banner-content a img,
.case-study-banner .banner-content p,
.case-study-banner .banner-content a,
.case-details .key-point h4,
.case-details .about-project h4,
.case-details .about-project p,
.sample-page img,
.project-typography .typo-title h4,
.project-typography .project-font-family .single-font-family h5,
.project-typography .project-font-family .single-font-family ul,
.project-typography .project-color .color-title h4,
.responsive-device .device-mockup img {
    
}

.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover {
    opacity: 0;
    visibility: hidden;
}

.display-show,
.cr-hero .hero-content h1.crx-animated,
.cr-hero .hero-content p.crx-animated,
.cr-hero .hero-content .svg-btn-effect.crx-animated,
.cr-hire .hire-content h2.crx-animated,
.cr-hire .hire-content p.crx-animated,
.cr-hire .hire-content .cr-btn-default.crx-animated,
.cr-work-procedure .procedure-content .single-process.active .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.default,
.cr-expectation .expectations .single-item.crx-animated,
.inner-page-banner .about-banner-img.crx-animated,
.inner-page-banner .banner-content h1.crx-animated,
.welcome-txt .welcome-content .content-wrapper h2.crx-animated,
.welcome-txt .welcome-content .content-wrapper .description.crx-animated,
.welcome-txt .welcome-content .content-wrapper .cr-btn-default.crx-animated,
.cr-cost .cost-content .single-cost h4.crx-animated,
.cr-cost .cost-content .single-cost p.crx-animated,
.cr-cost .cost-content .cost1.crx-animated .icon img,
.cr-cost .cost-content .cost2.crx-animated .circle-child3,
.cr-team .single-member:hover .social-contact,
.cr-team .single-member:hover .social-contact li,
.cr-provided-services .service-list h2.crx-animated,
.cr-provided-services .service-list ul.crx-animated,
.cr-testimonial .section-title.crx-animated,
.portfolio-banner .ipad-img .img1.crx-animated,
.portfolio-banner .ipad-img .img2.crx-animated,
.portfolio-banner .banner-content h1.crx-animated,
.portfolio-banner .banner-content p.crx-animated,
.featured-portfolio .content-wrapper .content-area p.crx-animated,
.featured-portfolio .content-wrapper .content-area .cr-btn-default.crx-animated,
.service-banner .service-banner-img.crx-animated,
.service-welcome-txt .welcome-content .verticle-txt.crx-animated,
.service-welcome-txt .welcome-content p.crx-animated,
.service-welcome-txt .welcome-content .cr-btn-default.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon11.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon12.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon13.crx-animated,
.cr-service .service-2 .content-image .icon-wrapper.crx-animated,
.cr-service .service-3 .content-image .icon-wrapper.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper img.service-icon41.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper .service-icon42.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper .service-icon42 img,
.cr-service .service-5 .content-image .icon-wrapper img.crx-animated,
.cr-service .service-6 .content-image .icon-wrapper.crx-animated:before,
.cr-service .service-6 .content-image .icon-wrapper img.crx-animated,
.free-service .service-illustration1.crx-animated,
.free-service .service-illustration2.crx-animated,
.free-service .free-single-item h5.crx-animated,
.free-service .free-single-item p.crx-animated,
.case-study-banner .banner-content a img.crx-animated,
.case-study-banner .banner-content p.crx-animated,
.case-study-banner .banner-content a.crx-animated,
.case-details .key-point h4.crx-animated,
.case-details .about-project h4.crx-animated,
.case-details .about-project p.crx-animated,
.sample-page img.crx-animated,
.project-typography .typo-title h4.crx-animated,
.project-typography .project-font-family .single-font-family h5.crx-animated,
.project-typography .project-font-family .single-font-family ul.crx-animated,
.project-typography .project-color .color-title h4.crx-animated,
.responsive-device .device-mockup img.crx-animated {
    opacity: 1;
    visibility: visible;
}



.align-center-center {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.align-col-left-center {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
}
.align-col-left-bottom {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
}
.align-col-right-center {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: center;
}
.align-col-right-bottom {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: flex-end;
}
.align-col-center-bottom {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
}

.align-row-left-top {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
}
.align-row-left-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
}
.align-row-right-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
}
.align-row-center-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.align-row-spacebetween {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}


//--------inner page banner----------
.inner-page-banner {
    background: #00146b;
    overflow: hidden; 
}
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
.inner-page-banner .banner-content {
    height: 635px; 
}
.inner-page-banner .banner-content h1 {
    max-width: 750px;
    width: 100%;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px); 
}
.inner-page-banner .banner-content h1.crx-animated {
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

//--------blog page typography-----
.blog .blog-list h1,
.archive .blog-list h1,
.single .blog-list h1,
.single .blog-details h1 {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: normal; 
}
.blog .blog-list h2,
.archive .blog-list h2,
.single .blog-list h2,
.single .blog-details h2 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: normal; 
}
.blog .blog-list h3,
.archive .blog-list h3,
.single .blog-list h3,
.single .blog-details h3 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: normal; 
}
.blog .blog-list h4,
.archive .blog-list h4,
.single .blog-list h4,
.single .blog-details h4 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: normal; 
}
.blog .blog-list h5,
.archive .blog-list h5,
.single .blog-list h5,
.single .blog-details h5 {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: normal; 
}
.blog .blog-list h6,
.archive .blog-list h6,
.single .blog-list h6,
.single .blog-details h6 {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: normal; 
}
.blog .blog-list p,
.archive .blog-list p,
.single .blog-list p,
.single .blog-details p {
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 15px; 
}

//-----------post pagination----------
.post-pagination {
    text-align: center;
    padding-top: 30px; 
}
.post-pagination .current,
.post-pagination .page-numbers {
    display: inline-block;
    font-size: 20px;
    color: #23252d;
    padding: 0 20px;
    font-family: 'CircularStd-Medium'; 
}
.post-pagination .current:hover,
.post-pagination .page-numbers:hover {
    color: #00b4ff; 
}
.post-pagination .current {
    color: #00b4ff; 
}
.post-pagination .next span,
.post-pagination .prev span {
    font-size: 22px;
    width: 50px;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    color: #23252d;
    position: relative; 
}
.post-pagination .next span:before,
.post-pagination .prev span:before {
    content: "";
    width: 30px;
    height: 1px;
    background: #23252d;
    position: absolute;
    top: 12px; 
    transition: all 0.4s ease;
}
.post-pagination .prev span {
    text-align: left; 
}
.post-pagination .prev span:before {
    right: 0; 
}
.post-pagination .prev span:hover:before {
    right: 16px; 
}
.post-pagination .next span {
    text-align: right; 
}
.post-pagination .prev span svg,
.post-pagination .next span svg {
    width: 9px;
    position: relative;
    top: 1px;
}
.post-pagination .next span:before {
    left: 0; 
}
.post-pagination .next span:hover:before {
    left: 16px; 
}



.blog-list .post-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -60px; 
}
.blog-list .single-post {
    width: calc(50% - 60px);
    margin-left: 60px;
    margin-bottom: 87px; 
}
.blog-list .single-post figure {
    overflow: hidden; 
}
.blog-list .single-post figure img {
    width: 100%;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear; 
}
.blog-list .single-post:hover figure img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 2.5s linear;
    -moz-transition: all 2.5s linear;
    -ms-transition: all 2.5s linear;
    -o-transition: all 2.5s linear;
    transition: all 2.5s linear; 
}
.blog-list .post-title {
    padding-top: 37px; 
}
.blog-list .post-title .category {
    margin-bottom: 5px;
    line-height: 24px; 
}
.blog-list .post-title .category a {
    display: inline-block;
    font-family: 'Circular Std Bold';
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 10px;
    letter-spacing: 0.5px;
    line-height: normal; 
}
.blog-list .post-title .category a:last-child{
    margin-right: 0;
}
.blog-list .post-title .category a:last-child span{
    display: none;
}
.blog-list .post-title .category a:hover {
    text-decoration: underline; 
}
.blog-list .post-title h1 a {
    color: #23252d;
    display: block; 
}
.blog-list .post-title h1 a:hover {
    color: #00b4ff; 
}






.portfolio-section {
    padding-bottom: 47px;
}

@media (max-width: 1500px) {
    .portfolio-section {
        padding-top: 130px;
        padding-bottom: 0;
    }
}

@media (max-width: 991px) {
    .portfolio-section {
        padding-top: 100px;
    }
}

.portfolio-section .svg-btn-effect {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding: 0 20px;
}

.portfolio-section .portfolio-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -60px;
}

@media (max-width: 1300px) {
    .portfolio-section .portfolio-wrapper {
        margin-left: -30px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper {
        margin-left: 0;
        display: block;
    }
}

.portfolio-section .portfolio-wrapper .single-portfolio {
    width: calc(50% - 60px);
    margin-left: 60px;
    margin-bottom: 90px;
}

@media (max-width: 1300px) {
    .portfolio-section .portfolio-wrapper .single-portfolio {
        width: calc(50% - 30px);
        margin-left: 30px;
        margin-bottom: 60px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper .single-portfolio {
        width: 100%;
        margin-left: 0;
        margin-bottom: 40px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper .single-portfolio:last-child {
        margin-bottom: 70px;
    }
}

.portfolio-section .portfolio-wrapper .single-portfolio figure {
    overflow: hidden;
    position: relative;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure.crx-animated:before {
    width: 0;
    -webkit-transition: all 0.8s ease 0.2s;
    -moz-transition: all 0.8s ease 0.2s;
    -ms-transition: all 0.8s ease 0.2s;
    -o-transition: all 0.8s ease 0.2s;
    transition: all 0.8s ease 0.2s;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure img {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 2.5s linear;
    -moz-transition: all 2.5s linear;
    -ms-transition: all 2.5s linear;
    -o-transition: all 2.5s linear;
    transition: all 2.5s linear;
}

.portfolio-section .portfolio-wrapper .single-portfolio:nth-child(even) figure.crx-animated:before {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
}

.portfolio-section .portfolio-wrapper .portfolio-title {
    padding-top: 32px;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title {
        padding-top: 15px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .title {
    font-size: 30px;
    line-height: 40px;
    color: #23252d;
    display: inline-block;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .title {
        font-size: 24px;
        line-height: 32px;
    }
}

@media (max-width: 575px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .title {
        font-size: 23px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .title img {
    display: inline-block;
    margin-left: 5px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.portfolio-section .portfolio-wrapper .portfolio-title .title:hover img {
    margin-left: 10px;
}

.portfolio-section .portfolio-wrapper .portfolio-title .category {
    line-height: 28px;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .category {
        line-height: 20px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .category span,
.portfolio-section .portfolio-wrapper .portfolio-title .category a {
    color: #23252d;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Circular Std Bold';
}

@media (max-width: 991px) {

    .portfolio-section .portfolio-wrapper .portfolio-title .category span,
    .portfolio-section .portfolio-wrapper .portfolio-title .category a {
        font-size: 13px;
    }
}





@media (max-width: 1700px) {
    .inner-page-banner .banner-content {
        height: 550px; 
    } 
}

@media (max-width: 1300px) {
    .blog-list .post-wrapper {
        margin-left: -30px; 
    } 
    .blog-list .single-post {
        width: calc(50% - 30px);
        margin-left: 30px; 
    } 
}

@media (max-width: 1199px) {
    .inner-page-banner .banner-content {
        height: 470px;
        align-items: flex-start;
        text-align: left; 
    }
    
    .blog .blog-list h1,
    .archive .blog-list h1,
    .single .blog-list h1,
    .single .blog-details h1 {
        font-size: 26px;
        line-height: 32px; 
    }

    .blog-list {
        padding-bottom: 64px; 
    }
    .blog-list .single-post {
        margin-bottom: 47px; 
    }
}

@media (max-width: 991px) {
    .inner-page-banner .banner-content {
        height: 410px; 
    } 

    .blog .blog-list p,
    .archive .blog-list p,
    .single .blog-list p,
    .single .blog-details p {
        font-size: 18px;
        line-height: 30px; 
    }

    .blog-list {
        padding-bottom: 54px; 
    }
    .blog-list .post-wrapper {
        margin-left: 0;
        display: block; 
    } 
    .blog-list .single-post {
        margin-left: 0;
        width: 100%;
        text-align: center; 
    }
    .blog-list .post-title {
        padding-top: 25px; 
    }
    .blog-list .post-title .category {
        margin-bottom: 15px; 
    } 
    .blog-list .post-title .category a {
        font-size: 14px; 
    }

}

@media (max-width: 575px) {
    .inner-page-banner .about-banner-img {
        display: none; 
    } 
    .inner-page-banner .banner-content {
        text-align: center;
        align-items: center; 
    }
    
    .blog .blog-list h1,
    .archive .blog-list h1,
    .single .blog-list h1,
    .single .blog-details h1 {
        font-size: 24px;
        line-height: 32px; 
    }

    .blog-list {
        padding-bottom: 0; 
    } 

    .post-pagination .current,
    .post-pagination .page-numbers {
        padding: 0 10px;
    }
    .post-pagination .next span,
    .post-pagination .prev span {
        width: 40px; 
    }
}
img.blog-logo {
    display: none;
}
`
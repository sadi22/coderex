import css from 'styled-jsx/css';
export default css`

.single .blog-list {
    background: #00146b;
    position: relative;
    overflow: hidden;
    padding-top: 223px;
    padding-bottom: 88px;
}
.single .blog-list:after {
    content: "";
    position: absolute;
    background: #fff;
    left: -50px;
    top: -128px;
    width: 120%;
    height: 200px;
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
}
.single .blog-list .section-title {
    margin-bottom: 65px;
}
.single .blog-list .section-title h2 {
    font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -2px;
    font-family: 'Circular Std Bold';
}
.single .blog-list .single-post {
    margin-bottom: 50px;
}
.single .blog-list .post-title h1 a {
    color: #fff;
}
.single .blog-list .post-title h1 a:hover {
    color: #00b4ff;
}



@media (max-width: 1700px) {
    .single .blog-list:after {
        top: -143px;
    }
}
@media (max-width: 1300px) {
    .single .blog-list {
        padding-top: 200px;
    }
    .single .blog-list:after {
        top: -154px;
    }

}
@media (max-width: 1199px) {
    .single .blog-list {
        padding-bottom: 55px;
    }
}
@media (max-width: 991px) {
    .single .blog-list {
        padding-top: 152px;
    }
    .single .blog-list:after {
        top: -167px;
    }

}
@media (max-width: 767px) {
    .single .blog-list {
        padding-top: 110px;
    }
}


`
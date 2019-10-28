import css from 'styled-jsx/css';
export default css`

.cr-portfolio {
    padding-bottom: 40px;
    padding-top: 140px;
}
.cr-portfolio .section-title h2{
    margin-bottom: 17px;
}
.cr-portfolio .section-title{
    max-width: 980px;
    width: 100%;
    margin: 0 auto 70px;
}

.cr-portfolio .portfolio-content-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.cr-portfolio .portfolio-content-wrapper .portfolio-img-wrapper {
    width: 63%;
    padding-right: 75px;
}
.cr-portfolio .portfolio-content-wrapper .portfolio-content {
    width: 37%;
}
.cr-portfolio .portfolio-content-wrapper .portfolio-content .count {
    font-size: 300px;
    line-height: 220px;
    display: block;
    color: #e8edf7;
    margin-left: -10px;
    position: relative;
    z-index: -1;
    -webkit-transform: translateY(70px);
    -moz-transform: translateY(70px);
    -ms-transform: translateY(70px);
    -o-transform: translateY(70px);
    transform: translateY(70px);
}
.cr-portfolio .portfolio-content-wrapper .portfolio-content h5 {
    background: #fff;
    padding-top: 10px;
    padding-bottom: 25px;
    line-height: 44px;
}
.cr-portfolio .portfolio-content-wrapper .portfolio-content .description {
    margin-bottom: 50px;
    background: #fff;
}


@media (max-width: 1500px) {
    .cr-portfolio .portfolio-content-wrapper .portfolio-img-wrapper {
        width: 60%;
        padding-right: 60px;
        padding-left: 40px;
    }
    .cr-portfolio .portfolio-content-wrapper .portfolio-content {
        width: 40%;
    }
}
@media (max-width: 1300px) {
    .cr-portfolio {
        padding-top: 90px;
        padding-bottom: 80px;
    }
    .cr-portfolio .portfolio-content-wrapper .portfolio-content .count {
        font-size: 220px;
        line-height: 170px;
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        -ms-transform: translateY(50px);
        -o-transform: translateY(50px);
        transform: translateY(50px);
    }

}

@media (max-width: 991px) {
    .cr-portfolio .portfolio-content-wrapper {
        display: block;
    }
    .cr-portfolio .portfolio-content-wrapper .portfolio-img-wrapper {
        width: 100%;
        padding: 0;
        text-align: center;
    }
    .cr-portfolio .portfolio-content-wrapper .portfolio-content {
        width: 100%;
        text-align: center;
    }

}

`
import css from 'styled-jsx/css';
export default css`


.case-study-compare {
    padding-top: 143px;
}

@media (max-width: 1199px) {
    .case-study-compare {
        padding-top: 90px;
    }
}
@media (max-width: 767px) {
    .case-study-compare {
        padding-top: 60px;
    }
}

.case-study-compare .section-title {
    max-width: 740px;
    width: 100%;
    margin-bottom: 60px;
}
@media (max-width: 767px) {
    .case-study-compare .section-title {
        margin-bottom: 30px;
    }
}

.case-study-compare .section-title h4 {
    font-family: 'Circular Std Bold';
    color: #071e3d;
    margin-bottom: 27px;
    line-height: 1.2;
}

.case-study-compare .section-title p {
    color: #071e3d;
    text-align: justify;
}

@media (max-width: 1199px) {
    .case-study-compare .section-title p {
        font-size: 20px;
        line-height: 34px;
    }
}

@media (max-width: 767px) {
    .case-study-compare .section-title p {
        text-align: left;
    }
}

.compare-imgs {
    padding-bottom: 150px;
    border-bottom: 1px solid #f5f0f0;
}
@media (max-width: 1199px) {
    .compare-imgs {
        padding-bottom: 50px;
    }
}


`
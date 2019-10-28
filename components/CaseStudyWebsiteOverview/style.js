import css from 'styled-jsx/css';
export default css`

.case-overview {
    padding-top: 145px;
}

@media (max-width: 1199px) {
    .case-overview {
        padding-top: 100px;
    }
}

.case-overview .overview-content {
    width: 100%;
    max-width: 850px;
    padding-bottom: 55px;
}

.case-overview .overview-content h4 {
    font-family: 'Circular Std Bold';
    color: #071e3d;
    margin-bottom: 27px;
    line-height: 1.2;
}

.case-overview .overview-content p {
    color: #071e3d;
    text-align: justify;
}

@media (max-width: 1199px) {
    .case-overview .overview-content p {
        font-size: 20px;
        line-height: 34px;
    }
}

@media (max-width: 767px) {
    .case-overview .overview-content p {
        text-align: left;
    }
}

.case-overview .img-area {
    background: #f7f7f7;
    padding: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

@media (max-width: 1199px) {
    .case-overview .img-area {
        padding: 40px;
    }
}

@media (max-width: 767px) {
    .case-overview .img-area {
        padding: 80px 15px 30px;
        display: block;
    }
}

.case-overview .img-area .single-img {
    margin-left: 40px;
    width: calc(100% / 3 - 27px);
}

.case-overview .img-area .single-img:first-child {
    margin-left: 0;
}

@media (max-width: 1199px) {
    .case-overview .img-area .single-img {
        margin-left: 20px;
        width: calc(100% / 3 - 14px);
    }
}

@media (max-width: 767px) {
    .case-overview .img-area .single-img {
        margin: 0 auto 30px;
        width: 100%;
        max-width: 480px;
        display: block;
    }

    .case-overview .img-area .single-img:first-child {
        margin-left: auto;
    }
}

.case-overview .img-area .single-img img {
    width: 100%;
    box-shadow: 0px 15px 40px 0px rgba(93, 92, 92, 0.1);
}



`
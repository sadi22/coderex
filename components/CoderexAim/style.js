import css from 'styled-jsx/css';
export default css`

    
.cr-aim {
    background: #00146b;
    overflow: hidden;
    padding-top: 220px;
    padding-bottom: 140px;
}
.cr-aim:before {
    content: "";
    position: absolute;
    left: -40px;
    top: -107px;
    background: #ffffff;
    width: 130%;
    height: 170px;
    transform: rotate(-5deg);
}
.cr-aim .left-bottom-btn {
    position: absolute;
    left: 0;
    bottom: 0;
}
.cr-aim .cr-aim-image {
    position: absolute;
    right: -87px;
    top: calc(50% + 45px);
    overflow: hidden;
    transform: translateY(-50%);
}
.cr-aim .aim-content {
    width: 55%;
    min-height: 713px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 0 50px 150px;
}
.cr-aim .aim-content p {
    color: #fff;
    width: 100%;
}
.cr-aim .aim-content .section-title {
    color: #fff;
    width: 100%;
    margin-bottom: 17px;
}
.cr-aim .aim-content .talk-us-btn {
    margin-top: 45px;
}


@media (min-width: 2000px) {
    .cr-aim:before {
        top: -147px;
        height: 219px;
        transform: rotate(-4deg);
    }
}

@media (max-width: 1700px) {
    .cr-aim {
        padding-top: 170px;
        padding-bottom: 80px;
    }
    .cr-aim .left-bottom-btn {
        max-width: 280px;
    }
    .cr-aim .cr-aim-image {
        top: calc(50% + 30px);
        max-width: 820px;
    }

}

@media (max-width: 1500px) {
    .cr-aim .left-bottom-btn {
        display: none;
    }
    .cr-aim .cr-aim-image {
        max-width: 710px;
    }
    .cr-aim .aim-content {
        min-height: 560px;
        padding-left: 0;
    }
}

@media (max-width: 1300px) {
    .cr-aim {
        padding-top: 156px;
    }
    .cr-aim:before {
        height: 152px;
    }
    .cr-aim .cr-aim-image {
        max-width: 660px;
    }
    .cr-aim .aim-content {
        min-height: 520px;
    }
}

@media (max-width: 1199px) {
    .cr-aim .cr-aim-image {
        max-width: 570px;
    }
    .cr-aim .aim-content {
        min-height: 410px;
    }
    .cr-aim .aim-content p {
        font-size: 20px;
        line-height: 34px;
    }
}

@media (max-width: 991px) {
    .cr-aim {
        padding-top: 144px;
        padding-bottom: 90px;
    }
    .cr-aim .cr-aim-image {
        position: relative;
        transform: inherit;
        margin: 0 auto;
        right: inherit;
        top: inherit;
        padding: 0 15px;
    }
    .cr-aim .aim-content {
        min-height: auto;
        width: 100%;
        text-align: center;
        display: block;
        padding-bottom: 0;
    }
}

@media (max-width: 575px) {
    .cr-aim {
        padding-top: 134px;
    }
}


`
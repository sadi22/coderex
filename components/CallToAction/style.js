import css from 'styled-jsx/css';
export default css`


.cr-cta {
    padding-top: 150px;
    display: flex;
    flex-flow: row wrap;
}
.cr-cta .overlay {
    left: inherit;
    right: 0;
    height: 344px;
    max-width: 595px;
    background: #f3f7ff;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
}
.cr-cta .cta-img {
    position: relative;
    left: -75px;
    bottom: -2px;
    width: 43%;
}
.cr-cta .cta-content {
    width: 57%;
    padding-left: 10px;
    padding-top: 60px;
    z-index: 1;
    position: relative;
}
.cr-cta .cta-content h2 {
    margin-bottom: 42px;
    max-width: 710px;
}


@media (max-width: 1500px) {
    .cr-cta .overlay {
        height: 244px;
    }
}

@media (max-width: 1300px) {
    .cr-cta {
        padding-top: 100px;
    }
    .cr-cta .overlay {
        max-width: 395px;
    }
    .cr-cta .cta-img {
        width: 48%;
    }
    .cr-cta .cta-content {
        padding-top: 20px;
        width: 52%;
    }
}

@media (max-width: 1199px) {
    .cr-cta .cta-img {
        left: -45px;
    }
}

@media (max-width: 991px) {
    .cr-cta {
        padding: 100px 15px;
    }
    .cr-cta .overlay {
        display: none;
    }
    .cr-cta .cta-img {
        width: auto;
        left: 0;
        max-width: 100%;
        margin: 0 auto;
        display: block;
    }
    .cr-cta .cta-content {
        width: 100%;
        padding-left: 0;
        text-align: center;
        padding-top: 40px;
    }
    .cr-cta .cta-content h2 {
        margin: 0 auto 42px;
    }
}

`




import css from 'styled-jsx/css';
export default css`

.laptop-view {
    background: #f6f6f6;
    padding-top: 60px;
    min-height: 270px;
}

.laptop-view .overlay {
    background: #09254e;
    height: 370px;
    top: inherit;
    bottom: 0;
}

@media (max-width: 991px) {
    .laptop-view .overlay {
        height: 220px;
    }
}

@media (max-width: 575px) {
    .laptop-view .overlay {
        height: 120px;
    }
}

.laptop-view .img-area img {
    display: block;
    margin: 0 auto;
    transform: translateY(26px);
}

@media (max-width: 1300px) {
    .laptop-view .img-area img {
        transform: translateY(22px);
    }
}

@media (max-width: 991px) {
    .laptop-view .img-area img {
        transform: translateY(14px);
    }
}

@media (max-width: 575px) {
    .laptop-view .img-area img {
        transform: translateY(11px);
    }
}


`
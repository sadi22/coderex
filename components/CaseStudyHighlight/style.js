import css from 'styled-jsx/css';
export default css`

.section-highlight {
    padding: 150px 0;
    background-color: #00146b;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

@media (max-width: 1199px) {
    .section-highlight {
        padding: 100px 0;
    }
}

@media (max-width: 767px) {
    .section-highlight {
        padding: 70px 0;
    }
}

.section-highlight .highlight-content {
    text-align: center;
    min-height: 200px;
}

@media (max-width: 1199px) {
    .section-highlight .highlight-content {
        max-width: 550px;
        margin: 0 auto;
    }
}

.section-highlight .highlight-content img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}

.mockup-view .mockup-view-img {
    width: 100%;
}


`
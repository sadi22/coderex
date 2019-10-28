import css from 'styled-jsx/css';
export default css`

.related-portfolio {
    padding-bottom: 48px;
    padding-top: 140px;
}

@media (max-width: 1199px) {
    .related-portfolio {
        padding-top: 94px;
    }
}

@media (max-width: 991px) {
    .related-portfolio {
        padding-top: 74px;
    }
}

.related-portfolio .section-title {
    margin-bottom: 65px;
}

.related-portfolio .portfolio-wrapper .single-portfolio {
    margin-bottom: 0;
}

@media (max-width: 767px) {
    .related-portfolio .portfolio-wrapper .single-portfolio {
        margin-bottom: 40px;
    }
}

@media (max-width: 767px) {
    .related-portfolio .portfolio-wrapper .single-portfolio:last-child {
        margin-bottom: 0;
    }
}



`
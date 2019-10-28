import css from 'styled-jsx/css';
export default css`

.mobile-view .mobile-view-wrapper {
    background: #f7f7f7;
    padding: 150px 115px;
    margin-top: 150px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

@media (max-width: 1199px) {
    .mobile-view .mobile-view-wrapper {
        margin-top: 50px;
        padding: 50px;
    }
}

@media (max-width: 991px) {
    .mobile-view .mobile-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 767px) {
    .mobile-view .mobile-view-wrapper {
        display: block;
    }
}

.mobile-view .mobile-view-wrapper .single-img {
    margin-left: 60px;
    width: calc(100% / 3 - 40px);
}

@media (max-width: 1199px) {
    .mobile-view .mobile-view-wrapper .single-img {
        margin-left: 20px;
        width: calc(100% / 3 - 14px);
    }
}

@media (max-width: 767px) {
    .mobile-view .mobile-view-wrapper .single-img {
        margin-left: 0px;
        margin-bottom: 30px;
        width: 100%;
    }

    .mobile-view .mobile-view-wrapper .single-img:last-child {
        margin-bottom: 0;
    }
}

.mobile-view .mobile-view-wrapper .single-img img {
    width: 100%;
}

.mobile-view .mobile-view-wrapper .single-img:first-child {
    margin-left: 0;
}



`
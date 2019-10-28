import css from 'styled-jsx/css';
export default css`


.project-typography {
    padding-top: 75px;
    padding-bottom: 175px;
}

@media (max-width: 1199px) {
    .project-typography {
        padding-top: 50px;
        padding-bottom: 110px;
    }
}

@media (max-width: 767px) {
    .project-typography {
        padding-top: 40px;
        padding-bottom: 70px;
    }
}

.project-typography .typography-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

@media (max-width: 767px) {
    .project-typography .typography-wrapper {
        display: block;
    }
}

.project-typography .typo-title {
    padding-right: 30px;
    max-width: 315px;
    width: 100%;
}

@media (max-width: 767px) {
    .project-typography .typo-title {
        padding-right: 0;
        max-width: 100%;
        width: 100%;
        text-align: center;
        margin: 0 auto;
    }
}

.project-typography .typo-title h4 {
    display: inline-block;
    position: relative;
    text-transform: capitalize;
}
.project-typography .typo-title h4:after {
    content: "";
    position: absolute;
    left: calc(100% + 35px);
    top: 24px;
    width: 80px;
    height: 2px;
    background-color: #00b4ff;
}

@media (max-width: 767px) {
    .project-typography .typo-title h4:after {
        display: none;
    }
}

.project-typography .project-brand-color {
    max-width: 370px;
    width: 100%;
}

@media (max-width: 1300px) {
    .project-typography .project-brand-color {
        max-width: 290px;
        margin: 0 auto;
        width: 100%;
    }
}

@media (max-width: 991px) {
    .project-typography .project-brand-color {
        max-width: 220px;
    }
}

@media (max-width: 767px) {
    .project-typography .project-brand-color {
        margin-top: 40px;
    }
}

.project-typography .project-font-family {
    max-width: 415px;
    padding-left: 30px;
    width: 100%;
    text-align: right;
}

@media (max-width: 1199px) {
    .project-typography .project-font-family {
        max-width: 100%;
        padding-left: 0;
        text-align: left;
        margin-top: 40px;
        display: flex;
        flex-flow: row wrap;
    }
}

@media (max-width: 767px) {
    .project-typography .project-font-family {
        display: block;
    }
}

.project-typography .project-font-family .single-font-family {
    margin-bottom: 55px;
}

@media (max-width: 1199px) {
    .project-typography .project-font-family .single-font-family {
        margin-bottom: 0;
        padding-right: 50px;
    }
}

@media (max-width: 767px) {
    .project-typography .project-font-family .single-font-family {
        margin-bottom: 40px;
        width: 100%;
        padding-right: 15px;
        text-align: center;
        padding-left: 15px;
    }
    .project-typography .project-font-family .single-font-family img{
        margin: 0 auto;
        display: block;
    }
}

.project-typography .project-font-family .single-font-family:last-child {
    margin-bottom: 0;
}

.project-typography .project-font-family .single-font-family h5 {
    text-transform: capitalize;
    margin-bottom: 30px;
}

@media (max-width: 767px) {
    .project-typography .project-font-family .single-font-family h5 {
        margin-bottom: 20px;
    }
}
.project-typography .project-color {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 180px;
}

@media (max-width: 1199px) {
    .project-typography .project-color {
        margin-top: 60px;
    }
}

@media (max-width: 575px) {
    .project-typography .project-color {
        display: block;
    }
}

.project-typography .project-color .single-color {
    width: 215px;
    height: 215px;
    background: #f7f9fe;
    border-radius: 100%;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 17px 0px #eaf0fb;
    font-family: 'CircularStd-Medium';
    position: relative;
}

@media (max-width: 1300px) {
    .project-typography .project-color .single-color {
        width: 175px;
        height: 175px;
    }
}

@media (max-width: 767px) {
    .project-typography .project-color .single-color {
        width: 115px;
        height: 115px;
        font-size: 15px;
        box-shadow: 0 10px 0px #eaf0fb;
    }
}

@media (max-width: 575px) {
    .project-typography .project-color .single-color {
        margin: 0px auto 40px;
    }
}

.project-typography .project-color .single-color:before {
    content: "";
    border: 1px dashed #e6e9f1;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    top: -30px;
    z-index: -1;
}

@media (max-width: 767px) {
    .project-typography .project-color .single-color:before {
        top: -15px;
    }
}
@media (max-width: 1199px) {
    .project-typography .project-color .color-1 {
        order: 2;
    }
}
@media (max-width: 1199px) {
    .project-typography .project-color .color-2 {
        order: 3;
    }
}
@media (max-width: 1199px) {
    .project-typography .project-color .color-3 {
        order: 4;
    }
}

.project-typography .project-color .color-title {
    display: inline-block;
    position: relative;
    text-transform: capitalize;
}

@media (max-width: 1199px) {
    .project-typography .project-color .color-title {
        order: 1;
        width: 100%;
        margin-bottom: 50px;
    }
}

@media (max-width: 767px) {
    .project-typography .project-color .color-title {
        text-align: center;
    }
}

@media (max-width: 575px) {
    .project-typography .project-color .color-title {
        display: none;
    }
}

.project-typography .project-color .color-title h4 {
    display: inline-block;
}

.project-typography .project-color .color-title h4:before {
    content: "";
    position: absolute;
    right: calc(100% + 33px);
    top: 24px;
    width: 80px;
    height: 2px;
    background-color: #00b4ff;
}

@media (max-width: 1199px) {
    .project-typography .project-color .color-title h4:before {
        left: calc(100% + 20px);
        right: inherit;
    }
}

@media (max-width: 767px) {
    .project-typography .project-color .color-title h4:before {
        display: none;
    }
}



.complete-view {
    padding: 110px 0 100px;
    background: #f7f7f7;
}

@media (max-width: 1199px) {
    .complete-view {
        padding: 70px 0 60px;
    }
}

.complete-view .complete-view-img {
    text-align: center;
}

.complete-view .complete-view-img img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
}


`
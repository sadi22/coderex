import css from 'styled-jsx/css';
import theme from '../../styles/theme';

export default css`
  

.cr-footer-widget {
    background: #00146b;
    padding-top: 120px;
    position: relative;
}
.cr-footer-widget .widget-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
}
.cr-footer-widget .widget .widget-title {
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 38px;
}
.cr-footer-widget .widget ul li a {
    color: #dde0f0;
    font-size: 18px;
    margin-bottom: 4px;
    display: inline-block;
}
.cr-footer-widget .widget ul li a:hover {
    color: #00b4ff;
    padding-left: 5px;
}
.cr-footer-widget .widget img {
    margin-bottom: 50px;
}
.cr-footer-widget .widget p {
    font-size: 18px;
    line-height: 30px;
    color: #fff;
}
.cr-footer-widget .widget address {
    font-style: normal;
}
.cr-footer-widget .widget address p {
    margin-bottom: 26px;
}
.cr-footer-widget .widget address p span {
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    font-family: 'Circular Std Bold';
    margin-bottom: 5px;
}
.cr-footer-widget .widget address p a {
    color: #fff;
}
.cr-footer-widget .widget address p a:hover {
    text-decoration: underline;
}
.cr-footer-widget .widget .form-wrapper {
    border: 1px dashed #00b4ff;
    padding: 7px;
    border-radius: 50px;
}
.cr-footer-widget .widget .form-wrapper form {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
}
.cr-footer-widget .widget .form-wrapper button {
    width: 45px;
    height: 45px;
    padding: 1px;
    border-radius: 100%;
    line-height: 45px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background: #00b4ff;
    color: #fff;
}
.cr-footer-widget .widget .form-wrapper input {
    width: 86%;
    border: none;
    border-radius: 50px;
    height: 45px;
    background: transparent;
    color: #fff;
    font-family: "Didact Gothic", sans-serif;
}
.cr-footer-widget .widget .form-wrapper input::-webkit-input-placeholder {
    color: #fff;
    opacity: 0.5;
}
.cr-footer-widget .widget .form-wrapper input::-moz-placeholder {
    color: #fff;
    opacity: 0.5;
}
.cr-footer-widget .widget .form-wrapper input:-ms-input-placeholder {
    color: #fff;
    opacity: 0.5;
}
.cr-footer-widget .widget .form-wrapper input:-moz-placeholder {
    color: #fff;
    opacity: 0.5;
}
.cr-footer-widget .address {
    width: 25%;
}
.cr-footer-widget .widget_nav_menu {
    max-width: 230px;
    width: 100%;
    padding-right: 30px;
}
.cr-footer-widget .newsletter {
    width: 25%;
}
.cr-footer-widget .newsletter p {
    margin-bottom: 22px;
    color: #dde0f0;
}
.cr-footer-widget .newsletter button svg {
    width: 18px;
    position: relative;
    top: 3px;
}
.cr-footer-widget footer {
    border-top: 1px dashed #35458a;
    margin-top: 105px;
    padding: 32px 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}
.cr-footer-widget footer .copyright-txt {
    color: #dde0f0;
    font-size: 17px;
    line-height: 28px;
    width: 40%;
    padding-right: 20px;
}
.cr-footer-widget footer .menu {
    width: 60%;
    text-align: right;
}
.cr-footer-widget footer .menu li {
    display: inline-block;
    margin-left: 20px;
}
.cr-footer-widget footer .menu li:first-child {
    margin-left: 0;
}
.cr-footer-widget footer .menu li a {
    color: #dde0f0;
    font-size: 17px;
    line-height: 28px;
}
.cr-footer-widget footer .menu li a:hover {
    color: #00b4ff;
}


@media (max-width: 1500px) {
    .cr-footer-widget .address {
        width: 30%;
    }
    .cr-footer-widget .widget_nav_menu {
        max-width: 230px;
    }
    .cr-footer-widget .newsletter {
        width: 30%;
    }

}
@media (max-width: 1300px) {
    .cr-footer-widget .address {
        width: 25%;
    }
    .cr-footer-widget .widget_nav_menu {
        max-width: 190px;
        padding-right: 20px;
    }
}
@media (max-width: 1199px) {
    .cr-footer-widget .widget_nav_menu {
        max-width: 150px;
    }
    .cr-footer-widget footer {
        margin-top: 40px;
    }

}
@media (max-width: 991px) {
    .cr-footer-widget {
        padding-top: 90px;
    }
    .cr-footer-widget .widget .widget-title {
        margin-bottom: 12px;
    }
    .cr-footer-widget .widget {
        margin-bottom: 40px;
    }
    .cr-footer-widget .address {
        width: 60%;
        padding-right: 30px;
    }
    .cr-footer-widget .widget_nav_menu {
        max-width: 100%;
        width: 30%;
    }
    .cr-footer-widget .newsletter {
        width: 60%;
    }
    .cr-footer-widget footer {
        margin-top: 10px;
        flex-flow: column-reverse;
        text-align: center;
    }
    .cr-footer-widget footer .copyright-txt {
        width: 100%;
        padding-right: 0;
    }
    .cr-footer-widget footer .menu {
        width: 100%;
        text-align: center;
    }

}

@media (max-width: 575px) {
    .cr-footer-widget .widget {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    .cr-footer-widget .address {
        width: 100%;
        padding-right: 0;
    }
    .cr-footer-widget .widget_nav_menu {
        max-width: 400px;
        width: 100%;
    }
    .cr-footer-widget .newsletter {
        width: 100%;
    }

}




`
import css from 'styled-jsx/css';
export default css`


.cr-contact {
    margin-bottom: 107px;
}
.cr-contact .contact-illustration {
    background: #00146b;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.cr-contact .contact-illustration img {
    width: 100%;
}
.cr-contact .contact-content {
    max-width: 700px;
    padding-left: 100px;
    width: 100%;
    padding-top: 180px;
    margin-left: auto;
}
.cr-contact .contact-content h1 {
    margin-bottom: 5px;
    margin-left: -7px;
}
.cr-contact .contact-content h1:before {
    content: "";
    position: absolute;
    left: -174px;
    top: 45px;
    width: 134px;
    height: 2px;
    background: #00b4ff;
}
.cr-contact .contact-content .description {
    margin-bottom: 45px;
}
.cr-contact .contact-content .groups {
    margin-bottom: 30px;
}
.cr-contact .contact-content .groups textarea,
.cr-contact .contact-content .groups input {
    font-family: "Didact Gothic", sans-serif;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.cr-contact .contact-content .groups textarea::-webkit-input-placeholder,
.cr-contact .contact-content .groups input::-webkit-input-placeholder {
    color: #23252d;
}
.cr-contact .contact-content .groups textarea::-moz-placeholder,
.cr-contact .contact-content .groups input::-moz-placeholder {
    color: #23252d;
}
.cr-contact .contact-content .groups textarea:-ms-input-placeholder,
.cr-contact .contact-content .groups input:-ms-input-placeholder {
    color: #23252d;
}
.cr-contact .contact-content .groups textarea:-moz-placeholder,
.cr-contact .contact-content .groups input:-moz-placeholder {
    color: #23252d;
}

.cr-contact .contact-content .groups textarea:focus,
.cr-contact .contact-content .groups input:focus {
    background: transparent;
}
.cr-contact .contact-content button.cr-btn-default {
    background: transparent;
    border: none;
    width: 201px;
    padding: 0 15px;
    margin-left: auto;
    display: block;
}



@media (max-width: 1500px) {
    .cr-contact {
        margin-bottom: 0;
    }
}

@media (max-width: 1300px) {
    .cr-contact .contact-content {
        max-width: 600px;
    }
    .cr-contact .contact-content h1:before {
        left: -146px;
        top: 33px;
    }
}

@media (max-width: 1199px) {
    .cr-contact .contact-content {
        max-width: 500px;
    }
}

@media (max-width: 991px) {
    .cr-contact .contact-illustration {
        width: 100%;
        display: block;
        position: relative;
        height: auto;
        padding-top: 120px;
    }
    .cr-contact .contact-content {
        max-width: 600px;
        padding-top: 90px;
        text-align: center;
        margin: 0 auto;
        padding-left: 0;
    }
    .cr-contact .contact-content h1:before {
        display: none;
    }
    .cr-contact .contact-content button.cr-btn-default {
        margin-right: auto;
    }

}





`
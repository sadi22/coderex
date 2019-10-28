import css from 'styled-jsx/css';
export default css`

.cr-header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 57px 65px 10px;
}
.cr-header .toggle-bar {
    width: 53px;
    height: 53px;
    background: #fff;
    border-radius: 100%;
    padding: 18px 8px;
    cursor: pointer;
}
.cr-header .toggle-bar span {
    background: #000;
    display: block;
    height: 3px;
    width: 22px;
    margin: 0 auto 4px;
}
.cr-header nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}
.contact .cr-header .toggle-bar,
.portfolio .cr-header .toggle-bar {
    box-shadow: 0.156px 0.988px 2px 0px rgba(3, 22, 109, 0.12);
}
img.logo-white {
    display: none;
}
.cr-navigation .navigation-wrapper {
    height: 100vh;
    top: 0;
    width: 100%;
    visibility: hidden;
    background: #00146b;
    position: fixed;
    right: -100%;
    z-index: 999;
    -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -ms-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
}
.cr-navigation .navigation-wrapper.visible {
    right: 0;
    visibility: visible;
    -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    -ms-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
}
.cr-navigation .navigation-wrapper .cross-bar {
    cursor: pointer;
    height: 53px;
    right: 80px;
    position: fixed;
    top: 58px;
    width: 53px;
    background: #fff;
    border-radius: 100%;
    padding: 10px 10px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.cr-navigation .navigation-wrapper .cross-bar span {
    background: #444;
    display: block;
    height: 3px;
    position: absolute;
    width: 24px;
    top: 25px;
    left: 15px;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
}
.cr-navigation .navigation-wrapper .cross-bar span:first-child {
    -webkit-transform: rotate(-44deg);
    -moz-transform: rotate(-44deg);
    -ms-transform: rotate(-44deg);
    -o-transform: rotate(-44deg);
    transform: rotate(-44deg);
}
.cr-navigation .navigation-wrapper .cross-bar span:last-child {
    -webkit-transform: rotate(43deg);
    -moz-transform: rotate(43deg);
    -ms-transform: rotate(43deg);
    -o-transform: rotate(43deg);
    transform: rotate(43deg);
}
.cr-navigation .navigation-wrapper.visible .cross-bar {
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
}
.cr-navigation .navigation-overlay {
    height: 100vh;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    right: -100%;
    position: fixed;
    z-index: 999;
    -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -ms-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
}
.cr-navigation .navigation-overlay.open-overlay {
    right: 0;
    -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -ms-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
.cr-navigation .navigation-item {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    justify-content: center;
}
.cr-navigation .navigation-item ul li {
    position: relative;
    display: inline-block;
    margin: 0 20px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-80px);
    -moz-transform: translateY(-80px);
    -ms-transform: translateY(-80px);
    -o-transform: translateY(-80px);
    transform: translateY(-80px);
}
.cr-navigation .navigation-item ul li a {
    color: #fff;
    display: block;
    font-size: 30px;
    font-weight: 500;
    line-height: 60px;
    overflow: hidden;
    text-transform: capitalize;
}
.cr-navigation .navigation-item ul li:nth-child(1) {
    -webkit-transition: 0.3s linear 0s;
    -moz-transition: 0.3s linear 0s;
    -ms-transition: 0.3s linear 0s;
    -o-transition: 0.3s linear 0s;
    transition: 0.3s linear 0s;
}
.cr-navigation .navigation-item ul li:nth-child(2) {
    -webkit-transition: 0.3s linear 0.1s;
    -moz-transition: 0.3s linear 0.1s;
    -ms-transition: 0.3s linear 0.1s;
    -o-transition: 0.3s linear 0.1s;
    transition: 0.3s linear 0.1s;
}
.cr-navigation .navigation-item ul li:nth-child(3) {
    -webkit-transition: 0.3s linear 0.2s;
    -moz-transition: 0.3s linear 0.2s;
    -ms-transition: 0.3s linear 0.2s;
    -o-transition: 0.3s linear 0.2s;
    transition: 0.3s linear 0.2s;
}
.cr-navigation .navigation-item ul li:nth-child(4) {
    -webkit-transition: 0.3s linear 0.3s;
    -moz-transition: 0.3s linear 0.3s;
    -ms-transition: 0.3s linear 0.3s;
    -o-transition: 0.3s linear 0.3s;
    transition: 0.3s linear 0.3s;
}
.cr-navigation .navigation-item ul li:nth-child(5) {
    -webkit-transition: 0.3s linear 0.4s;
    -moz-transition: 0.3s linear 0.4s;
    -ms-transition: 0.3s linear 0.4s;
    -o-transition: 0.3s linear 0.4s;
    transition: 0.3s linear 0.4s;
}
.cr-navigation .navigation-item ul li:nth-child(6) {
    -webkit-transition: 0.3s linear 0.5s;
    -moz-transition: 0.3s linear 0.5s;
    -ms-transition: 0.3s linear 0.5s;
    -o-transition: 0.3s linear 0.5s;
    transition: 0.3s linear 0.5s;
}
.cr-navigation .navigation-item ul li.has-children {
    padding-right: 35px;
}
.cr-navigation .navigation-item ul li svg {
    width: 25px;
    position: absolute;
    top: 17px;
    right: 0;
    cursor: pointer;
    padding: 5px;
}
.cr-navigation .navigation-item ul li svg path {
    fill: #fff;
}
.cr-navigation .navigation-item ul li .dropdown {
    display: none;
    padding-left: 0;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 240px;
}
.cr-navigation .navigation-item ul li .dropdown li a {
    font-size: 18px;
    line-height: 38px;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(6) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(5) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(4) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(3) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(2) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s;
}
.cr-navigation .navigation-wrapper.visible .navigation-item ul li:nth-child(1) {
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s;
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s;
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s;
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s;
}



@media (max-width: 1700px) {
    .cr-header {
        padding: 35px 36px 10px;
    }
}

@media (max-width: 1500px) {
    .cr-header {
        padding: 35px 0 10px;
    }
}

@media (max-width: 1500px) {
    .cr-header .container-fluid {
        max-width: 1280px;
    }
}

@media (max-width: 1300px) {
    .cr-header .container-fluid {
        max-width: 1140px;
    }
}

@media (max-width: 1199px) {
    .cr-header .container-fluid {
        max-width: 960px;
    }

    img.logo-white {
        display: block;
    }
    img.logo-black {
        display: none;
    }
    .cr-navigation .navigation-wrapper .cross-bar {
        right: 47px;
        top: 35px;
    }

}

@media (max-width: 991px) {
    .cr-header .container-fluid {
        max-width: 720px;
    }
}

@media (max-width: 767px) {
    .cr-header .container-fluid {
        max-width: 540px;
    }

    .cr-navigation .navigation-wrapper .cross-bar {
        right: 33px;
    }
    .cr-navigation .navigation-item > ul {
        overflow-y: auto;
        min-width: 250px;
    }
    .cr-navigation .navigation-item ul li {
        margin: 0;
        display: block;
    }
    .cr-navigation .navigation-item ul li .dropdown {
        margin-left: 20px;
        position: relative;
        left: inherit;
        top: inherit;
        min-width: inherit;
    }
}

@media (max-width: 575px) {
    .cr-header .container-fluid {
        max-width: 100%;
    }
}

`
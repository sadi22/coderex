import css from 'styled-jsx/css';
import theme from './theme';

export default css`
#nprogress {
    pointer-events: none
}

#nprogress .bar {
    background: ${theme.colors.primaryColor};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px
}

#nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #1fc1c3, 0 0 5px;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0, -4px);
    -ms-transform: rotate(3deg) translate(0, -4px);
    transform: rotate(3deg) translate(0, -4px)
}

#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px
}

#nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #1fc1c3;
    border-left-color: #1fc1c3;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner .4s linear infinite;
    animation: nprogress-spinner .4s linear infinite
}

.nprogress-custom-parent {
    overflow: hidden;
    position: relative
}

.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
    position: absolute
}

@-webkit-keyframes nprogress-spinner {
    0% {
        -webkit-transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(360deg)
    }
}

@keyframes nprogress-spinner {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
}
`
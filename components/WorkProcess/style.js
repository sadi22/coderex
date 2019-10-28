import css from 'styled-jsx/css';
export default css`

.cr-work-procedure {
    background: #00146b;
    padding-top: 55px;
}
.cr-work-procedure .section-title {
    margin-bottom: 124px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar {
    display: block;
    width: 100%;
    background: #1e307d;
    height: 2px;
    position: absolute;
    top: 122px;
    z-index: 0;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar:after,
.cr-work-procedure .procedure-content-wrapper .progress-bar:before {
    content: "";
    width: 20px;
    height: 20px;
    background: #00b4ff;
    position: absolute;
    border-radius: 100%;
    top: 50%;
    margin-top: -10px;
    z-index: 2;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar:before {
    left: 0;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar:after {
    right: 0;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper {
    width: 100%;
    background: #1e307d;
    height: 2px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span {
    height: 11px;
    width: 2px;
    background: #1e307d;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    transition: all 0.5s ease;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe1 {
    left: 70px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe2 {
    left: 115px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe3 {
    left: 160px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe4 {
    left: 38.2%;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe5 {
    right: 38.2%;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe6 {
    right: 160px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe7 {
    right: 115px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe8 {
    right: 70px;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .progress-bar-inner {
    position: absolute;
    width: 0;
    background: #00b4ff;
    height: 2px;
    z-index: 1;
}
.cr-work-procedure .procedure-content-wrapper .progress-bar .progress-bar-inner img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -3px;
}
.cr-work-procedure .procedure-content {
    max-width: 985px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-between;
}
.cr-work-procedure .procedure-content .single-process {
    width: calc(100% / 3);
    text-align: center;
    position: relative;
    z-index: 2;
}
.cr-work-procedure .procedure-content .single-process .icon {
    width: 245px;
    height: 245px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #5669bb;
    border-radius: 100%;
    margin: 0 auto 30px;
    overflow: hidden;
    background: #00146b;
}
.cr-work-procedure .procedure-content .single-process h5 {
    color: #fff;
    line-height: 35px;
    font-size: 26px;
    max-width: 220px;
    margin: 0 auto;
}
.cr-work-procedure .procedure-content .process1 span {
    display: block;
}
.cr-work-procedure .procedure-content .process1 .parent1 {
    width: 80px;
    height: 80px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    position: relative;
}
.cr-work-procedure .procedure-content .process1 .parent1 span {
    width: 31px;
    height: 22px;
    background: #fff;
    margin-bottom: 4px;
    position: absolute;
}
.cr-work-procedure .procedure-content .process1 .parent1 .child1 {
    bottom: 30px;
    left: 8px;
    background: #00b4ff;
}
.cr-work-procedure .procedure-content .process1 .parent1 .child2 {
    bottom: 4px;
    left: 8px;
}
.cr-work-procedure .procedure-content .process1 .parent1 .child3 {
    bottom: 4px;
    left: 43px;
    background: #00b4ff;
}
.cr-work-procedure .procedure-content .process1 .parent1 .child4 {
    bottom: 30px;
    left: 43px;
    background: #3939cd;
}
.cr-work-procedure .procedure-content .process1 .parent1 .child5 {
    width: 54px;
    height: 36px;
    bottom: 56px;
    left: 43px;
    background: #00b4ff;
}
.cr-work-procedure .procedure-content .process2 svg {
    width: 150px;
}
.cr-work-procedure .procedure-content .process2 svg .st0 {
    fill: #00B4FF;
}
.cr-work-procedure .procedure-content .process2 svg .st1 {
    fill: #FFFFFF;
}
.cr-work-procedure .procedure-content .process2 svg .st2 {
    fill: #3939CD;
}
.cr-work-procedure .procedure-content .process3 svg {
    width: 120px;
    overflow: hidden;
}
.cr-work-procedure .procedure-content .process3 svg .st0 {
    fill: #00B4FF;
}
.cr-work-procedure .procedure-content .process3 svg .st1 {
    fill: #FFFFFF;
}
.cr-work-procedure .procedure-content .process3 svg .st2 {
    fill: #3939CD;
}
.cr-work-procedure .procedure-content .process3 svg .st3 {
    fill: #FFFFFF;
}
.cr-work-procedure .procedure-btn {
    margin-top: 70px;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar-inner {
    -webkit-animation: innerProgressBar 10s linear 1 1s;
    -moz-animation: innerProgressBar 10s linear 1 1s;
    -ms-animation: innerProgressBar 10s linear 1 1s;
    -o-animation: innerProgressBar 10s linear 1 1s;
    animation: innerProgressBar 10s linear 1 1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span {
    background: #00b4ff;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe1 {
    transition-delay: 1.1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe2 {
    transition-delay: 1.3s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe3 {
    transition-delay: 1.5s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe4 {
    transition-delay: 4s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe5 {
    transition-delay: 7.3s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe6 {
    transition-delay: 10.5s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe7 {
    transition-delay: 10.7s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .progress-bar .stripe-wrapper span.stripe8 {
    transition-delay: 10.8s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child1 {
    -webkit-animation: boxMove2 3s linear 1 1s;
    -moz-animation: boxMove2 3s linear 1 1s;
    -ms-animation: boxMove2 3s linear 1 1s;
    -o-animation: boxMove2 3s linear 1 1s;
    animation: boxMove2 3s linear 1 1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child2 {
    -webkit-animation: boxMove3 3s linear 1 1s;
    -moz-animation: boxMove3 3s linear 1 1s;
    -ms-animation: boxMove3 3s linear 1 1s;
    -o-animation: boxMove3 3s linear 1 1s;
    animation: boxMove3 3s linear 1 1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child3 {
    -webkit-animation: boxMove4 3s linear 1 1s;
    -moz-animation: boxMove4 3s linear 1 1s;
    -ms-animation: boxMove4 3s linear 1 1s;
    -o-animation: boxMove4 3s linear 1 1s;
    animation: boxMove4 3s linear 1 1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child4 {
    -webkit-animation: boxMove1 3s linear 1 1s;
    -moz-animation: boxMove1 3s linear 1 1s;
    -ms-animation: boxMove1 3s linear 1 1s;
    -o-animation: boxMove1 3s linear 1 1s;
    animation: boxMove1 3s linear 1 1s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process2 svg {
    -webkit-animation: rocketMove 1.5s cubic-bezier(0.41, 0.5, 0.69, 0.57) 1 5s;
    -moz-animation: rocketMove 1.5s cubic-bezier(0.41, 0.5, 0.69, 0.57) 1 5s;
    -ms-animation: rocketMove 1.5s cubic-bezier(0.41, 0.5, 0.69, 0.57) 1 5s;
    -o-animation: rocketMove 1.5s cubic-bezier(0.41, 0.5, 0.69, 0.57) 1 5s;
    animation: rocketMove 1.5s cubic-bezier(0.41, 0.5, 0.69, 0.57) 1 5s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st0 {
    -webkit-animation: polygonMove 1.5s linear 1 8.4s;
    -moz-animation: polygonMove 1.5s linear 1 8.4s;
    -ms-animation: polygonMove 1.5s linear 1 8.4s;
    -o-animation: polygonMove 1.5s linear 1 8.4s;
    animation: polygonMove 1.5s linear 1 8.4s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st1 {
    -webkit-animation: polygonMove 1.5s linear 1 8.3s;
    -moz-animation: polygonMove 1.5s linear 1 8.3s;
    -ms-animation: polygonMove 1.5s linear 1 8.3s;
    -o-animation: polygonMove 1.5s linear 1 8.3s;
    animation: polygonMove 1.5s linear 1 8.3s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st2 {
    -webkit-animation: polygonMove 1.5s linear 1 8.2s;
    -moz-animation: polygonMove 1.5s linear 1 8.2s;
    -ms-animation: polygonMove 1.5s linear 1 8.2s;
    -o-animation: polygonMove 1.5s linear 1 8.2s;
    animation: polygonMove 1.5s linear 1 8.2s;
}
.cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st3 {
    -webkit-animation: polygonMove 1.5s linear 1 8s;
    -moz-animation: polygonMove 1.5s linear 1 8s;
    -ms-animation: polygonMove 1.5s linear 1 8s;
    -o-animation: polygonMove 1.5s linear 1 8s;
    animation: polygonMove 1.5s linear 1 8s;
}

@-webkit-keyframes boxMove1 {
    0%, 10% { bottom: 30px; left: 43px;}
    25%, 35% { bottom: 30px; left: 8px;}
    50%, 60% { bottom: 4px; left: 8px;}
    75%, 85% { bottom: 4px; left: 43px;}
    100% { bottom: 30px; left: 43px;}
}
@keyframes boxMove1 {
    0%, 10% { bottom: 30px; left: 43px; }
    25%, 35% { bottom: 30px; left: 8px; }
    50%, 60% { bottom: 4px; left: 8px; }
    75%, 85% { bottom: 4px; left: 43px; }
    100% { bottom: 30px; left: 43px; }
}

@-webkit-keyframes boxMove2 {
    0%, 10% { bottom: 30px; left: 8px; }
    25%, 35% { bottom: 4px; left: 8px; }
    50%, 60% { bottom: 4px; left: 43px; }
    75%, 85% { bottom: 30px; left: 43px; }
    100% { bottom: 30px; left: 8px; }
}
@keyframes boxMove2 {
    0%, 10% { bottom: 30px; left: 8px; }
    25%, 35% { bottom: 4px; left: 8px; }
    50%, 60% { bottom: 4px; left: 43px; }
    75%, 85% { bottom: 30px; left: 43px; }
    100% { bottom: 30px; left: 8px; }
}

@-webkit-keyframes boxMove3 {
    0%, 10% { bottom: 4px; left: 8px; }
    25%, 35% { bottom: 4px; left: 43px; }
    50%, 60% { bottom: 30px; left: 43px; }
    75%, 85% { bottom: 30px; left: 8px; }
    100% { bottom: 4px; left: 8px; }
}
@keyframes boxMove3 {
    0%, 10% { bottom: 4px; left: 8px; }
    25%, 35% { bottom: 4px; left: 43px; }
    50%, 60% { bottom: 30px; left: 43px; }
    75%, 85% { bottom: 30px; left: 8px; }
    100% { bottom: 4px; left: 8px; }
}

@-webkit-keyframes boxMove4 {
    0%, 10% { bottom: 4px; left: 43px; }
    25%, 35% { bottom: 30px; left: 43px; }
    50%, 60% { bottom: 30px; left: 8px; }
    75%, 85% { bottom: 4px; left: 8px; }
    100% { bottom: 4px; left: 43px; }
}
@keyframes boxMove4 {
    0%, 10% { bottom: 4px; left: 43px; }
    25%, 35% { bottom: 30px; left: 43px; }
    50%, 60% { bottom: 30px; left: 8px; }
    75%, 85% { bottom: 4px; left: 8px; }
    100% { bottom: 4px; left: 43px; }
}

@keyframes rocketMove {
    0% {
        transform: translateY(0);
    }
    40% {
        visibility: visible;
        opacity: 1;
    }
    45% {
        transform: translateY(-200px);
        visibility: hidden;
        opacity: 0;
    }
    55% {
        transform: translateY(200px);
        visibility: hidden;
        opacity: 0;
    }
    60% {
        visibility: visible;
        opacity: 1;
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes polygonMove {
    0% {
        transform: translateY(0);
    }
    40% {
        visibility: visible;
        opacity: 1;
    }
    45% {
        transform: translateY(-130px);
        visibility: hidden;
        opacity: 0;
    }
    55% {
        transform: translateY(130px);
        visibility: hidden;
        opacity: 0;
    }
    60% {
        visibility: visible;
        opacity: 1;
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes innerProgressBar {
    0% { width: 0%; opacity: 1; }
    10%, 30% { width: 27%; }
    40%, 60% { width: 55%; }

    70%, 90% { width: 80%; }
    99% { width: 100%; opacity: 1; }
    100% { width: 100%; opacity: 0; }
}




@media (max-width: 1300px) {
    .cr-work-procedure {
        padding-top: 33px;
        padding-bottom: 100px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe4 {
        left: 35%;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper span.stripe5 {
        right: 35%;
    }
    .cr-work-procedure .procedure-content {
        max-width: 900px;
    }
}

@media (max-width: 1199px) {
    .cr-work-procedure {
        padding-top: 55px;
    }
    .cr-work-procedure .section-title {
        margin-bottom: 74px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar {
        top: 100px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar .stripe-wrapper {
        display: none;
    }
    .cr-work-procedure .procedure-content {
        max-width: 750px;
    }
    .cr-work-procedure .procedure-content .single-process .icon {
        width: 200px;
        height: 200px;
    }
    .cr-work-procedure .procedure-content .process1 .parent1 span {
        width: 30px;
        height: 20px;
    }
    .cr-work-procedure .procedure-content .process1 .parent1 .child5 {
        width: 44px;
        height: 26px;
    }
    .cr-work-procedure .procedure-content .process2 svg {
        width: 120px;
    }
    .cr-work-procedure .procedure-content .process3 svg {
        width: 90px;
    }
}

@media (max-width: 991px) {
    .cr-work-procedure {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar {
        top: 80px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar:after,
    .cr-work-procedure .procedure-content-wrapper .progress-bar:before {
        width: 12px;
        height: 12px;
        margin-top: -6px;
    }
    .cr-work-procedure .procedure-content {
        max-width: 610px;
    }
    .cr-work-procedure .procedure-content .single-process .icon {
        width: 150px;
        height: 150px;
    }
    .cr-work-procedure .procedure-content .single-process h5 {
        font-size: 22px;
        line-height: 28px;
    }
    .cr-work-procedure .procedure-content .process1 .parent1 {
        width: 60px;
        height: 60px;
    }
    .cr-work-procedure .procedure-content .process1 .parent1 .child5 {
        display: none;
    }
    .cr-work-procedure .procedure-content .process2 svg {
        width: 80px;
    }
    .cr-work-procedure .procedure-content .process3 svg {
        width: 70px;
    }
}

@media (max-width: 767px) {
    .cr-work-procedure {
        padding-bottom: 80px;
    }
    .cr-work-procedure .procedure-content-wrapper .progress-bar {
        display: none;
    }
    .cr-work-procedure .procedure-content {
        display: block;
    }
    .cr-work-procedure .procedure-content .single-process {
        width: 100%;
        margin-bottom: 40px;
    }
    .cr-work-procedure .procedure-content .single-process:last-child {
        margin-bottom: 0;
    }
    .cr-work-procedure .procedure-content .single-process .icon {
        margin-bottom: 15px;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child1 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child2 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child3 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process1 .parent1 .child4 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process2 svg {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st0 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st1 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st2 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }
    .cr-work-procedure .procedure-content-wrapper.rex-animated .process3 svg .st3 {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        animation: none;
    }

}
`
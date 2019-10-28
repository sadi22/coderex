import css from 'styled-jsx/css';
export default css`

.error-404 {
    padding: 60px 0;
    height: 100vh;
    min-height: 650px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
}
.error-404 > img {
    margin-bottom: 62px;
    max-width: 100%;
}
.error-404 .page-header {
    margin-bottom: 40px;
}
.error-404 .page-title {
    font-size: 42px;
    line-height: 1.2;
    letter-spacing: normal;
    margin-bottom: 5px;
}
.error-404 .page-header p{
    color: #fff;
}
.error-404 .backtohome-btn:hover svg rect {
    stroke-dasharray: 124, 559;
}

@media (max-width: 1300px) {
    .error-404 > img {
        max-width: 930px;
        width: 100%;
    }
}
`
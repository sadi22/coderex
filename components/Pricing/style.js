import css from 'styled-jsx/css';
export default css`
    
    .cr-pricing {
        background: #f3f7ff;
        padding-top: 233px;
        padding-bottom: 150px;
        position: relative;
        overflow: hidden;
    }
    .cr-pricing:before {
        content: "";
        width: 100%;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-top: 160px solid #ffffff;
        border-right: 2560px solid transparent;
    }
    .cr-pricing .section-title {
        margin-bottom: 75px;
    }
    .cr-pricing .section-title h2 {
        margin-bottom: 15px;
    }
    .cr-pricing .section-title p {
        max-width: 630px;
        width: 100%;
        margin: 0 auto;
    }
    .cr-pricing .pricing-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-left: -40px;
    }
    .cr-pricing .single-price-plan {
        border: 5px solid #fff;
        border-radius: 10px;
        margin-left: 40px;
        width: calc(100% / 3 - 40px);
        display: flex;
        flex-flow: column;
        align-self: stretch;
        box-shadow: 0px 25px 30px 0px rgba(194, 214, 255, 0.2);
    }
    .cr-pricing .single-price-plan .price-header {
        border-bottom: 1px solid #fff;
        padding: 50px 15px;
    }
    .cr-pricing .single-price-plan .price-header h6 {
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 55px;
    }
    .cr-pricing .single-price-plan .price-header .plan-img{
        height: 200px; 
    }
    .cr-pricing .single-price-plan .price-header img {
        display: block;
        margin: 0 auto;
        max-height: 100%;
    }
    .cr-pricing .single-price-plan .price-body {
        padding-top: 51px;
        padding-bottom: 23px;
    }
    .cr-pricing .single-price-plan .price-body h5 {
        text-transform: capitalize;
    }
    .cr-pricing .single-price-plan .price-footer {
        padding-top: 23px;
        padding-bottom: 60px;
        margin-top: auto;
    }
    .cr-pricing .single-price-plan .price-footer h3 span {
        font-size: 15px;
        text-transform: uppercase;
    }
    .cr-pricing .single-price-plan .price-footer .price-btn {
        margin-top: 22px;
        width: 240px;
        padding: 0 30px;
    }
    .cr-pricing .single-price-plan .price-footer .price-btn:hover svg rect {
        stroke-dasharray: 157,536;
    }
    .cr-pricing .single-price-plan.active {
        background: #00146b;
        border-color: #00146b;
    }
    .cr-pricing .single-price-plan.active .price-header {
        border-bottom-color: #192e8e;
    }
    .cr-pricing .single-price-plan.active .price-header h6 {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-body h5 {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-body li {
        color: #fff;
    }
    .cr-pricing .single-price-plan.active .price-footer h3 {
        color: #00b4ff;
    }

    .cr-pricing .single-price-plan .price-footer h3,
    .cr-pricing .single-price-plan .price-body li,
    .cr-pricing .single-price-plan .price-body h5,
    .cr-pricing .single-price-plan .price-header h6,
    .cr-pricing .single-price-plan .price-header,
    .cr-pricing .single-price-plan{
        transition: all 0.3s ease;
    }

    @media (max-width: 1700px) {
        .cr-pricing:before {
            top: -30px;
        }
    }

    @media (max-width: 1300px) {
        .cr-pricing {
            padding-top: 136px;
            padding-bottom: 100px;
        }
        .cr-pricing:before {
            top: -76px;
        }
    }

    @media (max-width: 1199px) {
        .cr-pricing {
            padding-top: 130px;
        }
        .cr-pricing:before {
            top: -90px;
        }
        .cr-pricing .single-price-plan .price-header h6 {
            margin-bottom: 25px;
        }
        .cr-pricing .single-price-plan .price-body {
            padding-top: 30px;
        }
        .cr-pricing .single-price-plan .price-footer {
            padding-bottom: 30px;
        }
    }

    @media (max-width: 991px) {
        .cr-pricing:before {
            top: -110px;
        }
        .cr-pricing .section-title {
            margin-bottom: 55px;
        }
        .cr-pricing .pricing-wrapper {
            display: block;
            margin-left: 0;
        }
        .cr-pricing .section-title h2 {
            margin-bottom: 5px;
        }
        .cr-pricing .single-price-plan {
            margin-left: 0;
            width: 100%;
            max-width: 450px;
            margin: 0 auto 40px;
        }

        .cr-pricing .single-price-plan:last-child {
            margin-bottom: 0;
        }
        
    }

    @media (max-width: 575px) {
        .cr-pricing {
            padding-top: 100px;
        }
        .cr-pricing:before {
            top: -76px;
            border-top-width: 100px;
        }
        .cr-pricing .single-price-plan .price-footer .price-btn {
            padding: 0 25px;
            line-height: 50px;
            height: 50px;
            border-radius: 50px;
        }
    }

    
 
 


`
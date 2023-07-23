import styled from "styled-components";

export const GreyTextSC = styled.span`
    color: rgba(255, 255, 255, 0.5);
    margin-left: 8px;
`;

export const ButtonSC = styled.button`
    padding: 8px 32px 8px 88px;
    background-color: #000;
    color: #fff;
    border-radius: 40px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    height: 80px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    vertical-align: middle;

    &::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-image: url("/images/button-bg.jpg");
        background-position: 0% 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        transition: all 0.2s;
    }

    &::after {
        content: url("/images/play.svg");
        position: absolute;
        left: 8px;
        top: 8%;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        transition: transform 0.2s;
        transform-origin: center;
    }
    &:hover {
        ${GreyTextSC} {
            color: #fff;
        }
        &::before {
            width: 101%;
            height: 101%;
            border-radius: 40px;
            left: 0;
            justify-content: flex-start;
            padding: 40px;
        }
        &::after {
            transform: scale(2, 2) translateY(2%);
        }
    }
`;

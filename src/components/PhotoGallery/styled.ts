import styled from "styled-components";
import { devices } from "src/styles/media";

export const NavSlideSC = styled.div``;
export const SliderWrapperSC = styled.div`
    max-width: 1180px;
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;
    overflow: hidden;

    @media ${devices.xl} {
        padding-bottom: 20px;
        max-width: 960px;
    }

    @media ${devices.lg} {
        max-width: 640px;
    }

    @media ${devices.sm} {
        padding-bottom: 20px;
        max-width: 360px;
    }

    .main-slider {
        .slick-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 416px;
        }
    }

    .nav-slider {
        .slick-list {
            margin: 0 -5px;
        }

        .slick-slide {
            display: flex;
            align-items: center;
            height: 160px;
            padding: 0 5px;
        }
        @media ${devices.sm} {
            display: none;
        }
    }
`;

export const SlideWrapperSC = styled.div`
    position: relative;
    z-index: 1;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        z-index: 100;
        transform: scale(1.1);
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const SliderWrapSC = styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;
    padding: 20px 60px;
`;

export const CloseSC = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #fff;
    z-index: 1000;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;

    &:before,
    &:after {
        position: absolute;
        content: "";
        display: block;
        margin-top: -2px;
        width: 24px;
        height: 3px;
        background: #000;
        border-radius: 1px;
        left: 9px;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }

    &:hover {
        opacity: 1;
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    }
`;

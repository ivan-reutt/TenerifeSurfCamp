import styled, { css } from "styled-components";

export const VibeSC = styled.section``;

export const VideoSlider = styled.div`
    border-radius: 32px;
    max-width: 1180px;
    height: 720px;

    .slick-slide > div {
        position: relative;
    }

    .slick-slider {
        .slick-list {
            border-radius: 40px;
        }
        .slick-prev,
        .slick-next {
            top: 0;
            height: 100%;
            width: auto;
            transform: none;
            z-index: 1;
            &::before {
                font-size: 40px;
                opacity: 0;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.15);
                &::before {
                    opacity: 1;
                }
            }
        }
        .slick-prev {
            left: -30px;
            right: 85%;
        }
        .slick-next {
            right: -30px;
            left: 85%;
        }
    }
`;

export const SlideWrapperSC = styled.div`
    position: relative;
`;

export const VideoWrapperSC = styled.video`
    width: 300px;
`;

export const PlaySC = styled.button<{ $isShow?: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s;
    transform: translate(-50%, -50%);

    ${({ $isShow }) =>
        $isShow &&
        css`
            display: none;
        `}

    &:hover {
        width: 80px;
        height: 80px;
    }
`;

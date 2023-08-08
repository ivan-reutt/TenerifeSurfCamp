import styled, { css } from "styled-components";

export const NavSlideSC = styled.div``;
export const SliderWrapperSC = styled.div`
    max-width: 1180px;
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
    }
`;

export const ArrowWrapperSC = styled.button<{ $alignLeft?: boolean }>`
    position: absolute;
    top: 50%;

    width: 80px;
    height: 80px;
    padding: 24px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    ${({ $alignLeft }) =>
        $alignLeft
            ? css`
                  right: 0;
                  transform: translate(50%, -50%);
              `
            : css`
                  left: 0;
                  transform: scale(-1, 1) translate(50%, -50%);
              `}
`;

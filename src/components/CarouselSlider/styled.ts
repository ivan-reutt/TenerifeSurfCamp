import styled, { css } from "styled-components";
import { devices } from "src/styles/media";

export const NavSlideSC = styled.div``;
export const SliderWrapperSC = styled.div`
    max-width: 1180px;
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.sm} {
        padding-bottom: 20px;
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
                  @media ${devices.lg} {
                      transform: translate(0, -50%);
                  }
                  @media ${devices.sm} {
                      right: 30%;
                  }
              `
            : css`
                  left: 0;
                  transform: scale(-1, 1) translate(50%, -50%);
                  @media ${devices.lg} {
                      transform: scale(-1, 1) translate(0, -50%);
                  }
                  @media ${devices.sm} {
                      left: 30%;
                  }
              `}

    @media ${devices.lg} {
        width: 60px;
        height: 60px;
        padding: 16px;
    }

    @media ${devices.sm} {
        top: calc(100% + 40px);
    }
`;

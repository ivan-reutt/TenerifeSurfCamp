import styled from "styled-components";
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

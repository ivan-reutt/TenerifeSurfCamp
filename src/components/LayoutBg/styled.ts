import styled from "styled-components";
import { devices } from "src/styles/media";

export const LayoutBgSC = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

export const MainBgWrapperSC = styled.div`
    height: 100vh;
    box-shadow: 0 60px 100px 100px rgba(107, 139, 161, 1);
    overflow: hidden;

    @media ${devices.xl} {
        height: auto;
    }

    @media ${devices.lg} {
        .bgSlider {
            display: none;
        }
    }
`;

import styled from "styled-components";
import { devices } from "src/styles/media";

export const AboutSC = styled.section``;

export const AboutCardWrapperSC = styled.div`
    display: flex;
    gap: 20px;
    @media ${devices.md} {
        flex-direction: column;
    }
`;

export const AboutCardSC = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    background-color: #fff;
    border-radius: 32px;
    @media ${devices.sm} {
        margin-bottom: 20px;
        padding: 40px 24px;
    }
`;

export const CardTitleSC = styled.h4``;

export const BigCardTextSC = styled.div`
    font-size: 64px;
    font-weight: 500;
    letter-spacing: -2.6px;
    line-height: 1.25;
    margin-bottom: 60px;
    @media ${devices.md} {
        margin-bottom: 40px;
    }
    @media ${devices.sm} {
        margin-bottom: 20px;
    }
`;

export const TextSC = styled.p``;

export const AboutCardBlueSC = styled(AboutCardSC)`
    background-image: url("/images/blue-bg.jpg");
    background-repeat: no-repeat;
    background-position: bottom;
    color: #fff;
`;

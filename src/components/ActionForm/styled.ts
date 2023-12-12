import styled from "styled-components";
import { devices } from "src/styles/media";

export const ActionFormSC = styled.section``;

export const FormWrapperSC = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 60px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    background-color: #fff;
    border-radius: 32px;
`;

export const TitleSC = styled.h2`
    font-size: 48px;
    padding: 60px 80px;
    text-align: center;

    @media ${devices.sm} {
        padding: 40px 20px;
    }
`;

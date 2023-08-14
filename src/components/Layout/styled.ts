import styled from "styled-components";
import { devices } from "src/styles/media";

export const MainSC = styled.main`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 20px 80px;
    align-items: center;
    margin-top: 180px;

    @media ${devices.lg} {
        margin-top: 160px;
    }

    @media ${devices.sm} {
        margin-top: 140px;
    }
`;

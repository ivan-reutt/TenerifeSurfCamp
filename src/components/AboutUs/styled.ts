import styled from "styled-components";
import { devices } from "src/styles/media";

export const AboutUsSC = styled.section``;

export const WrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media ${devices.md} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${devices.sm} {
        grid-template-columns: 1fr;
    }
`;

export const AboutCardSC = styled.div`
    padding: 20px;
    align-items: flex-start;
    gap: 20px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    background-color: #fff;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${devices.sm} {
        margin-bottom: 20px;
        padding: 40px 24px;
    }
`;

export const NameSC = styled.p`
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const RoleSC = styled.span`
    font-size: 20px;
    font-weight: 400;
    @media ${devices.md} {
        font-size: 16px;
    }
`;

export const DescriptionSC = styled.p`
    font-size: 18px;
    @media ${devices.md} {
        font-size: 16px;
    }
`;

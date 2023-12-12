import styled from "styled-components";
import { devices } from "src/styles/media";

export const ReviewsSC = styled.section``;

export const WrapperSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: flex-start;
    @media ${devices.md} {
        grid-template-columns: 1fr;
    }
`;

export const ReviewSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    background-color: #fff;
    border-radius: 32px;
`;

export const InstaLinkSC = styled.a`
    background-color: #107dfe;
    height: 32px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
`;
export const NameSC = styled.p`
    text-align: center;
    font-weight: 500;
`;

export const RoleSC = styled.p`
    font-size: 20px;
    font-weight: 400;
`;

export const DescriptionSC = styled.p`
    font-size: 16px;
`;

export const HeadWrapperSC = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    margin-bottom: 30px;
`;

export const ProfilePhotoSC = styled.div`
    border-radius: 50%;
    width: 64px;
    overflow: hidden;
`;

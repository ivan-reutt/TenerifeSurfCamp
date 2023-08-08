import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

export const HeadingSC = styled.span`
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
    font-weight: 500;
`;

export const NewsCardSC = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 32px;
    cursor: pointer;
    color: inherit;

    &:hover {
        ${HeadingSC} {
            color: #0c3df5;
        }
    }
`;

export const CardPhotoSC = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
`;

export const CardInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const DateSC = styled.span`
    font-size: 16px;
    line-height: 2;
    letter-spacing: -0.64px;
    opacity: 0.5;
`;

export const DescriptionSC = styled.span`
    font-size: 16px;
    line-height: 2;
    letter-spacing: -0.64px;
`;

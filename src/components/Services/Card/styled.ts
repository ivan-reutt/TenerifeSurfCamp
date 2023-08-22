import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { devices } from "src/styles/media";

export const CardLinkSC = styled.div`
    font-size: 24px;
    letter-spacing: -0.96px;
    font-weight: 500;
    line-height: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    color: inherit;
    transition: font-size 0.2s;
`;

export const IconWrapperSC = styled.div`
    background-color: #000;
    width: 36px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    padding: 4px 8px;
    transition: all 0.2s;
`;

export const CardSC = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    overflow: hidden;
    background-color: #fff;
    cursor: pointer;
    color: #000;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
        ${CardLinkSC} {
            font-size: 30px;
        }
        ${IconWrapperSC} {
            width: 40px;
            height: 30px;
        }
    }
`;

export const CardPhotoSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 260px;
    overflow: hidden;
`;

export const PricesWrapperSC = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
`;

export const PriceSC = styled.div`
    font-size: 24px;
    color: #000;
`;

export const OldPriceSC = styled.div`
    font-size: 24px;
    text-decoration: line-through;
    opacity: 0.32;
`;

export const CardInfoSC = styled.div`
    padding: 40px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media ${devices.sm} {
        padding: 24px;
    }
`;

export const CardNameSC = styled.h4`
    margin-bottom: 40px;
`;

export const SaleIconSC = styled.div`
    position: absolute;
    top: 41%;
    left: 38%;
`;

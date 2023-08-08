import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

export const CardSC = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    overflow: hidden;
    background-color: #fff;
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
`;

export const CardNameSC = styled.div`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1.28px;
    margin-bottom: 40px;
`;

export const IconWrapperSC = styled.div`
    background-color: #000;
    width: 36px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    padding: 4px 8px;
`;

export const CardLinkSC = styled(Link)`
    font-size: 24px;
    letter-spacing: -0.96px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin-top: auto;
`;

export const SaleIconSC = styled.div`
    position: absolute;
    top: 41%;
    left: 38%;
`;

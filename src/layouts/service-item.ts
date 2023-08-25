import styled from "styled-components";
import { smallBtn, tooltipStyles } from "src/layouts/common";
import { ActionButtonSC } from "components/ActionButton/styled";
import { devices } from "src/styles/media";

export const ServiceItemSC = styled.section`
    width: 100%;
    position: relative;
    padding-top: 160px;

    @media ${devices.lg} {
        padding-top: 140px;
    }

    @media ${devices.sm} {
        padding-top: 120px;
    }
`;

export const TopInfoWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

export const TitleSC = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const DescriptionWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 760px;
    margin: 0 auto;
`;

export const MainInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const PricesWrapperSC = styled.div`
    display: flex;
    align-items: center;
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

export const ModalTitleSC = styled.h4`
    text-align: center;
    margin-bottom: 40px;
`;

export const StickyOrderBtnSC = styled(ActionButtonSC)`
    ${smallBtn};
    position: fixed;
    bottom: 20px;
    left: 12px;
    padding: 16px 24px;
`;

export const TooltipOrderBtnSC = styled(ActionButtonSC)`
    ${smallBtn};
    padding: 4px 16px;
`;

export const OrderTooltipSC = styled.div`
    ${tooltipStyles};
    position: fixed;
    z-index: 10;
    top: 120px;
    max-width: 1180px;
    left: 50%;
    transform: translateX(-50%);
    cursor: auto;

    @media ${devices.lg} {
        max-width: calc(100% - 60px);
    }
`;

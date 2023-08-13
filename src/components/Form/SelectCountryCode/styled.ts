import styled from "styled-components";
import { devices } from "src/styles/media";
import { scrollStyles } from "src/layouts/common";

export const SelectSC = styled.div`
    display: flex;
    position: relative;
`;

export const IconContainerSC = styled.div`
    background-image: url("/images/flagSprite.png");
    background-repeat: no-repeat;
    background-size: 100% 49494%;
    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    box-sizing: content-box;
    box-shadow: 0 0 0 1px rgb(220, 220, 220);
    border-radius: 4px;

    &.fflag-AR {
        background-position: center 0.2287%;
    }
    &.fflag-BR {
        background-position: center 0.4524%;
    }
    &.fflag-CA {
        background-position: center 0.6721%;
    }
    &.fflag-JM {
        background-position: center 0.8958%;
    }
    &.fflag-MX {
        background-position: center 1.1162%;
    }
    &.fflag-US {
        background-position: center 1.3379%;
    }
    &.fflag-HK {
        background-position: center 1.5589%;
    }
    &.fflag-IN {
        background-position: center 1.7805%;
    }
    &.fflag-JP {
        background-position: center 2.0047%;
    }
    &.fflag-KZ {
        background-position: center 2.2247%;
    }
    &.fflag-SG {
        background-position: left 2.4467%;
    }
    &.fflag-AT {
        background-position: center 2.6674%;
    }
    &.fflag-BE {
        background-position: center 2.8931%;
    }
    &.fflag-DK {
        background-position: center 3.1125%;
    }
    &.fflag-FI {
        background-position: center 3.3325%;
    }
    &.fflag-FR {
        background-position: center 3.5542%;
    }
    &.fflag-DE {
        background-position: center 3.7759%;
    }
    &.fflag-IS {
        background-position: center 4.0015%;
    }
    &.fflag-IE {
        background-position: center 4.2229%;
    }
    &.fflag-IT {
        background-position: center 4.441%;
    }
    &.fflag-NL {
        background-position: center 4.66663%;
    }
    &.fflag-NO {
        background-position: center 4.8844%;
    }
    &.fflag-PL {
        background-position: center 5.1061%;
    }
    &.fflag-RO {
        background-position: center 5.3298%;
    }
    &.fflag-ES {
        background-position: left 5.5495%;
    }
    &.fflag-SE {
        background-position: center 5.7712%;
    }
    &.fflag-TR {
        background-position: center 5.994%;
    }
    &.fflag-UA {
        background-position: center 6.2156%;
    }
    &.fflag-GB {
        background-position: center 6.4363%;
    }
    &.fflag-IL {
        background-position: center 6.658%;
    }
    &.fflag-AU {
        background-position: center 6.8805%;
    }
    &.fflag-MH {
        background-position: left 7.1038%;
    }
    &.ff-md {
        width: 18px;
        height: 14px;
    }
    &.ff-lg {
        width: 32px;
        height: 24px;
    }
    &.ff-xl {
        width: 60px;
        height: 37px;
    }
`;

export const SelectValueSC = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;

    @media ${devices.sm} {
        font-size: 16px;
    }
`;

export const OptionWrapperSC = styled.div`
    position: absolute;
    width: 320px;
    max-height: 230px;
    overflow-x: hidden;
    padding: 0 4px 0 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 4px 56px 0px rgba(41, 47, 61, 0.16);
    top: calc(100% + 25px);
    z-index: 1;
    ${scrollStyles};

    @media ${devices.sm} {
        width: 270px;
    }
`;

export const PhoneCodeSC = styled.span`
    width: 60px;
    @media ${devices.sm} {
        width: 30px;
    }
`;

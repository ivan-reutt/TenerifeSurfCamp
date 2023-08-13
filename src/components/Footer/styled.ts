import { Link } from "gatsby";
import { devices } from "src/styles/media";
import styled from "styled-components";

export const FooterSC = styled.footer`
    border-radius: 32px 32px 0 0;
    background-image: url("/images/blue-bg.jpg");
    background-repeat: no-repeat;
    background-size: 175% 300%;
    background-position: 50% 88%;
    position: relative;
`;

export const ContainerSC = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 60px 20px;

    @media ${devices.lg} {
        align-items: center;
    }
    @media ${devices.sm} {
        gap: 40px;
        padding: 40px 20px;
    }
`;

export const WrapperSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
    max-width: 100%;

    @media ${devices.lg} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const LinksSC = styled.div`
    display: flex;
    align-self: flex-end;
    @media ${devices.lg} {
        justify-content: space-between;
        align-self: stretch;
    }
`;

export const LogoLinkSC = styled(Link)`
    max-width: 153px;
    width: 100%;
`;

export const IconLinkSC = styled.a`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    :hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const TitleSC = styled.h1`
    text-align: left;
    color: #fff;
    letter-spacing: -1px;

    @media ${devices.lg} {
        font-size: 40px;
    }
    @media ${devices.sm} {
        text-align: center;
    }
`;

export const ContactsSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media ${devices.lg} {
        display: flex;
        flex-direction: column;
    }

    @media ${devices.sm} {
        align-self: flex-start;
    }
`;

export const ContactItemSC = styled.div`
    display: flex;
    gap: 8px;

    @media ${devices.sm} {
        flex-direction: column;
    }
`;

export const ContactTextSC = styled.a`
    font-size: 24px;
    letter-spacing: -1px;
    color: #fff;

    @media ${devices.lg} {
        font-size: 20px;
    }

    @media ${devices.sm} {
        font-size: 16px;
    }
`;

export const BlankTextSC = styled.p`
    color: #fff;
    opacity: 0.56;
`;

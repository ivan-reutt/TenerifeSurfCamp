import { Link } from "gatsby";
import styled from "styled-components";

export const FooterSC = styled.footer`
    border-radius: 32px 32px 0 0;
    padding: 60px 0;
    background-image: url("/images/blue-bg.jpg");
    background-repeat: no-repeat;
    background-size: 175% 300%;
    background-position: 50% 88%;
    margin-top: 180px;
`;

export const ContainerSC = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const WrapperSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
`;

export const LinksSC = styled.div`
    display: flex;
    align-self: flex-end;
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
`;

export const ContactsSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const ContactItemSC = styled.div`
    display: flex;
    gap: 8px;
`;

export const ContactTextSC = styled.a`
    font-size: 24px;
    letter-spacing: -1px;
    color: #fff;
`;

export const BlankTextSC = styled.div`
    font-size: 24px;
    color: #fff;
    letter-spacing: -1px;
    opacity: 0.56;
`;

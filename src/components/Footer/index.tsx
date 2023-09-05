import React from "react";
import { Form } from "components/Form";
import { Logo } from "components/icons/Logo";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Instagram from "src/icons/Instagram.svg";
import Telegram from "src/icons/Telegram.svg";
import Facebook from "src/icons/Facebook.svg";
import Whatsapp from "src/icons/Whatsapp.svg";
import {
    FooterSC,
    LinksSC,
    IconLinkSC,
    TitleSC,
    WrapperSC,
    BlankTextSC,
    ContactItemSC,
    ContactsSC,
    ContactTextSC,
    LogoLinkSC,
    ContainerSC,
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const { contentfulLinks } = useStaticQuery(graphql`
        query MediaLinks {
            contentfulLinks {
                instagram
                telegram
                whatsapp
                phone
                mail
                facebook
            }
        }
    `);
    const { instagram, telegram, whatsapp, phone, mail, facebook } =
        contentfulLinks;
    return (
        <FooterSC id="footer">
            <ContainerSC>
                <LogoLinkSC to="/" aria-label="logo">
                    <Logo color="#fff" />
                </LogoLinkSC>
                <WrapperSC>
                    <TitleSC>
                        <Trans i18nKey={"actionBtn"}>
                            Записаться <br /> в лагерь
                        </Trans>
                    </TitleSC>
                    <Form serviceToOrder="Серфкемп Канари(главный товар)" />
                    <LinksSC>
                        <IconLinkSC
                            href={instagram}
                            target="_blank"
                            aria-label="instagram"
                        >
                            <Instagram />
                        </IconLinkSC>
                        <IconLinkSC
                            href={telegram}
                            target="_blank"
                            aria-label="telegram"
                        >
                            <Telegram />
                        </IconLinkSC>
                        <IconLinkSC
                            href={facebook}
                            target="_blank"
                            aria-label="facebook"
                        >
                            <Facebook />
                        </IconLinkSC>
                        <IconLinkSC
                            target="_blank"
                            aria-label="whatsapp"
                            href={whatsapp}
                        >
                            <Whatsapp />
                        </IconLinkSC>
                    </LinksSC>
                </WrapperSC>
                <ContactsSC>
                    <ContactItemSC>
                        <BlankTextSC>{t("phone")}</BlankTextSC>
                        <ContactTextSC href={`tel:${phone}`}>
                            {phone}
                        </ContactTextSC>
                    </ContactItemSC>
                    <ContactItemSC>
                        <BlankTextSC>{t("mail")}</BlankTextSC>
                        <ContactTextSC href={`mailto:${mail}`}>
                            {mail}
                        </ContactTextSC>
                    </ContactItemSC>
                </ContactsSC>
            </ContainerSC>
        </FooterSC>
    );
};

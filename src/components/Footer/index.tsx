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

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <FooterSC id="footer">
            <ContainerSC>
                <LogoLinkSC to="/">
                    <Logo color="#fff" />
                </LogoLinkSC>
                <WrapperSC>
                    <TitleSC>
                        <Trans i18nKey={"actionBtn"}>
                            Записаться <br /> в лагерь
                        </Trans>
                    </TitleSC>
                    <Form />
                    <LinksSC>
                        <IconLinkSC
                            href="https://www.instagram.com/alex.croot/"
                            target="_blank"
                        >
                            <Instagram />
                        </IconLinkSC>
                        <IconLinkSC
                            href="https://www.instagram.com/alex.croot/"
                            target="_blank"
                        >
                            <Telegram />
                        </IconLinkSC>
                        <IconLinkSC
                            href="https://www.facebook.com/alexandr.dodul/"
                            target="_blank"
                        >
                            <Facebook />
                        </IconLinkSC>
                        <IconLinkSC
                            target="_blank"
                            href="https://api.whatsapp.com/send/?phone=34655354404&text&type=phone_number&app_absent=0"
                        >
                            <Whatsapp />
                        </IconLinkSC>
                    </LinksSC>
                </WrapperSC>
                <ContactsSC>
                    <ContactItemSC>
                        <BlankTextSC>{t("phone")}</BlankTextSC>
                        <ContactTextSC href="tel:+34-655-35-44-04">
                            +34 655 35 44 04
                        </ContactTextSC>
                    </ContactItemSC>
                    <ContactItemSC>
                        <BlankTextSC>{t("mail")}</BlankTextSC>
                        <ContactTextSC href="mailto:videokeepcalm@gmail.com">
                            videokeepcalm@gmail.com
                        </ContactTextSC>
                    </ContactItemSC>
                </ContactsSC>
            </ContainerSC>
        </FooterSC>
    );
};

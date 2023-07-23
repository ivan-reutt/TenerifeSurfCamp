import React from "react";
import { Layout } from "../Layout";
import { Form } from "./Form";
import {
    FooterSC,
    LinksSC,
    IconSC,
    TitleSC,
    WrapperSC,
    BlankTextSC,
    ContactItemSC,
    ContactsSC,
    ContactTextSC,
    LogoSC,
} from "./styled";

export const Footer: React.FC = () => {
    return (
        <FooterSC id="footer">
            <Layout>
                <LogoSC>
                    <img src="/images/logo.svg" alt="logo" />
                </LogoSC>
                <WrapperSC>
                    <TitleSC>
                        Записаться <br /> в лагерь
                    </TitleSC>
                    <Form />
                    <LinksSC>
                        <IconSC
                            href="https://www.instagram.com/alex.croot/"
                            target="_blank"
                        >
                            <img src="/images/Instagram.svg" alt="Instagram" />
                        </IconSC>
                        <IconSC
                            href="https://www.instagram.com/alex.croot/"
                            target="_blank"
                        >
                            <img src="/images/Telegram.svg" alt="Telegram" />
                        </IconSC>
                        <IconSC
                            href="https://www.facebook.com/alexandr.dodul/"
                            target="_blank"
                        >
                            <img src="/images/Facebook.svg" alt="Facebook" />
                        </IconSC>
                        <IconSC
                            target="_blank"
                            href="https://api.whatsapp.com/send/?phone=34655354404&text&type=phone_number&app_absent=0"
                        >
                            <img src="/images/Viber.svg" alt="Viber" />
                        </IconSC>
                    </LinksSC>
                </WrapperSC>
                <ContactsSC>
                    <ContactItemSC>
                        <BlankTextSC>Телефон:</BlankTextSC>
                        <ContactTextSC href="tel:+34-655-35-44-04">
                            +34 655 35 44 04
                        </ContactTextSC>
                    </ContactItemSC>
                    <ContactItemSC>
                        <BlankTextSC>Почта:</BlankTextSC>
                        <ContactTextSC href="mailto:videokeepcalm@gmail.com">
                            videokeepcalm@gmail.com
                        </ContactTextSC>
                    </ContactItemSC>
                </ContactsSC>
            </Layout>
        </FooterSC>
    );
};

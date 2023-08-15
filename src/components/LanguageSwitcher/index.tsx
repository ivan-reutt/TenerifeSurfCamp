import React from "react";
import {
    SwitcherValueSC,
    IconWrapperSC,
    OptionWrapperSC,
    LanguageSwitcherSC,
    OptionItemSC,
    LinkSC,
} from "./styled";
import { useI18next } from "gatsby-plugin-react-i18next";
import UA from "src/icons/UA.svg";
import UK from "src/icons/UK.svg";
import RU from "src/icons/RU.svg";
import { useModal } from "src/hooks/useModalProps";

interface IOption {
    name: string;
    icon: any;
    lng: string;
    displayValue: string;
}

const languagesData: IOption[] = [
    {
        lng: "uk",
        name: "Українська мова",
        icon: <UA />,
        displayValue: "ua",
    },
    {
        lng: "en",
        name: "English language",
        icon: <UK />,
        displayValue: "eng",
    },
    {
        lng: "ru",
        name: "Русский язык",
        icon: <RU />,
        displayValue: "rus",
    },
];

const LanguageSwitcher: React.FC = () => {
    const { ref, isOpen, handleOpenMenu } = useModal();
    const { originalPath, language } = useI18next();

    const selectedLng = languagesData.find((lng) => lng.lng === language);

    return (
        <LanguageSwitcherSC onClick={handleOpenMenu} ref={ref}>
            <SwitcherValueSC>{selectedLng?.displayValue}</SwitcherValueSC>
            {isOpen && (
                <OptionWrapperSC>
                    {languagesData.map((lng) => (
                        <OptionItemSC key={lng.lng}>
                            <LinkSC to={originalPath} language={lng.lng}>
                                <IconWrapperSC small={true}>
                                    {lng.icon}
                                </IconWrapperSC>
                                {lng.name}
                            </LinkSC>
                        </OptionItemSC>
                    ))}
                </OptionWrapperSC>
            )}
        </LanguageSwitcherSC>
    );
};
export default LanguageSwitcher;

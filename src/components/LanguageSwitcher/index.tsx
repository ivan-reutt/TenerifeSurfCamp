import React, { useRef, useCallback, useEffect, useState } from "react";
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

interface IOption {
    name: string;
    icon: any;
    lng: string;
}

const languagesData: IOption[] = [
    {
        lng: "ru",
        name: "Русский язык",
        icon: <RU />,
    },
    {
        lng: "uk",
        name: "Українська мова",
        icon: <UA />,
    },
    {
        lng: "en",
        name: "English language",
        icon: <UK />,
    },
];

const LanguageSwitcher: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { originalPath, language } = useI18next();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const selectedLng = languagesData.find((lng) => lng.lng === language);
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        },
        [isOpen],
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <LanguageSwitcherSC onClick={handleClick} ref={ref}>
            <SwitcherValueSC>
                <IconWrapperSC>{selectedLng?.icon}</IconWrapperSC>
            </SwitcherValueSC>
            {isOpen && (
                <OptionWrapperSC>
                    {languagesData.map((lng) => (
                        <OptionItemSC key={lng.lng}>
                            <LinkSC to={originalPath} language={lng.lng}>
                                <IconWrapperSC small>{lng.icon}</IconWrapperSC>
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

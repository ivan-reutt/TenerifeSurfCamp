import React from "react";
import { I18nContext } from "gatsby-plugin-react-i18next";

export const useCurrentLang = (): string => {
    const { i18n } = React.useContext(I18nContext);
    const langCode = i18n.language;
    const currentLang = langCode.charAt(0).toUpperCase() + langCode.slice(1);
    return currentLang;
};

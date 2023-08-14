import React from "react";
import { ActionLinkSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

export enum ColorTypes {
    GREEN,
    WHITE,
}

type Props = {
    children?: React.ReactNode;
    colorType?: ColorTypes;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    to: string;
};

export const ActionLink: React.FC<Props> = ({
    children,
    colorType = ColorTypes.GREEN,
    onClick,
    style,
    to,
}) => {
    return (
        <ActionLinkSC
            onClick={onClick}
            $colorType={colorType}
            to={to}
            style={style}
        >
            {children || (
                <Trans i18nKey={"actionBtn"}>Записаться в лагерь</Trans>
            )}
        </ActionLinkSC>
    );
};

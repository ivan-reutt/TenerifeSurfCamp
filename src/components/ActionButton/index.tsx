import React from "react";
import { ActionButtonSC } from "./styled";
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
    href?: string;
};

export const ActionButton: React.FC<Props> = ({
    children,
    colorType = ColorTypes.GREEN,
    onClick,
    style,
    href,
}) => {
    return (
        <ActionButtonSC
            onClick={onClick}
            $colorType={colorType}
            href={href}
            style={style}
        >
            {children || (
                <Trans i18nKey={"actionBtn"}>Записаться в лагерь</Trans>
            )}
        </ActionButtonSC>
    );
};

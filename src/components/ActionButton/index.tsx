import React from "react";
import { ButtonSC } from "./styled";
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
};

export const ActionButton: React.FC<Props> = ({
    children,
    colorType = ColorTypes.GREEN,
    onClick,
    style,
}) => {
    return (
        <ButtonSC
            onClick={onClick}
            $colorType={colorType}
            href="#footer"
            style={style}
        >
            {children ? (
                children
            ) : (
                <Trans i18nKey={"actionBtn"}>Записаться в лагерь</Trans>
            )}
        </ButtonSC>
    );
};

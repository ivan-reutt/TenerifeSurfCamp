import React from "react";
import { ActionButtonSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

type Props = {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    isSmall?: boolean;
};

export const ActionButton: React.FC<Props> = ({
    children,
    onClick,
    style,
    isSmall,
}) => {
    return (
        <ActionButtonSC onClick={onClick} style={style} $isSmall={isSmall}>
            {children || (
                <Trans i18nKey={"actionBtn"}>Записаться в лагерь</Trans>
            )}
        </ActionButtonSC>
    );
};

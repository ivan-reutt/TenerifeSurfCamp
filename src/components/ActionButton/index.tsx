import React from "react";
import { ButtonSC } from "./styled";

export enum ColorTypes {
    GREEN,
    WHITE,
}

type Props = {
    children?: React.ReactNode;
    colorType?: ColorTypes;
    onClick?: () => void;
};

export const ActionButton: React.FC<Props> = ({
    children,
    colorType = ColorTypes.GREEN,
    onClick,
}) => {
    return (
        <ButtonSC onClick={onClick} colorType={colorType} href="#footer">
            {children ? children : "Записаться в лагерь"}
        </ButtonSC>
    );
};

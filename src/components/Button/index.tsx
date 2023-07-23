import React from "react";
import { ButtonSC } from "./styled";

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
    return <ButtonSC onClick={onClick}>{children}</ButtonSC>;
};

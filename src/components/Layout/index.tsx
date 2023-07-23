import React from "react";
import { LayoutSC } from "./styled";
import "normalize-css";

type Props = {
    children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return <LayoutSC>{children}</LayoutSC>;
};

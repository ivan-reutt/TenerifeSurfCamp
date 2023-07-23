import React from "react";
import { MainSC } from "./styled";

type Props = {
    children?: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
    return <MainSC id="top">{children}</MainSC>;
};

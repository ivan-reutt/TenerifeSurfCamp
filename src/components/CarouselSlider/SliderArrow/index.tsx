import React from "react";
import { ArrowRight } from "components/icons/ArrowRight";
import { ArrowWrapperSC } from "./styled";

interface IArrow {
    alignLeft?: boolean;
    onClick?: () => void;
}

export const SliderArrow = ({ alignLeft, onClick }: IArrow) => {
    return (
        <ArrowWrapperSC onClick={onClick} $alignLeft={alignLeft}>
            <ArrowRight />
        </ArrowWrapperSC>
    );
};

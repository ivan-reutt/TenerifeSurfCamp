import React from "react";
import { IOption } from "..";
import { IconContainerSC } from "../styled";
import { OptionSC, OptionTextSC, OptionTextGreySC } from "./styled";

type Props = {
    optionValue: IOption;
    onClickOption: (code: string) => void;
};

export const SelectOption: React.FC<Props> = ({
    optionValue,
    onClickOption,
}) => {
    const handleClickOption = () => {
        onClickOption(optionValue.code);
    };
    return (
        <OptionSC onClick={handleClickOption}>
            <IconContainerSC className={`ff-md fflag-${optionValue.country}`} />
            <OptionTextSC>{optionValue.name}</OptionTextSC>
            <OptionTextGreySC>{optionValue.code}</OptionTextGreySC>
        </OptionSC>
    );
};

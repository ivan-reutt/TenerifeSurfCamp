import React from "react";
import {
    OptionSC,
    OptionTextSC,
    OptionTextGreySC,
    IconWrapperSmallSC,
} from "./styled";

export interface IOption {
    name: string;
    code: string;
    iconPath: string;
}

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
            <IconWrapperSmallSC>
                <img src={optionValue.iconPath} alt={optionValue.name} />
            </IconWrapperSmallSC>
            <OptionTextSC>{optionValue.name}</OptionTextSC>
            <OptionTextGreySC>{optionValue.code}</OptionTextGreySC>
        </OptionSC>
    );
};

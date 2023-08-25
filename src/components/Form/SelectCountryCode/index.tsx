import React, { useCallback, useState } from "react";
import { SelectOption } from "./Option";
import {
    SelectValueSC,
    IconContainerSC,
    OptionWrapperSC,
    SelectSC,
    PhoneCodeSC,
} from "./styled";
import { useModal } from "src/hooks/useModalProps";
import { countries } from "../constants";

type Props = {
    onChange: (code: string) => void;
};

export const SelectCountryCode: React.FC<Props> = ({ onChange }) => {
    const [code, setCode] = useState(countries[0].code);
    const { isOpen, ref, handleOpenMenu } = useModal();

    const selectedValue = countries.find((country) => country.code === code);

    const handleSelect = useCallback(
        (code: string) => {
            setCode(code);
            onChange(code);
        },
        [onChange],
    );

    return (
        <SelectSC onClick={handleOpenMenu} ref={ref}>
            <SelectValueSC>
                <IconContainerSC
                    className={`ff-lg fflag-${selectedValue?.country}`}
                />
                <PhoneCodeSC>{selectedValue?.code}</PhoneCodeSC>
            </SelectValueSC>
            {isOpen && (
                <OptionWrapperSC>
                    {countries.map((item, index) => (
                        <SelectOption
                            key={`${item.name}_${index}`}
                            onClickOption={handleSelect}
                            optionValue={item}
                        />
                    ))}
                </OptionWrapperSC>
            )}
        </SelectSC>
    );
};

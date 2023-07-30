import React, { useState } from "react";
import { IOption, SelectOption } from "./Option";
import {
    SelectValueSC,
    IconWrapperSC,
    OptionWrapperSC,
    SelectSC,
    PhoneCodeSC,
} from "./styled";

export const countries: IOption[] = [
    { name: "Spain", code: "+34", iconPath: "/images/flags/esp.svg" },
    { name: "Australia", code: "+61", iconPath: "/images/flags/australia.svg" },
    { name: "Germany", code: "+49", iconPath: "/images/flags/ger.svg" },
    { name: "Ukraine", code: "+380", iconPath: "/images/flags/ua.svg" },
    { name: "Poland", code: "+48", iconPath: "/images/flags/pol.svg" },
    { name: "Spain", code: "+34", iconPath: "/images/flags/esp.svg" },
    {
        name: "United Kingdom",
        code: "+44",
        iconPath: "/images/flags/uk.svg",
    },
    { name: "Mexico", code: "+52", iconPath: "/images/flags/mxc.svg" },
    { name: "United States", code: "+1", iconPath: "/images/flags/usa.svg" },
    { name: "Kazakhstan", code: "+7", iconPath: "/images/flags/kz.svg" },
    { name: "Italy", code: "+39", iconPath: "/images/flags/ita.svg" },
    { name: "Turkey", code: "+90", iconPath: "/images/flags/tur.svg" },
    { name: "Austria", code: "+43", iconPath: "/images/flags/aus.svg" },
    { name: "Finland", code: "+358", iconPath: "/images/flags/fin.svg" },
    { name: "France", code: "+33", iconPath: "/images/flags/fr.svg" },
    { name: "Japan", code: "+81", iconPath: "/images/flags/jpn.svg" },
    { name: "Jamaica", code: "+1", iconPath: "/images/flags/jam.svg" },
    { name: "Norway", code: "+47", iconPath: "/images/flags/nor.svg" },
    { name: "Iceland", code: "+354", iconPath: "/images/flags/ice.svg" },
    { name: "Sweden", code: "+46", iconPath: "/images/flags/swd.svg" },
    { name: "Netherlands", code: "+31", iconPath: "/images/flags/nth.svg" },
    { name: "Canada", code: "+1", iconPath: "/images/flags/cnd.svg" },
    { name: "Brazil", code: "+55", iconPath: "/images/flags/brz.svg" },
    { name: "Ireland", code: "+353", iconPath: "/images/flags/irl.svg" },
    { name: "Romania", code: "+40", iconPath: "/images/flags/rom.svg" },
    {
        name: "Marshall Islands",
        code: "+692",
        iconPath: "/images/flags/mi.svg",
    },
    { name: "Singapore", code: "+65", iconPath: "/images/flags/sing.svg" },
    { name: "India", code: "+91", iconPath: "/images/flags/ind.svg" },
    { name: "Hong Kong", code: "+852", iconPath: "/images/flags/honkgong.svg" },
    { name: "Israel", code: "+972", iconPath: "/images/flags/isr.svg" },
    { name: "Belgium", code: "+32", iconPath: "/images/flags/belg.svg" },
    { name: "Argentina", code: "+54", iconPath: "/images/flags/arg.svg" },
];

type Props = {
    value: string;
    onChange: (code: string) => void;
};

export const SelectCountryCode: React.FC<Props> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const selectedValue = countries.filter(
        (country) => country.code === value,
    )[0];

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <SelectSC onClick={handleClick}>
            <SelectValueSC>
                <IconWrapperSC>
                    <img
                        src={selectedValue.iconPath}
                        alt={selectedValue.name}
                    />
                </IconWrapperSC>
                <PhoneCodeSC>{selectedValue.code}</PhoneCodeSC>
            </SelectValueSC>
            {isOpen && (
                <OptionWrapperSC>
                    {countries.map((item, index) => (
                        <SelectOption
                            key={`${item.name}_${index}`}
                            onClickOption={onChange}
                            optionValue={item}
                        />
                    ))}
                </OptionWrapperSC>
            )}
        </SelectSC>
    );
};

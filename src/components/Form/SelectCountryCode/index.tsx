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

export interface IOption {
    name: string;
    code: string;
    country: string;
}

export const countries: IOption[] = [
    {
        name: "Spain",
        code: "+34",
        country: "ES",
    },
    {
        name: "Australia",
        code: "+61",
        country: "AU",
    },
    {
        name: "Germany",
        code: "+49",
        country: "DE",
    },
    {
        name: "Ukraine",
        code: "+380",
        country: "UA",
    },
    {
        name: "Poland",
        code: "+48",
        country: "PL",
    },
    {
        name: "United Kingdom",
        code: "+44",
        country: "GB",
    },
    {
        name: "Mexico",
        code: "+52",
        country: "MX",
    },
    {
        name: "United States",
        code: "+1",
        country: "US",
    },
    {
        name: "Kazakhstan",
        country: "KZ",
        code: "+7",
    },
    {
        name: "Italy",
        code: "+39",
        country: "IT",
    },
    {
        name: "Turkey",
        code: "+90",
        country: "TR",
    },
    {
        name: "Austria",
        code: "+43",
        country: "AT",
    },
    {
        name: "Finland",
        code: "+358",
        country: "FI",
    },
    {
        name: "France",
        code: "+33",
        country: "FR",
    },
    {
        name: "Japan",
        code: "+81",
        country: "JP",
    },
    {
        name: "Jamaica",
        code: "+1",
        country: "JM",
    },
    {
        name: "Norway",
        code: "+47",
        country: "NO",
    },
    {
        name: "Iceland",
        code: "+354",
        country: "IS",
    },
    {
        name: "Sweden",
        code: "+46",
        country: "SE",
    },
    {
        name: "Netherlands",
        code: "+31",
        country: "NL",
    },
    {
        name: "Canada",
        code: "+1",
        country: "CA",
    },
    {
        name: "Brazil",
        code: "+55",
        country: "BR",
    },
    {
        name: "Ireland",
        code: "+353",
        country: "IE",
    },
    {
        name: "Romania",
        code: "+40",
        country: "RO",
    },
    {
        name: "Marshall Islands",
        code: "+692",
        country: "MH",
    },
    {
        name: "Singapore",
        code: "+65",
        country: "SG",
    },
    {
        name: "India",
        code: "+91",
        country: "IN",
    },
    {
        name: "Hong Kong",
        code: "+852",
        country: "HK",
    },
    {
        name: "Israel",
        code: "+972",
        country: "IL",
    },
    {
        name: "Belgium",
        code: "+32",
        country: "BE",
    },
    {
        name: "Argentina",
        country: "AR",
        code: "+54",
    },
];

type Props = {
    value: string;
    onChange: (code: string) => void;
};

export const SelectCountryCode: React.FC<Props> = ({ value, onChange }) => {
    const { ref, handleOpenMenu, handleClose } = useModal();
    const [isOpen, setIsOpen] = useState(false);

    const selectedValue = countries.find((country) => country.code === value);

    const handleSelect = useCallback(
        (code: string) => {
            setIsOpen(false);
            onChange(code);
        },
        [onChange, handleClose],
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

import React, { useState } from "react";
import { ActionButton } from "components/ActionButton";
import { countries, SelectCountryCode } from "./SelectCountryCode";
import { FormSC, InputSC, SubmitTextSC, InputWrapperSC } from "./styled";

interface IFormValues {
    name: string;
    phone: string;
    code: string;
}

export const Form: React.FC = () => {
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const handleSubmit = () => {
        setIsSubmited(true);
    };

    const [formValues, setFormValues] = useState<IFormValues>({
        name: "",
        phone: "",
        code: countries[0].code,
    });

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value.replace(/[^a-z]/gi, "");
        setFormValues((prev) => ({ ...prev, name }));
    };

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phone = event.target.value.replace(/\D/g, "");
        setFormValues((prev) => ({ ...prev, phone }));
    };

    const handleChangeCode = (code: string) => {
        setFormValues((prev) => ({ ...prev, code }));
    };
    return (
        <FormSC>
            {isSubmited ? (
                <SubmitTextSC>
                    Готово! Мы очень скоро свяжемся с вами.
                </SubmitTextSC>
            ) : (
                <>
                    <InputWrapperSC>
                        <InputSC
                            placeholder="Имя"
                            type="text"
                            onChange={handleChangeName}
                            value={formValues.name}
                        />
                    </InputWrapperSC>
                    <InputWrapperSC>
                        <SelectCountryCode
                            onChange={handleChangeCode}
                            value={formValues.code}
                        />
                        <InputSC
                            placeholder="Номер телефона"
                            type="text"
                            onChange={handleChangePhone}
                            value={formValues.phone}
                        />
                    </InputWrapperSC>
                    <ActionButton onClick={handleSubmit} />
                </>
            )}
        </FormSC>
    );
};

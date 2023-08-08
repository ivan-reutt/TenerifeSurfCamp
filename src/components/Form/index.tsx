import React, { useState } from "react";
import { ActionButton } from "components/ActionButton";
import { countries, SelectCountryCode } from "./SelectCountryCode";
import { FormSC, InputSC, SubmitTextSC, InputWrapperSC } from "./styled";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface IFormValues {
    name: string;
    phone: string;
    code: string;
}
interface IProps {
    isOrder?: boolean;
}

export const Form: React.FC<IProps> = ({ isOrder }) => {
    const { t } = useTranslation();
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
        const name = event.target.value.replace(/[^a-zA-Zа-яА-Я]/gi, "");
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
                <SubmitTextSC>{t("isReady")}</SubmitTextSC>
            ) : (
                <>
                    <InputWrapperSC>
                        <InputSC
                            placeholder={t("name")}
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
                            placeholder={t("numberPhone")}
                            type="text"
                            onChange={handleChangePhone}
                            value={formValues.phone}
                        />
                    </InputWrapperSC>
                    <ActionButton
                        onClick={handleSubmit}
                        style={{
                            alignSelf: isOrder ? "center" : "flex-start",
                        }}
                    >
                        {isOrder ? t("orderText") : ""}
                    </ActionButton>
                </>
            )}
        </FormSC>
    );
};

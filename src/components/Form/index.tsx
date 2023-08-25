import React, { useState } from "react";
import { ActionButton } from "components/ActionButton";
import { SelectCountryCode } from "./SelectCountryCode";
import {
    FormSC,
    InputSC,
    SubmitTextSC,
    InputWrapperSC,
    AgreementTextSC,
} from "./styled";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { countries } from "./constants";

interface IProps {
    isOrder?: boolean;
}

interface IFormValues {
    name: string;
    phone: string;
    code: string;
}

export const Form: React.FC<IProps> = ({ isOrder }) => {
    const { t } = useTranslation();
    const [isSubmited, setIsSubmited] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<IFormValues>({
        name: "",
        phone: "",
        code: countries[0].code,
    });
    const handleSubmit = () => {
        if (formValues.phone && formValues.name) {
            setIsSubmited(true);
        }
    };

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
        <FormSC method="post">
            {isSubmited ? (
                <SubmitTextSC $isOrder={isOrder}>{t("isReady")}</SubmitTextSC>
            ) : (
                <>
                    <InputWrapperSC>
                        <InputSC
                            placeholder={t("name")}
                            type="text"
                            onChange={handleChangeName}
                            value={formValues.name}
                            name="name"
                            required
                        />
                    </InputWrapperSC>
                    <InputWrapperSC>
                        <SelectCountryCode onChange={handleChangeCode} />
                        <InputSC
                            placeholder={t("numberPhone")}
                            type="text"
                            onChange={handleChangePhone}
                            value={formValues.phone}
                            name="numberPhone"
                            required
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
                    {isOrder && (
                        <AgreementTextSC>{t("agreement")}</AgreementTextSC>
                    )}
                </>
            )}
        </FormSC>
    );
};

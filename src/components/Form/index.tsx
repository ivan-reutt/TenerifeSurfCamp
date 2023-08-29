import React, { useState } from "react";
import { ActionButton } from "components/ActionButton";
import { SelectCountryCode } from "./SelectCountryCode";
import {
    FormSC,
    InputSC,
    SubmitTextSC,
    InputWrapperSC,
    AgreementTextSC,
    ErrorMsgSC,
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
const tgToken = process.env.TELEGRAM_BOT_TOKEN;
const tgId = process.env.TELEGRAM_ID;

export const Form: React.FC<IProps> = ({ isOrder }) => {
    const { t } = useTranslation();
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const [formValues, setFormValues] = useState<IFormValues>({
        name: "",
        phone: "",
        code: countries[0].code,
    });
    const { phone, name, code } = formValues;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!(phone && name)) {
            setErrorMsg("All fields must be filled!");
            return;
        }
        const body = {
            chat_id: tgId,
            text: `Name: ${name}. Phone: ${code}${phone}`,
        };
        const url = `https://api.telegram.org/bot${tgToken}/sendMessage`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                setIsSubmited(true);
                setErrorMsg("");
            } else {
                setErrorMsg("Error sending message. Please try again");
            }
        } catch (error) {
            console.error("Error sending message:", error);
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
        <FormSC method="post" onSubmit={handleSubmit}>
            {isSubmited ? (
                <SubmitTextSC $isOrder={isOrder}>{t("isReady")}</SubmitTextSC>
            ) : (
                <>
                    <InputWrapperSC>
                        <InputSC
                            placeholder={t("name")}
                            type="text"
                            onChange={handleChangeName}
                            value={name}
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
                            value={phone}
                            name="numberPhone"
                            required
                        />
                        {errorMsg && <ErrorMsgSC>{errorMsg}</ErrorMsgSC>}
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

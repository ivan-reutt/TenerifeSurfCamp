import React from "react";
import { TitleSC, ActionFormSC, FormWrapperSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { Form } from "components/Form";

export const ActionForm = () => {
    return (
        <ActionFormSC id="actionForm">
            <TitleSC>
                <Trans i18nKey={"mainViewModalTitle"}>
                    Классные люди собираются вместе
                </Trans>
            </TitleSC>
            <FormWrapperSC>
                <Form isOrder />
            </FormWrapperSC>
        </ActionFormSC>
    );
};

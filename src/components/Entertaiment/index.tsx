import React from "react";
import { Catalog } from "./components/Tabs";
import { EntertaimentSC, SubTitleSC } from "./styled";

export const Entertaiment = () => {
    return (
        <EntertaimentSC id="entertainment">
            <SubTitleSC>Развлечения по душе</SubTitleSC>
            <Catalog />
        </EntertaimentSC>
    );
};

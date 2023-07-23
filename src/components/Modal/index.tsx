import React from "react";
import { ModalSC, OverlaySC, CloseSC } from "./styled";
import "normalize-css";

type Props = {
    children?: React.ReactNode;
    onClose: () => void;
};

export const Modal: React.FC<Props> = ({ children, onClose }) => (
    <OverlaySC>
        <ModalSC>
            <CloseSC onClick={onClose}>
                <img src="/images/close.svg" alt="close" />
            </CloseSC>
            {children}
        </ModalSC>
    </OverlaySC>
);

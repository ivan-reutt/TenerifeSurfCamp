import React from "react";
import { ModalSC, OverlaySC, CloseSC } from "./styled";
import Close from "src/icons/close.svg";

type Props = {
    children?: React.ReactNode;
    onClose: () => void;
    withPadding?: boolean;
    style?: React.CSSProperties;
};

export const Modal: React.FC<Props> = ({
    children,
    onClose,
    style,
    withPadding,
}) => {
    const handleClose = () => {
        document.body.classList.remove("modal-open");
        onClose();
    };
    const handleClickOutside = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };
    return (
        <OverlaySC onClick={handleClickOutside}>
            <ModalSC style={style} $withPadding={withPadding}>
                <CloseSC onClick={handleClose}>
                    <Close />
                </CloseSC>
                {children}
            </ModalSC>
        </OverlaySC>
    );
};

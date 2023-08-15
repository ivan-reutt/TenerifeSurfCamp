import { useCallback, useEffect, useState, useRef } from "react";

export const useModal = (blockBody?: boolean) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = useCallback((event: any) => {
        event.stopPropagation();
        setIsOpen(true);
        blockBody && document.body.classList.add("modal-open");
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        blockBody && document.body.classList.remove("modal-open");
    }, []);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        },
        [isOpen],
    );
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);

    return { ref, isOpen, handleOpenMenu, handleClose };
};

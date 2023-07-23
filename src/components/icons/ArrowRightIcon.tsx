import React from "react";

interface IProps {
    color?: string;
}

const fill = "#000";
export const ArrowRightIcon: React.FC<IProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
            <path
                stroke={props.color ? props.color : fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="m24 10 10 10-10 10M6 20h28"
            />
        </svg>
    );
};

import React from "react";

interface IProps {
    color?: string;
}

const fill = "#000";

export const Logo: React.FC<IProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 153 32">
        <g fill={props.color ? props.color : fill}>
            <path d="M4 32a4 4 0 0 1-4-4c0-1.1.4-2 1.2-2.8A4 4 0 0 1 4 24c1 0 2 .4 2.8 1.2a3.8 3.8 0 0 1 .6 4.8c-.3.6-.8 1.1-1.4 1.5-.6.3-1.3.5-2 .5ZM24 9.5v5.8H9.1V9.5h14.7Zm-12 22V9c0-1.8.3-3.3 1-4.5.6-1.2 1.5-2.1 2.7-2.7 1.2-.6 2.6-.9 4.2-.9a18.3 18.3 0 0 1 5 .6l-1.1 5.7-1-.2h-1c-.8 0-1.3 0-1.5.4a2 2 0 0 0-.4 1.2v23h-8ZM39.6 22V9.4h8v22H40v-4.1h-.2a6.3 6.3 0 0 1-2.5 3.3 7.6 7.6 0 0 1-4.3 1.1c-1.5 0-2.9-.3-4-1-1.2-.7-2-1.7-2.7-3-.6-1.2-1-2.6-1-4.2v-14h8v12.3c0 1.1.2 2 .8 2.6a3 3 0 0 0 2.3 1c.7 0 1.2-.2 1.7-.5s.9-.7 1.1-1.2a4 4 0 0 0 .4-1.9ZM57.9 19.2v12.3h-8v-22h7.6v4.2h.2a6.2 6.2 0 0 1 2.5-3.3 7.6 7.6 0 0 1 4.3-1.2c1.5 0 2.9.4 4 1.1 1.2.7 2 1.7 2.7 3a9 9 0 0 1 1 4.2v14h-8V19.2c0-1.1-.2-2-.8-2.6a3 3 0 0 0-2.3-1c-.7 0-1.2.2-1.7.5s-.9.7-1.1 1.2c-.3.5-.4 1.1-.4 1.9ZM95.8 9.5l-7.4 22h-9.1l-7.4-22h8.3l3.5 14.6h.3l3.5-14.6h8.3ZM96.5 31.5v-22h7.9v22h-8Zm4-24.3c-1.1 0-2-.3-2.8-1a3.4 3.4 0 0 1-1.2-2.6c0-1 .4-1.8 1.2-2.5a4 4 0 0 1 2.7-1.1c1.1 0 2 .4 2.8 1 .7.8 1.1 1.6 1.1 2.6s-.4 1.9-1.1 2.6c-.8.7-1.7 1-2.8 1ZM106.7 31.5V2.2h8v11.2c.3-.8.7-1.5 1.3-2a6 6 0 0 1 2-1.6 8 8 0 0 1 10.2 4.2c.9 1.7 1.3 3.9 1.3 6.5s-.4 4.7-1.2 6.4c-.8 1.6-1.8 2.9-3.1 3.7a8 8 0 0 1-7.1.7c-.8-.3-1.5-.8-2-1.4-.6-.6-1-1.2-1.4-2h-.2v3.6h-7.8Zm7.7-11c0 1.1.2 2 .4 2.8.3.8.7 1.4 1.3 1.8a3 3 0 0 0 1.8.6c.8 0 1.4-.2 1.9-.6.5-.4.9-1 1.2-1.8.2-.7.4-1.7.4-2.8 0-1-.2-2-.4-2.8-.3-.7-.7-1.3-1.2-1.8-.5-.4-1.1-.6-1.9-.6a3 3 0 0 0-1.8.6c-.6.5-1 1-1.3 1.8-.2.8-.4 1.7-.4 2.8ZM141.8 32c-2.4 0-4.4-.5-6.1-1.4-1.7-1-3-2.2-4-3.9-.8-1.7-1.3-3.7-1.3-6.1 0-2.3.5-4.3 1.4-6 .9-1.7 2.2-3 3.9-4 1.6-.9 3.6-1.4 5.9-1.4 1.7 0 3.2.3 4.5.8a9.5 9.5 0 0 1 5.7 5.8c.5 1.4.7 3 .7 4.7v1.9H133V18h12.4a3.1 3.1 0 0 0-1.7-2.8c-.6-.3-1.2-.4-1.8-.4-.7 0-1.3.1-1.8.4-.5.3-1 .7-1.3 1.1-.3.5-.5 1-.5 1.7v4.7c0 .7.2 1.3.5 1.9.2.6.7 1 1.2 1.3a4 4 0 0 0 2 .5l1.5-.2c.5-.2.9-.4 1.2-.7l.7-1h7.2a8.2 8.2 0 0 1-5.4 6.5c-1.5.6-3.3 1-5.3 1Z" />
        </g>
    </svg>
);

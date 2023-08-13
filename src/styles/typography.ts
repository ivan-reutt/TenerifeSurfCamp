import { css } from "styled-components";
import { devices } from "./media";

export const typography = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h1 {
        font-size: 80px;
        font-weight: 700;
        letter-spacing: -3.2px;
        line-height: 1.1;

        @media ${devices.lg} {
            font-size: 60px;
        }

        @media ${devices.sm} {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 64px;
        font-weight: 500;
        letter-spacing: -2.6px;
        line-height: 1.25;

        @media ${devices.lg} {
            font-size: 48px;
        }

        @media ${devices.sm} {
            font-size: 32px;
        }
    }

    h3 {
        font-size: 48px;
        font-weight: 500;
        line-height: 1.3;
        letter-spacing: -1.9px;

        @media ${devices.lg} {
            font-size: 36px;
        }

        @media ${devices.sm} {
            font-size: 24px;
        }
    }

    h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 1.25;
        letter-spacing: -1.3px;

        @media ${devices.lg} {
            font-size: 28px;
        }

        @media ${devices.sm} {
            font-size: 20px;
        }
    }

    p {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -1px;

        @media ${devices.lg} {
            font-size: 20px;
        }

        @media ${devices.sm} {
            font-size: 16px;
        }
    }
`;

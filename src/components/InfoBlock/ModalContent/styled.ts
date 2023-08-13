import styled from "styled-components";
import { devices } from "src/styles/media";
import { scrollStyles } from "src/layouts/common";

export const ModalTitleSC = styled.h3`
    margin-bottom: 32px;
    @media ${devices.sm} {
        margin-bottom: 20px;
    }
`;

export const ModalTextSC = styled.p``;

export const ModalContentSC = styled.div`
    max-width: 760px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 500px;
    padding-right: 20px;
    ${scrollStyles};
`;

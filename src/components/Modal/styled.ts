import styled from "styled-components";

export const OverlaySC = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    body & {
        overflow: hidden;
    }
`;

export const ModalSC = styled.div`
    position: relative;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.02);
    padding: 80px 40px 40px 40px;
`;

export const CloseSC = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;

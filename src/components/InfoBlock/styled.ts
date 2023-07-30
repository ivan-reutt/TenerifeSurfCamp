import styled from "styled-components";

export const InfoBlockSC = styled.div`
    display: flex;
    gap: 20px;
    align-self: stretch;
`;

export const InfoItemSC = styled.div`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-radius: 32px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    flex-grow: 1;
    background-color: #fff;
    cursor: pointer;
`;

export const InfoItemsWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
`;

export const ItemTextSC = styled.h4``;

export const ModalTitleSC = styled.h3`
    margin-bottom: 32px;
`;

export const ModalTextSC = styled.p``;

export const ModalContentSC = styled.div`
    max-width: 760px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 500px;
    padding-right: 20px;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-track {
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.025);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const IconSC = styled.div`
    width: 40px;
    height: 40px;
`;

import styled from "styled-components";

export const PeolpeSC = styled.section``;

export const SubTitleSC = styled.h2`
    padding: 120px 100px;
    text-align: center;
`;

export const PeopleCardWrapperSC = styled.div`
    display: flex;
    gap: 20px;
`;

export const PeopleCardSC = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    background-color: #fff;
    border-radius: 32px;
`;

export const CardTitleSC = styled.h4`
    font-size: 32px;
`;

export const BigCardTextSC = styled.h2`
    height: 140px;
`;

export const TextSC = styled.div`
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1px;
`;

export const PeopleCardBlueSC = styled(PeopleCardSC)`
    background-image: url("/images/15.jpg");
    background-position: bottom;
    color: #fff;
`;

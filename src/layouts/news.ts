import { Link } from "gatsby";
import styled from "styled-components";

export const NewsSC = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;

export const SubTitleSC = styled.h2`
    margin-top: 80px;
    align-self: flex-start;
`;

export const NewsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
`;

export const HeadingSC = styled.span`
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
    font-weight: 500;
`;

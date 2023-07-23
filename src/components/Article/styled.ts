import styled from "styled-components";

export const ArticleSC = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    gap: 64px;
    width: 100%;
`;

export const TitleSC = styled.h2`
    max-width: 760px;
    text-align: center;
`;

export const ArticleWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 760px;
`;

export const MainInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const AddInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const CardPhotoSC = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    align-self: stretch;
`;

export const MainPhotoSC = styled(CardPhotoSC)`
    align-self: stretch;
    & > img {
        width: 100%;
    }
`;

export const HeadingSC = styled.h4``;

export const DescriptionSC = styled.p`
    line-height: 40px;
`;

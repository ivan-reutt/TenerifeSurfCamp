import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
    NewsCardSC,
    CardPhotoSC,
    CardInfoSC,
    DateSC,
    DescriptionSC,
    HeadingSC,
} from "./styled";

interface IProps {
    preview: any;
    date: string | null;
    link: string | null;
    title: string | null;
}

const NewsCard: React.FC<IProps> = ({ preview, date, title, link }) => {
    const image = getImage(preview) as IGatsbyImageData;
    return (
        <NewsCardSC to={`/news/${link}`}>
            <CardPhotoSC>
                <GatsbyImage image={image} alt={title || "Photo"} />
            </CardPhotoSC>
            <CardInfoSC>
                <DateSC>{date}</DateSC>
                <HeadingSC>{title}</HeadingSC>
                <DescriptionSC>{title}</DescriptionSC>
            </CardInfoSC>
        </NewsCardSC>
    );
};

export default NewsCard;

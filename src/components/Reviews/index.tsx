import React from "react";
import {
    ReviewsSC,
    WrapperSC,
    ReviewSC,
    DescriptionSC,
    NameSC,
    RoleSC,
    InstaLinkSC,
    HeadWrapperSC,
    ProfilePhotoSC,
} from "./styled";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import Instagram from "src/icons/Instagram.svg";

export const Reviews = () => {
    const { allContentfulReviews } = useStaticQuery(graphql`
        query Reviews {
            allContentfulReviews {
                nodes {
                    instaLink
                    profession
                    review {
                        review
                    }
                    name
                    profileImg
                }
            }
        }
    `);
    return (
        <ReviewsSC id="reviews">
            <SectionTitleSC>
                <Trans i18nKey={"navReviews"}>Отзывы</Trans>
            </SectionTitleSC>
            <WrapperSC>
                {allContentfulReviews.nodes.map((node, index) => (
                    <ReviewSC key={index}>
                        <HeadWrapperSC href={node.instaLink} target="_blank">
                            <ProfilePhotoSC>
                                <img
                                    src={node.profileImg}
                                    alt="profile photo"
                                />
                            </ProfilePhotoSC>
                            <div>
                                <NameSC>{node.name}</NameSC>
                                <RoleSC> {node.profession}</RoleSC>
                            </div>
                        </HeadWrapperSC>
                        <DescriptionSC>{node.review.review}</DescriptionSC>
                        <InstaLinkSC href={node.instaLink} target="_blank">
                            <Instagram />
                        </InstaLinkSC>
                    </ReviewSC>
                ))}
            </WrapperSC>
        </ReviewsSC>
    );
};

import React from "react";
import {
    AboutUsSC,
    WrapperSC,
    AboutCardSC,
    DescriptionSC,
    NameSC,
    RoleSC,
} from "./styled";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useCurrentLang } from "src/hooks/useCurrentLang";

export const AboutUs = () => {
    const currentLang = useCurrentLang();
    const { allContentfulAboutUs } = useStaticQuery(graphql`
        query AboutUsCards {
            allContentfulAboutUs(sort: { nameRu: ASC }) {
                nodes {
                    roleRu
                    roleEn
                    roleUk
                    photo {
                        gatsbyImageData(cropFocus: CENTER, aspectRatio: 0.7)
                    }
                    nameRu
                    nameEn
                    nameUk
                    descriptionRu {
                        descriptionRu
                    }
                    descriptionEn {
                        descriptionEn
                    }
                    descriptionUk {
                        descriptionUk
                    }
                }
            }
        }
    `);
    const roleField = `role${currentLang}` as keyof typeof allContentfulAboutUs;
    const nameField = `name${currentLang}` as keyof typeof allContentfulAboutUs;
    const descriptionField =
        `description${currentLang}` as keyof typeof allContentfulAboutUs;
    return (
        <AboutUsSC id="aboutUs">
            <SectionTitleSC>
                <Trans i18nKey={"navAbout"}>О Нас</Trans>
            </SectionTitleSC>
            <WrapperSC>
                {allContentfulAboutUs.nodes.map((node, index) => (
                    <AboutCardSC key={index}>
                        <GatsbyImage
                            image={getImage(node.photo) as IGatsbyImageData}
                            alt="Service Photo"
                            style={{ borderRadius: "12px" }}
                        />
                        <NameSC>
                            {node[nameField]}
                            <RoleSC> ({node[roleField]})</RoleSC>
                        </NameSC>

                        <DescriptionSC>
                            {node[descriptionField][descriptionField]}
                        </DescriptionSC>
                    </AboutCardSC>
                ))}
            </WrapperSC>
        </AboutUsSC>
    );
};

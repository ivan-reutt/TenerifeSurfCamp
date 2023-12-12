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

export const AboutUs = () => {
    const { allContentfulAboutUs } = useStaticQuery(graphql`
        query AboutUsCards {
            allContentfulAboutUs {
                nodes {
                    role
                    photo {
                        gatsbyImageData(cropFocus: CENTER, aspectRatio: 0.7)
                    }
                    name
                    description {
                        description
                    }
                }
            }
        }
    `);
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
                            {node.name}
                            <RoleSC> ({node.role})</RoleSC>
                        </NameSC>

                        <DescriptionSC>
                            {node.description.description}
                        </DescriptionSC>
                    </AboutCardSC>
                ))}
            </WrapperSC>
        </AboutUsSC>
    );
};

import React, { useEffect, useState, useMemo } from "react";
import { Card } from "../Card";
import { MenuContentSC, CardsWrapperSC } from "./styled";
import { TabsEnum } from "..";
import { Trans } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import { MoreButtonSC } from "src/layouts/common";

interface IProps {
    activeTab: TabsEnum;
}

export const MenuContent = ({ activeTab }: IProps) => {
    const [isShowAll, setIsShowAll] = useState<boolean>(false);
    useEffect(() => {
        setIsShowAll(false);
    }, [activeTab]);

    const { allContentfulServices } =
        useStaticQuery<Queries.ServicesQuery>(graphql`
            query Services {
                allContentfulServices {
                    nodes {
                        price
                        salePrice
                        nameEn
                        nameRu
                        nameUk
                        type
                        link
                        serviceCardPhoto {
                            gatsbyImageData(resizingBehavior: FILL, width: 560)
                        }
                    }
                }
            }
        `);

    const filtredServices = allContentfulServices.nodes.filter(
        (node) => node.type === activeTab,
    );

    const renderedServices = isShowAll
        ? filtredServices
        : filtredServices.slice(0, 4);

    const handleClick = () => {
        setIsShowAll(true);
    };

    return (
        <MenuContentSC>
            <CardsWrapperSC>
                {renderedServices.map((item) => (
                    <Card key={item.link} {...item} />
                ))}
            </CardsWrapperSC>
            {filtredServices.length > 4 && !isShowAll && (
                <MoreButtonSC onClick={handleClick}>
                    <Trans i18nKey="showMore">Показать больше</Trans>
                </MoreButtonSC>
            )}
        </MenuContentSC>
    );
};

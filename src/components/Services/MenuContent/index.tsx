import React, { useEffect, useState, useMemo } from "react";
import { Button } from "components/Button";
import { Card } from "../Card";
import { MenuContentSC, CardsWrapperSC } from "./styled";
import { TabsEnum } from "..";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";

type ServiceItem = Pick<
    Queries.ContentfulServices,
    "price" | "salePrice" | "contentful_id" | "name" | "type"
> & {
    serviceCardPhoto: { gatsbyImageData: IGatsbyImageData | null } | null;
};

interface IProps {
    activeTab: TabsEnum;
}

export const MenuContent = ({ activeTab }: IProps) => {
    const [isShowAll, setIsShowAll] = useState<boolean>(false);

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
                        contentful_id
                        serviceCardPhoto {
                            gatsbyImageData(resizingBehavior: FILL)
                        }
                    }
                }
            }
        `);

    const renderedServices = useMemo(
        () =>
        {
            const filtredServices = allContentfulServices.nodes.filter(
                (node) => node.type === activeTab,
            )
            return isShowAll ? filtredServices : filtredServices.slice(0, 4);
        }
        [activeTab],
    );

    useEffect(() => {
        setIsShowAll(false);
    }, [activeTab]);


    const handleClick = () => {
        setIsShowAll(true);
    };

    return (
        <MenuContentSC>
            <CardsWrapperSC>
                {renderedServices.map((item, index) => (
                    <Card key={`${item.name}_${index}`} {...item} />
                ))}
            </CardsWrapperSC>
            {filtredServices.length > 4 && !isShowAll && (
                <Button onClick={handleClick}>
                    <Trans i18nKey="showMore">Показать больше</Trans>
                </Button>
            )}
        </MenuContentSC>
    );
};

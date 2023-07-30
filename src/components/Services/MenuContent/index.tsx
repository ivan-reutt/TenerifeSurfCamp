import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "components/Button";
import { Card } from "../Card";
import { MenuContentSC, CardsWrapperSC } from "./styled";
import { TabsEnum } from "..";

interface IProps {
    activeTab: TabsEnum;
}
interface IService {
    isSale: boolean;
    name: string;
    price: string;
    salePrice: string;
    type: string;
}

interface IServiceQueryResponse {
    allContentfulServices: {
        nodes: IService[];
    };
}

export const MenuContent = ({ activeTab }: IProps) => {
    const [isShowAll, setIsShowAll] = useState<boolean>(false);

    const { allContentfulServices }: IServiceQueryResponse =
        useStaticQuery(graphql`
            query ServicesQuery {
                allContentfulServices {
                    nodes {
                        salePrice
                        price
                        name
                        type
                    }
                }
            }
        `);

    useEffect(() => {
        setIsShowAll(false);
    }, [activeTab]);

    const servicesArray = allContentfulServices.nodes.filter(
        (item) => item.type === activeTab,
    );

    const cardList = servicesArray.filter((item, index) =>
        isShowAll ? item : index < 4,
    );

    return (
        <MenuContentSC>
            <CardsWrapperSC>
                {cardList.map((item, index) => (
                    <Card
                        key={`${item.name}_${index}`}
                        price={item.price}
                        name={item.name}
                        salePrice={item.salePrice}
                    />
                ))}
            </CardsWrapperSC>
            {servicesArray.length > 4 && !isShowAll && (
                <Button onClick={() => setIsShowAll(true)}>
                    Показать больше
                </Button>
            )}
        </MenuContentSC>
    );
};

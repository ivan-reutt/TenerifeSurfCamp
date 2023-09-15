import React, { useEffect, useState } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import {
    ServiceItemSC,
    TitleSC,
    DescriptionWrapperSC,
    MainInfoSC,
    TopInfoWrapperSC,
    PricesWrapperSC,
    PriceSC,
    OldPriceSC,
    ModalTitleSC,
    OrderTooltipSC,
} from "src/layouts/service-item";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { ActionButton } from "components/ActionButton";
import CarouselSlider from "components/CarouselSlider";
import { Modal } from "components/Modal";
import { Form } from "components/Form";
import Layout from "components/Layout";
import { Trans } from "gatsby-plugin-react-i18next";
import HotSaleTag from "components/HotSaleTag";
import { devices } from "src/styles/media";
import { useCurrentLang } from "src/hooks/useCurrentLang";
import { SEO } from "components/Seo";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

const ServiceItem = ({ data }: PageProps<Queries.ServiceItemQuery>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBtnShowed, setIsBtnShowed] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>();
    const currentLang = useCurrentLang();

    const usedDescription =
        `description${currentLang}` as keyof typeof data.contentfulServices;
    const usedName =
        `name${currentLang}` as keyof typeof data.contentfulServices;
    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { gatsbyImageData } = node.data.target;
                return (
                    <GatsbyImage
                        image={getImage(gatsbyImageData) as IGatsbyImageData}
                        alt={"news photo"}
                    />
                );
            },
        },
    };

    const richText =
        data.contentfulServices?.[usedDescription] &&
        renderRichText(data.contentfulServices[usedDescription], options);

    const salePrice = data.contentfulServices?.salePrice;
    const price = data.contentfulServices?.price;

    const handleClickOrder = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            setIsBtnShowed(window.pageYOffset > 500 ? true : false);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);
    useEffect(() => {
        setIsMobile(window.matchMedia(devices.lg).matches);
    }, []);
    return (
        <Layout>
            <ServiceItemSC>
                {isBtnShowed && (
                    <OrderTooltipSC>
                        {data.contentfulServices?.[usedName]}
                        <ActionButton
                            onClick={handleClickOrder}
                            style={{ padding: "4px 16px" }}
                            isSmall
                        >
                            <Trans i18nKey={"orderTextMin"}>
                                Оформить заявку
                            </Trans>
                        </ActionButton>
                    </OrderTooltipSC>
                )}
                <TopInfoWrapperSC>
                    <PricesWrapperSC>
                        {salePrice && <HotSaleTag />}
                        <PriceSC>{salePrice ? salePrice : price} €</PriceSC>
                        {salePrice && <OldPriceSC>{price} €</OldPriceSC>}
                    </PricesWrapperSC>
                    <TitleSC>{data.contentfulServices?.[usedName]}</TitleSC>
                    <ActionButton onClick={handleClickOrder}>
                        <Trans i18nKey={"orderTextMin"}>Оформить заявку</Trans>
                    </ActionButton>
                </TopInfoWrapperSC>
                <CarouselSlider slides={data.contentfulServices?.sliderPhoto} />
                <DescriptionWrapperSC>
                    <MainInfoSC>{richText}</MainInfoSC>
                </DescriptionWrapperSC>
            </ServiceItemSC>
            {isOpen && (
                <Modal onClose={handleClose} isOrderModal>
                    <ModalTitleSC>
                        {data.contentfulServices?.[usedName]}
                    </ModalTitleSC>
                    <Form
                        isOrder
                        serviceToOrder={data.contentfulServices?.nameUk}
                    />
                </Modal>
            )}
            {isBtnShowed && isMobile && (
                <ActionButton
                    onClick={handleClickOrder}
                    style={{
                        padding: "16px 24px",
                        position: "fixed",
                        bottom: "20px",
                        left: "12px",
                    }}
                    isSmall
                >
                    <Trans i18nKey={"orderTextMin"}>Оформить заявку</Trans>
                </ActionButton>
            )}
        </Layout>
    );
};
export default ServiceItem;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
    query ServiceItem($id: String, $language: String!) {
        contentfulServices(contentful_id: { eq: $id }) {
            salePrice
            price
            nameEn
            nameRu
            nameUk
            descriptionEn {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData(width: 760)
                        __typename
                    }
                }
            }
            descriptionRu {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData(width: 760)
                        __typename
                    }
                }
            }
            descriptionUk {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData(width: 760)
                        __typename
                    }
                }
            }
            sliderPhoto {
                gatsbyImageData(height: 420)
            }
        }
        locales: allLocale(
            filter: { ns: { in: ["index"] }, language: { eq: $language } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;

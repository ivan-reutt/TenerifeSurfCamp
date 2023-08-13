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
    StickyOrderBtnSC,
    TooltipOrderBtnSC,
    OrderTooltipSC,
} from "src/layouts/service-item";
import {
    ContentfulRichTextGatsbyReference,
    renderRichText,
    RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { ActionButton, ColorTypes } from "components/ActionButton";
import CarouselSlider from "components/CarouselSlider";
import { Modal } from "components/Modal";
import { Form } from "components/Form";
import Layout from "components/Layout";
import { Trans, I18nContext } from "gatsby-plugin-react-i18next";
import { capitalize } from "src/utils/makeFirstLetterUppercase";
import HotSaleTag from "components/HotSaleTag";
import { devices } from "src/styles/media";

const ServiceItem = ({ data }: PageProps<Queries.ServiceItemQuery>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBtnShowed, setIsBtnShowed] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>();
    const { i18n } = React.useContext(I18nContext);
    const langCode = capitalize(i18n.language);
    const usedDescription =
        `description${langCode}` as keyof typeof data.contentfulServices;
    const usedName = `name${langCode}` as keyof typeof data.contentfulServices;

    const richText =
        data.contentfulServices?.[usedDescription] &&
        renderRichText(
            data.contentfulServices[
                usedDescription
            ] as RenderRichTextData<ContentfulRichTextGatsbyReference>,
        );
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
            setIsBtnShowed(window.pageYOffset > 300 ? true : false);
        };
        const handleMediaEvent = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        window.addEventListener("scroll", handleScrollEvent);
        window
            .matchMedia(devices.lg)
            .addEventListener("change", handleMediaEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
            window.removeEventListener("change", handleScrollEvent);
        };
    }, []);

    return (
        <Layout>
            <ServiceItemSC>
                {isBtnShowed && (
                    <OrderTooltipSC>
                        {data.contentfulServices?.[usedName]}
                        <TooltipOrderBtnSC
                            onClick={handleClickOrder}
                            $colorType={ColorTypes.GREEN}
                        >
                            <Trans i18nKey={"orderTextMin"}>
                                Оформить заявку
                            </Trans>
                        </TooltipOrderBtnSC>
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
                        <Trans i18nKey={"actionBtn"}>Записаться в лагерь</Trans>
                    </ActionButton>
                </TopInfoWrapperSC>
                <CarouselSlider slides={data.contentfulServices?.sliderPhoto} />
                <DescriptionWrapperSC>
                    <MainInfoSC>{richText}</MainInfoSC>
                </DescriptionWrapperSC>
            </ServiceItemSC>
            {isOpen && (
                <Modal
                    onClose={handleClose}
                    style={{
                        width: "780px",
                        paddingLeft: "100px",
                        paddingRight: "100px",
                    }}
                >
                    <ModalTitleSC>
                        {data.contentfulServices?.[usedName]}
                    </ModalTitleSC>
                    <Form isOrder />
                </Modal>
            )}
            {isBtnShowed && isMobile && (
                <StickyOrderBtnSC
                    onClick={handleClickOrder}
                    $colorType={ColorTypes.GREEN}
                >
                    <Trans i18nKey={"orderTextMin"}>Оформить заявку</Trans>
                </StickyOrderBtnSC>
            )}
        </Layout>
    );
};
export default ServiceItem;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;

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
            }
            descriptionRu {
                raw
            }
            descriptionUk {
                raw
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

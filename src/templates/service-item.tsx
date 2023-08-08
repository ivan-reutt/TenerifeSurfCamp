import * as React from "react";
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
    ModalAgreementSC,
} from "src/layouts/service-item";
import {
    ContentfulRichTextGatsbyReference,
    renderRichText,
    RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { ActionButton } from "components/ActionButton";
import CarouselSlider from "components/CarouselSlider";
import { Modal } from "components/Modal";
import { useState } from "react";
import { Form } from "components/Form";
import Layout from "components/Layout";
import { Trans } from "gatsby-plugin-react-i18next";

const ServiceItem = ({ data }: PageProps<Queries.ServiceItemQuery>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const richText = renderRichText(
        data?.contentfulServices
            ?.description as RenderRichTextData<ContentfulRichTextGatsbyReference>,
    );
    const salePrice = data.contentfulServices?.salePrice;
    const price = data.contentfulServices?.price;

    const handleClickOrder = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsOpen(true);
    };

    return (
        <Layout>
            <ServiceItemSC>
                <TopInfoWrapperSC>
                    <PricesWrapperSC>
                        <PriceSC>{salePrice ? salePrice : price} €</PriceSC>
                        {salePrice && <OldPriceSC>{price} €</OldPriceSC>}
                    </PricesWrapperSC>
                    <TitleSC>{data.contentfulServices?.name}</TitleSC>
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
                    onClose={() => setIsOpen(false)}
                    style={{
                        width: "780px",
                        paddingLeft: "100px",
                        paddingRight: "100px",
                    }}
                >
                    <ModalTitleSC>{data.contentfulServices?.name}</ModalTitleSC>
                    <Form isOrder={true} />
                    <ModalAgreementSC>
                        *Нажимая кнопку “Оформить заяку на заказ”, вы
                        соглашаетесь с политикой конфиденциальности
                    </ModalAgreementSC>
                </Modal>
            )}
        </Layout>
    );
};
export default ServiceItem;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;

export const query = graphql`
    query ServiceItem($id: String) {
        contentfulServices(contentful_id: { eq: $id }) {
            salePrice
            price
            name
            description {
                raw
            }
            sliderPhoto {
                gatsbyImageData
            }
        }
    }
`;

import { useStaticQuery, graphql } from "gatsby";

export const useContentfulSurfServices = () => {
    const { contentfulServices } = useStaticQuery(graphql`
        query SurfService {
            contentfulServices(nameEn: { ne: "Surfcamp" }) {
                price
                salePrice
                contentful_id
            }
        }
    `);
    return contentfulServices;
};

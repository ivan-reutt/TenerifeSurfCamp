import { useStaticQuery, graphql } from "gatsby";

export const useContentfulSurfServices = () => {
    const { contentfulServices } = useStaticQuery(graphql`
        query SurfService {
            contentfulServices(isMainService: { eq: true }) {
                price
                salePrice
                contentful_id
            }
        }
    `);
    return contentfulServices;
};

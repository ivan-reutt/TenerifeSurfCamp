import React from "react";
import { useSiteMetadata } from "src/hooks/useSiteMetadata";

interface ISeo {
    title?: string;
    description?: string;
    children?: any;
}

export const SEO: React.FC<ISeo> = ({ title, description, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        keywords,
    } = useSiteMetadata();
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    };
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content="FunVibe" />
            <meta property="og:description" content="" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={siteUrl} />
            {children}
        </>
    );
};

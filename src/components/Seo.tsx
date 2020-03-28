import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string[];
  description?: string;
  keywords?: string[];
  lang?: string[];
  meta?: string[];
};

const SEO: React.FC<Props> = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return <div>Hi</div>;

  // return (
  //   <Helmet
  //     htmlAttributes={{
  //       lang || 'en'
  //     }}
  //     meta={[
  //       {
  //         name: `description`,
  //         content: metaDescription
  //       },
  //       {
  //         property: `og:title`,
  //         content: title
  //       },
  //       {
  //         property: `og:description`,
  //         content: metaDescription
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`
  //       },
  //       {
  //         name: `twitter:card`,
  //         content: `summary`
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: site.siteMetadata.author
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: title
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: metaDescription
  //       }
  //     ]
  //       .concat(
  //         keywords.length > 0
  //           ? {
  //               name: `keywords`,
  //               content: keywords.join(`, `)
  //             }
  //           : []
  //       )
  //       .concat(meta)}
  //     title={title}
  //     titleTemplate={`%s | ${site.siteMetadata.title}`}
  //   />
  // );
};

export default SEO;

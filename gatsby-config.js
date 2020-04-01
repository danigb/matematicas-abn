module.exports = {
  siteMetadata: {
    title: `Matemáticas ABN`,
    description: `Ejercicios de matemáticas para estudiantes`,
    author: `danigb & vegalina`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/components/Layout.tsx")
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matemáticas ABN`,
        short_name: `matematicas-abn`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fbd38d`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
        whitelist: ["HomeLink"]
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`
  ]
};

import type { GatsbyConfig } from "gatsby"
import { createProxyMiddleware } from "http-proxy-middleware";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  developMiddleware: app => {
    app.use(
      "/blazor-components/",
      createProxyMiddleware({
        target: "http://localhost:5157",
        changeOrigin: true,
        secure: false
      })
    );
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        fastHash: true,
      },
    },
  ],
}

export default config

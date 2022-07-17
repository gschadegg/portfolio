require("dotenv").config({
  path: `.env`,
})

const siteUrl = process.env.GATSBY_URL || "http://localhost:8000/"

module.exports = {
  siteMetadata: {
    title: `Gretchen Schadegg | Front End Developer`,
    description: `Gretchen Schadegg is a Front End developer with a passion for technology and the open web. She believes in creating interactive experiences that help people engage with their data in meaningful ways to better understand themselves, their surroundings, and the world. She currently is self-employed building interactive sites and web applications for clients and her own personal projects.`,
    author: `@GS`,
    siteUrl: `https://portfoliomain50937.gatsbyjs.io/`,
    keywords: [
      "developer",
      "full stack",
      "front end",
      "front-end",
      "react developer",
      "full-stack",
      "development",
      "freelance developer",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gretchen Schadegg's Personal Portfolio`,
        short_name: `GS Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "siteUrl",
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.4, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 30%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    `gatsby-plugin-minify`,
  ],
}

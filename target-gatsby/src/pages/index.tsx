import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GatsbyLogo from '../images/gatsby.png';
import BlazorLogo from '../images/blazor.svg';
import BlazorComponent from "../blazor/blazor-component";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",

}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: 48,
  margin: "20px 20px 10px 20px"
}
const logoStyles = {
  width: 120,
  height: 120,
  margin: "0 20px 0 20px"
}
const logoContainerStyles = {
  display: "flex",
  gap: 0
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={logoContainerStyles}>
        <img
          alt="Gatsby Logo"
          src={GatsbyLogo}
          style={logoStyles}
        />
        <img
          alt="Blazor Logo"
          src={BlazorLogo}
          style={logoStyles}
        />
      </div>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Gatsby + Blazor</span>
      </h1>
      <BlazorComponent />
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Gatsby + Blazor</title>

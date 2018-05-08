import React from "react"
import styles from "./styles.module.scss";
import Link from "gatsby-link";

// import { rhythm } from "../utils/typography";

export default ({ children, data }) => 
  <div className={styles.body}>
    <header className={styles.header}>
      <Link className={styles.link} to={`/`}>
        <h1 className={styles.siteTitle}>{data.site.siteMetadata.title}</h1>
      </Link>
      <Link className={styles.link} to={`/about/`}>
        About
      </Link>
    </header>
    <div className={styles.content}>
      {children()}
    </div>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
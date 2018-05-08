import React from "react";
// import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h2>{node.frontmatter.title}{" "}</h2>
            <time datetime={node.frontmatter.date}>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
import React from "react";
import { graphql } from "gatsby";

import kebabCase from "lodash/kebabCase";
import Link from "gatsby-link";

export default class Tags extends React.Component {
  render() {
    const tags = this.props.data.allMarkdownRemark.group;
    return (
      <div>
        <div>
          <Link to={`/project/`}>Back </Link>
          <ul className="tags__list">
            {tags.map(tag => (
              <li key={tag.fieldValue} className="tags__list-item">
                <Link
                  to={`/project/tags/${kebabCase(tag.fieldValue)}/`}
                  className="tags__list-item-link"
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

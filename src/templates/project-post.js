import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import moment from "moment";
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={"blog"}>
          <Link to={`/project/`}> All Projects</Link>
        <h1>{post.frontmatter.title}</h1>
        <table>
          <tbody>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Spent Time</th>
            </tr>
            <tr>
              <td>{moment(post.frontmatter.startdate, "YYYY-MM-DD").format("MMM D, YYYY")}</td>
              <td>{moment(post.frontmatter.enddate, "YYYY-MM-DD").format("MMM D, YYYY")}</td>
              <td>
                {moment(post.frontmatter.enddate, "YYYY-MM-DD").diff(
                  moment(post.frontmatter.startdate, "YYYY-MM-DD"),
                  "days"
                ) + " days"}
              </td>
            </tr>
          </tbody>
        </table>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>SLOT</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        startdate
        enddate
      }
    }
  }
`;

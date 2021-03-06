import React from "react";
import Card from "../components/card";
import anime from "animejs";
import { graphql } from "gatsby";

export default class ProjectList extends React.Component {
  state = {
    classNameVar: "tile tile-project",
    selected: null
  };

  componentDidMount() {
    anime({
      targets: `.wrapCard`,
      opacity: [0, 1],
      duration: [500],
      easing: "easeInOutSine",
      delay: anime.stagger(200)
    });
  }
  render() {
    return (
      <div>
        {console.log(this)}
        <div className={"content-container-nomargin"}>
          {/* <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
          <Link to={`/project/tags`}> All tags -></Link> */}
          <div>
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <Card node={node} type="project" key={node.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___enddate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            type
            startdate(formatString: "DD MMMM, YYYY")
            enddate(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 600)
        }
      }
    }
  }
`;
// {node.excerpt.length > 105
//   ? node.excerpt.substring(
//       0,
//       node.excerpt.indexOf(" ", 105) === -1
//         ? node.excerpt.length
//         : node.excerpt.indexOf(" ", 105)
//     ) + "..."
//   : node.excerpt}

// {/* <div
//                 key={node.id}
//                 className={
//                   node.id === this.state.selected ? "tile tile-project yeet" : "tile tile-project"
//                 }
//                 onTouchStart={touchStartEvent => this.swipeTrigger(node.id)}
//                 //onTouchEnd={() => this.swipeEnd()}
//                 // onClick={e => {
//                 //   e.preventDefault();
//                 //   e.stopPropagation();
//                 //   console.log("YYEET");
//                 // }}
//               >
//                 <Link to={node.fields.slug}>
//                   <div className="text">
//                     <h2 className="animate-text">
//                       {node.frontmatter.title} <span>— {node.frontmatter.startdate}</span>
//                     </h2>
//                     <p className="animate-text">
//                       {/*
//             Basically what that huge chunk of code does
//             is:
//             1. Check if the tagline length is > 105
//             2. If not, just print the whole tagline
//             3. If it is, check if there is a space after
//             the index 105 and is not -1. If there isn't
//             then it'll return -1.
//             4. If there is no space after 105, (which returns
//             -1) then print the whole tagline
//             5. If not, then check if the last character of the tagline
//             has punctuation.
//             6. If it does, it prints the (first 105 characters + however
//             many more till the next space) of the string
//             7. If it doesn't it prints the first 105 characters + however
//             many more till the next space) of the string + '...'
//             8. This is because  'banana...' looks better than
//             'bannana!...'
//             NOTE. This may not work with super super super long words
//             Have not tried and don't see why anyone would do this.
//             */}
//                       {node.excerpt.length > 105
//                         ? node.excerpt.indexOf(" ", 105) === -1
//                           ? node.excerpt
//                           : /^[a-z]+$/i.test(node.excerpt[node.excerpt.indexOf(" ", 105) - 1])
//                             ? node.excerpt.substring(0, node.excerpt.indexOf(" ", 105)) + "..."
//                             : node.excerpt.substring(0, node.excerpt.indexOf(" ", 105))
//                         : node.excerpt}
//                     </p>
//                     {/* {console.log(node. excerpt[node.excerpt.indexOf(" ", 105)])} */}
//                     <div className="dots">
//                       <span />
//                       <span />
//                       <span />
//                       <span />
//                       <span />
//                     </div>
//                   </div>
//                 </Link>
//                 <Img fluid={node.frontmatter.image.childImageSharp.fluid} className="img" />
//               </div> */}

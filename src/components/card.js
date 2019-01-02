import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import ProjectList from "../pages/project";
let readingTime = require("reading-time");

const _ = require("lodash");

export default class Card extends React.Component {
  state = {
    selected: null,
    fullScreen: false,
    focused: null,
    image: null
  };
  imgStyle = {
    backgroundColor: "blue"
  };
  //   console.log(data);
  displayCard = () => {
    switch (this.props.type) {
      case "project":
        return (
          <Link to={this.props.node.fields.slug} className={"projectCard"}>
            <Img
              fluid={this.props.node.frontmatter.image.childImageSharp.fluid}
              className={"projectCardImage"}
            />
            {/* <div className={"projectColorFilter"} /> */}
            <div className={"projectTitle"}>{this.props.node.frontmatter.title}</div>
          </Link>
        );
      case "blog":
        return (
          <div className="blogCard">
            <Link to={this.props.node.fields.slug} className="blogTitleWrap">
              <div>{this.props.node.frontmatter.title}</div>
              <div>{this.props.node.frontmatter.date}</div>
              <div>{readingTime(this.props.node.html).text}</div>
            </Link>
            <div className="onHoverBlog">READ ME!</div>
          </div>
        );
      default:
        return <div>Something unexpected happened</div>;
    }
  };
  render() {
    return (
      <div key={this.props.node.id + this.props.node.frontmatter.title}>{this.displayCard()}</div>
    );
  }
}
{
  /* <div className={""}>
          <Link to={this.props.node.fields.slug}>
            <Img fluid={this.props.node.frontmatter.image.childImageSharp.fluid} className={""} />
          </Link>
        </div>
        <div className={""}>
          <h1 className={""}>
            <Link to={this.props.node.fields.slug} className={"link-not underline--magical-not"}>
              {this.props.node.frontmatter.title}
            </Link>
            <span>
              {" "}
              — {this.props.node.frontmatter.startdate}
              {console.log(this.props.node.frontmatter.startdate, this.props.node.frontmatter.date)}
              {this.props.node.frontmatter.date}{" "}
            </span>
          </h1>
          <div className={""}>
            {this.props.node.frontmatter.tags.map(tag => (
              <Link
                to={`/${this.props.node.frontmatter.type}/tags/${_.kebabCase(tag)}`}
                className={""}
              >
                <div className={""}>
                  <div className={""}>
                    <p key={this.props.node.frontmatter.title + tag} className={""}>
                      {tag}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className={""}>
            {this.props.node.excerpt.length > 300
              ? this.props.node.excerpt.indexOf(" ", 300) === -1
                ? this.props.node.excerpt
                : /^[a-z]+$/i.test(
                    this.props.node.excerpt[this.props.node.excerpt.indexOf(" ", 300) - 1]
                  )
                ? this.props.node.excerpt.substring(0, this.props.node.excerpt.indexOf(" ", 300)) +
                  "..."
                : this.props.node.excerpt.substring(0, this.props.node.excerpt.indexOf(" ", 300))
              : this.props.node.excerpt}
          </p>
        </div> */
}

import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css";
import Img from "gatsby-image";

const Projects = ({ data }) => {
    const projects = data.allMarkdownRemark.nodes;
    console.log(data)

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects</h1>
                <h3>Projects I've created</h3>
                <div className={styles.projects} >
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id} >
                            <div>
                                <Img fluid={ project.frontmatter.thumb.childImageSharp.fluid } />
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.stack }</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects

export const query = graphql`
    query ProjectsPage {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
              html
              frontmatter {
                slug
                stack
                title
                thumb {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                featured {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              id
            }
        }
    }
`
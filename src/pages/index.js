import * as React from "react";
import * as styles from '../styles/home.module.css';
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
	
	return (
		<Layout>
			<section className={ styles.header }>
				<div>
					<h2 >Yay!</h2>
					<h3>Having fun :)</h3>
					<p>More yay</p>
					<Link className={styles.btn} to="/projects" >My portfolio projects</Link>
				</div>
				<Img fluid={ data.file.childImageSharp.fluid }  />
			</section>
		</Layout>
	);
}

export const query = graphql`
	query Banner {
		file(relativePath: {eq: "banner.png"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
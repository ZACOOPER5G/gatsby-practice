import * as React from "react";
import * as styles from '../styles/home.module.css';
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
	const { title, description } = data.site.siteMetadata;

	return (
		<Layout>
			<section className={ styles.header }>
				<div>
					<h2 >Yay!</h2>
					<h3>Having fun :)</h3>
					<p>More yay</p>
					<Link className={styles.btn} to="/projects" >My portfolio projects</Link>
				</div>
				<img src="static/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
			</section>
		</Layout>
	);
}

export const query = graphql`
	query SiteInfo {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
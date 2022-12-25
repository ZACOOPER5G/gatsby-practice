import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
        <div className={styles.portfolio}>
            <h1>Projects</h1>
            <h3>Projects I've created</h3>
        </div>
    </Layout>
  )
}

export default Projects
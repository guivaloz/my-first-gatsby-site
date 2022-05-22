import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm the proud creator ot this site.</p>
      <StaticImage
        alt="Orange cat"
        src="../images/orange.jpg"
      />
    </Layout>
  )
}

export default AboutPage

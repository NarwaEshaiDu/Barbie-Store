import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Barbie from "../../components/barbie"
import {
  hero,
  section,
  subtitle,
  barbies,
  description,
} from "../../page.module.css"

const BarbiePage = ({
  data: {
    allWpBarbie: { edges: barbieInfo },
    wpPage: { barbiesPage },
  },
}) => {
  const image = getImage(barbiesPage.headerBarbies.picture.localFile)
  return (
    <Layout>
      <div>
        <GatsbyImage
          className={hero}
          image={image}
          alt={barbiesPage.headerBarbies.picture.altText}
        />
      </div>
      <div className={section}>
        <h2 className={subtitle}>{barbiesPage.headerBarbies.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: barbiesPage.headerBarbies.description,
          }}
        />
        <div className={barbies}>
          {barbieInfo.map(({ node: barbie }) => (
            <Barbie key={barbie.id} slug={barbie.slug} barbie={barbie} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "barbies" }) {
      barbiesPage {
        headerBarbies {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
            }
            altText
          }
        }
      }
    }
    allWpBarbie {
      edges {
        node {
          barbie {
            barbieName
            firstName
            lastName
            profilePicture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          slug
          id
        }
      }
    }
  }
`
export default BarbiePage

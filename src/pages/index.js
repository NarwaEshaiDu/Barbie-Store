import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Barbie from "../components/barbie"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  barbies,
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
          <div 
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>
      <div className={section}>
        <h2 className={subtitle}>{homePage.featureBarbies.title}</h2>
        <p>{homePage.featureBarbies.description}</p>
        <a className={CTA} target="__blank" href={homePage.callToAction.link}>
          {homePage.callToAction.description}
        </a>

        <div className={barbies}>
          {homePage.featureBarbies.barbies.map(barbie => (
            <Barbie
              slug={`barbies/${barbie.slug}`}
              key={barbie.id}
              barbie={barbie}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homePage {
        headerHome {
          description
          title
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 450, height: 450)
              }
            }
          }
        }
        callToAction {
          description
          link
        }
        featureBarbies {
          barbies {
            ... on WpBarbie {
              id
              barbie {
                barbieName
                firstName
                lastName
                profilePicture {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                      )
                    }
                  }
                }
              }
              slug
            }
          }
          description
          title
        }
      }
    }
  }
`
export default IndexPage

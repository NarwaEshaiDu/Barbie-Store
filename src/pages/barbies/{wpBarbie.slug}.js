import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  fullName,
  barbieRoles,
  barbieDescription,
  barbieInfo,
  barbiePictures,
  barbiePicture,
} from "../../page.module.css"

const BarbiePage = ({
  data: {
    wpBarbie: {
      barbie,
      professions: { nodes: professions },
    },
  },
}) => {
  const image = getImage(barbie.profilePicture.localFile)
  const picture1 = getImage(barbie.pictures.picture1.localFile)
  const picture2 = getImage(barbie.pictures.picture2.localFile)
  const picture3 = getImage(barbie.pictures.picture3.localFile)

  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <div className={barbieRoles}>
            {professions.map((profession, i) => (
              <span>
                {profession.name} {i + 1 < professions.length && "- "}
              </span>
            ))}
          </div>
          <h1 className={fullName}>
            {barbie.firstName} {barbie.lastName}
          </h1>
          <div
            className={barbieDescription}
            dangerouslySetInnerHTML={{ __html: barbie.description }}
          />
          <p>
            <span className={barbieInfo}>Phone:</span> {barbie.phoneNumber}
          </p>
          <p>
            <span className={barbieInfo}>Height:</span> {barbie.height} <span>cm</span>
          </p>
          <p>
            <span className={barbieInfo}>Shirt Size:</span> {barbie.shirtSize}
          </p>
          <p>
            <span className={barbieInfo}>Shoe Size:</span> {barbie.shoeSize} <span>Euro sizes</span>
          </p>
          <p>
            <span className={barbieInfo}>Price:</span> {barbie.price} <span>Euro's</span>
          </p>
        </div>
        <GatsbyImage
          className={headerPicture}
          image={image}
          alt={barbie.profilePicture.altText}
        />
      </div>
      <div className={barbiePictures}>
        <GatsbyImage
          className={barbiePicture}
          image={picture1}
          alt={barbie.pictures.picture1.altText}
        />
        <GatsbyImage
          className={barbiePicture}
          image={picture2}
          alt={barbie.pictures.picture2.altText}
        />
        <GatsbyImage
          className={barbiePicture}
          image={picture3}
          alt={barbie.pictures.picture3.altText}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpBarbie(id: { eq: $id }) {
      barbie {
        description
        firstName
        lastName
        height
        price
        phoneNumber
        shirtSize
        shoeSize
        profilePicture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        pictures {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      professions {
        nodes {
          name
        }
      }
    }
  }
`

export default BarbiePage

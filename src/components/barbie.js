import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wrapper, image, barbieInfo, barbieName } from "./barbie.module.css"

export const Barbie = ({ barbie, slug }) => {
  const profile = getImage(barbie.barbie.profilePicture.localFile)
  return (
    <Link className={wrapper} to={slug}>
      <GatsbyImage
        className={image}
        image={profile}
        alt={barbie.barbie.profilePicture.altText}
      />
      <div className={barbieInfo}>
        {barbie.barbie.barbieName && (
          <p className={barbieName}>{barbie.barbie.barbieName}</p>
        )}
      </div>
    </Link>
  )
}

export default Barbie

import React from "react"
import { Link } from "gatsby"
import {
  wrapper,
  title,
  socials,
  instagram,
  facebook,
  twitter,
  navLinkText,
} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
  return (
    <div className={wrapper}>
      <div>
        <p className={title}>
          <Link className={navLinkText} to="/">
            {siteTitle}
          </Link>
        </p>
        <p>NarwaEshaiDu</p>
        <p>All rights reserved</p>
      </div>
      <div>
        <p>{`${companyInfo.address}, ${companyInfo.postcode} ${companyInfo.city}`}</p>
        <div className={socials}>
          Follow us:
          <a
            className={instagram}
            target="__blank"
            href={companyInfo.socials.instagram}
          />
          <a
            className={facebook}
            target="__blank"
            href={companyInfo.socials.facebook}
          />
          <a
            className={twitter}
            target="__blank"
            href={companyInfo.socials.twitter}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer

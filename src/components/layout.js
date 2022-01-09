import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: { eq: "contact-us" }) {
        contactPage {
          companyInformation {
            address
            city
            postcode
            socials {
              facebook
              instagram
              twitter
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <html>
        <body>
          <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <nav className={nav}>
              <header className={siteTitle}>
                <Link className={navLinkText} to="/">
                  {data.site.siteMetadata.title}
                </Link>
              </header>
              <ul className={navLinks}>
                <li></li>
                <li className={navLinkItem}>
                  <Link className={navLinkText} to="/">
                    Home
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link className={navLinkText} to="/barbies">
                    Barbies
                  </Link>
                </li>
              </ul>
            </nav>
            <main>{children}</main>
          </div>
          <Footer
            siteTitle={data.site.siteMetadata.title}
            companyInfo={data.wpPage.contactPage.companyInformation}
          />
        </body>
      </html>
    </>
  )
}

export default Layout

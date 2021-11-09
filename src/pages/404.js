import * as React from "react"
import Spacer from "../components/Spacer"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Seo title="404: Not found" />
    <Spacer height="10em" />
    <h1 className="text-center">404: Not Found</h1>
    <p className="text-center">
      This page doesn&#39;t exist...{" "}
      <Link className="green" to="/">
        Head back home.
      </Link>
    </p>
    <Spacer height="10em" />
  </Layout>
)

export default NotFoundPage

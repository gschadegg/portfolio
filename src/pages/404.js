import * as React from "react"
import TextButton from "./../components/Buttons/TextButton"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <article className="flex flex-col m-auto w-full align-center items-center ">
      <section className="flex flex-col align-center items-center rounded-full md:border-headerText/[.06] md:border-[60px] py-24 md:px-24">
        <h1 className="text-[10rem] font-bold text-headerText/50 leading=[10rem]">
          404
        </h1>
        <p className="basicText lg pb-12">Looks like nothing is here</p>
        <TextButton classes={["self-center"]} to="/">
          Go Home
        </TextButton>
      </section>
    </article>
  </Layout>
)

export default NotFoundPage

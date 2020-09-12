import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// export default function Home() {
//   return <div>Hello world!!!!!</div>
// }

export default ({ data }) => (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        {/* <img src="images/hero.jpg" alt="" /> */}
        <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{ height:"100%" }} />
      </figure>
      <div className="catch">
        <h1>There is no love sincerer than<br /> the love of food.</h1>
        <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
      </div>
      <div className="wave">
        <img src="images/wave.svg" alt="" />
      </div>
    </section>
    <section className="food">
      <div className="container">
        <h2 className="bar">Food <span>Essence</span></h2>
        <div className="details">
          <div className="detail">
            <figure>
              {/* <img src="images/fruit.jpg" alt="" /> */}
              <Img fluid={data.fruit.childImageSharp.fluid} alt="" />
            </figure>
            <h3>フルーツ</h3>
            <p>FRUIT</p>
            <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
          </div>
          <div className="detail">
            <figure>
              {/* <img src="images/grain.jpg" alt="" /> */}
              <Img fluid={data.grain.childImageSharp.fluid} alt="" />
            </figure>
            <h3>穀物</h3>
            <p>GRAIN</p>
            <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
          </div>
          <div className="detail">
            <figure>
              {/* <img src="images/beverage.jpg" alt="" /> */}
              <Img fluid={data.beverage.childImageSharp.fluid} alt="" />
            </figure>
            <h3>飲み物</h3>
            <p>BEVERAGE</p>
            <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        {/* <img src="images/berry.jpg" alt="赤く熟したベリー" /> */}
        <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ height: "100%" }}/>
      </figure>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit: file(relativePath: { eq: "fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    grain: file(relativePath: { eq: "grain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beverage: file(relativePath: { eq: "beverage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    berry: file(relativePath: { eq: "berry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: { eq: "pattern.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
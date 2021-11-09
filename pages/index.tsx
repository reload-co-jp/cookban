import React from "react"
import Layout from "components/layouts"
import { Main, Container, Content, Section, Item } from "components/elements"
import menu from "static/template"
import Styled, { keyframes } from "styled-components"

const PointAnimation = keyframes`
  100% {
    opacity: 0;
    top: 50%;
  }
`
const Point = Styled.div`
  color: #C44303;
  content: "●";
  font-size: 36px;
  left: -36px;
  position: fixed;
  top: 200%;
  text-shadow:
  5vw   -10vh 28px,
  10vw  -40vh 26px,
  20vw  -50vh 24px,
  30vw  -58vh 29px,
  39vw  -25vh 20px,
  42vw  -34vh 25px,
  48vw  -80vh 28px,
  56vw  -15vh 28px,
  63vw  -18vh 26px,
  78vw  -22vh 24px,
  86vw  -32vh 29px,
  94vw  -17vh 27px;
  animation: ${PointAnimation} 8s linear infinite;
  &:nth-child(2) {
    animation-delay: 2s;
  }
  &:nth-child(3) {
    animation-delay: 4s;
  }
  &:nth-child(4) {
    animation-delay: 6s;
  }
`

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <Layout>
        {Array(4)
          .fill(undefined)
          .map((_, i) => (
            <Point key={i}>●</Point>
          ))}
        <Main className="is-dark">
          <Container>
            <Content className="is-large">
              {menu.sections.map((section) => (
                <Section key={section.section?.title}>
                  <h2>{section.section?.title}</h2>
                  {section.items.map((item) => (
                    <Item key={item.title}>
                      <h3>{item.title}</h3>
                      <div className="content">
                        {item.description && <p>{item.description}</p>}
                        <data>{item.cost}円</data>
                      </div>
                    </Item>
                  ))}
                </Section>
              ))}
            </Content>
          </Container>
        </Main>
      </Layout>
    </>
  )
}

export default IndexPage

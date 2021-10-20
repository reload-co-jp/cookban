import React from "react"
import Layout from "components/layouts"
import { Main, Container, Content, Section, Item } from "components/elements"
import menu from "static/template"

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <Layout>
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

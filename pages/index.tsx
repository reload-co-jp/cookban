import React from "react"
import axios from "axios"
import Layout from "components/layouts"
import {
  Main,
  Container,
  Content,
  Section,
  ItemCard,
} from "components/elements"
import {
  GoogleSpreadSheetAPIResponse,
  Item,
  is,
  SectionName,
  SectionNames,
  SectionItem,
} from "@types"

const spreadSheetHeader = [
  "section",
  "title",
  "description",
  "cost",
  "active",
] as const

const IndexPage = ({ items }: { items: SectionItem[] }): React.ReactElement => {
  return (
    <>
      <Layout>
        <Main className="is-dark">
          <Container>
            <Content className="is-large">
              {items.map((section) => (
                <Section key={section.name}>
                  <h2>{section.name}</h2>
                  {section.items.map((item) => (
                    <ItemCard key={item.title}>
                      <div className="title">
                        <h3>{item.title}</h3>
                        <data>{item.cost}円</data>
                      </div>
                      <div className="content">
                        {item.description &&
                          item.description
                            .split("\n")
                            .map((row, i) => <p key={i}>{row}</p>)}
                      </div>
                    </ItemCard>
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

IndexPage.getInitialProps = async () => {
  const sheetId = "1aO8CTHypzIFW03MTeVd9QG-Jmamr1u0k1oWtv_Pid2Q"
  const apiKey = "AIzaSyB5vVtz0TRgDQNmStjQG5eTf-lcYFL-G-E"
  const {
    data: { values },
  } = await axios.get<GoogleSpreadSheetAPIResponse>(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/display?key=${apiKey}`
  )
  if (JSON.stringify(values[0]) !== JSON.stringify(spreadSheetHeader))
    throw "Invaid item data"
  const body = values.slice(1)
  const items = body.map((row): Item | undefined => {
    if (!is<SectionName>(row[0])) return undefined
    const item: Item = {
      section: row[0],
      title: row[1],
      description: row[2],
      cost: parseInt(row[3]),
      active: row[4] == "TRUE",
    }
    return item
  })

  return {
    items: SectionNames.map((name) => {
      return {
        name,
        items: items.filter((item) => item?.section == name),
      }
    }),
  }
}

export default IndexPage

import Styled from "styled-components"

export const Container = Styled.div`
margin: auto;
max-width: 1000px;
`

export const Main = Styled.main`
min-height: 100vh;
&.is-dark {
  background: #666;
}
`

export const Content = Styled.section`
padding: .5rem;
display: flex;
gap: 1rem .5rem;
flex-wrap: wrap;
justify-content: space-around;
&.is-large {
  padding: .5rem;
}
`

export const Section = Styled.section`
background: #111;
box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3);
color: #aaa;
width: 100%;
padding: .25rem;
h2 {
  font-size: 1.25rem;
  border-bottom: solid 1px #303030;
  margin: 0;
  padding: .5rem;
}
`

export const ItemCard = Styled.section`
color: #ccc;
margin-bottom: .5rem;
padding: .75rem 1rem .5rem;
position: relative;
&:hover .title {
  border-color: #bfb;
}
.title {
  border-bottom: solid 2px transparent;
  display: flex;
  justify-content: space-between;
  padding: .25rem 0;
  h3 {
    color: #beb;
    font-size: 1.75rem;
    margin: 0rem;
  }
  data {
    display: block;
    font-size: 1.75rem;
    text-align: right;
  }
}
.content {
  font-size: 1.25rem;
  padding-top: .5rem;
  p {
    margin: 0;
    padding-bottom: .25rem;
  }
}
`

import Styled from "styled-components"

export const Container = Styled.div`
margin: auto;
max-width: 1200px;
`

export const Main = Styled.main`
min-height: 100vh;
&.is-dark {
  background: #363636;
  color: #f0f0f0;
}
`

export const Content = Styled.section`
padding: .5rem;
display: flex;
    flex-wrap: wrap;
&.is-large {
  padding: 3rem .5rem;
}
`

export const Section = Styled.section`
width: 100%;
max-width: calc(600px - .5rem);
padding: .5rem;
h2 {
  font-size: 1.25rem;
  border-bottom: solid 1px #f0f0f0;
  margin: .25rem;
  padding-bottom: .5rem;
}
`

export const Item = Styled.section`
background: #242424;
box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3);
margin-bottom: .5rem;
padding: 1.25rem;
&:hover {
  background: #121212;
}
h3 {
  font-size: 1.5rem;
  margin: 0rem;
}
.content {
  font-size: .75rem;
  padding: 0 .5rem;
  data {
  display: block;
  text-align: right;
}
`

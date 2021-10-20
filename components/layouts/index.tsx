import React from "react"
import Link from "next/link"
import { Container } from "components/elements"
import Styled from "styled-components"

const Nav = Styled.nav`
background-color: #f0f0f0;
font-weight: bold;
padding: 1rem;
a {
  color: #363636;
  text-decoration: none;
}
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav>
        <Container>
          <Link href="/">Cookban</Link>
        </Container>
      </Nav>
      {children}
    </>
  )
}

export default Layout

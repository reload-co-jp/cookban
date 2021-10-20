import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../../pages/index"
describe("App", () => {
  it("exist index page", async () => {
    const component = renderer.create(<IndexPage />)
    expect(!!component.getInstance).toBeTruthy()
  })
})

describe("App.Models.Embed", function () {
  it("has 404 as default values", function () {
    // Create empty note model.
    var model = new App.Models.Embed()

    expect(model).to.be.ok; //ok===truthy
    expect(model.get("url")).to.equal(null)
    expect(model.get("html")).to.equal(null)
    expect(model.get("type")).to.equal("404")
    expect(model.attributes).to.have.property("thumbnail_url")
  })

  it("sets passed attributes", function () {
    var model = new App.Models.Embed({
      title: "cooltime"
      , description: "v cool article"
      , url: "http://coolworld.me"
      , type: "link"
    })

    expect(model.get("title")).to.equal("cooltime")
    expect(model.get("type")).to.equal("link")
    expect(model.get("url")).to.equal("http://coolworld.me")
    
    expect(model.attributes).to.have.property("thumbnail_url")
    expect(model.get("thumbnail_url")).to.equal(null)
  })
})

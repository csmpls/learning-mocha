describe("Namespace", function () {
  it("provides the 'App' object", function () {
    // Expect exists and is an object.
    expect(App).to.be.an("object");

    // Expect all namespace properties are present.
    expect(App).to.include.keys(
      "Config", "Collections", "Models",
      "Routers", "Templates", "Views"
    );
  });

  it("provides the 'app' object", function () {
    expect(app).to.be.an("object");
  });
});


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


describe("App.Models.Post", function () {

  it("requires post content if there is no embed", function () {
    var model = new App.Models.Post(
      {text:''})
    expect(model.isValid()).to.not.be.ok

	  model = new App.Models.Post(
	    {text:'     '})
	  expect(model.isValid()).to.not.be.ok
  })

  it("takes text without an embed", function () {
  	var model = new App.Models.Post(
  		{text:'nice'})
  	expect(model.get('text')).to.equal('nice')
  	expect(model.get('embed')).to.equal(null)
  	expect(model.isValid()).to.be.ok
  })

  it("takes an embed model", function () {
    var model = new App.Models.Post(
      {text:'sup'
      , embed: 
	      new App.Models.Embed({
		      title: "cooltime"
		      , description: "v cool article"
		      , url: "http://coolworld.me"
		      , type: "link"
	    	}) 
    	}
    )
    expect(model.get('text')).to.equal('sup')
    expect(model.get('embed')).is.an.instanceof(App.Models.Embed)
    expect(model.get('embed').get('title')).to.equal('cooltime')
  })

  it("allows no text content if there is an embed, and assures text == null in these cases", function() {
  	var model = new App.Models.Post(
      { title: '   ',
        embed:
	      new App.Models.Embed({
		      title: "cooltime"
		      , description: "v cool article"
		      , url: "http://coolworld.me"
		      , type: "link"
	    	}) 
    	}
    )

  	expect(model.isValid()).to.be.ok
    expect(model.get('text')).to.equal(null)
    expect(model.get('embed')).is.an.instanceof(App.Models.Embed)
    expect(model.get('embed').get('title')).to.equal('cooltime')

  })

  it("removes embeds that 404", function() {
		var model = new App.Models.Post(
		  { text:'nice link', embed: new App.Models.Embed({type: "404"}) }
		)
		expect(model.get('embed')).to.equal(null)
		expect(model.get('text')).to.equal('nice link')
		expect(model.isValid()).to.be.ok
  });


})
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


describe("App.Collections.Posts", function() {

	before(function() {
		//create a ref for all tests + clear existing data
		this.posts = new App.Collections.Posts()
		this.posts.localStorage._clear()
	}) 

	after(function() {
		this.posts = null
	})

	describe("creation", function() {
		it("has default values", function() {
			expect(this.posts).to.be.ok
			expect(this.posts).to.have.length(0)
		})
	})

	describe("modification", function() {

		beforeEach(function() {
			this.posts.create({
				text:'sup bro'
				, embed: null
			})
		})

		afterEach(function() {
			this.posts.localStorage._clear()
			this.posts.reset()
		})

		it("has a single post", function(done) { //done callback for async
			var posts = this.posts, post // ?

			posts.once('reset', function() {
				expect(posts).to.have.length(1)
				post = posts.at(0)
				expect(post).to.be.ok
				expect(post.get('text')).to.contain('sup')
				done(); // async
			})

			posts.fetch({reset:true})
		})
		it("can delete a post")
		it("can create a second post")
	})
})

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

  it("if there is an embed, allows user to choose not to enter text, and assures text == null in these cases", function() {
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

  it("does not allow empty text with a 404 embed")
  it("removes embeds that 404")

})
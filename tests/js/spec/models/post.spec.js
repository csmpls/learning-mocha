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
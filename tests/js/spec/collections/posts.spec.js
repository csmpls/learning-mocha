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
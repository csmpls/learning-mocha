;(function () {
  'use strict';

  // Notes Collection
  // ----------------
  // Uses HTML `localStorage`.
  App.Collections.Posts = Backbone.Collection.extend({

    model: App.Models.Post
    , localStorage: new Backbone.LocalStorage(App.Config.storeName)

  })
}())

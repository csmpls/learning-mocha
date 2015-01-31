// Class names.
//
// Lazily creates:
//
//    App: {
//      Config: {},
//      Models: {},
//      Collections: {},
//      Routers: {},
//      Views: {},
//      Templates: {}
//    }
//
var App = App   || {};
App.Config      || (App.Config = {});
App.Models      || (App.Models = {});
App.Collections || (App.Collections = {});
App.Routers     || (App.Routers = {});
App.Views       || (App.Views = {});
App.Templates   || (App.Templates = {});

// Application instance.
var app = app || {};


(function () {
  'use strict';

  App.Models.Embed = Backbone.Model.extend({

    defaults: function () {
      return {
        type: '404'
      , url: null
      , title: null
      , thumbnail_url: null
      , description: null
      , author_name: null
      , author_url: null
      , provider_name: null
      , html: null
      };
    }

  });
}());



(function () {
  'use strict';

  App.Models.Post = Backbone.Model.extend({

    defaults: function () {
      return {
      text: null
      , embed: null
      };
    }

    , validate: function (attrs) {

      // if there is no embed,
      // there must be some text
      if (!attrs.text || attrs.text.trim().length == 0) {
        if (attrs.embed == null) {
          return 'enter some text.'
        }
        // if there is an embed, but no text
        // set text to null
        else {
          attrs.text = null
        }
      }
    }

  });
}());


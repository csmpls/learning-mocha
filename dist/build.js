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

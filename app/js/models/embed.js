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

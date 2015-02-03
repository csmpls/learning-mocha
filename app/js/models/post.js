;(function () {
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

  })
}())


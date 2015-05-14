Leppo.Models.Category = Backbone.Model.extend({
  urlRoot: '/api/categories',

  posts: function () {
    if (!this._posts) {
      this._posts = new Leppo.Collections.Posts([], { collection: this });
    }

    return this._posts;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    return response;
  }
});

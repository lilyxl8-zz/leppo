Leppo.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  // likes: function () {
  //   if (!this._likes) {
  //     this._likes = new Leppo.Collections.Likes([], { collection: this });
  //   }
  //   return this._likes;
  // },
  //
  // parse: function (response) {
  //   if (response.likes) {
  //     this.likes().set(response.likes, { parse: true });
  //     delete response.likes;
  //   }
  //
  //   return response;
  // }
});

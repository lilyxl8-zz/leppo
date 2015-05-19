Leppo.Collections.Likes = Backbone.Collection.extend({
  model: Leppo.Models.Like,
  url: '/api/likes',

  getOrFetch: function (id) {
    var like = this.get(id),
      likes = this;
    if(!like) {
      like = new Leppo.Models.Like({ id: id });
      like.fetch({
        success: function () {
          likes.add(like);
        },
      });
    } else {
      like.fetch();
    }
    return like;
  }
});

Leppo.Collections.likes = new Leppo.Collections.Likes();

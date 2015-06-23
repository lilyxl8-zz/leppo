Leppo.Collections.Comments = Backbone.Collection.extend({
  model: Leppo.Models.Comment,
  url: '/api/comments',

  getOrFetch: function (id) {
    var comment = this.get(id),
      comments = this;
    if(!comment) {
      comment = new Leppo.Models.Comment({ id: id });
      comment.fetch({
        success: function () {
          comments.add(comment);
        },
      });
    } else {
      comment.fetch();
    }
    return comment;
  }
});

Leppo.Views.PostShowThumb = Backbone.View.extend({
  template: JST["posts/_thumbCore"],

  tagName: 'section',
  className: 'post-img',

  events: {
    'click .likes-count': 'toggleLike'
  },

  initialize: function (options) {
    this.groupBy = options.groupBy;
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.comments(), 'add sync', this.render);
  },

  render: function () {
    var thumbCore = this.template({
      groupBy: this.groupBy,
      post: this.model
    });
    this.$el.html(thumbCore);
    return this;
  },

  toggleLike: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/posts/like",
      type: "POST",
      data: {
        post_id: this.model.id
      }, success: function (attrs) {
        this.model.set(this.model.parse(attrs));
        Leppo.Collections.posts.add(this.model, { merge: true });
      }.bind(this)
    });
  }
});

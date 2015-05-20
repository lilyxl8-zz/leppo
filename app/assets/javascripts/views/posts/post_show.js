Leppo.Views.PostShow = Backbone.View.extend({
  thumbCoreTemplate: JST["posts/_thumbCore"],
  bigTemplate: JST["posts/show"],

  tagName: 'li',
  className: 'post-item',

  events: {
    'click .likes-count': 'toggleLike'
  },

  initialize: function () {
    this.listenTo(this.model, 'change remove sync', this.renderThumbCore);
  },

// need 2 renders, one for thumb, one for bigShow

  renderThumbCore: function () {
    var renderedContent = this.thumbCoreTemplate({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  renderBig: function () {
    var renderedContent = this.bigTemplate({
      post: this.model
    });
    this.$el.html(renderedContent);
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

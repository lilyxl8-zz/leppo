Leppo.Views.PostShow = Backbone.View.extend({
  thumbTemplate: JST["posts/thumb"],
  bigTemplate: JST["posts/show"],

  events: {
    'click .likes-count': 'addLike'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

// need 2 renders, one for thumb, one for bigShow

  render: function () {
    var renderedContent = this.thumbTemplate({
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

  addLike: function (event) {
    event.preventDefault();
    var like = new Leppo.Models.Like({});
    like.save({}, success {
      function () {

      }
    });

  }
});

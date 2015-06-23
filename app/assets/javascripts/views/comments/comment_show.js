Leppo.Views.CommentShow = Backbone.View.extend({
  template: JST["comments/show"],

  className: 'comment-item',

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      comment: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});

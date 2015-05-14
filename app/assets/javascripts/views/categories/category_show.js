Leppo.Views.CategoryShow = Backbone.View.extend({
  template: JST["categories/show"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      category: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});

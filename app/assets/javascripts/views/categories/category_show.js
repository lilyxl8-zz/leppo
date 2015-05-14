Leppo.Views.CategoryShow = Backbone.View.extend({
  template: _.template("<h1>Category Show View</h1><h1><%= categories.escape('title') %></h1><%= categories.escape('body') %><a href='#/'>Index</a>"),

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});

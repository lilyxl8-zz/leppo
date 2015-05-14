Leppo.Views.CategoriesIndex = Backbone.View.extend({
  template: JST["categories/index"],

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});

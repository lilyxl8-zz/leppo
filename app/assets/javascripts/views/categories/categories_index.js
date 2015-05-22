Leppo.Views.CategoriesIndex = Backbone.View.extend({
  template: JST["categories/index"],
  tagName: 'ul',
  className: 'categories-list',

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this;
    this.collection.each(function (category) {
      if (category.posts().length > 0) {
        var categoryView = new Leppo.Views.CategoryShow({ model: category });
        that.$el.append(categoryView.render(false).$el);
      }
    });
    return this;
  }
});

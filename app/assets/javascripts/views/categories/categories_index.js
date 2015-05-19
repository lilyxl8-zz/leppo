Leppo.Views.CategoriesIndex = Backbone.View.extend({
  template: JST["categories/index"],
  tagName: 'ul',
  className: 'categories-list',

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset sync", this.render);
  },

  render: function () {

    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this;
    this.collection.each(function (category) {
      var categoryView = new Leppo.Views.CategoryShow({ model: category });

      that.$el.append(
        categoryView.render(false).$el
      );

    });
    return this;
  }
});

Leppo.Views.CategoriesIndex = Backbone.View.extend({
  template: JST["categories/index"],
  tagName: 'ul',
  className: 'group-list',

  events: {

  },

  initialize: function (options) {
    this.groupBy = options.groupBy;
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this;
    this.collection.each(function (category) {
      if (category.posts().length > 0) {
        var categoryView = new Leppo.Views.CategoryShow({
          groupBy: that.groupBy,
          model: category
        });
        that.$el.append(categoryView.render().$el);
      }
    });
    return this;
  }
});

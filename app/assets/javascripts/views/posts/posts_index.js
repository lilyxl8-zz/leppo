Leppo.Views.CategoriesIndex = Backbone.View.extend({
  template: _.template('<h3>Category Index View</h3><ul><% categories.each(function (categories) { %><li><a href="#/categories/<%= categories.id %>"><%= categories.escape("title") %></a><button class="delete" data-id="<%= categories.id %>">Delete!</button><a href="#/categories/<%= categories.id %>/edit">Edit</a></li><% }); %></ul><a href="#/categories/new">New Category</a>'),

  events: {
    "click .delete": "destroyCategory"
  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },

  destroyCategory: function (event) {
    var $target = $(event.currentTarget);
    var categories = this.collection.get($target.attr("data-id"));
    categories.destroy();
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});

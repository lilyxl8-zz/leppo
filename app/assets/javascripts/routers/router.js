Leppo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "categories/new": "new",
    "categories/:id": "show",
  },

  edit: function (id) {
    var categories = Leppo.Collections.categories.getOrFetch(id);

    var formView = new Leppo.Views.CategoryForm({
      model: categories,
      collection: Leppo.Collections.categories
    });

    this._swapView(formView);
  },

  index: function () {
    Leppo.Collections.categories.fetch();

    var indexView = new Leppo.Views.CategoriesIndex({
      collection: Leppo.Collections.categories
    });
    
    this._swapView(indexView);
  },

  new: function () {
    var newCategory = new Leppo.Models.Category();

    var formView = new Leppo.Views.CategoryForm({
      collection: Leppo.Collections.categories,
      model: newCategory
    });

    this._swapView(formView);
  },

  show: function (id) {
    var categories = Leppo.Collections.categories.getOrFetch(id);
    var formView = new Leppo.Views.CategoryShow({ model: categories });
    this._swapView(formView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

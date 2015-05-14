Leppo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "categoryIndex",
    "categories/new": "categoryNew",
    "categories/:title": "categoryShow",
    "feeds/new": "feedNew"
  },

  edit: function (id) {
    var category = Leppo.Collections.categories.getOrFetch(id);

    debugger;
    var categoryEditView = new Leppo.Views.CategoryForm({
      model: category,
      collection: Leppo.Collections.categories
    });

    this._swapView(categoryEditView);
  },

  categoryIndex: function () {
    Leppo.Collections.categories.fetch();

    var categoryIndexView = new Leppo.Views.CategoriesIndex({
      collection: Leppo.Collections.categories
    });

    this._swapView(categoryIndexView);
  },

  categoryNew: function () {
    var newCategory = new Leppo.Models.Category();

    var newCategoryView = new Leppo.Views.CategoryForm({
      collection: Leppo.Collections.categories,
      model: newCategory
    });

    this._swapView(newCategoryView);
  },

  categoryShow: function (title) {
    // var category = Leppo.Collections.categories.findWhere({
    //   title: title
    // });
    var category = Leppo.Collections.categories.getOrFetchTitle(title);
    
    var categoryShowView = new Leppo.Views.CategoryShow({ model: category });
    this._swapView(categoryShowView);
  },

  feedNew: function () {
    var newFeed = new Leppo.Models.Feed();

    var newFeedView = new Leppo.Views.FeedForm({
      collection: Leppo.Collections.feeds,
      model: newFeed
    });

    this._swapView(newFeedView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

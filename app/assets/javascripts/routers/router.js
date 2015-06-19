Leppo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "categoriesIndex",
    "categories/new": "categoryNew",
    "categories/:title": "categoryShow",
    "countries": "countriesIndex",
    "countries/new": "countryNew",
    "countries/:name": "countryShow",
    "feeds/new": "feedNew",
    "liked": "likedIndex"
  },

  edit: function (id) {
    var category = Leppo.Collections.categories.getOrFetch(id);

    var categoryEditView = new Leppo.Views.CategoryForm({
      model: category,
      collection: Leppo.Collections.categories
    });

    this._swapView(categoryEditView);
  },

  categoriesIndex: function () {
    Leppo.Collections.categories.fetch();

    var categoriesIndexView = new Leppo.Views.CategoriesIndex({
      collection: Leppo.Collections.categories
    });

    this._swapView(categoriesIndexView);
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
    var category = Leppo.Collections.categories.getOrFetchTitle(title);

    var categoryShowView = new Leppo.Views.CategoryShow({ model: category });
    this._swapView(categoryShowView);
  },

  countriesIndex: function () {
    Leppo.Collections.countries.fetch();

    var countriesIndexView = new Leppo.Views.CountriesIndex({
      collection: Leppo.Collections.countries
    });

    this._swapView(countriesIndexView);
  },

  likedIndex: function () {
    Leppo.Collections.countries.fetch();

    var countriesIndexView = new Leppo.Views.CountriesIndex({
      collection: Leppo.Collections.countries
    });

    this._swapView(countriesIndexView);
  },
  // countryNew: function () {
  //   var newCountry = new Leppo.Models.Country();
  //
  //   var newCountryView = new Leppo.Views.CountryForm({
  //     collection: Leppo.Collections.countries,
  //     model: newCountry
  //   });
  //
  //   this._swapView(newCountryView);
  // },
  //
  countryShow: function (name) {
    var country = Leppo.Collections.countries.getOrFetchName(name);

    var countryShowView = new Leppo.Views.CountryShow({ model: country });
    this._swapView(countryShowView);
  },

  feedNew: function () {
    Leppo.Collections.categories.fetch();
    Leppo.Collections.countries.fetch();
    Leppo.Collections.feeds.fetch();

    var newFeed = new Leppo.Models.Feed();

    var newFeedView = new Leppo.Views.FeedForm({
      categories: Leppo.Collections.categories,
      countries: Leppo.Collections.countries,
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

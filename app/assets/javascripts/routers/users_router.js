Leppo.Routers.Users = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new Leppo.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "users/:id": "showUser",
    "signin": "signIn",
    "signup": "signUp",
    "": "categoriesIndex",
    "categories/new": "categoryNew",
    "categories/:name": "categoryShow",
    "countries": "countriesIndex",
    "countries/new": "countryNew",
    "countries/:name": "countryShow",
    "feeds/new": "feedNew",
    "liked": "likedShow"
  },

  categoriesIndex: function () {
    Leppo.Collections.categories.fetch();

    var categoriesIndexView = new Leppo.Views.CategoriesIndex({
      groupBy: "category",
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

  categoryShow: function (name) {
    var category = Leppo.Collections.categories.getOrFetchName(name);

    var categoryShowView = new Leppo.Views.CategoryShow({
      groupBy: "category",
      model: category
    });
    this._swapView(categoryShowView);
  },

  countriesIndex: function () {
    Leppo.Collections.countries.fetch();

    var countriesIndexView = new Leppo.Views.CategoriesIndex({
      groupBy: "country",
      collection: Leppo.Collections.countries
    });

    this._swapView(countriesIndexView);
  },

  likedShow: function () {
    Leppo.Collections.likedPosts = new Leppo.Collections.Posts();
    Leppo.Collections.posts.fetchLiked();

    var categoryShowView = new Leppo.Views.CategoryShow({
      groupBy: "liked",
      model: Leppo.Collections.likedPosts
    });
    this._swapView(categoryShowView);
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

    var countryShowView = new Leppo.Views.CategoryShow({
      groupBy: "country",
      model: country
    });
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

  signUp: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new Leppo.Views.SignUp({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);

    $("body").addClass("sign-page");
  },

  showUser: function(id){
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new Leppo.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Leppo.Views.SignIn({
      callback: callback
    });

    this._swapView(signInView);
    $("body").addClass("sign-page");
  },

  _requireSignedIn: function(callback){
    if (!Leppo.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (Leppo.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (view) {
    $("body").removeClass("sign-page");
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});

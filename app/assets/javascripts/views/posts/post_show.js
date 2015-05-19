Leppo.Views.PostShow = Backbone.View.extend({
  thumbPreCategoryTemplate: JST["posts/_thumbPreCategory"],
  thumbPreCountryTemplate: JST["posts/_thumbPreCountry"],
  thumbCoreTemplate: JST["posts/_thumbCore"],
  bigTemplate: JST["posts/show"],

  tagName: 'li',
  className: 'post-item',

  events: {
    'click .likes-count': 'addLike'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

// need 2 renders, one for thumb, one for bigShow

  renderThumbCore: function () {
    var renderedContent = this.thumbCoreTemplate({
      post: this.model
    });
    this.$el.append(renderedContent);
    return this;
  },

  renderThumbWithCategory: function () {
    this.$el.html(this.thumbPreCategoryTemplate({ post: this.model }));
    this.renderThumbCore();
    return this;
  },

  renderThumbWithCountry: function () {
    this.$el.html(this.thumbPreCountryTemplate({ post: this.model }));
    this.renderThumbCore();
    return this;
  },

  renderBig: function () {
    var renderedContent = this.bigTemplate({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  addLike: function (event) {
    event.preventDefault();
    var like = new Leppo.Models.Like({});
    like.save({}, {
      success: function () {

      }
    });
  }
});

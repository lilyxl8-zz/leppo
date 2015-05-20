Leppo.Views.PostShow = Backbone.View.extend({
  thumbPreCategoryTemplate: JST["posts/_thumbPreCategory"],
  thumbPreCountryTemplate: JST["posts/_thumbPreCountry"],
  thumbCoreTemplate: JST["posts/_thumbCore"],
  bigTemplate: JST["posts/show"],

  tagName: 'li',
  className: 'post-item',

  events: {
    'click .likes-count': 'toggleLike'
  },

  initialize: function () {
    this.listenTo(this.model, 'add remove reset sync', this.render);
    this.listenTo(this.model.likes(), 'add remove reset sync', this.renderThumbCore);
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

  toggleLike: function (event) {
    event.preventDefault();

    var that = this;
    var like = this.model.likes().findWhere({ user_id: 1 });

    if (like) {
      like.destroy();
    } else {
      like = new Leppo.Models.Like({ post_id: this.model.id });
      like.save({}, {
        success: function () {
          that.model.likes().add(like);
          console.log(like);
        }
      });
    }
  }
});

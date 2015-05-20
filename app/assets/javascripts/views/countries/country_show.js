Leppo.Views.CountryShow = Backbone.View.extend({
  template: JST["countries/show"],
  thumbPreCategoryTemplate: JST["posts/_thumbPreCategory"],
  tagName: 'ul',
  className: 'country-item group',

  initialize: function () {
    this.listenTo(this.model, 'change sync', this.render);
  },

  render: function (options) {
    var renderedContent = this.template({ country: this.model });
    this.$el.html(renderedContent);

    var that = this;
    var posts = (options) ? this.model.posts() : this.model.posts().slice(0,6);

    posts.forEach(function (post) {
      var postThumb = new Leppo.Views.PostShow({ model: post });
      that.$el.find('.country-posts').append(
        that.thumbPreCategoryTemplate({ post: post }));
      that.$el.find('.country-posts').append(
        postThumb.renderThumbWithCategory().$el);
    });
    return this;
  }
});

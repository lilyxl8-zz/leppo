Leppo.Views.CategoryShow = Backbone.View.extend({
  template: JST["categories/show"],
  thumbPreCountryTemplate: JST["posts/_thumbPreCountry"],
  tagName: 'ul',
  className: 'country-item group',

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function (options) {
    var renderedContent = this.template({ category: this.model });
    this.$el.html(renderedContent);

    var that = this;
    var posts = (options) ? this.model.posts() : this.model.posts().slice(0,6);

    posts.forEach(function (post) {
      var postThumb = new Leppo.Views.PostShow({ model: post });
      that.$el.find('.category-posts').append('<li class="post-item">');
      that.$el.find('.post-item').last().append(that.thumbPreCountryTemplate({ post: post }));
      that.$el.find('.post-item').last().append(postThumb.renderThumbCore().$el);
    });
    // debugger;
    return this;
  }
});

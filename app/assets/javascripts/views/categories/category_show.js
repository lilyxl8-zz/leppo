Leppo.Views.CategoryShow = Backbone.View.extend({
  template: JST["categories/show"],
  tagName: 'ul',
  className: 'country-item group',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (options) {
  //   var renderedContent = this.template({
  //     category: this.model
  //   });
  //   this.$el.html(renderedContent);
  //   return this;
  //

    var renderedContent = this.template({ category: this.model });
    this.$el.html(renderedContent);

    var that = this;
    var posts = (options) ? this.model.posts() : this.model.posts().slice(0,6);

    posts.forEach(function (post) {
      var postThumb = new Leppo.Views.PostShow({ model: post });
      that.$el.find('.category-posts').append(
        postThumb.renderThumbWithCountry().$el
      );
    });
    return this;
  }
});

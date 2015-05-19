Leppo.Views.CountryShow = Backbone.View.extend({
  template: JST["countries/show"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ country: this.model });
    this.$el.html(renderedContent);

    var that = this;
    this.model.posts().forEach(function (post) {
      var postThumb = new Leppo.Views.PostShow({ model: post });
      that.$el.find('.country-posts').append(
        postThumb.renderThumbWithCategory().$el
      );
    });
    return this;
  }
});

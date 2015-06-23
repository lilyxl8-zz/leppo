Leppo.Views.CountryShow = Backbone.View.extend({
  template: JST["countries/show"],
  thumbPreCategoryTemplate: JST["posts/_thumbPreCategory"],

  tagName: 'ul',
  className: 'country-item group',

  events: {
    "click .post-item": "showPost"
  },

  initialize: function () {
    this.listenTo(this.model, 'change sync', this.render);
  },

  showPost: function (event) {
    if (event.toElement.className == "icon-heart-empty") { return; }
    
    var postId = $(event.currentTarget).data("id");
    var post = this.model.posts().get(postId);
    var postView = new Leppo.Views.PostShow({ model: post });
    postView.renderBig();
  },

  render: function (options) {
    var renderedContent = this.template({ country: this.model });
    this.$el.html(renderedContent);

    var that = this;

    this.model.posts().forEach(function (post) {
      var postThumb = new Leppo.Views.PostShow({ model: post });
      that.$el.find('.country-posts').append('<li class="post-item" data-id="' + post.get("id") + '">');
      that.$el.find('.post-item').last().append(that.thumbPreCategoryTemplate({ post: post }));
      that.$el.find('.post-item').last().append(postThumb.renderThumbCore().$el);
    });
    return this;
  }
});

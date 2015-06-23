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
    event.preventDefault();

    if (event.toElement.className == "icon-heart-empty") { return; }

    $("body").addClass("modal-is-open");
    $(".modal-close").addClass("dark-modal");

    var postId = $(event.currentTarget).data("id");
    var post = this.model.posts().get(postId);
    var postView = new Leppo.Views.PostShow({ model: post });

    $(".modal-form").html(postView.render().$el);
  },

  render: function (options) {
    var renderedContent = this.template({ country: this.model });
    this.$el.html(renderedContent);

    var that = this;

    this.model.posts().forEach(function (post) {
      var postThumb = new Leppo.Views.PostShowThumb({ model: post });
      that.$el.find('.country-posts').append('<li class="post-item" data-id="' + post.get("id") + '">');
      that.$el.find('.post-item').last().append(that.thumbPreCategoryTemplate({ post: post }));
      that.$el.find('.post-item').last().append(postThumb.render().$el);
    });
    return this;
  }
});

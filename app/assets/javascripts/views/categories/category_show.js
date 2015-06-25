Leppo.Views.CategoryShow = Backbone.View.extend({
  template: JST["categories/show"],
  thumbPreCountryTemplate: JST["posts/_thumbPreCountry"],

  tagName: 'ul',
  className: 'group-item group',

  events: {
    "click .post-item": "showPost"
  },

  initialize: function (options) {
    this.groupBy = options.groupBy;
    this.listenTo(this.model, 'change sync', this.render);
  },

  showPost: function (event) {
    event.preventDefault();

    if (event.toElement.className == "fa fa-heart-o") { return; }

    $("body").addClass("modal-is-open");
    $(".modal-close").addClass("dark-modal");

    var postId = $(event.currentTarget).data("id");
    var post = this.model.posts().get(postId);
    var postView = new Leppo.Views.PostShow({ model: post });

    $(".modal-form").html(postView.render().$el);
  },

  render: function (options) {
    var renderedContent = this.template({
      groupBy: this.groupBy,
      category: this.model
    });
    this.$el.html(renderedContent);

    var that = this;
    var coll = (this.groupBy === "liked") ? this.model : this.model.posts();

    coll.forEach(function (post) {
      var postThumb = new Leppo.Views.PostShowThumb({
        groupBy: this.groupBy,
        model: post
      });
      that.$el.find('.group-posts').append('<li class="post-item" data-id="' + post.get("id") + '">');
      that.$el.find('.post-item').last().append(that.thumbPreCountryTemplate({
        groupBy: that.groupBy,
        post: post
      }));
      that.$el.find('.post-item').last().append(postThumb.render().$el);
    });

    $("body").removeClass("modal-is-open");

    return this;
  }
});

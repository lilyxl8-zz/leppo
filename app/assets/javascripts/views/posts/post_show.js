Leppo.Views.PostShow = Backbone.View.extend({
  thumbCoreTemplate: JST["posts/_thumbCore"],
  postModalTemplate: JST["posts/show"],

  tagName: 'section',
  className: 'post-img',

  events: {
    'click .likes-count': 'toggleLike',
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.renderThumbCore);
  },

  renderThumbCore: function () {
    var renderedContent = this.thumbCoreTemplate({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  renderBig: function () {
    console.log("hi");
    $(".modal").toggleClass("is-open");
    var modalContent = this.postModalTemplate({ post: this.model });
    $(".modal-form").html(modalContent);
  },

  // renderBig: function () {
  //   var renderedContent = this.bigTemplate({
  //     post: this.model
  //   });
  //   this.$el.html(renderedContent);
  //   return this;
  // },

  toggleLike: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/posts/like",
      type: "POST",
      data: {
        post_id: this.model.id
      }, success: function (attrs) {
        this.model.set(this.model.parse(attrs));
        Leppo.Collections.posts.add(this.model, { merge: true });
      }.bind(this)
    });
  }
});

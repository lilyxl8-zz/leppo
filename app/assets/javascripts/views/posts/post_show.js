Leppo.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  tagName: 'section',
  className: 'post-container',

  events: {
    'click .icon-heart': 'toggleLike',
    'click .add-comment': 'submitComment'
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.comments(), 'add sync', this.render);
  },

  render: function () {
    var postModal = this.template({ post: this.model });
    this.$el.html(postModal);

    var that = this;
    this.model.comments().forEach( function (comment) {
      var commentShow = new Leppo.Views.CommentShow({
        model: comment
      });
      that.$el.find(".post-comments").append(commentShow.render().$el);
    });

    return this;
  },

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
  },

  submitComment: function (event) {
    event.stopPropagation();
    event.preventDefault();

    var attrs = this.$el.find(".comment-form").serializeJSON(),
      that = this;

    var commentModel = new Leppo.Models.Comment();
    commentModel.set(attrs);
    commentModel.save({}, {
      success: function () {
        that.model.comments().add(commentModel, { merge: true });
      }
    });
  }
});

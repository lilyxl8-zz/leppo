Leppo.Collections.Posts = Backbone.Collection.extend({
  model: Leppo.Models.Post,
  url: '/api/posts',

  comparator: function (id) {
    return 9999999999 - this.get(id).get('created_time');
  },

  getOrFetch: function (id) {
    var post = this.get(id),
      posts = this;
    if(!post) {
      post = new Leppo.Models.Post({ id: id });
      post.fetch({
        success: function () {
          posts.add(post);
        },
      });
    } else {
      post.fetch();
    }
    return post;
  },

  fetchLiked: function() {
    var that = this;
    $.ajax({
      url: "api/posts/liked_posts",
      type: "GET",
      success: function (attrs) {
        attrs.forEach( function (post) {
          var postModel = that.getOrFetch(post.id);
          Leppo.Collections.likedPosts.add(postModel, { merge: true });
        });
      }
    });
  }
});

Leppo.Collections.posts = new Leppo.Collections.Posts();

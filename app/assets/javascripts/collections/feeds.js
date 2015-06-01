Leppo.Collections.Feeds = Backbone.Collection.extend({
  model: Leppo.Models.Feed,
  url: '/api/feeds',

  // comparator: function(feed) {
  //   return feed.get('created_time');
  // },

  getOrFetch: function (id) {
    var feed = this.get(id),
      feeds = this;
    if(!feed) {
      feed = new Leppo.Models.Post({ id: id });
      feed.fetch({
        success: function () {
          feeds.add(feed);
        },
      });
    } else {
      feed.fetch();
    }
    return feed;
  }
});

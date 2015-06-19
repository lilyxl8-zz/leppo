Leppo.Views.FeedForm = Backbone.View.extend({
  tagName: 'form',
  className: 'new-feed-form',
  template: JST["feeds/form"],

  events: {
    'click .submit': 'submit'
  },

  initialize: function (options) {
    this.categories = options.categories;
    this.countries = options.countries;
    this.listenTo(this.categories, "sync add remove", this.render);
    this.listenTo(this.countries, "sync add remove", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.categories,
      countries: this.countries,
      feed: this.model // new Leppo.Models.Feed();
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
      that = this;
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("#", { trigger: true });
        $(".modal-close").click();
        // TODO add success message
      }
    });
  }
});

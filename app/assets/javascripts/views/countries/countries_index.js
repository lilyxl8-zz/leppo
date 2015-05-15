Leppo.Views.CountriesIndex = Backbone.View.extend({
  template: JST["countries/index"],

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      countries: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});

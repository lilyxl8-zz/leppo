Leppo.Views.CountryShow = Backbone.View.extend({
  template: JST["countries/show"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      country: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});

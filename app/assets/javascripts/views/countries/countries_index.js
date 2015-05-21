Leppo.Views.CountriesIndex = Backbone.View.extend({
  template: JST["countries/index"],
  tagName: 'ul',
  className: 'countries-list',

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var that = this;
    this.collection.each(function (country) {
      var countryView = new Leppo.Views.CountryShow({ model: country });

      that.$el.append(
        countryView.render(false).$el
      );
    });
    return this;
  }
});

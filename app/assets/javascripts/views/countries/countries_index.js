Leppo.Views.CountriesIndex = Backbone.View.extend({
  template: JST["countries/index"],
  tagName: 'ul',
  className: 'countries-list',

  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset sync", this.render);
  },

  render: function () {
    // var renderedContent = this.template({
    //   countries: this.collection
    // });
    // this.$el.html(renderedContent);
    // return this;

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

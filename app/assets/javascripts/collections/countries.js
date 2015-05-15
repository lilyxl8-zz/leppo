Leppo.Collections.Countries = Backbone.Collection.extend({
  model: Leppo.Models.Country,
  url: '/api/countries',

  getOrFetchTitle: function (title) {
    var country = this.findWhere({
      title: title
    }),
      countries = this;

    if(!country) {
      country = new Leppo.Models.Country({ title: title });

      country.fetch({
        data: { title: title },
        success: function () {
          countries.add(country);
        },
      });
    } else {
      country.fetch();
    }
    return country;
  },

  getOrFetch: function (id) {
    var country = this.get(id),
      countries = this;

    if(!country) {
      country = new Leppo.Models.Country({ id: id });
      country.fetch({
        success: function () {
          countries.add(country);
        },
      });
    } else {
      country.fetch();
    }
    return country;
  }
});

Leppo.Collections.countries = new Leppo.Collections.Countries();

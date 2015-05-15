Leppo.Collections.Countries = Backbone.Collection.extend({
  model: Leppo.Models.Country,
  url: '/api/countries',

  getOrFetchName: function (name) {
    var country = this.findWhere({
      name: name
    }),
      countries = this;

    if(!country) {
      country = new Leppo.Models.Country({ name: name });

      country.fetch({
        data: { name: name },
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

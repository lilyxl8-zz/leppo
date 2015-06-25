Leppo.Collections.Categories = Backbone.Collection.extend({
  model: Leppo.Models.Category,
  url: '/api/categories',

  getOrFetchName: function (name) {
    var category = this.findWhere({
      name: name
    }),
      categories = this;

    if(!category) {
      category = new Leppo.Models.Category({ name: name });

      category.fetch({
        data: { name: name },
        success: function () {
          categories.add(category);
        },
      });
    } else {
      category.fetch();
    }
    return category;
  },

  getOrFetch: function (id) {
    var category = this.get(id),
      categories = this;

    if(!category) {
      category = new Leppo.Models.Category({ id: id });
      category.fetch({
        success: function () {
          categories.add(category);
        },
      });
    } else {
      category.fetch();
    }
    return category;
  }
});

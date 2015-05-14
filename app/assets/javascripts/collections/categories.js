Leppo.Collections.Categories = Backbone.Collection.extend({
  model: Leppo.Models.Category,
  url: '/api/categories',

  getOrFetchTitle: function (title) {
    var category = this.findWhere({
      title: title
    }),
      categories = this;

    if(!category) {
      category = new Leppo.Models.Category({ title: title });

      category.fetch({
        data: { title: title },
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

Leppo.Collections.categories = new Leppo.Collections.Categories();

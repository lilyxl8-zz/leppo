Leppo.Collections.Categories = Backbone.Collection.extend({
  model: Leppo.Models.Category,
  url: '/api/categories',

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

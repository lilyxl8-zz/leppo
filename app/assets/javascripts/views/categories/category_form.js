Leppo.Views.CategoryForm = Backbone.View.extend({
  tagName: 'form',
  template: JST["categories/form"],

  events: {
    'click button': 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.model
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
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});

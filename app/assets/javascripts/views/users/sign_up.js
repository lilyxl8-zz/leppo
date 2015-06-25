Leppo.Views.SignUp = Backbone.View.extend({
  tagName: "section",
  className: "modal-form animation-fadein",

  template: JST['users/new'],

  events: {
    "submit form": "submit"
  },

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;
    var that = this;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Leppo.currentUser.fetch();
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      },
      error: function(data){
        alert("Form invalid. Let the user know what went wrong.");
        console.log(data);
      }
    });
  }

});

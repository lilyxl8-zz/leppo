Leppo.Views.SignIn = Backbone.View.extend({
  tagName: "section",
  className: "modal-form animation-fadein",

  template: JST['shared/sign_in'],

  events: {
    "submit form": "submit"
  },

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(Leppo.currentUser, "signIn", this.signInCallback);
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Leppo.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }

});

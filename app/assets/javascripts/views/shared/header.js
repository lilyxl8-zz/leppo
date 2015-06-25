Leppo.Views.Header = Backbone.View.extend({
  tagName: "nav",
  className: "topnav group",
  
  initialize: function(options){
    this.listenTo(Leppo.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: Leppo.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){
    event.preventDefault();
    Leppo.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }

});

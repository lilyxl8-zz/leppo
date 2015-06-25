Leppo.Views.Header = Backbone.View.extend({
  tagName: "nav",
  className: "topnav group",

  initialize: function(options){
    this.listenTo(Leppo.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "click .new-feed": "openFeedForm"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: Leppo.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function (event){
    event.preventDefault();
    Leppo.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  },

  openFeedForm: function (event) {
    event.stopPropagation();
    event.preventDefault();

    var newFeed = new Leppo.Models.Feed();
    var newFeedForm = new Leppo.Views.FeedForm({
      categories: Leppo.Collections.categories,
      countries: Leppo.Collections.countries,
      collection: Leppo.Collections.feeds,
      model: newFeed
    });

    $(".modal-form").html(newFeedForm.render().$el);
    $("body").addClass("modal-is-open");
    $(".modal-close").addClass("dark-modal");
  }
});

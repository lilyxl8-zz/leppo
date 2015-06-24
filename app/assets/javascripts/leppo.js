window.Leppo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new Leppo.Models.CurrentUser();
    this.currentUser.fetch();

    this.router = new Leppo.Routers.Users({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Leppo.initialize();
});

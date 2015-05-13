window.Leppo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Leppo.Routers.Router({
      $rootEl: $("#content")
    });
    Backbone.history.start();
    console.log("hi");
  }
};

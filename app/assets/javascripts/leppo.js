window.Leppo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Leppo.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Leppo.initialize();
});

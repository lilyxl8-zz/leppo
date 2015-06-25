$(function() {

  Leppo.Collections.categories.fetch();
  Leppo.Collections.countries.fetch();
  Leppo.Collections.feeds.fetch();
  var newFeed = new Leppo.Models.Feed();
  var newFeedForm = new Leppo.Views.FeedForm({
    categories: Leppo.Collections.categories,
    countries: Leppo.Collections.countries,
    collection: Leppo.Collections.feeds,
    model: newFeed
  });

  $("body").on("click", ".new-feed", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".modal-form").html(newFeedForm.render().$el);
    $("body").addClass("modal-is-open");
    $(".modal-close").addClass("dark-modal");
  });

  $("body").on("click", ".modal-close", function (event) {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
  });
});

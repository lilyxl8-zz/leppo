$(function() {
  $("body").on("click", ".modal-close", function (event) {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
  });

  $("body").on("click", ".login-btn", function (event) {
    $("body").addClass("modal-is-open");
  });
});

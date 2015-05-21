$(function() {
  $("body").on("click", ".modal-close", function (event) {
    console.log("hi");
    $("body").removeClass("modal-is-open");
  });
});

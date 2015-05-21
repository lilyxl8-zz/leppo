$(function(){
  $("body").on("click", ".js-modal-close", function (event){
    event.preventDefault();
    $(".modal").removeClass("is-open");
  });
});

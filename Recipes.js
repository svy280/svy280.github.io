$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  text = window.prompt("New Recipe");
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");

}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();

}

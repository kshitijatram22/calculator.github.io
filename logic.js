
$(document).ready(function () {
  $("#screen").keydown(function(e){
    if(e.keyCode == 13){
      calcu();
    }
  });
});
function insert(num) {
  $("#screen").val($("#screen").val() + num);
}
function clr() {
  $("#screen").val("");
}
function calcu() {
  $("#screen").val(eval($("#screen").val()));
}
function del() {
  let value = $("#screen").val();
  $("#screen").val(value.substring(0, value.length - 1));
}
$(document).ready(function() {
  $("#user-data form").submit(function(event) {
    var companyInput = $("input#company").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();






    event.preventDefault();
  });
});

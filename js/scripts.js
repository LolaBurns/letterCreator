$(document).ready(function() {
  $("#user-data form").submit(function(event) {
    var companyInput = $("input#company").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".company").text(companyInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
  });
});

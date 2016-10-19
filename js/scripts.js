$(function() {
  $("form#shipping-info").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var streetAddress = $("#streetAddress").val();
    var apartment = $("#apartment").val();
    var city = $("#city").val();
    var zipCode = $("#zipCode").val();
    var state =$("#state").val();
    var country = $("#country").val();
    var email = $("#email").val();
    var telephone = $("#telephone").val();

    $(".receipt").text("Thank you for your purchase, " + name + "!");
    $(".address1").text(name);
    $(".address2").text(streetAddress + " APT " + apartment);
    $(".address3").text(city + " " + state + " " + zipCode);
    $(".address4").text(country);
    $(".address5").text(email);
    $(".address6").text(telephone);
  });
});

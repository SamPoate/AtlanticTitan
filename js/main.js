//Sticky menu background
$(document).on("scroll", function(e) {
  var alpha = $(document).scrollTop() / 350;

  $("#navbar").css("background-color", "rgba(243,243,243," + alpha + ")");

  if (window.scrollY > 300) {
    $("#navbar a").css("color", "#333");
    $("#navbar ul a").css("color", "#333");
  } else {
    $("#navbar a").css("color", "#fff");
    $("#navbar ul a").css("color", "#fff");
  }
});

// Changes the amount of sponsors shown on desktop and mobile
if (window.outerWidth <= 768) {
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
} else {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
}

//Smooth Srolling
$("#navbar a, #navbar-mob a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});


//Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Dec 12, 2020 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "The Race Has Begun!";
  }
}, 1000);

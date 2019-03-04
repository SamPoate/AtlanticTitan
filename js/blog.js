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

// $(document).on("scroll", function(e) {
//   var scrollValue = window.scrollY;

//   if (scrollValue > 640) {
//     $("#blog-posts .bio").css("top", "50px");
//     $("#blog-posts .bio").css("position", "fixed");
//   } else {
//     $("#blog-posts .bio").css("top", "");
//     $("#blog-posts .bio").css("position", "absolute");
//   }
// });

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

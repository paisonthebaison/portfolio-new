$(".goSection").on("click", function() {


  const scrollTarget = $(this)[0].attributes[1].nodeValue;

  const offsetTop = $(scrollTarget).offset().top;

  $("html, body").animate({ scrollTop: offsetTop }, 200);

  return false;
});
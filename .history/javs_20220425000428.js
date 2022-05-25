function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }

  $('div').on('click', function() { // when you click the div
    $(this).addClass('no-hover'); // add the class 'no-hover'
  });
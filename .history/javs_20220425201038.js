function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      el.classList.remove("hover");
    });
    e.target.className = "active";
  }

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("nav-drawer");
  if (!toggle || !drawer) return;

  function setOpen(open) {
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  setOpen(false);

  toggle.addEventListener("click", function () {
    setOpen(drawer.hidden);
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(min-width: 980px)").matches) return;
      setOpen(false);
    });
  });
})();

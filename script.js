(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Position cycle diagram nodes along the circle ---- */
  var cx = 230, cy = 230, r = 170;
  document.querySelectorAll(".cycle-node").forEach(function (node) {
    var deg = parseFloat(node.getAttribute("data-angle"));
    var rad = (deg * Math.PI) / 180;
    var x = cx + r * Math.cos(rad);
    var y = cy + r * Math.sin(rad);
    node.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
  });

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".rail-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  /* ---- One-time count-up on the hero metric ---- */
  var metricEl = document.querySelector("[data-count-from]");
  if (metricEl && !reduceMotion) {
    var from = parseInt(metricEl.getAttribute("data-count-from"), 10);
    var to = parseInt(metricEl.getAttribute("data-count-to"), 10);
    var played = false;

    var runCount = function () {
      if (played) return;
      played = true;
      var duration = 900;
      var start = null;

      var step = function (ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(from + (to - from) * eased);
        metricEl.textContent = "$" + value + "K";
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) runCount();
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(metricEl);
  }
})();

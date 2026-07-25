/*
 * Dynamic elements for the profile ("about") page: role rotator, scroll
 * reveal, interactive photo tilt, a walking robot mascot, and a hidden
 * glitch easter egg. Only loaded on the about page (see about.liquid), and
 * every effect degrades to a static/no-op state under
 * prefers-reduced-motion.
 */
document.addEventListener("DOMContentLoaded", function () {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initRoleRotator(prefersReducedMotion);
  initScrollReveal(prefersReducedMotion);
  initPhotoTilt(prefersReducedMotion);
  initRobot(prefersReducedMotion);
  initGlitchEasterEgg(prefersReducedMotion);
});

function initRoleRotator(prefersReducedMotion) {
  var textEl = document.querySelector(".role-rotator-text");
  if (!textEl) return;

  var roles = (textEl.dataset.roles || "").split("|").filter(Boolean);
  if (roles.length === 0) return;

  if (prefersReducedMotion) {
    textEl.textContent = roles[0];
    return;
  }

  var roleIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function tick() {
    var current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 60);
    } else {
      charIndex--;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 30);
    }
  }

  tick();
}

function initScrollReveal(prefersReducedMotion) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(".profile, .clearfix, .social, article h2");
  if (targets.length === 0) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

function initPhotoTilt(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  var photo = document.querySelector(".profile img.rounded-circle");
  var wrapper = document.querySelector(".profile");
  if (!photo || !wrapper) return;

  wrapper.addEventListener("pointermove", function (event) {
    var rect = wrapper.getBoundingClientRect();
    var px = (event.clientX - rect.left) / rect.width - 0.5;
    var py = (event.clientY - rect.top) / rect.height - 0.5;
    photo.style.setProperty("--tilt-x", (py * -12).toFixed(2) + "deg");
    photo.style.setProperty("--tilt-y", (px * 12).toFixed(2) + "deg");
  });

  wrapper.addEventListener("pointerleave", function () {
    photo.style.setProperty("--tilt-x", "0deg");
    photo.style.setProperty("--tilt-y", "0deg");
  });
}

function initRobot(prefersReducedMotion) {
  var wrapper = document.getElementById("profile-robot");
  var figure = document.getElementById("robot-figure");
  if (!wrapper || !figure) return;

  var robotWidth = 46;

  if (prefersReducedMotion) {
    wrapper.style.transform = "translateX(20px)";
    return;
  }

  var x = 20;
  var direction = 1;
  var speed = 0.6;
  var paused = false;

  function setPosition() {
    wrapper.style.transform = "translateX(" + x + "px)";
    figure.style.transform = direction === 1 ? "scaleX(1)" : "scaleX(-1)";
  }

  function wave(duration) {
    figure.classList.remove("walking");
    figure.classList.add("waving");
    setTimeout(function () {
      figure.classList.remove("waving");
      paused = false;
      scheduleIdle();
    }, duration);
  }

  function scheduleIdle() {
    var delay = 4000 + Math.random() * 6000;
    setTimeout(function () {
      if (paused) return;
      paused = true;
      wave(1200 + Math.random() * 800);
    }, delay);
  }

  function step() {
    var maxX = window.innerWidth - robotWidth - 10;
    if (!paused) {
      figure.classList.add("walking");
      x += speed * direction;
      if (x >= maxX) {
        x = maxX;
        direction = -1;
      } else if (x <= 10) {
        x = 10;
        direction = 1;
      }
      setPosition();
    }
    requestAnimationFrame(step);
  }

  figure.addEventListener("click", function () {
    if (paused) return;
    paused = true;
    wave(1200);
  });

  setPosition();
  scheduleIdle();
  requestAnimationFrame(step);
}

function initGlitchEasterEgg(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  var trigger = document.getElementById("glitch-trigger");
  var photo = document.querySelector(".profile img.rounded-circle");
  if (!trigger) return;

  var active = false;

  function activate() {
    if (active) return;
    active = true;
    document.body.classList.add("glitch-active");
    setTimeout(function () {
      document.body.classList.remove("glitch-active");
      active = false;
    }, 5000);
  }

  trigger.addEventListener("click", activate);
  if (photo) {
    photo.addEventListener("click", activate);
  }
}

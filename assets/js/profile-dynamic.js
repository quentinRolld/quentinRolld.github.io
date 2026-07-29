/*
 * Dynamic elements for the profile ("about") page: role rotator, scroll
 * reveal, interactive photo tilt, a small family of walking robot mascots,
 * and a hidden glitch easter egg. Only loaded on the about page (see about.liquid), and
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
  var wrappers = document.querySelectorAll(".robot-wrapper");
  if (wrappers.length === 0) return;

  var size = 46;
  var robots = [];

  wrappers.forEach(function (wrapper, index) {
    var figure = wrapper.querySelector("[data-robot]");
    if (!figure) return;
    var edge = wrapper.dataset.edge || "bottom";
    robots.push({
      wrapper: wrapper,
      figure: figure,
      axis: edge === "left" || edge === "right" ? "y" : "x",
      pos: 16 + index * 60,
      direction: 1,
      speed: 0.35 + Math.random() * 0.5,
      paused: false,
    });
  });

  function setPosition(robot) {
    robot.wrapper.style.transform =
      robot.axis === "x" ? "translateX(" + robot.pos + "px)" : "translateY(" + robot.pos + "px)";
    // The .robot-orient ancestor rotates the whole creature to match its
    // edge (upright/upside down/sideways), so this mirror flip always ends
    // up reading as "facing the direction of travel" once rotated.
    robot.figure.style.transform = robot.direction === 1 ? "scaleX(1)" : "scaleX(-1)";
  }

  if (prefersReducedMotion) {
    robots.forEach(setPosition);
    return;
  }

  function wave(robot, duration) {
    robot.figure.classList.remove("walking");
    robot.figure.classList.add("waving");
    setTimeout(function () {
      robot.figure.classList.remove("waving");
      robot.paused = false;
      scheduleIdle(robot);
    }, duration);
  }

  function scheduleIdle(robot) {
    var delay = 3500 + Math.random() * 7000;
    setTimeout(function () {
      if (robot.paused) return;
      robot.paused = true;
      wave(robot, 1200 + Math.random() * 800);
    }, delay);
  }

  function step() {
    var maxX = window.innerWidth - size - 10;
    var maxY = window.innerHeight - size - 10;
    robots.forEach(function (robot) {
      if (!robot.paused) {
        robot.figure.classList.add("walking");
        var max = robot.axis === "x" ? maxX : maxY;
        // Vertical (left/right wall) walkers must stay clear of the fixed
        // navbar at the top of the screen; horizontal ones just need the
        // screen edge.
        var min = robot.axis === "y" ? 74 : 10;
        robot.pos += robot.speed * robot.direction;
        if (robot.pos >= max) {
          robot.pos = max;
          robot.direction = -1;
        } else if (robot.pos <= min) {
          robot.pos = min;
          robot.direction = 1;
        }
        setPosition(robot);
      }
    });
    requestAnimationFrame(step);
  }

  robots.forEach(function (robot) {
    robot.figure.addEventListener("click", function () {
      if (robot.paused) return;
      robot.paused = true;
      wave(robot, 1200);
    });
    setPosition(robot);
    scheduleIdle(robot);
  });

  requestAnimationFrame(step);
}

function initGlitchEasterEgg(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  var trigger = document.getElementById("glitch-trigger");
  var photo = document.querySelector(".profile img.rounded-circle");
  if (!trigger) return;

  var active = false;
  var jumpTimer = null;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  // A real corrupted frame doesn't ease in and out - it snaps. Most jumps
  // are tiny and furtive; occasionally (~15%) a big violent one lands.
  function fireGlitchJump() {
    var isBig = Math.random() < 0.15;
    var magnitude = isBig ? randomBetween(16, 38) : randomBetween(1, 5);
    var skew = isBig ? randomBetween(-14, 14) : randomBetween(-2, 2);
    var x = randomBetween(-magnitude, magnitude);
    var y = randomBetween(-magnitude * 0.5, magnitude * 0.5);

    document.body.style.transition = "none";
    document.body.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) skewX(" + skew.toFixed(1) + "deg)";
    document.body.style.filter = isBig
      ? "hue-rotate(" + Math.round(randomBetween(60, 300)) + "deg) saturate(" + randomBetween(2, 6).toFixed(1) + ") contrast(" + randomBetween(1.3, 3).toFixed(1) + ")"
      : "saturate(" + randomBetween(1, 1.6).toFixed(1) + ")";

    var holdTime = isBig ? randomBetween(60, 140) : randomBetween(15, 45);
    setTimeout(function () {
      document.body.style.transform = "";
      document.body.style.filter = "";
    }, holdTime);
  }

  function scheduleNextJump() {
    if (!active) return;
    // Mostly rapid-fire, with occasional short lulls so the rhythm never
    // settles into something predictable.
    var delay = Math.random() < 0.2 ? randomBetween(220, 420) : randomBetween(30, 140);
    jumpTimer = setTimeout(function () {
      fireGlitchJump();
      scheduleNextJump();
    }, delay);
  }

  function activate() {
    if (active) return;
    active = true;
    document.body.classList.add("glitch-active");
    scheduleNextJump();
    setTimeout(function () {
      active = false;
      clearTimeout(jumpTimer);
      document.body.classList.remove("glitch-active");
      document.body.style.transform = "";
      document.body.style.filter = "";
      document.body.style.transition = "";
    }, 5000);
  }

  trigger.addEventListener("click", activate);
  if (photo) {
    photo.addEventListener("click", activate);
  }
}

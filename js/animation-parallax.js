let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let Ptext = document.getElementById("Ptext");
let btn = document.getElementById("btn");


window.scrollTo(0, 0)
    window.onload = function () {
      lax.init()

      // Add a driver that we use to control our animations
      lax.addDriver(
        "scrollY",
        function () {
          return document.documentElement.scrollTop;
        },
        { frameStep: 1 }
      );
      // Add animation bindings to elements
      lax.addElements("#Ptext", {
        scrollY: {
          translateY: [["elInY", "elOutY"], [500, -500]]
        }
      });

      lax.addElements('#stars', {
        scrollY: {
          translateX: [
            ["elInY", "elOutY"],
            [0, -300]
          ],
        }
      });

      lax.addElements('#moon', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [0, 200]
          ],
        }
      });

      lax.addElements('#mountains_behind2', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [100, 200]
          ],
        }
      });

      lax.addElements('#mountains_behind1', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [600,-200]
          ],
        }
      });

      lax.addElements('#mountains_front', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [800, -500]
          ],
        }
      });
    }
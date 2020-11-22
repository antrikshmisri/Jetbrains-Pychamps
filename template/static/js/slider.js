function slider(className, childClass, totalElements, moveLeft, moveRight) {
  const top = 0;
  const last = totalElements - 1;
  var leftbtn = document.querySelector(moveLeft);
  var rightbtn = document.querySelector(moveRight);

  function elementsContainer(
    className,
    childClass,
    totalElements = totalElements,
    direction
  ) {
    var targetContainer = document.querySelector(className);
    var targets = document.querySelectorAll(childClass);

    function addAtStart(element) {
      element.parentNode.prepend(element);
    }

    function addAtEnd(element) {
      element.parentNode.append(element);
    }

    function slider(value, animationOut, direction) {
      if (direction == "right") {
        targets[top].classList.add(animationOut);
      } else {
        targets[last - 1].classList.add(animationOut);
      }

      targets.forEach(target => {
        target.style.transform = "translateX(" + value + ")";
        target.style.transition =
          "transform .5s ease-in-out, opacity .5s ease-in-out";

        target.addEventListener("transitionend", () => {
          if (direction == "left") {
            targets[last].classList.remove(animationOut);
          } else {
            targets[top].classList.remove(animationOut);
          }

          if (direction == "right") {
            addAtEnd(targets[top]);
          } else {
            addAtStart(targets[last]);
          }

          targets.forEach(target => {
            target.style.transform = "none";
            target.style.transition = "none";
          });
        });
      });
    }
    function pushRight() {
      slider("-100%", "animationSlideOut", "right");
    }

    function pushLeft(callback) {
      slider("100%", "animationSlideOut", "left");
    }
    if (direction == "right") {
      pushRight();
    } else {
      pushLeft();
    }
  }

  leftbtn.addEventListener("click", () => {
    clearInterval(activate);
    elementsContainer(className, childClass, totalElements, "right");
    activate = setInterval(() => {
      elementsContainer(className, childClass, totalElements, "right");
    }, 5000);
  });

  rightbtn.addEventListener("click", () => {
    clearInterval(activate);
    elementsContainer(className, childClass, totalElements, "left");
    activate = setInterval(() => {
      elementsContainer(className, childClass, totalElements, "right");
    }, 5000);
  });

  var activate = setInterval(() => {
    elementsContainer(className, childClass, totalElements, "right");
  }, 5000);
}

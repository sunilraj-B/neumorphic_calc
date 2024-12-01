let display = document.getElementById("disp");
    let buttons = document.querySelectorAll("button");
    let t = "";

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        switch (button.id) {
          case "ac":
            t = "";
            display.value = "0.0";
            break;
          case "equal":
            try {
              display.value = eval(t);
              t = display.value;
            } catch (e) {
              display.value = "failed";
              t = "";
            }
            break;
          case "remove":
            if (t.length > 0) {
              t = t.substring(0, t.length - 1);
              display.value = t;
              display.classList.add("neumorphic-input");
            }
            break;
          case "abs":
            t = (parseFloat(t) * -1).toString();
            display.value = t;
            display.classList.add("neumorphic-input");
            break;

          default:
            if (button.id !== "remove") {
              t += button.textContent;
              display.value = t;
              display.classList.add("neumorphic-input");
            }
        }
      });
    });
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".expanded-button");
    const container = document.querySelector(".expanded-container");
    const icon = document.getElementById("exp-active");
    const containerWrap = document.querySelector(".expanded-container-wrap");
    const button_select = document.querySelectorAll(".button-group button");

    // Initialize the container to be hidden
    containerWrap.style.maxHeight = "0px";

    button.addEventListener("click", () => {
        container.classList.toggle("hidden");
        icon.classList.toggle("active");
        icon.src = container.classList.contains("hidden") ? "../images/plus-icon.png" : "../images/minus-icon.png";
        containerWrap.style.maxHeight = `${containerWrap.scrollHeight}px`;
    });

    button_select.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.querySelectorAll("button").forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
});
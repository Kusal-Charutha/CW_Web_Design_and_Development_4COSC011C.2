// Nav Tabs
window.onload = function () {
  const tabWrapper = document.querySelector(".tab-wrapper");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-contents .content");

  tabWrapper.addEventListener("click", (e) => {
    const id = e.target.dataset.target;
    if (id) {
      // remove active from other buttons
      tabBtns.forEach((btn) => {
        btn.classList.remove("active");
        e.target.classList.add("active");
      });
      // hide other tabContents
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      const currentContent = document.getElementById(id);
      currentContent.classList.add("active");
    }
  });
};

// Floating Icon

const paintBrushIcon = document.querySelector(".color-change");

paintBrushIcon.addEventListener("click", () => {
  const colors = ["#2f3238", "white", getRandomColor()];
  const currentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--main-color")
    .trim();
  const index = colors.indexOf(currentColor);
  const nextColor = colors[(index + 1) % colors.length];

  document.documentElement.style.setProperty("--main-color", nextColor);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//
const fontCaseIcon = document.querySelector(".font-change");
let fontClickCount = 0;
let initialFontSize = getComputedStyle(document.documentElement)
  .getPropertyValue("--main-font-size")
  .trim();

fontCaseIcon.addEventListener("click", () => {
  fontClickCount++;
  if (fontClickCount < 4) {
    const currentFontSize = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--main-font-size")
        .trim()
    );
    const newFontSize = currentFontSize + 2;
    document.documentElement.style.setProperty(
      "--main-font-size",
      `${newFontSize}px`
    );
  } else {
    document.documentElement.style.setProperty(
      "--main-font-size",
      initialFontSize
    );
    fontClickCount = 0;
  }
});

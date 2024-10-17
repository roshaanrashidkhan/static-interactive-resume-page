console.log("Let's Write TypeScript!");
function handleLoad() {
    window.addEventListener("load", function (e) {
        var header = document.querySelector("header");
        if (header) {
            header.classList.add("loaded");
        }
    });
}
handleLoad();
function handleSectionToggle(sectionSelector, contentSelector, headingRightContent) {
    var section = document.querySelector(sectionSelector);
    var heading = section.querySelector(headingRightContent);
    var plusSign = heading.querySelector("img");
    var content = section.querySelector(contentSelector);
    heading.addEventListener("click", function () {
        if (plusSign.src.indexOf("plus-large-svgrepo-com.svg") >= 0) {
            plusSign.style.transform = "rotate(90deg)";
            plusSign.src = "assets/images/close-lg-svgrepo-com.svg";
            plusSign.alt = "close-icon";
            heading.style.opacity = "1";
            heading.style.opacity;
            content.style.display = "flex";
        }
        else {
            plusSign.style.transform = "rotate(-90deg)";
            plusSign.src = "assets/images/plus-large-svgrepo-com.svg";
            plusSign.alt = "add-icon";
            heading.style.opacity = "0.7";
            content.style.display = "none";
        }
    });
}
handleSectionToggle(".personalInfo", ".detail", ".heading");
handleSectionToggle(".skillsSection", ".skills", ".heading");
var skillProgress = {
    HTML: "90%",
    CSS: "80%",
    JavaScript: "80%",
    TypeScript: "70%",
    TailwindCSS: "70%",
    ReactJS: "70%",
    NextJS: "50%",
};
var imgsrc = {
    HTML: "/assets/images/html-5-svgrepo-com.svg",
    CSS: "/assets/images/css-3-svgrepo-com.svg",
    JavaScript: "/assets/images/javascript-svgrepo-com.svg",
    TypeScript: "/assets/images/typescript-svgrepo-com.svg",
    TailwindCSS: "/assets/images/tailwind-svgrepo-com.svg",
    ReactJS: "/assets/images/reactjs-svgrepo-com.svg",
    NextJS: "/assets/images/nextjs-fill-svgrepo-com.svg",
};
function handleSkill() {
    var skills = document.querySelector(".skills");
    for (var key in skillProgress) {
        var value = skillProgress[key];
        var imgSrc = imgsrc[key];
        var skillElement = document.createElement("div");
        skillElement.classList.add("skill");
        skillElement.innerHTML = "\n            <div class=\"skillName\">\n                <img class=\"".concat(key, "\" src=\"").concat(imgSrc, "\" alt=\"").concat(key, "\" />\n                <span>").concat(key, "</span>\n            </div>\n            <div class=\"progress\">\n                <div class=\"progressBar\">\n                    <div class=\"bar\" style=\"width: ").concat(value, ";\"></div>\n                </div>\n                <div class=\"percent\">").concat(value, "</div>\n            </div>\n        ");
        skills.appendChild(skillElement);
    }
}
handleSkill();

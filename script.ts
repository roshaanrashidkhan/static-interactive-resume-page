console.log("Let's Write TypeScript!");

function handleLoad(): void {
  window.addEventListener("load", (e) => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("loaded");
    }
  });
}

handleLoad();

function handleSectionToggle(
  sectionSelector: string,
  contentSelector: string,
  headingRightContent: string
): void {
  const section = document.querySelector(sectionSelector) as HTMLElement;
  const heading = section.querySelector(headingRightContent) as HTMLElement;
  const plusSign = heading.querySelector("img") as HTMLImageElement;
  const content = section.querySelector(contentSelector) as HTMLElement;

  heading.addEventListener("click", () => {
    if (plusSign.src.indexOf("plus-large-svgrepo-com.svg") >= 0) {
      plusSign.style.transform = `rotate(90deg)`;
      plusSign.src = "assets/images/close-lg-svgrepo-com.svg";
      content.style.display = "flex";
    } else {
      plusSign.style.transform = `rotate(-90deg)`;
      plusSign.src = "assets/images/plus-large-svgrepo-com.svg";
      content.style.display = "none";
    }
  });
}

handleSectionToggle(".personalInfo", ".detail", ".heading");
handleSectionToggle(".skillsSection", ".skills", ".heading");

type obj = { [key: string]: string };

const skillProgress: obj = {
  HTML: "90%",
  CSS: "80%",
  JavaScript: "80%",
  TypeScript: "70%",
  TailwindCSS: "70%",
  ReactJS: "70%",
  NextJS: "50%",
};

const imgsrc: obj = {
  HTML: "/assets/images/html-5-svgrepo-com.svg",
  CSS: "/assets/images/css-3-svgrepo-com.svg",
  JavaScript: "/assets/images/javascript-svgrepo-com.svg",
  TypeScript: "/assets/images/typescript-svgrepo-com.svg",
  TailwindCSS: "/assets/images/tailwind-svgrepo-com.svg",
  ReactJS: "/assets/images/reactjs-svgrepo-com.svg",
  NextJS: "/assets/images/nextjs-fill-svgrepo-com.svg",
};

function handleSkill(): void {
  const skills = document.querySelector(".skills") as HTMLElement;

  for (const key in skillProgress) {
    const value = skillProgress[key];
    const imgSrc = imgsrc[key];

    const skillElement = document.createElement("div");
    skillElement.classList.add("skill");

    skillElement.innerHTML = `
            <div class="skillName">
                <img class="${key}" src="${imgSrc}" alt="${key}" />
                <span>${key}</span>
            </div>
            <div class="progress">
                <div class="progressBar">
                    <div class="bar" style="width: ${value};"></div>
                </div>
                <div class="percent">${value}</div>
            </div>
        `;
    skills.appendChild(skillElement);
  }
}

handleSkill();

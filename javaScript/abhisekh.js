const info = [
  {
    name: "Javascript",
    iconPath: "../images/abhisekh/javascript.svg",
  },
  {
    name: "React",
    iconPath: "../images/abhisekh/react.svg",
  },
  {
    name: "MongoDB",
    iconPath: "../images/abhisekh/mongodb.svg",
  },
  {
    name: "Node",
    iconPath: "../images/abhisekh/node-js.svg",
  },
  {
    name: "Express",
    iconPath: "../images/abhisekh/express.svg",
  },
  {
    name: "Typescript",
    iconPath: "../images/abhisekh/typescript.svg",
  },
  {
    name: "NextJS",
    iconPath: "../images/abhisekh/next-js.svg",
  },
  {
    name: "Graphql",
    iconPath: "../images/abhisekh/graphql.svg",
  },

  {
    name: "Firebase",
    iconPath: "../images/abhisekh/firebase.svg",
  },
];

const getContainer = document.querySelector(".hard_container");

for (let i = 0; i < info.length; i++) {
  createNew(info[i]);
}
// feed the data to the container hard_container
function createNew(item) {
  const divTag = document.createElement("div");
  divTag.className = "hard_skill";

  const imgTag = document.createElement("img");
  imgTag.src = item.iconPath;
  console.log(item.iconPath);
  imgTag.alt = item.name;
  imgTag.style.height = "50px";
  const pTag = document.createElement("p");
  pTag.innerText = item.name;
  divTag.appendChild(imgTag);
  divTag.appendChild(pTag);
  getContainer.append(divTag);
}

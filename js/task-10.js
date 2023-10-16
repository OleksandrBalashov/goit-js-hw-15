function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  root: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", handleCreate);
refs.btnDestroy.addEventListener("click", handleDestroy);

function handleCreate() {
  const amount = refs.input.value;
  createBoxes(amount);
}

function handleDestroy() {
  refs.input.value = "";
  refs.root.innerHTML = "";
}

function createBoxes(amount) {
  let boxSize = 30;
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;

    markup.push(div);
  }

  refs.root.append(...markup);
}

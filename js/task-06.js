const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", ({ target: { value, dataset } }) => {
  if (!value.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
    return;
  }

  if (value.length === Number(dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    return;
  }

  inputRef.classList.remove("valid");
  inputRef.classList.add("invalid");
});

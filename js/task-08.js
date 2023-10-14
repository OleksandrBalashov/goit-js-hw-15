const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  const data = {};

  formData.forEach((value, name) => {
    data[name] = value;
  });

  if (!data.email || !data.password) {
    alert("All fields are required");
    return;
  }

  console.log(data);

  event.currentTarget.reset();
});

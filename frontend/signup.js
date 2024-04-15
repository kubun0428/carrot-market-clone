const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("confirm-password");
  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSubmitSignup = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if (data === "200") {
      div.innerText = "You have successfully registed!";
      div.style.color = "blue";
    }
  } else {
    div.innerText = "The passwords do not match.";
    div.style.color = "red";
  }
};

form.addEventListener("submit", handleSubmitSignup);

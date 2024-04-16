const handleSubmitSignin = async (event) => {
  const formData = new FormData(form);
  event.preventDefault();
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/signin", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인되었습니다!");

  window.location.pathname = "/";
};

const form = document.querySelector("#signin-form");
form.addEventListener("submit", handleSubmitSignin);

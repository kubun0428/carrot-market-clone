const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const response = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await response.json();
    if (data == "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }
};

const form = document.getElementById("write-form");
form.addEventListener("submit", handleSubmitForm);

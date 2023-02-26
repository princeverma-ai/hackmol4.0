const form = document.querySelector("#formSubmit");

form.addEventListener("submit", (e) => {
  if (document.querySelector("#search").value === "") {
    e.preventDefault();
  }

  let historyArrayAvailable = JSON.parse(localStorage.getItem("historyArray"));

  if (historyArrayAvailable === null) {
    historyArrayAvailable = [];
  }

  const historyObject = {
    time: Date.now(),
    search: document.querySelector("#search").value,
  };

  historyArrayAvailable.push(historyObject);
  console.log(historyArrayAvailable);
  localStorage.setItem("historyArray", JSON.stringify(historyArrayAvailable));
});

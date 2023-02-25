const form = document.querySelector("#formSubmit");
const input = document.querySelector("#searchInput");

form.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault();
  }

  let historyArrayAvailable = JSON.parse(localStorage.getItem("historyArray"));

  if (historyArrayAvailable === null) {
    historyArrayAvailable = [];
  }

  const historyObject = {
    time: Date.now(),
    search: input.value,
  };

  historyArrayAvailable.push(historyObject);
  console.log(historyArrayAvailable);
  localStorage.setItem("historyArray", JSON.stringify(historyArrayAvailable));
});

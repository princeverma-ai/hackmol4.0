const form = document.querySelector("#formSubmit");
const input = document.querySelector("#searchInput");

form.addEventListener("submit", (e) => {
  console.log("clicked");

  const historyArrayAvailable = localStorage.getItem("historyArray");
  if (historyArrayAvailable == null) {
    historyArray = [];
  }

  const historyObject = {
    time: Date.now(),
    search: input.value,
  };
  historyArray.push(historyObject);
  localStorage.setItem("historyArray", JSON.stringify(historyArray));
});

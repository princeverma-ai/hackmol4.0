const table = document.getElementById("tableHistory");

//get local storage
const history = JSON.parse(localStorage.getItem("historyArray"));

let tableString = "";

for (let i = 0; i < history.length; i++) {
  let search = history[i].search;
  let time = new Date(history[i].time);
  tableString += `<tr>
  <th scope="row">${i}</th>
  <td>${time.toDateString()}</td>
  <td>${search}</td>
</tr>`;
}

//add data to table
table.innerHTML = tableString;

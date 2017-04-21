// To be elaborated; for search window
function searchFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("search-window");
  filter = input.value.toUpperCase();
  table = document.getElementById("my-table");
  // To do: create unique tag names for searchable information (instead of h2)
  tr = table.getElementsByTagName("h2");
  console.log(tr);

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("h2")[0];
    console.log(td);
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

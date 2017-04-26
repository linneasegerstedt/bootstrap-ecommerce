// To be elaborated; for search window
function searchFunction() {
  input = document.getElementById("search-window");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByTagName("li");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0].firstChild.nodeValue;;
      if (a.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";

      }
    }

}

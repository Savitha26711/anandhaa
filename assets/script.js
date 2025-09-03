
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");


searchIcon.addEventListener("click", () => {
  alert("You searched for: " + searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alert("You searched for: " + searchInput.value);
  }
});

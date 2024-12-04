function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
const cards = document.getElementById("cards");

document.getElementById("left").onclick = function () {
  cards.scrollBy({
    left: -450,
    behavior: "smooth",
  });
};

document.getElementById("right").onclick = function () {
  cards.scrollBy({
    left: 450,
    behavior: "smooth",
  });
};

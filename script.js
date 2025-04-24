// JavaScript Filter
document.getElementById("search")?.addEventListener("input", () => {
  const value = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll("#cheat-list li");

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value) ? "" : "none";
  });
});

// Global Highlight Search
document.getElementById("global-search")?.addEventListener("input", () => {
  const query = document.getElementById("global-search").value.toLowerCase();
  const content = document.querySelectorAll("main *");

  content.forEach(el => {
    el.style.backgroundColor = "";
    if (el.textContent?.toLowerCase().includes(query) && query.length > 0) {
      el.style.backgroundColor = "#fff59d";
    }
  });
});

// Light/Dark Mode Toggle
document.getElementById("toggle-theme")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
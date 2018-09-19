


document.addEventListener('DOMContentLoaded', () => {


  window.location.hash = "#inbox";
  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      let name = navItem.innerText.toLowerCase();
      location.hash = name;
    });
  });
});

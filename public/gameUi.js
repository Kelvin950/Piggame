const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const ul = document.querySelector(".links");
const notification =  document.querySelector(".notification")

toggleBtn.addEventListener("click", function () {
    // if (sidebar.classList.contains("show-sidebar")) {
    //   sidebar.classList.remove("show-sidebar");
    // } else {
    //   sidebar.classList.add("show-sidebar");
    // }
    sidebar.classList.toggle("show-sidebar");
    ul.classList.toggle("show-ul");
  });
  
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
    ul.classList.toggle("show-ul");
  });
  
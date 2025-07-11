const navItems = document.querySelector(".nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

// opens nav dropdown
const openNav = () => {
  navItems.style.display = "flex"; // Hiển thị menu với kiểu flex
  openNavBtn.style.display = "none"; // Ẩn nút mở menu
  closeNavBtn.style.display = "inline-block"; // Hiển thị nút đóng menu
};

// close nav dropdown
const closeNav = () => {
  navItems.style.display = "none"; // Ẩn menu
  openNavBtn.style.display = "inline-block"; // Hiển thị nút mở menu
  closeNavBtn.style.display = "none"; // Ẩn nút đóng menu
};

openNavBtn.addEventListener("click", openNav); // Thêm sự kiện click cho nút mở menu
closeNavBtn.addEventListener("click", closeNav); // Thêm sự kiện click cho nút đóng menu

const sidebar = document.querySelector("aside");
const showSidebarBtn = document.querySelector("#show__sidebar-btn");
const hideSidebarBtn = document.querySelector("#hide__sidebar-btn");

// shows sidebar on small devices
const showSidebar = () => {
  sidebar.style.left = "0";
  showSidebarBtn.style.display = "none";
  hideSidebarBtn.style.display = "inline-block";
};
// hides sidebar on small devices
const hideSidebar = () => {
  sidebar.style.left = "-100%";
  showSidebarBtn.style.display = "inline-block";
  hideSidebarBtn.style.display = "none";
};

showSidebarBtn.addEventListener("click", showSidebar);
hideSidebarBtn.addEventListener("click", hideSidebar);

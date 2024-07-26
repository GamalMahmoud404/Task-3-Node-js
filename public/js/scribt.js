
const myMenuButton = document.querySelector("#myMenuButton");
const menuApp = document.querySelector("#menuApp");
const closeMenu = document.querySelector("#closeMenu");

myMenuButton.addEventListener('click', function() {
  menuApp.classList.toggle('d-none');
  menuApp.classList.toggle('d-block');
});

closeMenu.addEventListener('click', function() {
  menuApp.classList.toggle('d-none');
  menuApp.classList.toggle('d-block');
})

// -------------------------------















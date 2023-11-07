
// Theme switch
const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("green-theme")
})

// Toggle Dropdown Menu
 
function toogleMenu() {
  const nav = document.querySelector("nav")
  nav.classList.toggle("dropdown-active")
}



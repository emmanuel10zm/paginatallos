const ntoggle = document.querySelector(".ntoggle")
const navmenu = document.querySelector(".menuul")

ntoggle.addEventListener("click", () => {
    navmenu.classList.toggle("menuul_visible");
});

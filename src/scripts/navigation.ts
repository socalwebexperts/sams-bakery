const nav = document.getElementById("main-nav")!;
const menuBtn = document.getElementById("mobile-menu-btn")!;
const mobileMenu = document.getElementById("mobile-menu")!;
const lines = menuBtn.querySelectorAll(".menu-line");
let menuOpen = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("bg-deep-dark/90", "backdrop-blur-md", "py-0");
    nav.classList.remove("py-2");
  } else {
    nav.classList.remove("bg-deep-dark/90", "backdrop-blur-md", "py-0");
    nav.classList.add("py-2");
  }
});

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.remove("opacity-0", "pointer-events-none");
    mobileMenu.classList.add("opacity-100", "pointer-events-auto");
    lines[0].classList.add("rotate-45", "translate-y-[4px]");
    lines[1].classList.add("opacity-0");
    lines[2].classList.add("-rotate-45", "-translate-y-[3px]", "w-6");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
    lines[0].classList.remove("rotate-45", "translate-y-[4px]");
    lines[1].classList.remove("opacity-0");
    lines[2].classList.remove("-rotate-45", "-translate-y-[3px]", "w-6");
    document.body.style.overflow = "";
  }
});

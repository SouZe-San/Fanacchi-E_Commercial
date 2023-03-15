const link = document.querySelectorAll(".link__module");
const hoverReveal = document.querySelectorAll(".hover-reveal__00");
const linkImages = document.querySelectorAll(".hidden-img__00");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    hoverReveal[i].style.opacity = 1;
    hoverReveal[i].style.transform = `translate(-100%, -50%) rotate(0deg)`;
    linkImages[i].style.transform = "scale(1.1)";
    hoverReveal[i].style.left = e.clientX + "px";
  });
  link[i].addEventListener("mouseleave", (e) => {
    hoverReveal[i].style.opacity = 0;
    hoverReveal[i].style.transform = `translate(-50%, -50%) rotate(0deg)`;
    linkImages[i].style.transform = "scale(0.8,0.8)";
    hoverReveal[i].style.left = e.clientX + "px";
  });
}

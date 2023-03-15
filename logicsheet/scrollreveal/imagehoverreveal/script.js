const link1 = document.querySelectorAll('.link')
const hoverReveal1 = document.querySelectorAll('.hover-reveal')
const linkImages1 = document.querySelectorAll('.hidden-img')

for ( let i = 0; i < link.length ; i++){
    link1[i].addEventListener("mousemove", (e) => {
        hoverReveal1[i].style.opacity = 1;
        hoverReveal1[i].style.transform = `translate(-100%, -50%) rotate(0deg)` ;
        linkImages1[i].style.transform = 'scale(1.1)'
        hoverReveal1[i].style.left = e.clientX + "px"
    })
    link1[i].addEventListener("mouseleave", (e) => {
        hoverReveal1[i].style.opacity = 0;
        hoverReveal1[i].style.transform = `translate(-50%, -50%) rotate(0deg)` ;
        linkImages1[i].style.transform = 'scale(0.8,0.8)'
        hoverReveal1[i].style.left = e.clientX + "px"
    })
}
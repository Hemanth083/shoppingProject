const bookmark1 = document.getElementById("bookmark1");
const bookmark2 = document.getElementById("bookmark2");
const Header1 = document.getElementById("header1");
const Header2 = document.getElementById("header2");

bookmark1.addEventListener("click", () => {
    Header1.scrollIntoView({ behavior: 'smooth' })
})
bookmark2.addEventListener("click", () => {
    Header2.scrollIntoView({ behavior: 'smooth' })
})


const arrowIcon = document.getElementById("arrow-icon");
const arrowIcon2 = document.getElementById("arrow-icon2");

bookmark1.addEventListener("mouseover", () => {
    arrowIcon.style.display = "block";
})
bookmark1.addEventListener("mouseleave", () => {
    arrowIcon.style.display = "none";
})
bookmark2.addEventListener("mouseover", () => {
    arrowIcon2.style.display = "block";
})
bookmark2.addEventListener("mouseleave", () => {
    arrowIcon2.style.display = "none";
})


// page Slider
// let pageContainer = document.getElementById("itemsContainerIn-shopPage");

// function page(x){
//     const scrollposition =  x * pageContainer.offsetWidth;
//     console.log(x)
//     console.log(pageContainer.offsetWidth);
//     pageContainer.scrollTo({ left: scrollposition, behavior: 'smooth' });
// }

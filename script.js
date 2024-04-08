const slides = document.getElementsByClassName("slide");
console.log(carrossel);
const imgs = document.querySelectorAll(".slide").length;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
console.log(imgs);
let counter = 0;
let interval
// setInterval((ativo) => {
//      counter++;
//      console.log(ativo)
//     if(counter > imgs - 1){
//         counter = 0
//     };

//             slides[0].style.transform = "translateY("+350 * -counter+"px)"
//             slides[1].style.transform = "translateY("+350 * -counter+"px)"
//             slides[2].style.transform = "translateY("+350 * -counter+"px)"
// }, 5000);

function transform(){
    counter++;
    console.log(counter)
    if(counter >= imgs){
        counter = 0
    };
    
        slides[0].style.transform = "translateY("+350 * -counter+"px)"
        slides[1].style.transform = "translateY("+350 * -counter+"px)"
        slides[2].style.transform = "translateY("+350 * -counter+"px)"

}


start.addEventListener("click", ()=>{
    if (!interval) {
        interval = setInterval(transform, 2500);
    }
    start.style.display = "none"
    stop.style.display ="block"
})
function parar(){
    clearInterval(interval);
    interval = null;
    counter -= 1
    transform()
    start.style.display = "block"
    stop.style.display ="none"
}

function scrollToSection() {
    var section = document.getElementById("sobre");
   
    section.classList.toggle('show')
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
   

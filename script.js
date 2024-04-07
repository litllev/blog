const slides = document.getElementsByClassName("slide");
console.log(carrossel);
const imgs = document.querySelectorAll(".slide").length;
console.log(imgs);
let counter = 0;
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

function transform(ativo){
    {
        counter++;
        console.log(ativo)
       if(counter > imgs - 1){
           counter = 0
       };
   
               slides[0].style.transform = "translateY("+350 * -counter+"px)"
               slides[1].style.transform = "translateY("+350 * -counter+"px)"
               slides[2].style.transform = "translateY("+350 * -counter+"px)"
   }

}
   

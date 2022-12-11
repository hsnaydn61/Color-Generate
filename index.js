const colorInput1 = document.querySelector(".input1");
const colorInput2 = document.querySelector(".input2");
const colorInput3 = document.querySelector(".input3");
const randomColor = document.querySelector(".btn");
const colorGuide = document.getElementById("message")
const colorBody = document.querySelector("body");
const hexcodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

document.addEventListener("DOMContentLoaded",function(){
    let firstRandomColor = newColor();
    let secondRandomColor = newColor();
    let threeRandomColor = newColor();
     colorBody.style.background=`linear-gradient(90deg,${firstRandomColor} , ${secondRandomColor},${threeRandomColor})`;
     colorGuide.innerHTML=` BG Css Code: background = "linear-gradient(90deg, ${firstRandomColor}, ${secondRandomColor},${threeRandomColor}")`
     colorInput1.value=firstRandomColor;
     colorInput2.value=secondRandomColor;
     colorInput3.value=threeRandomColor;
})


colorInput1.addEventListener("input",function(){
    const firstColor = colorInput1.value;
    const threeColor = colorInput3.value
    const secondColor = colorInput2.value;
    colorBody.style.background=`linear-gradient(90deg, ${firstColor}, ${secondColor},${threeColor})`;
    tittle(firstColor,secondColor,threeColor);
})

colorInput2.addEventListener("input",function(){
    const firstColor = colorInput1.value;
    const threeColor = colorInput3.value
    const secondColor = colorInput2.value;
    colorBody.style.background=`linear-gradient(90deg, ${firstColor}, ${secondColor},${threeColor})`;
    tittle(firstColor,secondColor,threeColor);
})

colorInput3.addEventListener("input",function(){
    const firstColor = colorInput1.value;
    const threeColor = colorInput3.value
    const secondColor = colorInput2.value;
    colorBody.style.background=`linear-gradient(90deg, ${firstColor}, ${secondColor},${threeColor})`;
    tittle(firstColor,secondColor,threeColor);
})

randomColor.addEventListener("click",function(){
    let firstRandomColor = newColor();
    let secondRandomColor = newColor();
    let threeRandomColor = newColor();
     colorBody.style.background=`linear-gradient(90deg,${firstRandomColor} , ${secondRandomColor},${threeRandomColor})`;
     colorGuide.innerHTML=` BG Css Code: background = "linear-gradient(90deg, ${firstRandomColor}, ${secondRandomColor},${threeRandomColor}")`
     colorInput1.value=firstRandomColor;
     colorInput2.value=secondRandomColor;
     colorInput3.value=threeRandomColor;

})

function newColor(){
    let chracter = "#";
    while(chracter.length < 7){
        chracter = chracter+hexcodes[Math.floor(Math.random() * hexcodes.length)];
    }
    return chracter;
}

tittle(firstColor.secondColor.threeColor);



function tittle(color1,color2,color3){
    colorGuide.innerHTML=` BG Css Code: background = "linear-gradient(90deg, ${color1}, ${color2},${color3}")`
}





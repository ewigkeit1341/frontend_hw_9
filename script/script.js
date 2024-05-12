//	1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const changeColorButton = document.querySelector(".changeColorButton");
// const square = document.querySelector(".square");
// changeColorButton.addEventListener("click", function() {
//     square.classList.toggle("green");
// });


//==========================================================================

//	2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
//не поняла смысла задачи - сделать то же, что и в первой задаче, но не уменьшать квадрат?????? Эммм. Извините, если неправильно поняла.
// const changeColorButton = document.querySelector(".changeColorButton");
// const pinkSquare = document.querySelector(".pinkSquare");
// changeColorButton.addEventListener("click", function() {
//     pinkSquare.classList.toggle("blue");
// });


//=======================================================================


//  3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
// const changeColorButton = document.querySelector(".changeColorButton");
// const square20px = document.querySelector(".square20px");

// //если хотим просто увеличивать-уменьшать, то функция такая:
// // changeColorButton.addEventListener("click", function() {
// //     square20px.classList.toggle("increase");
// // });


// //если хотим все время увеличивать, то такая:
// changeColorButton.addEventListener("click", function() {
//     const currentWidth = square20px.offsetWidth; 
//     const currentHeight = square20px.offsetHeight; 
//     square20px.style.width = (currentWidth + 20) + "px";
//     square20px.style.height = (currentHeight + 20) + "px";
// });


//====================================================================

//  4.Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const rootDiv = document.querySelector(".root");
// const changeColorButton = document.querySelector(".changeColorButton");
// changeColorButton.addEventListener("click", function() {
//     const foundParagraph = document.createElement("p");
//     foundParagraph.innerText = "I'm a blue-color-paragraph and I'm happy";
//     foundParagraph.style.backgroundColor = "blue"; 
//     foundParagraph.style.color = "white"; 
//     foundParagraph.style.padding = "10px"; 
//     rootDiv.append(foundParagraph);
// });

//======================================================================

// 	5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

//Вариант 1 без чередования:

// const rootDiv = document.querySelector(".root");
// const changeColorButton = document.querySelector(".changeColorButton");
// changeColorButton.addEventListener("click", function(a, b) {
//     const foundParagraph1 = document.createElement("p");
//     const foundParagraph2 = document.createElement("p");
//     foundParagraph1.innerText = "Emmmmm....My fantasy is suffering";
//     foundParagraph2.innerText = "Very, very suffering";
//     foundParagraph1.style.backgroundColor = "blue"; 
//     foundParagraph2.style.backgroundColor = "green";
//     foundParagraph1.style.color = "white"; 
//     foundParagraph2.style.color = "yellow";
//     foundParagraph1.style.padding = "10px"; 
//     rootDiv.append(foundParagraph1, foundParagraph2);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//             }
// });



// Вариант 2 с помощью чата GPT. Сама не смогла:

const rootDiv = document.querySelector(".root");
const changeColorButton = document.querySelector(".changeColorButton");

let colorBlue = true;

changeColorButton.addEventListener("click", function() {
    const newP = document.createElement("p");
    newP.innerText = colorBlue ? "Emmmmm....My fantasy is suffering" : "Very, very suffering";
    newP.style.backgroundColor = colorBlue ? "blue" : "green";
    newP.style.color = colorBlue ? "white" : "yellow";
    newP.style.padding = "10px";
    rootDiv.appendChild(newP);
    colorBlue = !colorBlue;
});

//не поняла как работает переменная true. Не поняла запуск чередования цветов через :. Не поняла синтаксис знаков ? и = !. В общем, всё плохо:(

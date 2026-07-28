const container = document.querySelector(".container");
let counter = 0;

const para1 = document.createElement("p");
para1.textContent = `Counter is live: ${counter}`;
para1.classList.add("para1");
container.appendChild(para1);

const subContainer = document.createElement('div');
subContainer.classList.add('subContainer');
container.appendChild(subContainer);

const btn1 = document.createElement("button");
btn1.innerHTML = `Increase count : ${counter}`;
btn1.classList.add('button');
subContainer.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerHTML = `Decrease count : ${counter}`;
btn2.classList.add('button');
subContainer.appendChild(btn2);

const para3 = document.createElement("p");
para3.textContent = `Current count: ${counter}`;
para3.classList.add("para3");
container.appendChild(para3);


btn1.addEventListener('click' , increaseCount);
btn2.addEventListener('click', decreaseCount);

function increaseCount(){
    console.log("Value increased: ",counter);
    counter++;
    updateUI();
}

function decreaseCount(){
    console.log("Value decreased: ", counter);
    counter--;
    updateUI();
}

function updateUI() {
    para1.textContent = `Counter is live: ${counter}`;
    para3.textContent = `Current count: ${counter}`;
    btn1.innerHTML = `Increase count : ${counter}`;
    btn2.innerHTML = `Decrease count : ${counter}`;
}
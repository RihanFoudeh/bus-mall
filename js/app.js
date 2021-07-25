
let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');



let maxAttempts = 25;
let userCounter = 0;


let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

// Pascal
function Commodity(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.show = 0;
    Commodity.all.push(this);
}

Commodity.all = [];

// instances
new Commodity('bag', 'imgs/bag.jpg');
new Commodity('banana', 'imgs/banana.jpg');
new Commodity('bathroom', 'imgs/bathroom.jpg');
new Commodity('boots', 'imgs/boots.jpg');
new Commodity('breakfast', 'imgs/breakfast.jpg');
new Commodity('bubblegum', 'imgs/bubblegum.jpg');
new Commodity('chair', 'imgs/chair.jpg');
new Commodity('cthulhu', 'imgs/cthulhu.jpg');
new Commodity('dog-duck', 'imgs/dog-duck.jpg');
new Commodity('dragon', 'imgs/dragon.jpg');
new Commodity('pen', 'imgs/pen.jpg');
new Commodity('pet-sweep', 'imgs/pet-sweep.jpg');
new Commodity('scissors', 'imgs/scissors.jpg');
new Commodity('shark', 'imgs/shark.jpg');
new Commodity('sweep', 'imgs/sweep.png');
new Commodity('tauntaun', 'imgs/tauntaun.jpg');
new Commodity('unicorn', 'imgs/unicorn.jpg');
new Commodity('water-can', 'imgs/water-can.jpg');
new Commodity('wine-glass', 'imgs/wine-glass.jpg');


function getRandomIndex() {
    return Math.floor(Math.random() * Commodity.all.length);
}


function renderthreeImages() {

    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();



    while (leftImageIndex === rightImageIndex || centerImageIndex === rightImageIndex || centerImageIndex === leftImageIndex) {
        rightImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();
    }



    leftImageElement.src = Commodity.all[leftImageIndex].source;

    centerImageElement.src = Commodity.all[centerImageIndex].source;

    rightImageElement.src = Commodity.all[rightImageIndex].source;



    Commodity.all[leftImageIndex].show++;
    Commodity.all[centerImageIndex].show++;
    Commodity.all[rightImageIndex].show++;

}

renderthreeImages();

// handle click:
let imagesdiv = document.getElementById('images-div')

imagesdiv.addEventListener('click', UserClick)


function UserClick(event) {
    userCounter++;
    if (userCounter <= maxAttempts) {


        if (event.target.id === 'left-image') {

            Commodity.all[leftImageIndex].votes++;
            console.log(Commodity.all[leftImageIndex]);

        }
        else if (event.target.id === 'center-image') {
            Commodity.all[centerImageIndex].votes++;
            console.log(Commodity.all[centerImageIndex]);
        }
        else if (event.target.id === 'left-image') {
            Commodity.all[leftImageIndex].votes++;
            console.log(Commodity.all[centerImageIndex]);
        }

        else {
            Commodity.all[rightImageIndex].votes++;
            console.log(Commodity.all[rightImageIndex]);
        }

        renderthreeImages();


    }
}




let button = document.getElementById('but-result');
button.style.marginLeft = "47%";
button.addEventListener('click', buttonClick)


function buttonClick() {
    let list = document.getElementById('results-list');
    let li = document.createElement('li')
    for (let i = 0; i < Commodity.all.length; i++) {
        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${Commodity.all[i].name} had ${Commodity.all[i].votes} votes , and was seen ${Commodity.all[i].show} times`

    }
    button.removeEventListener('click', buttonClick)

    imagesdiv.removeEventListener('click', UserClick)
}

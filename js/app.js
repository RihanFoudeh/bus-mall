
let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');

let button = document.getElementById('but-result');
button.style.marginLeft = "47%";


let maxAttempts = 25;
let userCounter = 0;


let leftImageIndex;
let centerImageIndex;
let rightImageIndex;



let previousindex = [];


let namesArr = [];

let votesArr = [];

let shownArr = [];

// Pascal
function Commodity(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.show = 0;
    Commodity.all.push(this);
    previousindex.push(this);

    // namesArr.push(this.name);
    // votesArr.push(this.votes)

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

    previousindex = [leftImageIndex, rightImageIndex, centerImageIndex];

    // console.log(previousindex);



    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();



    while (leftImageIndex === rightImageIndex || centerImageIndex === rightImageIndex || centerImageIndex === leftImageIndex || previousindex.includes(rightImageIndex) || previousindex.includes(leftImageIndex) || previousindex.includes(centerImageIndex)) {
        rightImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();
        leftImageIndex = getRandomIndex();

    }
    console.log(previousindex);


    leftImageElement.src = Commodity.all[leftImageIndex].source;

    centerImageElement.src = Commodity.all[centerImageIndex].source;

    rightImageElement.src = Commodity.all[rightImageIndex].source;




    Commodity.all[leftImageIndex].show++;
    Commodity.all[centerImageIndex].show++;
    Commodity.all[rightImageIndex].show++;






}



renderthreeImages();




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

    else {
        imagesdiv.removeEventListener('click', UserClick)

        button.addEventListener('click', buttonClick);
        console.log(Commodity);
        for (let i = 0; i < Commodity.all.length; i++) {
            namesArr.push(Commodity.all[i].name);
            votesArr.push(Commodity.all[i].votes);
            shownArr.push(Commodity.all[i].show);
        }

    }



}







function buttonClick() {
    showChart()
    let list = document.getElementById('results-list');
    let li = document.createElement('li')
    for (let i = 0; i < Commodity.all.length; i++) {
        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${Commodity.all[i].name} had ${Commodity.all[i].votes} votes , and was seen ${Commodity.all[i].show} times`

    }
    // showChart();

    button.removeEventListener('click', buttonClick)


}











function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}
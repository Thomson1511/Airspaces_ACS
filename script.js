let Areas = [
    { 
        Name: "11A",
        Bot: 0,
        Top: 125
    },

    { 
        Name: "13",
        Bot: 0,
        Top: 145
    },
    { 
        Name: "16",
        Bot: 0,
        Top: 115
    },
    { 
        Name: "21A",
        Bot: 0,
        Top: 245
    },
    { 
        Name: "21B",
        Bot: 135,
        Top: 215
    },
    { 
        Name: "21C",
        Bot: 135,
        Top: 175
    },
    { 
        Name: "22A",
        Bot: 125,
        Top: 175
    },
    { 
        Name: "22B",
        Bot: 0,
        Top: 175
    },
    { 
        Name: "22C",
        Bot: 175,
        Top: 245
    },
    { 
        Name: "22D",
        Bot: 0,
        Top: 145
    },
    { 
        Name: "22E",
        Bot: 0,
        Top: 125
    },
    { 
        Name: "23A",
        Bot: 0,
        Top: 245
    },
    { 
        Name: "23B",
        Bot: 135,
        Top: 175
    },
    { 
        Name: "23C",
        Bot: 135,
        Top: 175
    },
    { 
        Name: "31A",
        Bot: 245,
        Top: 285
    },
    { 
        Name: "31B",
        Bot: 245,
        Top: 285
    },
    { 
        Name: "32A",
        Bot: 245,
        Top: 305
    },
    { 
        Name: "32B",
        Bot: 245,
        Top: 305
    },
    { 
        Name: "33A",
        Bot: 365,
        Top: 420
    },
    { 
        Name: "33B",
        Bot: 365,
        Top: 420
    },
    { 
        Name: "41",
        Bot: 0,
        Top: 135
    },
    { 
        Name: "43",
        Bot: 0,
        Top: 125
    }
];

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'){
        nextTRA();
    }
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function() {
    Areas = shuffle(Areas);
    displayTRA();
});

let currentTRAindex = 0;


function displayTRA(){
    const currentTRA = Areas[currentTRAindex];
    document.body.style.backgroundImage = 'url("Images/' + currentTRA.Name +'.png")';
    displayPoints()
}

function nextTRA(){
    const enteredName = document.getElementById('name').value;
    const enteredBot = document.getElementById('bot').value;
    const enteredTop = document.getElementById('top').value;

    const currentTRA = Areas[currentTRAindex];

    const isEnteredNameCorrect = enteredName === currentTRA.Name;
    const isEnteredBotCorrect = enteredBot == currentTRA.Bot;
    const isEnteredTopCorrect = enteredTop == currentTRA.Top;

    const isAllCorrect = isEnteredNameCorrect && isEnteredBotCorrect && isEnteredTopCorrect;

    if(isAllCorrect){
        document.getElementById('name').value = '';
        document.getElementById('bot').value = '';
        document.getElementById('top').value = '';

        currentTRAindex += 1;

        if(currentTRAindex < Areas.length){
            displayTRA();
        }
        else{
            alert('Congratulations! You have completed all the TRAs.')
                    currentTRAindex = 0;
                    displayTRA();
        }
    }
    
    
}

function displayPoints(){
    const points = document.getElementById('point');
    points.textContent = (currentTRAindex + 1) + "/" + Areas.length;

}

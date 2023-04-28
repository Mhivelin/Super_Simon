let boutonStart = document.getElementById("start");
boutonStart.addEventListener("click", startGame);


let btnRouge = document.getElementById("rouge");
btnRouge.addEventListener("click", function() {
    cliqueBTN(btnRouge);
});

let btnVert = document.getElementById("vert");
btnVert.addEventListener("click", function() {
    cliqueBTN(btnVert);
});

let btnBleu = document.getElementById("bleu");
btnBleu.addEventListener("click", function() {
    cliqueBTN(btnBleu);
});

let btnJaune = document.getElementById("jaune");
btnJaune.addEventListener("click", function() {
    cliqueBTN(btnJaune);
});


function eteindreBTN(couleur) {
    couleur.classList.add("off");
}

function allumerBTN(couleur) {
    couleur.classList.remove("off");
    
}



function annimationDebut() {
    btnRouge.classList.remove("off");
    setTimeout(eteindreBTN, 500, btnRouge);
    setTimeout(allumerBTN, 1000, btnVert);
    setTimeout(eteindreBTN, 1500, btnVert);
    setTimeout(allumerBTN, 2000, btnBleu);
    setTimeout(eteindreBTN, 2500, btnBleu);
    setTimeout(allumerBTN, 3000, btnJaune);
    setTimeout(eteindreBTN, 3500, btnJaune);

    setTimeout(allumerBTN, 4000, btnRouge);
    setTimeout(allumerBTN, 4000, btnVert);
    setTimeout(allumerBTN, 4000, btnBleu);
    setTimeout(allumerBTN, 4000, btnJaune);

    setTimeout(eteindreBTN, 4500, btnRouge);
    setTimeout(eteindreBTN, 4500, btnVert);
    setTimeout(eteindreBTN, 4500, btnBleu);
    setTimeout(eteindreBTN, 4500, btnJaune);
    

}

let joue = [];
let solution = [];



function startGame() {
    annimationDebut();
    tour();

}

function tour() {
    couleurs = [btnRouge, btnVert, btnBleu, btnJaune];
    let random = Math.floor(Math.random() * 4);
    solution.push(couleurs[random]);
    console.log("solution : " + solution[-1]);

}

function cliqueBTN(couleur) {
    allumerBTN(couleur);
    setTimeout(eteindreBTN, 500, couleur);



    joue.push(couleur);
    console.log(joue);
    console.log(solution);
    if (joue.length == solution.length) {
        if (joue.toString() == solution.toString()) {
            console.log("gagné");
            tour();
        } else {
            alert("Vous avez perdu");
            joue = [];
        }
    }
}

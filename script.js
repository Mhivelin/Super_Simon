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


let ordreJoueur = [];

function eteindreBTN(couleur) {
    couleur.classList.add("off");
}

function allumerBTN(couleur) {
    couleur.classList.remove("off");
    
}

function cliqueBTN(couleur) {
    allumerBTN(couleur);
    setTimeout(eteindreBTN, 500, couleur);
    testOrdre(couleur);
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


function ordreRandom() {
    let ordre = Math.floor(Math.random() * 4);
    return ordre;
}


function startGame() {
    annimationDebut();
    let longueur = 1;
    let ordre = [ordreRandom()];
    let indice = 0
    afficherOrdre(ordre);



}

function afficherOrdre(ordre) {
    for (let i = 0; i < ordre.length; i++) {
        alert("test")
        setTimeout(allumerBTN, 500 * i, ordre[i]);
        setTimeout(eteindreBTN, 500 * i + 500, ordre[i]);
    }
}
    
    
    
function testOrdre(couleur){
    couleurs = [btnRouge, btnVert, btnBleu, btnJaune];
    if (couleur == couleurs[ordre[indice]]){
        indice++;
        if (indice == longueur){
            indice = 0;
            longueur++;
            ordre.push(ordreRandom());
        }
    }
    else {
        alert("Perdu");
    }

}
/* initialisation des variables */
/* bouton start */
let btnStart = document.getElementById("start");
btnStart.addEventListener("click", startGame);

/* boutons couleurs */
/* rouge */
let btnRouge = document.getElementById("rouge");
btnRouge.addEventListener("click", function() {
    cliqueBTN(btnRouge);
});

/* vert */
let btnVert = document.getElementById("vert");
btnVert.addEventListener("click", function() {
    cliqueBTN(btnVert);
});

/* bleu */
let btnBleu = document.getElementById("bleu");
btnBleu.addEventListener("click", function() {
    cliqueBTN(btnBleu);
});

/* jaune */
let btnJaune = document.getElementById("jaune");
btnJaune.addEventListener("click", function() {
    cliqueBTN(btnJaune);
});


/* score */
let score = document.getElementById("score");
score.innerHTML = "score : 0";



/* variables */

let sequenceJoueur = [];
let sequence = [];
let vitesse = 1000;
couleurs = [btnRouge, btnVert, btnBleu, btnJaune];





/* fonctions */

/* allumer et eteindre les boutons */
function toggleBTN(couleur) {
    couleur.classList.toggle("off");
}


/* animation du début */
function animationDebut() {
    /* tableau des boutons */
    

    /* animation */
    for (let i = 0; i < couleurs.length; i++) {
        setTimeout(toggleBTN, 500 * i, couleurs[i]);
        setTimeout(toggleBTN, 500 * i + 500, couleurs[i]);
    }
    
    for (let i = 0; i < couleurs.length; i++) {
        setTimeout(toggleBTN, 2500, couleurs[i]);
        setTimeout(toggleBTN, 3000, couleurs[i]);    

}
}





function startGame() {
    /* initialisation des variables */
    sequenceJoueur = [];
    sequence = [];
    vitesse = 1000;
    changer_score(0);

    /* lancement du jeu */
    animationDebut();

    setTimeout(tourJeu, 4000);

}

function tourJeu() {
    /* initialisation des variables */
    /* la nouvelle couleur aléatoire */
    let random = Math.floor(Math.random() * 4);
    sequence.push(couleurs[random]);

    /* le tableau du sequenceJoueurur */
    sequenceJoueur= [];

    /* la vitesse */
    vitesse = vitesse * 0.9;

    setTimeout(animationtourJeu, 1000);
    

}

function cliqueBTN(couleur) {
    /* fonction de clique sur les boutons */

    /* animation */
    toggleBTN(couleur);
    setTimeout(toggleBTN, 500, couleur);

    sequenceJoueur.push(couleur);
    console.log(sequenceJoueur);
    console.log(sequence);

    if (sequenceJoueur[sequenceJoueur.length - 1] != sequence[sequenceJoueur.length - 1]) {
        for (let i = 0; i < couleurs.length; i++) {
            setTimeout(toggleBTN, 2500, couleurs[i]);
            setTimeout(toggleBTN, 3000, couleurs[i]);
        }
        
    }
        

    else if (sequenceJoueur.length == sequence.length) {
        console.log("fin du tourJeu");
        console.log("gagné");
        setTimeout(tourJeu, 1000);
        changer_score(sequence.length);
    }

}

function animationtourJeu() {
    for (let i = 0; i < sequence.length; i++) {
        v = vitesse * i;
        setTimeout(toggleBTN, v, sequence[i]);
        setTimeout(toggleBTN, (v - 100) + vitesse, sequence[i]);
    }
}

function changer_score(score_sequenceJoueurur) {
    score.innerHTML = "score : " + score_sequenceJoueurur;
}
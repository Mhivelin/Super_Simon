# Super_Simon

## Regles

Super Simon est un jeu de société électronique de mémoire sorti en 1978 par MB Electronics. Il s'agit d'une version améliorée du jeu Simon de Ralph H. Baer et Howard J. Morrison, commercialisé par Milton Bradley en 1978. Le jeu est devenu un succès commercial, avec plus de 40 millions d'unités vendues dans le monde. En 2013, Hasbro a relancé le jeu Simon sous sa marque Milton Bradley.

## variables globales

#### les boutons

- `btnRouge` : bouton rouge
- `btnVert` : bouton vert
- `btnBleu` : bouton bleu
- `btnJaune` : bouton jaune
- `btnStart` : bouton start

#### les variables de jeu

- `couleurs` : tableau qui contient les couleurs des boutons
- `sequence` : tableau qui contient la séquence de boutons à reproduire
- `sequenceJoueur` : tableau qui contient la séquence de boutons que le joueur a reproduit
- `vitesse` : vitesse de jeu
- `score` : score du joueur

## fonctions

### toggleBTN

> fonction qui permet de changer l'apparence du bouton quand on clique dessus

change l'opacité du bouton

### animationDebut

> fonction qui permet de faire l'animation du début du jeu

fait clignoter les boutons

- etape 1 : on fait clignoter les boutons 1 par 1 (rouge, vert, bleu, jaune)
- etape 2 : on fait clignoter tous les boutons en même temps

### startGame

> fonction qui permet de lancer le jeu

actions :

- reinitialise les variables de jeu (score, sequence, sequenceJoueur et vitesse)
- on lance l'animation du début du jeu
- on appelle la fonction `tourJeu`

### tourJeu

> fonction qui permet de faire un tour de jeu

actions :

- on ajoute une couleur aléatoire dans la séquence
- on affiche la séquence

### afficherSequence

> fonction qui permet d'afficher la séquence selon la vitesse

### clickBTN

> fonction qui permet de gérer le click sur un bouton

actions :

- on change l'apparence du bouton avec la fonction `toggleBTN`
- on ajoute la couleur du bouton dans la séquence du joueur
- on vérifie si la couleur est bonne
- si la couleur est bonne, on vérifie si la séquence du joueur est egale à la séquence du jeu
- si la séquence du joueur est egale à la séquence du jeu, on appelle la fonction `tourJeu`

## ce que j'ai appris

- utilisation de setTimeout

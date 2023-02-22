// Ce code définit un reducer pour une application de feux de circulation.

// CHANGE_TO_GREEN, CHANGE_TO_YELLOW et CHANGE_TO_RED sont des constantes qui représentent les actions possibles que l'utilisateur peut effectuer pour changer la couleur du feu de circulation.
// initState est l'état initial du reducer qui contient la couleur "green" pour le feu de circulation.
// La fonction light est le reducer qui gère les changements d'état en fonction de l'action reçue. 
// Si l'action correspond à l'une des constantes définies, le reducer retourne un nouvel état avec la couleur du feu de circulation mise à jour. Sinon, le reducer renvoie simplement l'état actuel.

const CHANGE_TO_GREEN = "GHANGE_TO_GREEN";
const CHANGE_TO_YELLOW = "CHANGE_TO_YELLOW";
const CHANGE_TO_RED = "CHANGE_TO_RED";

const initState = {
  color: "green"
};

export default function light(state = initState, action) {
  switch (action.type) {
    case CHANGE_TO_GREEN:
      
      return {
        ...state,
        color: "green"
      };

    case CHANGE_TO_YELLOW:
      return {
        ...state,
        color: "yellow"
      };

    case CHANGE_TO_RED:
      return {
        ...state,
        color: "red"
      };

    default:
      return state;
  }
}

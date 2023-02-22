
// Cette portion de code définit une machine à états finis pour un feu de circulation.

// L'objet stateMap décrit la machine à états finis en utilisant un format compatible avec la bibliothèque JavaScript XState.
// id donne un nom à cette machine.
// initial définit l'état initial, qui est "green" (vert) dans ce cas.
// states est un objet qui contient les états possibles de la machine. Dans ce cas, il y a trois états: vert ("green"), jaune ("yellow") et rouge ("red").
// Pour chaque état, il y a un objet qui définit ses caractéristiques. Ici, chaque état a une transition possible (on) qui amène la machine à l'état suivant lorsqu'un événement spécifié se produit. 
// Par exemple, lorsque la machine est dans l'état "green" et qu'elle reçoit l'événement "NEXT", elle passe à l'état "yellow". 
// De même, lorsqu'elle est dans l'état "yellow" et qu'elle reçoit "NEXT", elle passe à l'état "red", et ainsi de suite.

export const stateMap = {
  id: "trafficLightsId",
  initial: "green",
  states: {
    green: {
      on: { NEXT: "yellow" }
    },
    yellow: {
      on: { NEXT: "red" }
    },
    red: {
      on: { NEXT: "green" }
    }
  }
};

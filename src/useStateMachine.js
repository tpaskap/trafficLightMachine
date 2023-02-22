import { useState, useEffect } from 'react';

// Ce code est une fonction useStateMachine exportée en tant que module JavaScript qui utilise les hooks useState et useEffect de React.
// La fonction useStateMachine prend en paramètre un objet machine qui est supposé être un "state machine", c'est-à-dire une structure de données qui permet de représenter un état et les transitions possibles vers d'autres états en réponse à des événements.
// La fonction useState est utilisée pour définir l'état actuel de la machine en se basant sur la valeur de machine.value, qui est supposé être l'état initial. La fonction retourne un tableau avec deux éléments : l'état courant et une fonction setState qui peut être utilisée pour mettre à jour l'état.
// La fonction useEffect est utilisée pour gérer l'initialisation de l'état de la machine. Si machine.initial existe, setState est appelée avec la valeur de machine.initial pour initialiser l'état de la machine.
// La fonction dispatch est une fonction qui prend en paramètre une transition, qui est un événement qui peut déclencher un changement d'état dans la machine. La fonction utilise la méthode transition de la machine pour déterminer le nouvel état en fonction de l'état actuel et de la transition, puis utilise setState pour mettre à jour l'état.
// La fonction useStateMachine retourne un objet qui contient l'état actuel de la machine et la fonction dispatch. Cette fonction peut être utilisée dans des composants React pour gérer l'état d'une machine en réponse aux événements.

export const useStateMachine = (machine) => {
  const [state, setState] = useState(machine.value);
  
  useEffect(() => {
    machine.initial && setState(machine.initial);
  }, [machine.initial]);

  function dispatch(transition) {
    const { value: nextState } = machine.transition(state, transition);
    setState(nextState);
  }

  return { state, dispatch };
}

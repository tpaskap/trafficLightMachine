import React from "react";
// import TrafficLight from "react-trafficlight";
import TrafficLight from "./TrafficLight";
import { createMachine } from "xstate";
import { stateMap } from "./state";
import { useStateMachine } from "./useStateMachine";

// Ce code est un composant React qui utilise une machine à états finis (createMachine de la bibliothèque xstate) pour gérer l'état d'un composant TrafficLight et permettre à l'utilisateur de changer l'état du feu de signalisation.
// Le composant TrafficLight est importé à partir du fichier "./TrafficLight", et prend trois propriétés booléennes (RedOn, YellowOn et GreenOn) qui sont déterminées en fonction de l'état actuel de la machine (state), qui est retourné par la fonction useStateMachine.
// Le bouton "Next light" déclenche l'événement "NEXT" en appelant la fonction dispatch retournée par useStateMachine. Cette fonction appelle la méthode transition de la machine à états finis pour calculer le nouvel état en fonction de l'état actuel et de l'événement "NEXT", puis appelle setState pour mettre à jour l'état.
// Le composant App est exporté par défaut pour être utilisé dans d'autres parties de l'application.

export default function App() {
  const trafficLightMachine = createMachine(stateMap);
  const { state, dispatch } = useStateMachine(trafficLightMachine);

  return (
    <div className="App">
      <div>
        <TrafficLight
          RedOn={state === "red"}
          YellowOn={state === "yellow"}
          GreenOn={state === "green"}
        />
      </div>

      <button onClick={() => dispatch("NEXT")}>Next light</button>
    </div>
  );
}

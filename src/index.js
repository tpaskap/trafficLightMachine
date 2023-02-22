import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";


// Ce code est l'entrée principale de l'application.
// Il utilise la fonction ReactDOM.render pour afficher l'application React dans la page HTML.
// Il importe deux modules de base de React, React et ReactDOM.
// Il importe également le composant racine de l'application App ainsi que le fichier CSS de style.
// La méthode ReactDOM.render prend deux arguments :
// le premier argument est l'élément principal de l'application à afficher, dans ce cas-ci, le composant App, 
// et le second argument est l'élément HTML où afficher l'application, dans ce cas-ci, l'élément avec l'identifiant "root".
// Le code utilise également <React.StrictMode> qui active des vérifications de développement supplémentaires dans l'application.

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

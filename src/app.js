/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let contentCard = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "K",
    "Q",
    "J"
  ];
  let symbolCard = ["♥", "♠", "♣", "♦"];
  let color = ["#000", "#ff0000"];

  let RandomCard = Math.floor(Math.random() * contentCard.length);
  let RandomSymbol = Math.floor(Math.random() * symbolCard.length);
  let RandomColor = Math.floor(Math.random() * color.length);

  document.getElementById("number").innerHTML = contentCard[RandomCard];
  document.getElementById("symbol1").innerHTML = symbolCard[RandomSymbol];
  document.getElementById("symbol2").innerHTML = symbolCard[RandomSymbol];
  document.getElementById("symbol1").style.color = color[RandomColor];
  document.getElementById("symbol2").style.color = color[RandomColor];
};

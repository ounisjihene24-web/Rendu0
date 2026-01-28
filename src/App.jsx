import React, { useState } from "react";


const findLongestWord = (words) => {
  let wordsWithLength = words.map(word => ({
    mot: word,
    longueur: word.length
  }));

  return wordsWithLength.reduce((max, current) =>
    current.longueur > max.longueur ? current : max
  );
};


const countOccurrences = (array) => {
  return array
    .flat()
    .reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
};


const calculateTotal = (notes) => {
  return notes
    .map(note => (note < 50 ? note + 15 : note))
    .filter(note => note > 50)
    .reduce((sum, note) => sum + note, 0);
};


let lastId = 0;
const Tab = [];

const addElement = (nom, age) => {
  lastId++;
  Tab.push({ id: lastId, nom, age });
};

function App() {
  // Ex 1
  const [wordsInput, setWordsInput] = useState("");
  const [longestWord, setLongestWord] = useState(null);

  // Ex 2
  const [occInput, setOccInput] = useState("");
  const [occResult, setOccResult] = useState(null);

  // Ex 3
  const [notesInput, setNotesInput] = useState("");
  const [total, setTotal] = useState(null);

  // Ex 4
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [, setRefresh] = useState(0); // pour rafraîchir l'affichage

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Atelier 0 – Test interactif des fonctions ES6</h1>

      {/* Exercice 1 */}
      <h3>Exercice 1 : Mot le plus long</h3>
      <input
        placeholder="react,javascript,vite,node"
        value={wordsInput}
        onChange={(e) => setWordsInput(e.target.value)}
      />
      <button onClick={() =>
        setLongestWord(
          findLongestWord(wordsInput.split(","))
        )
      }>
        Tester
      </button>
      <p>Résultat : {JSON.stringify(longestWord)}</p>

      <hr />

      {/* Exercice 2 */}
      <h3>Exercice 2 : Occurrences</h3>
      <input
        placeholder='[["a","b"],["a","c"],["b","a"]]'
        value={occInput}
        onChange={(e) => setOccInput(e.target.value)}
      />
      <button onClick={() =>
        setOccResult(
          countOccurrences(JSON.parse(occInput))
        )
      }>
        Tester
      </button>
      <p>Résultat : {JSON.stringify(occResult)}</p>

      <hr />

      {/* Exercice 3 */}
      <h3>Exercice 3 : Calcul des notes</h3>
      <input
        placeholder="30,45,60,80,40"
        value={notesInput}
        onChange={(e) => setNotesInput(e.target.value)}
      />
      <button onClick={() =>
        setTotal(
          calculateTotal(
            notesInput.split(",").map(Number)
          )
        )
      }>
        Tester
      </button>
      <p>Résultat : {total}</p>

      <hr />

      {/* Exercice 4 */}
      <h3>Exercice 4 : Tableau avec ID</h3>
      <input
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => {
        addElement(nom, Number(age));
        setRefresh(v => v + 1);
      }}>
        Ajouter
      </button>

      <p>Tableau : {JSON.stringify(Tab)}</p>
    </div>
  );
}

export default App;


export const findLongestWord = (words) => {
  let wordsWithLength = words.map(word => ({
    mot: word,
    longueur: word.length
  }));

  return wordsWithLength.reduce((max, current) =>
    current.longueur > max.longueur ? current : max
  );
};


export const countOccurrences = (array) => {
  return array
    .flat()
    .reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
};


export const calculateTotal = (notes) => {
  return notes
    .map(note => note < 50 ? note + 15 : note)
    .filter(note => note > 50)
    .reduce((sum, note) => sum + note, 0);
};


let lastId = 0;
export const Tab = [];

export const addElement = (nom, age) => {
  lastId++;
  Tab.push({ id: lastId, nom, age });
};

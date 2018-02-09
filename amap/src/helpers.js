export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'agressif', 'beau', 'brave', 'confiant', 'chaleureux', 'dangereux', 'egoiste', 'fourbe', 'gentil', 'heureux', 'impartial', 'jovial', 'malicieux', 'placide', 'splendide', 'timide', 'triste', 'vilain'];
<<<<<<< HEAD
  const nouns = ['camille', 'anthony', 'furet', 'raclette', 'biere', 'apero', 'rouflaquettes', ];
  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
=======
  const nouns = ['corps', 'pays', 'sens', 'temps', 'agent', 'arbre', 'argent', 'bateau', 'bureau', 'cheveu', 'ennemi', 'film', 'jardin', 'papier', 'patron', 'peuple', 'souvenir', 'ville', 'voyage', 'homme', 'abri', 'maison', 'analyse', 'femme', 'enfant'];
  return `${rando(adjectives)}-${rando(nouns)}-${rando(adjectives)}`;

>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
}

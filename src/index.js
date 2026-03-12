// Fonction simple d'addition
function add(a, b) {
  return a + b;
}

// Fonction simple de soustraction
function subtract(a, b) {
  return a - b;
}

// Fonction principale
function main() {
  console.log('🚀 Hello DevOps!');
  console.log('================');
  console.log('');
  console.log('📊 Exemples de calculs :');
  console.log(`✅ 5 + 3 = ${add(5, 3)}`);
  console.log(`✅ 10 - 4 = ${subtract(10, 4)}`);
  console.log('');
  console.log('✨ Application exécutée avec succès!');
}

// Exécuter la fonction principale si le fichier est lancé directement
if (require.main === module) {
  main();
}

// Exporter les fonctions pour les tests
module.exports = { add, subtract, main };

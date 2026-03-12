# 🚀 DevOps Pipeline Lab - Jaouad

![CI Pipeline](https://github.com/jaouad-sudo/ActionGit/workflows/CI%20Pipeline/badge.svg)

## 📋 Description

Projet pédagogique simple en Node.js pour apprendre et pratiquer les pipelines CI/CD avec **GitHub Actions**. Ce projet démontre les concepts fondamentaux du DevOps :

- ✅ Intégration Continue (CI)
- ✅ Tests automatisés
- ✅ Pipeline GitHub Actions
- ✅ Bonnes pratiques DevOps

## 🎯 Objectifs d'apprentissage

- Comprendre comment configurer un pipeline CI/CD
- Apprendre à écrire des tests unitaires avec Jest
- Automatiser les tests avec GitHub Actions
- Découvrir les workflows DevOps modernes

## 📂 Structure du projet

```
devops-pipeline-lab-jaouad/
│
├── src/
│   └── index.js              # Code source principal
├── tests/
│   └── app.test.js           # Tests unitaires
├── package.json              # Configuration du projet
├── README.md                 # Documentation
└── .github/
    └── workflows/
        └── ci.yml            # Pipeline GitHub Actions
```

## 🛠️ Technologies utilisées

- **Node.js** v20
- **Jest** - Framework de tests
- **GitHub Actions** - CI/CD

## 🚀 Installation et utilisation

### Prérequis

- Node.js 20 ou supérieur
- npm (inclus avec Node.js)

### Installation

```bash
# Cloner le repository
git clone https://github.com/jaouad-sudo/ActionGit.git
cd ActionGit

# Installer les dépendances
npm install
```

### Lancer l'application

```bash
npm start
```

**Sortie attendue :**
```
🚀 Hello DevOps!
================

📊 Exemples de calculs :
✅ 5 + 3 = 8
✅ 10 - 4 = 6

✨ Application exécutée avec succès!
```

### Exécuter les tests

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode watch (développement)
npm run test:watch
```

## 🔄 Pipeline GitHub Actions

Le pipeline CI se déclenche automatiquement à chaque **push** ou **pull request** sur les branches `main` ou `master`.

### Étapes du pipeline :

1. **📥 Checkout du code** - Récupération du code source
2. **🟢 Configuration de Node.js** - Installation de Node.js v20
3. **📦 Installation des dépendances** - `npm install`
4. **🧪 Exécution des tests** - `npm test`
5. **🚀 Vérification du démarrage** - `npm start`

### Voir le pipeline en action

1. Allez sur [https://github.com/jaouad-sudo/ActionGit/actions](https://github.com/jaouad-sudo/ActionGit/actions)
2. Observez les workflows en cours d'exécution
3. Consultez les logs détaillés de chaque étape

## 📝 Fonctionnalités

Le projet contient deux fonctions simples avec tests unitaires :

- `add(a, b)` - Addition de deux nombres
- `subtract(a, b)` - Soustraction de deux nombres

Ces fonctions sont testées avec 8 cas de test différents couvrant :
- Nombres positifs
- Nombres négatifs
- Zéro
- Cas limites

## 🧪 Coverage des tests

Les tests incluent la couverture de code (coverage). Après `npm test`, consultez le rapport dans le dossier `coverage/`.

## 🤝 Contribution

Ce projet est à but pédagogique. N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📚 Ressources pour aller plus loin

- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Documentation Jest](https://jestjs.io/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 📄 Licence

MIT

## 👨‍💻 Auteur

**Jaouad**

---

⭐ Si ce projet vous a aidé à apprendre, n'hésitez pas à lui donner une étoile sur GitHub!

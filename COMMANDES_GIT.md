# 📝 Commandes Git pour initialiser et pousser le projet

## ➡️ Étape 1: Initialiser le repository Git

cd d:\JAOUAD_CTPES\SaidWahid\ActionGit
git init

## ➡️ Étape 2: Ajouter tous les fichiers

git add .

## ➡️ Étape 3: Créer le premier commit

git commit -m "🎉 Initial commit: Configuration du projet DevOps avec GitHub Actions"

## ➡️ Étape 4: Renommer la branche en 'main' (si nécessaire)

git branch -M main

## ➡️ Étape 5: Ajouter le repository distant

git remote add origin https://github.com/jaouad-sudo/ActionGit.git

## ➡️ Étape 6: Pousser le code vers GitHub

git push -u origin main

# ✅ C'est fait! Votre projet est maintenant sur GitHub

## 🔍 Vérifier le pipeline

Après le push, allez sur:
https://github.com/jaouad-sudo/ActionGit/actions

Vous verrez le pipeline GitHub Actions s'exécuter automatiquement!

## 📋 Notes importantes:

1. Si le repository existe déjà sur GitHub et contient des fichiers:
   git pull origin main --allow-unrelated-histories
   git push -u origin main

2. Si vous avez des conflits, résolvez-les puis:
   git add .
   git commit -m "Résolution des conflits"
   git push

3. Pour vérifier le statut à tout moment:
   git status

4. Pour voir l'historique des commits:
   git log --oneline

---
title: "MémoireIA - Générateur automatique de mémoires de proposition"
description: "Application intelligente pour automatiser la génération de mémoires de proposition pour les principales décorations nationales"
dateString: Mars 2024 - Présent
draft: false
tags: ["Python", "FastAPI", "Next.js", "IA", "LLM", "VLM", "OCR", "MongoDB", "MinIO", "React", "Material UI"]
showToc: false
weight: 190
cover:
    image: "projects/memoireia/logo.png"
---

## Description

MémoireIA révolutionne la création de mémoires de proposition pour la Légion d'honneur et l'Ordre du mérite. 

Cette solution automatise entièrement le processus - de l'analyse intelligente de documents sources (PDF, DOCX) à la génération de mémoires structurés conformes aux exigences officielles de la grande chancellerie de la Légion d'honneur.

## Architecture technique

**Backend (Python/FastAPI)** :
- Extraction intelligente via LLM et VLM (OCR avancé)
- API REST avec authentification JWT
- Base de données MongoDB et stockage MinIO
- Gestion multi-équipes avec permissions granulaires

**Frontend (Next.js/React)** :
- Interface DSFR (Design Système de l'État français)
- Workflow intuitif d'import, édition et génération
- Authentification NextAuth et déploiement Docker

## Fonctionnalités clés

- **📄 Analyse automatique** : Extraction intelligente d'informations depuis PDF/DOCX via LLM et VLM
- **📝 Génération conforme** : Production de mémoires respectant les standards officiels
- **👥 Multi-équipes** : Gestion sécurisée avec permissions par service
- **⚡ Gain de temps** : Réduction du processus de plusieurs heures à quelques minutes pour chaque mémoire

## Impact et reconnaissance

MémoireIA transforme un processus administratif complexe en workflow automatisé, garantissant qualité et conformité tout en libérant un temps précieux pour les agents publics.

Initialement déployé au Bureau des Cabinets du MINEFI, le projet connaît un succès grandissant avec son adoption par la DGE et le Ministère de l'Intérieur qui commencent également à l'utiliser.

Le projet a été présenté et félicité par Clara Chappaz, Ministre déléguée chargée de l'Intelligence artificielle et du Numérique.

<div style="text-align: center;">
    <img src="/projects/memoireia/chappaz.jpg" alt="Présentation de MémoireIA à Clara Chappaz" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
    <p style="font-style: italic; color: #666; font-size: 0.9em; margin-top: 0.5rem;">Crédit photo : Célia Bonnin</p>
</div>

## Interface utilisateur

Voici un exemple de mémoire généré pour ma propre personne avec mon CV en input.
### 1. Page d'accueil - Simplicité et efficacité
<div style="text-align: center;">
    <img src="/projects/memoireia/accueil.png" alt="Page d'accueil MémoireIA" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Interface d'accueil épurée permettant de démarrer rapidement un nouveau mémoire ou d'accéder à l'historique des travaux précédents.

### 2. Import de documents - Glisser-déposer intuitif
<div style="text-align: center;">
    <img src="/projects/memoireia/import.png" alt="Interface d'import de documents" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Zone de téléchargement simple avec support drag & drop pour PDF et DOCX, avec prévisualisation des fichiers sélectionnés.

### 3. Traitement en cours - Transparence du processus IA
<div style="text-align: center;">
    <img src="/projects/memoireia/generation.png" alt="Processus de génération en cours" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Visualisation en temps réel des étapes d'analyse de l'IA

### 4. Mémoire généré
<div style="text-align: center;">
    <img src="/projects/memoireia/generation_fin.png" alt="Mémoire finalisé" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Dès que le mémoire est terminé on peut y accéder pour vérifier les donnnées, les modifier puis télécharger.

### 5. Extraction d'informations - Données structurées
<div style="text-align: center;">
    <img src="/projects/memoireia/infos.png" alt="Informations extraites par l'IA" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Présentation d'une partie des informations personnelles extraites automatiquement. L'utilisateur garde le contrôle total : modification, validation et téléchargement direct du mémoire avec toutes les données remplies dans le template associé.

### 6. Parcours
<div style="text-align: center;">
    <img src="/projects/memoireia/diplomes.png" alt="Section diplômes et formations" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Organisation automatique du parcours académique, professionnel et des autres activités.

### 7. Exposé des services - Valorisation des mérites
<div style="text-align: center;">
    <img src="/projects/memoireia/expose.png" alt="Exposé des services rendus" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Génération intelligente de l'exposé motivant la proposition avec mise en valeur des services exceptionnels rendus. Après modification des informations, possibilité de régénérer individuellement l'exposé.

### 8. Argumentaire personnalisé - Justification de la décoration
<div style="text-align: center;">
    <img src="/projects/memoireia/argumentaire.png" alt="Argumentaire pour la décoration" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Développement d'un argumentaire synthétique et personnalisé justifiant l'attribution de la décoration proposée. Comme pour l'exposé, régénération individuelle possible après ajustements.



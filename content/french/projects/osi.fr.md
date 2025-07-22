---
title: "OSI - Chatbot de l'offre de services informatique de Bercy"
description: "Chatbot intelligent basé sur du RAG pour le support informatique du Ministère de l'Économie et des Finances"
dateString: Février 2025 - Présent
draft: false
tags: ["Python", "Next.js", "RAG", "LLM", "MongoDB", "FAISS", "API REST", "WebSocket", "Docker"]
showToc: false
weight: 199
cover:
    image: "projects/osi/OSI_logo.png"
---

## Description

OSI est un assistant virtuel intelligent conçu pour le support informatique du Ministère de l'Économie et des Finances. Le projet comprend trois composantes principales : une API backend basée sur du RAG (Retrieval-Augmented Generation), le frontend du chatbot interactif, et un tableau de bord d'administration visant à améliorer continuellement le chatbot et avoir accès à des statistiques d'utilisation.

## Composantes du projet

### Backend API
- Système RAG couplé à un LLM pour des réponses contextuelles
- Base de données vectorielle FAISS pour la recherche sémantique
- API REST avec support WebSocket
- Gestion des conversations et historique
- Support pour contenus multimédias (vidéos et images)

<div style="text-align: center;">
    <img src="/projects/osi/osi_api.webp" alt="Architecture de l'API OSI" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

### Frontend Chatbot
- Interface de chat interactive et responsive
- Mode sombre/clair
- Support pour les messages, images et vidéos
- Boutons interactifs pour la navigation
- Système d'évaluation des réponses

<div style="text-align: center;">
    <img src="/projects/osi/osi_frontend.webp" alt="Interface du Chatbot OSI" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

### Dashboard Admin
- Interface d'administration sécurisée
- Gestion de la base de connaissances RAG
- Visualisation des statistiques d'utilisation
- Configuration du système
- Gestion des messages utilisateurs

<div style="text-align: center;">
    <img src="/projects/osi/osi_tableau_bord.webp" alt="Tableau de bord administrateur" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Gestion des messages
<div style="text-align: center;">
    <img src="/projects/osi/osi_messages.webp" alt="Interface de gestion des messages" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Base de connaissances RAG
<div style="text-align: center;">
    <img src="/projects/osi/osi_rag.webp" alt="Interface de gestion de la base RAG" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Configuration du système
<div style="text-align: center;">
    <img src="/projects/osi/osi_settings.webp" alt="Paramètres du système" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Statistiques d'utilisation
<div style="text-align: center;">
    <img src="/projects/osi/osi_stats_general.webp" alt="Statistiques générales" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>
<div style="text-align: center;">
    <img src="/projects/osi/osi_stats_rag.webp" alt="Statistiques RAG" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

## Technologies principales

- **Backend** : Python, FastAPI, FAISS, MongoDB
- **Frontend** : Next.js, Tailwind CSS, Framer Motion
- **IA** : LLM (Mistral), Embeddings (Solon)
- **Infrastructure** : Docker, WebSocket
- **Base de données** : MongoDB, FAISS

## Fonctionnalités clés

- Recherche sémantique dans la base de connaissances
- Génération de réponses contextualisées
- Interface utilisateur moderne et responsive
- Système d'authentification sécurisé
- Monitoring et statistiques d'utilisation
- Gestion complète de la base de connaissances 
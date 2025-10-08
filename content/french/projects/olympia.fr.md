---
title: "Olympia - Plateforme OpenWebUI"
description: "Plateforme OpenWebUI personnalisée pour l'IA générative au Ministère de l'Économie et des Finances"
dateString: Mai 2024 - Présent
draft: false
tags: ["OpenWebUI", "Docker", "LLM", "FastAPI", "JavaScript", "Python", "IA"]
showToc: false
weight: 205
cover:
    image: "projects/olympia/logo.png"
--- 
### 🔗 <a href="https://olympia.bhub.cloud" target="_blank">Site web</a>

## Description

Olympia est une plateforme basée sur OpenWebUI que j'ai intégrée et personnalisée pour le Ministère de l'Économie et des Finances. Cette solution permet aux agents du ministère d'accéder facilement aux modèles d'IA générative via une interface web moderne et intuitive.

## Interface utilisateur

<div style="text-align: center;">
    <img src="/projects/olympia/olympia.png" alt="Interface Olympia OpenWebUI" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Interface web moderne permettant l'interaction avec les modèles d'IA via une expérience similaire à ChatGPT, adaptée aux besoins du ministère.

## Architecture technique

- **Frontend** : Interface OpenWebUI personnalisée avec thématique ministérielle
- **Backend** : FastAPI avec intégration aux modèles via l'API OlympIA
- **Déploiement** : Docker sur l'infrastructure GPU du ministère
- **Sécurité** : Authentification intégrée et isolation des données

## Fonctionnalités

- Interface de chat moderne et responsive
- Support multi-modèles (LLM open source)
- Gestion des conversations et historique
- Partage de conversations entre équipes
- Administration et monitoring des usages
- Personnalisation des prompts système

## Impact

Cette plateforme démocratise l'accès à l'IA générative pour tous les agents du ministère avec une interface familière, tout en maintenant la sécurité et la souveraineté des données sur l'infrastructure nationale.
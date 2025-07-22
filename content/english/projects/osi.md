---
title: "OSI - IT Service Offer Chatbot"
description: "RAG-based intelligent chatbot for IT support at the French Ministry of Economy and Finance"
dateString: February 2025 - Present
draft: false
tags: ["Python", "Next.js", "RAG", "LLM", "MongoDB", "FAISS", "REST API", "WebSocket", "Docker"]
showToc: false
weight: 199
cover:
    image: "projects/osi/OSI_logo.png"
---

## Description

OSI is an intelligent virtual assistant designed for IT support at the French Ministry of Economy and Finance. The project consists of three main components: a RAG (Retrieval-Augmented Generation) based backend API, an interactive chatbot frontend, and an administration dashboard aimed at continuously improving the chatbot and accessing usage statistics.

## Project Components

### Backend API
- RAG system coupled with LLM for contextual responses
- FAISS vector database for semantic search
- REST API with WebSocket support
- Conversation and history management
- Support for multimedia content (videos and images)

<div style="text-align: center;">
    <img src="/projects/osi/osi_api.webp" alt="OSI API Architecture" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

### Frontend Chatbot
- Interactive and responsive chat interface
- Dark/light mode
- Support for messages, images, and videos
- Interactive navigation buttons
- Response rating system

<div style="text-align: center;">
    <img src="/projects/osi/osi_frontend.webp" alt="OSI Chatbot Interface" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

### Admin Dashboard
- Secure administration interface
- RAG knowledge base management
- Usage statistics visualization
- System configuration
- User message management

<div style="text-align: center;">
    <img src="/projects/osi/osi_tableau_bord.webp" alt="Administrator Dashboard" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Message Management
<div style="text-align: center;">
    <img src="/projects/osi/osi_messages.webp" alt="Message Management Interface" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### RAG Knowledge Base
<div style="text-align: center;">
    <img src="/projects/osi/osi_rag.webp" alt="RAG Knowledge Base Management Interface" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### System Configuration
<div style="text-align: center;">
    <img src="/projects/osi/osi_settings.webp" alt="System Settings" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

#### Usage Statistics
<div style="text-align: center;">
    <img src="/projects/osi/osi_stats_general.webp" alt="General Statistics" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>
<div style="text-align: center;">
    <img src="/projects/osi/osi_stats_rag.webp" alt="RAG Statistics" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
</div>

## Main Technologies

- **Backend**: Python, FastAPI, FAISS, MongoDB
- **Frontend**: Next.js, Tailwind CSS, Framer Motion
- **AI**: LLM (Mistral), Embeddings (Solon)
- **Infrastructure**: Docker, WebSocket
- **Database**: MongoDB, FAISS

## Key Features

- Semantic search in knowledge base
- Contextual response generation
- Modern and responsive user interface
- Secure authentication system
- Usage monitoring and statistics
- Complete knowledge base management 
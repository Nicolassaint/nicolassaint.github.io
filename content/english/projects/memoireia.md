---
title: "MémoireIA - Automatic proposal memorandum generator"
description: "Intelligent application to automate the generation of proposal memoranda for national decorations"
dateString: March 2024 - Present
draft: false
tags: ["Python", "FastAPI", "Next.js", "AI", "LLM", "VLM", "OCR", "MongoDB", "MinIO", "React", "Material UI"]
showToc: false
weight: 190
cover:
    image: "projects/memoireia/logo.png"
---

## Description

MémoireIA revolutionizes the creation of proposal memoranda for the french Legion of Honor and the Order of Merit. 

This solution fully automates the process - from intelligent analysis of source documents (PDF, DOCX) to the generation of structured memoranda compliant with the official requirements of the Grand Chancellery of the Legion of Honor.

## Technical Architecture

**Backend (Python/FastAPI)**:
- Intelligent extraction via LLM and VLM (advanced OCR)
- REST API with JWT authentication
- MongoDB database and MinIO storage
- Multi-team management with granular permissions

**Frontend (Next.js/React)**:
- DSFR interface (French State Design System)
- Intuitive workflow for import, editing and generation
- NextAuth authentication and Docker deployment

## Key Features

- **📄 Automatic analysis**: Intelligent information extraction from PDF/DOCX via LLM and VLM
- **📝 Compliant generation**: Production of memoranda meeting official standards
- **👥 Multi-team**: Secure management with permissions by service
- **⚡ Time saving**: Process reduction from several hours to just a few minutes per memorandum

## Impact and Recognition

MémoireIA transforms a complex administrative process into an automated workflow, ensuring quality and compliance while freeing up valuable time for public servants.

Initially deployed at the Cabinet Office of MINEFI, the project is experiencing growing success with its adoption by DGE and the Ministry of Interior which are also beginning to use it.

The project was presented to and commended by Clara Chappaz, Minister Delegate for Artificial Intelligence and Digital Affairs.

<div style="text-align: center;">
    <img src="/projects/memoireia/chappaz.jpg" alt="MémoireIA presentation to Clara Chappaz" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto;" loading="lazy">
    <p style="font-style: italic; color: #666; font-size: 0.9em; margin-top: 0.5rem;">Photo credit: Célia Bonnin</p>
</div>

## User Interface

Here is an example of a memorandum generated for my own person with my CV as input.

### 1. Homepage - Simplicity and efficiency
<div style="text-align: center;">
    <img src="/projects/memoireia/accueil.png" alt="MémoireIA homepage" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Clean homepage interface allowing to quickly start a new memorandum or access the history of previous work.

### 2. Document import - Intuitive drag & drop
<div style="text-align: center;">
    <img src="/projects/memoireia/import.png" alt="Document import interface" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Simple upload area with drag & drop support for PDF and DOCX, with preview of selected files.

### 3. Processing in progress - AI process transparency
<div style="text-align: center;">
    <img src="/projects/memoireia/generation.png" alt="Generation process in progress" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Real-time visualization of AI analysis steps

### 4. Generated memorandum
<div style="text-align: center;">
    <img src="/projects/memoireia/generation_fin.png" alt="Finalized memorandum" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

As soon as the memorandum is completed, you can access it to verify the data, modify it and then download it.

### 5. Information extraction - Structured data
<div style="text-align: center;">
    <img src="/projects/memoireia/infos.png" alt="Information extracted by AI" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Presentation of part of the personal information automatically extracted. The user keeps total control: modification, validation and direct download of the memorandum with all data filled in the associated template.

### 6. Background
<div style="text-align: center;">
    <img src="/projects/memoireia/diplomes.png" alt="Education and training section" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Automatic organization of academic, professional and other activities background.

### 7. Service statement - Merit valorization
<div style="text-align: center;">
    <img src="/projects/memoireia/expose.png" alt="Service statement" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Intelligent generation of the statement motivating the proposal with highlighting of exceptional services rendered. After modifying information, possibility to individually regenerate the statement.

### 8. Personalized argument - Decoration justification
<div style="text-align: center;">
    <img src="/projects/memoireia/argumentaire.png" alt="Decoration argument" style="width: 100%; max-width: 1200px; height: auto; display: block; margin: 0 auto 2rem auto;" loading="lazy">
</div>

Development of a synthetic and personalized argument justifying the attribution of the proposed decoration. Like for the statement, individual regeneration possible after adjustments.

## Security

Secure architecture with encryption, JWT authentication, complete audit trail and data isolation by team.
# Forge Dev

> **The AI Operating System for Software Teams**

Forge Dev is an AI-powered platform that helps software teams plan, build, document, and manage software projects faster. Instead of replacing developers, Forge Dev acts as an intelligent engineering assistant that streamlines the entire software development lifecycle—from idea to deployment.

---

## Vision

To become the AI workspace where software teams plan, build, test, document, and maintain applications with the assistance of specialized AI tools.

---

## Problem

Modern software development relies on many disconnected tools:

* Project management software
* Documentation platforms
* AI assistants
* Testing tools
* Version control
* Security tools

Switching between these tools slows development and creates unnecessary complexity.

Forge Dev brings these workflows together into one intelligent platform.

---

## Core Features

### AI Project Planner

Generate:

* Product Requirements Documents (PRDs)
* Project roadmaps
* Development timelines
* User stories
* Milestones
* Technical architecture

---

### AI Development Assistant

* Code generation assistance
* Feature planning
* Refactoring suggestions
* Code explanations
* API design support

---

### AI Documentation

Automatically generate:

* README files
* API documentation
* Technical documentation
* Architecture documentation
* Project summaries

---

### AI Testing

Generate:

* Unit tests
* Integration tests
* Test cases
* QA checklists

---

### AI Security

Assist developers by:

* Detecting suspicious login patterns
* Reviewing authentication flows
* Identifying common security issues
* Suggesting secure coding practices

---

### Project Management

* Project dashboards
* Task tracking
* Milestones
* Team collaboration
* Progress monitoring

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

### Backend

* Supabase
* PostgreSQL

### AI

* OpenAI API

### Deployment

* Vercel

### Version Control

* Git
* GitHub

---

## Project Structure

```text
src/
├── components/
├── contexts/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── planner/
│   ├── projects/
│   └── documentation/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── router/
├── services/
├── styles/
├── types/
└── utils/
```

---

## Development Workflow

```text
main
│
develop
│
feature/*
```

Every feature is developed in its own branch, reviewed, tested, and merged into `develop` before being promoted to `main`.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/maxwellmuruka79/forge-dev.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## Roadmap

### Phase 1 — Foundation

* [x] React + TypeScript setup
* [x] GitHub repository
* [x] Tailwind CSS
* [ ] Authentication
* [ ] Landing page
* [ ] Dashboard

### Phase 2 — Project Management

* [ ] Create projects
* [ ] Project dashboard
* [ ] Milestones
* [ ] Tasks

### Phase 3 — AI Planner

* [ ] Generate PRDs
* [ ] Generate user stories
* [ ] Generate roadmaps
* [ ] Generate technical architecture

### Phase 4 — Documentation

* [ ] README generation
* [ ] API documentation
* [ ] Technical documentation

### Phase 5 — AI Engineering Suite

* [ ] AI development assistant
* [ ] AI testing assistant
* [ ] AI security assistant

### Phase 6 — Public Beta

* [ ] User onboarding
* [ ] Feedback collection
* [ ] Performance optimization

---

## Contributing

Forge Dev follows a feature-branch workflow. Each feature is developed independently, reviewed, tested, and merged through pull requests.

---

## License

This project is currently proprietary. All rights reserved.

---

## Founder

**Maxwell Muruka**

Building the next generation of AI-powered software engineering tools.

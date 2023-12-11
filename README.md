# Backend project

## Table of Contents

- [Backend project](#backend-project)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Technologies Used](#technologies-used)

## Description

This project is about search documents by text in MongoDB collection.

## Getting Started

### Prerequisites

- Node.js (version 16.18.0)
- MongoDB (comapss)

### Installation

Provide step-by-step instructions for setting up the project locally on a developer's machine.

1. Clone the repository: git clone git@github.com:akhtarnasim1990/gkmit.git

2. Navigate to the project directory: cd gkmit

3. Install dependencies: npm install

### Configuration

NO variables is stored in env file, so that it can be easily accessible.

## Usage

1. Start the server: npm run dev (if nodemon is globally installed) or npm start

2. The server will run on http://localhost:3000 by default.

## Endpoints

List the available API endpoints .

- `GET http://localhost:3000/?text=some-text`: To get result/documents. -`In the place some-text put your own text that want to search` -`Example: http://localhost:3000/?text=LAQU get all the result with text "LAQU"`

## Technologies Used

List the main technologies, libraries, and tools used to build backend project.

- Node.js
- Express.js
- MongoDB
- ...

# Developer Test for Chance Voight

Discover user posts correlated with their information from JSONPlaceholder endpoints. Username, email, company, post title, and contents are presented in a consolidated table view.

## Table of Contents

- [Overview](#overview)
- [Technical Requirements](#technical-requirements)
- [Endpoints](#endpoints)
- [User Interface](#user-interface)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a web application built to retrieve data from two distinct endpoints provided by JSONPlaceholder. The goal is to correlate these datasets based on a common ID and present them in a consolidated table view. The application is implemented using React JS, Next JS, and TypeScript.

## Technical Requirements

- React JS
- Next JS
- TypeScript

## Endpoints

- **For Users:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **For Posts:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## User Interface

The user interface of the application features a table view with the following columns:

- Username
- Email
- Company
- Post Title
- Post Contents (Body)

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
   git clone <repository-url>
2. Navigate to the project directory:
   cd <project-directory>
3. Install dependencies using npm or yarn:
   npm install
   OR
   yarn install
4. Start the development server:
   npm run dev
   OR
   yarn dev

5. Open your web browser and visit [http://localhost:3000] to view the application.

## Usage

Once the application is running locally, you can interact with it by navigating to [http://localhost:3000] in your web browser. The table view will display the correlated data from the provided endpoints.

## Contributing

Contributions to this project are welcome! To contribute, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Submit a pull request to the main repository's branch.

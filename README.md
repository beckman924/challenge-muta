# Pokedex - Challenge for MUTA

This project is a simple application developed in Next.js that interacts with the PokeAPI. It allows users to browse a list of Pokémon, search by name, and view basic details about each one.

## Objective

The goal of this application is to demonstrate basic skills in:

- Development with Next.js.
- Consumption of REST APIs.
- State management.
- Rendering dynamic components.

## Features

- **Pokémon List**: Displays a list of 20 Pokémon obtained from the PokeAPI.
- **Pagination**: Navigation implementation to browse all Pokémon pages.
- **Pokémon Details**: Clicking on a Pokémon displays a detailed view with:
  - Name.
  - Image.
  - Abilities.
  - Types.
- **Search**: Search bar to filter Pokémon by name in real time.
- **Responsive Style**: Design adapted for both mobile and desktop devices.
- **Error Handling**: Clear messages to the user in case of errors with the API.

## Technologies and Libraries

- **Main Framework**: Next.js.
- **Style**: CSS, TailwindCSS.
- **Animations**: Framer-motion.
- **Data Handling**: Fetch to consume the API.

## Installation and Execution

### Live Demo
You can explore the deployed version of the project at the following link:

➡️ [Live Demo - Challenge Muta](https://challenge-muta.vercel.app/)

### Run Locally

Follow these steps to run the application in your local environment:

1. Clone this repository:

```bash
git clone https://github.com/beckman924/challenge-muta.git
cd challenge-muta
```

2. Install the dependencies:

```
npm install
```

3. Launch the application:

```
npm start
```

This will open the application at http://localhost:3000.

## Usage

1. On the main page, browse the list of Pokémon (paginated).
2. Use the search bar to filter by name.
3. Click on a Pokémon to view its detailed information.

## Project Structure

The project is organized into the following components:

- Pokémon List: Renders the main list of Pokémon.
- Pokémon Detail: Displays the specific information for the selected Pokémon.
- Search Bar: Allows you to search and filter Pokémon by name.
- Pagination: Controls navigation between Pokémon pages.

## Testing (WIP)

The project includes tests to verify the correct functioning of the components and the interaction with the API.

### Testing Technologies

- Jest: Testing framework to run and structure tests.
- React Testing Library: Used to render components and verify user interaction with them.

### Test Execution

To run the tests, use the following command:

```
npm test
```

### Test Coverage

- Components:
- Pokémon List: Verifies rendering and pagination.
- Pokémon Details: Verifies correct data display.
- Search Bar: Verifies real-time filtering.
- API Integration: Ensures that the application handles errors correctly if the API fails.
- Responsiveness: Checks that components render correctly on different screen sizes.

## Key Features

### API Consumption

- Endpoint used: https://pokeapi.co/api/v2/pokemon?limit=20.
- Additional requests to get details of each Pokémon.

## Error Handling

- Displays a message to the user if the API fails or does not return data.

## Responsiveness

- The application is fully responsive and optimized for mobile and desktop devices.

## Quality Criteria

- Clean code: Proper use of React components and hooks.
- State Management: States and effects managed correctly.
- Intuitive Interface: Clear and consistent design.
- Efficient API Handling: Use of promises and well-implemented async handling.

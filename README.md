![db-End2EndTestingCypress-1540x748](https://github.com/user-attachments/assets/6f70eed0-abd2-459a-b51c-702d704478a0)

## Cypress installation guide
https://docs.cypress.io/guides/getting-started/installing-cypress
- `npm install cypress --save-dev`

## Run Cypress
- `npm run cypress:open`

## Project Structure

- `cypress/e2e`: Contains test files
- `cypress/pages`: Page Object Models
- `cypress/support`: Support files and custom commands

## Configuration

The main Cypress configuration is in `cypress.config.js`. Key settings include:

- Base URL: https://automationexercise.com/
- Viewport size: 1500x1000
- Experimental Studio enabled

## Page Objects

The framework uses the Page Object Model pattern. Page objects are located in `cypress/pages/`.

Example page objects:
- HomePage
- ProductsPage
- CartPage

## Custom Commands

Custom Cypress commands can be added in `cypress/support/commands.js`.

## Contributing

Feel free to contribute to this project by submitting pull requests or creating issues for bugs and feature requests.

## Licence

MIT https://github.com/bojnesh/CypressATExercise/blob/main/LICENSE

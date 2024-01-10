# Number8 Project

The Number8 Project is a web application designed to showcase a curated list of houses. Users can seamlessly navigate through the houses, explore detailed information, and even create custom lists of their favorite properties. The project emphasizes modularity through a feature-based architecture, making it easy to manage and extend.

## Feature-Based Architecture

A feature-based architecture is a software design approach where a system is organized into distinct, self-contained features or modules that encapsulate specific functionalities. Each feature operates independently, consisting of its own set of components, contexts, types, enums, hooks, routes, services, and utilities. This design promotes modularity, making it easier to manage and extend the application.

## Key Principles

1. **Modularity:** Features are designed as self-contained units, allowing for easy separation of concerns. This modularity enhances maintainability and code readability.

2. **Independence:** Each feature operates independently of others, reducing dependencies and minimizing the impact of changes within one feature on the rest of the system.

3. **Reusability:** Features can be shared across projects, promoting code reuse. This is particularly useful for implementing feature toggles, enabling or disabling specific features based on project requirements.

4. **Global State Management:** A global state management system is often employed at the top level of the project. This central management ensures seamless communication and coordination between different features.

5. **Consistency:** By organizing components, services, and other elements within a feature, development patterns remain consistent within that feature. This consistency enhances collaboration among team members.

6. **Scalability:** The modular nature of feature-based architecture simplifies the process of scaling the application. New features can be added without affecting existing ones, making it easier to adapt to evolving requirements.

7. **Encapsulation:** Features encapsulate their logic and data, promoting a clear separation of concerns. This encapsulation contributes to code maintainability and ease of understanding.

## Benefits

- **Structured Development:** Promotes a structured approach to development, making it easier to manage and organize code.
- **Collaboration:** Enhances collaboration among team members as each feature operates independently.

- **Scalability:** Simplifies the process of scaling the application by adding new features without affecting existing ones.

- **Reusability:** Encourages code reuse by allowing features to be shared across projects.

- **Adaptability:** Provides flexibility to adapt to evolving requirements and changes in project scope.

Overall, a feature-based architecture provides a structured and scalable way to build and maintain complex applications, fostering collaboration, reusability, and adaptability.

## Features

- **Fake Auth Page:** Simulated authentication page for testing purposes.
- **List Houses:** Display a comprehensive list of houses.
- **Show House Detail:** Provide detailed information about individual houses.
- **Contact Form with Validation:** Include a contact form with validation for user interaction.
- **Save House to Favorite List:** Enable users to create and manage a custom list of favorite houses.

## Architecture

- **Feature-Based Structure:** The project follows a feature-based architecture where each feature operates independently. Components, contexts, types, enums, hooks, routes, services, utils, and other related elements are organized within each feature.
- **Feature Sharing:** Features are designed to be easily shareable with other projects. A feature toggle implementation simplifies the management of features.
- **Global State Management:** A global state management system is implemented at the top of the project, responsible for rendering all feature routes and handling shared components, types, enums, hooks, and context.
- **Custom Library (Optional):** Consider implementing a custom library for shared components to further reduce the project's responsibility.

## Optionals

- **Prettier and Lint Configurations:** The project incorporates simple Prettier and lint configurations to maintain consistent development patterns.

## How to Use

- **Tech Stack:** Vite, React, TypeScript, Tailwind CSS, Material Icons, Json Server
- **Node Version:** NodeJS v18.7.0 (specified in .nvmrc).
- **Dependencies Installation:** Run `yarn install:clean` or `npm run install:clean` after downloading the project.
- **Run Server JSON:** Execute `yarn start:json-server` or `npm run start:json-server` to launch the fake server with the all houses data. To see the server open the [Local Host: 8080](http://localhost:8000)
- **Development Environment:** Execute `yarn start:development` or `npm run start:development` to launch the development environment and them open the [Local Host: 5131](http://localhost:5131//)

## Documentation and Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NVM Node Version Manager](https://github.com/nvm-sh/nvm)
- [React Hook Form](https://react-hook-form.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Requirements

- **Node Version Manager (nvm):** Required for managing Node.js versions.
- **npm Version:** 10.2.4.

## Environment Variables

- Duplicate the `.env.example` file and create a `.env.development` file for development purposes.

## Scripts

- `yarn install:clean` or `npm run install:clean`: Install project dependencies.
- `yarn start:development` or `npm run start:development`: Run the development environment.

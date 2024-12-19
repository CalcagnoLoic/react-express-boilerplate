# React project with Express - Boilerplate

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,react,tailwind,express,vite" />
  </a>
</p>

![GitHub last commit](https://img.shields.io/badge/last%20update-19%20/12%20/2024-red)

# **_Table of contents_**

- [Context](https://github.com/CalcagnoLoicreact-fastapi-boilerplate?tab=readme-ov-file#context)
- [Template structure for frontend](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#template-structure-for-frontend)
  - [Structuring the various `src` folder](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#structuring-the-various-src-folder)
  - [Adding `meta-tags` to the project](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#how-to-use-it)
  - [Description of `package.json` scripts](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#how-to-use-it)
- [Template structure for backend](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#template-structure-for-backend)
- [How to use it](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#how-to-use-it)
- [Technologies used in the template](https://github.com/CalcagnoLoic/react-fastapi-boilerplate?tab=readme-ov-file#technologies-used-in-the-template)

# Context

This template provides a minimal setup to get React project with ExpressJS for backend structure. A CI starter is also included in the template.

# Template structure for frontend

This template has a fairly common structure, with a folder for CICD workflows, a public folder and a source folder. A few rules from the linter are used to add a working environment to TypeScript.

## Structuring the various `src` folder

In the `src` folder, you can find various subfolders. These are all created in the same way. Namely, a subfolder with a descriptive name and his file. In the template, you'll find them under the name `Example...tsx`. Feel free to rename them or simply delete them to work with something other than `Example...tsx`.

What's more, a subfolder can itself have several subfolders. For example, the `User` component can be made up of `UserProfile`, `UserInformation`, `UserImg`, each with its own file.

Let's have a look at the different folders:

- `components`: folder containing all application components
- `containers`: folder containing the application's container(s)
- `hooks`: folder containing the various custom hooks
- `icons`: folder containing the project's icons in `svg` code form. Sub-folders for icon families such as `GeneralIcons`, `MediaIcons`, etc. are also possible.
- `layout`: folder containing the project's layout(s), such as grids
- `pages`: folder containing the page(s), whether a SPA or not
- `typographies`: folder containing typographic components for title levels and paragraphs
- `utils`: folder containing utility functions and their associated spec files

Please note that in the `Typographies` folder, as these components are generic, they are already fully written. Modify the `Headings` component if your title levels go beyond `h3`.

Finally, in the `definitions.ts` file, you'll find all the useful interfaces and types.

## Adding `meta-tags` to the project

In the `index.html` file, meta tags for author, description and keywords are already available. Feel free to modify them or simply add another!

## Description of `package.json` scripts

Various scripts are already available in the `package.json` file, but don't hesitate to add your own if you have others!

Here are those already available:

- `dev`: simply launch the local development server on port `5173`
- `dev:compile`: compiles TypeScript files in real time (thanks to the `--watch` flag) during dev phases to ensure that changes don't affect the linter
- `dev:format`: just formats files (<kbd>ctrl</kbd>+<kbd>s</kbd> works just as well with the prettier file)
- `build`: vite command to send the project to production
- `lint`: the project linter
- `test`: vitest command to launch unit test suites

# Template structure for backend

Let's have a look at the different folders:

- `config`: Contains database configurations and connections.
- `controllers`: Contains files defining the business logic for each resource.
- `routes`: Contains files defining API endpoints.

# How to use it

To use this template, click on `Use this template > Create a new repository` at the top right of this page.

Once you've done this, you'll be taken to the standard interface for creating a project, this time using the present template as a base.

Next, the classic steps:

```bash
$ git clone
$ cd path/to/our/project
```

In order to launch the project locally, you'll need to start docker on your machine and run the following two lines to build the images and launch the 4 services.

```bash
> docker compose build
> docker compose up
```

If you need to access at the database, don't forget to create an `env.` file avec these differents variables:

```env
MARIADB_USER=
MARIADB_PASSWORD=
MARIADB_DATABASE=
MARIADB_ROOT_PASSWORD=root
```

Start by creating your database with Adminer and then export the code. Paste it into the file here: `./server/database.sql`. Once this is done, restart the “db” service. The volume will fetch the code contained in the 'database.sql' file and place it in a docker-side volume. 

To launch the frontend server, you must first position yourself within it. Once done, connect to the service's docker terminal, install the dependencies and launch it.

```bash
> cd client
> docker compose exec client bash
> cd client #To enter the docker client folder
> npm i
> npm run dev
```

To launch the backend server, you must first position yourself within it. Once done, connect to the service's docker terminal, install the dependencies and launch it.

```bash
> cd server
> docker compose exec server bash
> cd server #To enter the docker server folder
> npm i
> npm start

And.... happy codings!! 🥳

# Technologies used in the template

- CORS | v.2.18
- Docker
- ExpressJS | v.4.18
- NodeJS | v.21.7
- React | v.18.3
- TailwindCSS | v.3.4
- TypeScript | v.5.6
- Vite | v.5.4
- Vitest | v.2.1
- Workflows CICD

---

If you have a modification or see a bug, don't hesitate to open a pull request 😊

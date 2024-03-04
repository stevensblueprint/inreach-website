# Getting Started

If repo not cloned, run:

```bash
git clone https://github.com/stevensblueprint/inreach-website.git
```

## Initialize the Server and Frontend

### First, we initialize the backend

1. Ensure you are in the correct directory:

```bash
cd keystone-server
```

2. Install all the dependencies

```bash
npm install
```

3. Run the keystone server

```bash
npm run dev
```

This should open the backend on port 3000

### Create a new terminal to start the frontend, then run

1. Ensure you are in the correct directory (if you are doing this in the same terminal from the previous step then you'd need to run `cd ../frontend`):

```bash
cd frontend
```

2. Install all the dependencies

```bash
npm install
```

3. Run the frontend

```bash
npm run dev
```

This should open the frontend on port 8000

## Contributing Changes

### Create your branch

Follow the conventions to name your branch, ex.

```bash
git checkout -b feature/name_of_feature
```

Add your changes, could be done using either one of the following (note: using `git add .` stages all changed files):

```bash
git add .
- OR -
git add {name_of_modified_file}
```

Commit your file changes

```bash
git commit -m "Commit message"
```

Push changes to repository

```bash
git push --set-upstream origin {branch_name}
```

Submit a pull request through GitHub. With an updated branch, going to the repository on github should prompt you with green 'Submit pull request' button at the top. Follow the steps and you're good!

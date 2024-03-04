# Getting Started

If repo not cloned, run:

```bash
git clone https://github.com/stevensblueprint/inreach-website.git
```

## Initialize the Server and Frontend

### First, we initialize the backend

```bash
cd keystone-server 
npm run dev
```

This should open the backend on port 3000

### Create a new terminal to start the frontend, then run

```bash
cd frontend
npm run dev
```

This should open the frontend on port 8000

## Contributing Changes

### Create your branch

Follow the conventions to name your branch, ex.

```bash
git checkout -b feature/name_of_feature
```

Add your changes, could be done using either one of the following:

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

Submit a pull request through GitHub

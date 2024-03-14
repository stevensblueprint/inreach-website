# Getting Started

If repo not cloned, run:

```bash
git clone https://github.com/stevensblueprint/inreach-website.git
```

## Development setup

1. Install all the dependencies

```bash
npm install
```

2. Setup environment variables

```bash
cp .env.example .env
```

The instructions on how to obtain some values are in the `.env.example` file.

3. Run the Next.js dev server

```bash
npm run dev
```

This should run the dev server on port 3000

_Note: A `docker-compose.yml` file has been included with containers to run a local Redis environment that mirrors how [Vercel KV](https://vercel.com/docs/storage/vercel-kv) works. You should **not** need to use this in the normal course of development as TinaCMS spins up a local mock server during development._

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

## Documentation links

- [Next.js](https://nextjs.org/docs)
- [TinaCMS](https://tina.io/docs/)
- [TinaCMS Self-hosted backend](https://tina.io/docs/reference/self-hosted/overview/)

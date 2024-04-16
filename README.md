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

## For Testing Your Component

- Create your component and template under the `src/components/blocks` directory
  - Look at some of the blocks already there for an example
  - Make sure your template is exported from this file
- Go to the `config.ts` file under the tina directory
  - Import your template at the top of the page
  - Scroll down until you see the templates under the pages selection (there should be templates there already)
  - Add your template to the location with the other templates
- Next, we have to add your component to the Block rendering
  - Navigate to the `RenderBlocks.tsx` file under `src/components`
  - Add your block to the switch case using the formatting from the other templates already there
  - For your case, take the name you created right under the template and make the first letter and then put PageBlocks in front of it.
    - For example: If you are making a component with the name "newblock", the case would be "PageBlocksNewblock"
- To test your block using the Admin page:
  - Start the application using `npm run dev`
  - Navigate to this route: <http://localhost:3000/admin/index.html>
  - From here you have two options:
    - Test by adding to existing page
      - Your new route after loading the page should end in ~
      - Put `/example-actions` after the route to pull up the existing page
      - If everything was done correctly, if you hit the blue plus in the admin panel, your component should be there
    - Create new page
      - After navigating to the route, select the hamburger menu and click pages
      - Create a new page with the blue button
        - The title can be `example-{name_of_block}`, or anything you like
        - For the sections, select your new block
        - You can change the filename to only include lowercase letters (makes it easier as the filename serves as the route)
      - After the page is created, click the Pages collection on the left
        - Click on the title of the page you just created from the list of pages and then you should be able to edit it with the CMS

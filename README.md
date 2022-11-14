<h1 align="center">Blog App<project-name></h1>

<p align="center"><project-description></p>

## Get Started

Install required dependencies:

```sh
npm install
```

Start the app

```sh
npm run dev

cd backned

sanity start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.

## Built With

- [Sanity](https://www.sanity.io/)
- [Tailwind](https://tailwindcss.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Next.js](https://nextjs.org/docs/getting-started)
- [Typescript](https://nextjs.org/docs/basic-features/typescript)
- [Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel)

## Create a .env.local file with following variables

```sh
SANITY_API_TOKEN='YOUR_TOKEN'
NEXTAUTH_SECRET="YOUR_SECRET"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
NEXT_PUBLIC_SANITY_PROJECT_ID='YOUR_PROJECT_ID'
NEXTAUTH_URL=http://localhost:3000
```

## Configure Prettier

### 1. Create the .prettierrc.js file and add the code below.

```sh
module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
}
```

### 2. Execute the command below to check the code style with Prettier.

```sh
npm run format
```

### 3. You can fix the code style automatically by executing the command below.

```sh
npm run format:fix
```

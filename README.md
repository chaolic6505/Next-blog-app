<h1 align="center"><project-name></h1>

<p align="center"><project-description></p>


## Get Started

Install required dependencies:

```sh
npm install
```

Start the app:

```sh
npm run dev;

cd backned;

sanity start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.

## Built With
-   [Sanity](https://www.sanity.io/)
-   [Tailwind](https://tailwindcss.com/)
-   [Zod](https://github.com/colinhacks/zod)
-   [Next.js](https://nextjs.org/docs/getting-started)
-   [Typescript](https://nextjs.org/docs/basic-features/typescript)
-   [Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel)
-   [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

## Create a .env.local file with following variables:

```sh
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="YOUR_SECRET"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
NEXT_PUBLIC_SANITY_PROJECT_ID='YOUR_PROJECT_ID'
SANITY_API_TOKEN='YOUR_TOKEN'
```

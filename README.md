<h1 align="center"><project-name></h1>

<p align="center"><project-description></p>


## Get Started

Install required dependencies:

```sh
npm install
```

Start the app:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.

## Built With

-   [Typescript](https://nextjs.org/docs/basic-features/typescript)
-   [Tailwind](https://tailwindcss.com/)
-   [Next.js](https://nextjs.org/docs/getting-started)
-   [Sanity](https://www.sanity.io/])
-   [Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel)

## Dependencies

```sh
"dependencies": {
    "@hookform/resolvers": "2.9.7",
    "@sanity/image-url": "1.0.1",
    "next": "12.2.3",
    "next-auth": "4.10.2",
    "next-sanity": "0.6.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-hook-form": "7.34.0",
    "react-icons": "4.4.0",
    "react-portable-text": "0.4.3",
    "zod": "3.17.10"
  },
  "devDependencies": {
    "@types/node": "18.6.1",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "autoprefixer": "10.4.7",
    "eslint": "8.20.0",
    "eslint-config-next": "12.2.3",
    "postcss": "8.4.14",
    "postcss-preset-env": "7.7.2",
    "tailwindcss": "3.1.6",
    "typescript": "4.7.4"
  }
```

## Create a .env.local file with following variables:

```sh
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="YOUR_SECRET"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
NEXT_PUBLIC_SANITY_PROJECT_ID='YOUR_PROJECT_ID'
SANITY_API_TOKEN='YOUR_TOKEN'
```

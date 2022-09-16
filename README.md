## Database set up
### Step 1
Make any database with these columns. (These are just MySQL syntax but you can conncet to any database).
```mysql
CREATE TABLE `mood` (
  `moodId` int(11) NOT NULL AUTO_INCREMENT,
  `feelingText` varchar(64) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT curtime(),
  `rating` int(11) DEFAULT 0,
  PRIMARY KEY (`moodId`),
  CONSTRAINT `CONSTRAINT_1` CHECK (`rating` <= 10 and `rating` >= 0)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
```
### Step 2
Go to `/prisma/schema.prisma`. Then update your `provider` accordingly (`postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb`, `cockroachdb`).  
### Step 3
Make a `.env` file under the root folder `/`. Then add a `DATABASE_URL` environment vairable and make it equal to your connection string.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

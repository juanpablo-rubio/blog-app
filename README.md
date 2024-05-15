## Getting Started

Before you can run the server, you need to install the project dependencies and set up the database. Here's how you can do that:

1. Install the project dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

2. Spin up the database:

```bash
npx prisma migrate reset
# or
yarn prisma migrate reset
# or
pnpm dlx prisma migrate reset
# or
bunx prisma migrate reset
```

3. Start the development server:

After you've done that, you can run the development server.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
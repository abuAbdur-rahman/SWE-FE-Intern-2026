# SafeDep Frontend Engineering Intern Task

This is a Next.js application built for the SafeDep Frontend Engineering Intern assignment. The application displays details about an Open Source package.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abuAbdur-rahman/SWE-FE-Intern-2026
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of the project and add the following environment variables:

   ```
   SAFEDEP_TENANT_ID=<your-tenant-id>
   SAFEDEP_API_KEY=<your-api-key>
   ```

   You can get your `SAFEDEP_TENANT_ID` and `SAFEDEP_API_KEY` by signing up for a free account at [app.safedep.io](https://app.safedep.io).

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

To see the details of an Open Source package, go to the following URL:

```
http://localhost:3000/p/{ecosystem}/{name}/{version}
```

For example:

```
http://localhost:3000/p/npm/next/13.5.4
```

## Technologies Used

This project is built with the following technologies:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://shadcn.dev/)
